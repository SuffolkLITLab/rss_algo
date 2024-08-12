export default {
	async fetch(request) {
	  const url = new URL(request.url);
	  const targetUrl = url.searchParams.get("url");
  
	  if (!targetUrl) {
		console.log("Missing URL parameter");
		return new Response('Missing "url" query parameter', { status: 400 });
	  }
  
	  // Properly encode the URL
	  const encodedUrl = encodeURI(targetUrl);
  
	  // Extract the User-Agent from the incoming request
	  const userAgent = request.headers.get("User-Agent") || "Mozilla/5.0 (compatible; Bot/1.0)";
  
	  const init = {
		headers: new Headers({
		  "User-Agent": userAgent,
		  "Accept": "application/rss+xml,application/xml;q=0.9,*/*;q=0.8",
		  "Accept-Language": "en-US,en;q=0.5"  // Simulating a browser's accept language header
		})
	  };
  
	  try {
		const response = await fetch(encodedUrl, init);
  
		// Check for non-XML responses which might indicate a block or a redirect to CAPTCHA
		if (!response.ok || response.headers.get("Content-Type").includes("text/html")) {
		  console.log("Not a valid feed response, possibly a CAPTCHA or redirect page.");
		  return new Response('Feed request was blocked, redirected, or of the wrong type.', { status: 500 });
		}
  
		let body = await response.text();
  
		// Remove any XSLT stylesheet links to prevent loading issues
		body = body.replace(/<\?xml-stylesheet.*?\?>/g, "");
  
		// Properly handle CDATA sections by temporarily replacing them with placeholders
		const cdataSections = [];
		body = body.replace(/<!\[CDATA\[.*?\]\]>/gs, match => {
		  cdataSections.push(match); // Store the original CDATA section
		  return `__CDATA__${cdataSections.length - 1}__`; // Replace with a placeholder
		});
  
		// Escape HTML entities in content, except in CDATA sections
		body = body.replace(/<content[^>]*>(.*?)<\/content>/gs, (match, p1) => {
		  const escapedContent = p1.replace(/</g, "&lt;").replace(/>/g, "&gt;");
		  return `<content type="html">${escapedContent}</content>`;
		});
  
		// Restore the original CDATA sections
		body = body.replace(/__CDATA__(\d+)__/g, (match, index) => cdataSections[index]);
  
		// Set up appropriate CORS headers
		const headers = new Headers(response.headers);
		headers.set("Access-Control-Allow-Origin", "*");
		headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
		headers.set("Access-Control-Allow-Headers", "Content-Type");
		headers.set("Content-Type", "application/xml"); // Ensure correct content type for XML files
  
		return new Response(body, {
		  status: response.status,
		  statusText: response.statusText,
		  headers: headers
		});
	  } catch (e) {
		console.log(`Fetch error: ${e.message}`);
		return new Response('Failed to fetch the requested URL', { status: 500 });
	  }
	}
  };
  