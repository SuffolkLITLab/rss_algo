history.replaceState('', document.title, window.location.pathname);window.scrollTo(0, 0);

function toggle_settings() {
    if (document.getElementById('my_settings').style.display=="none") {
        document.getElementById('news-feed').style.display = "none";
        document.getElementById('my_settings').style.display = "block";
        document.getElementById('a_settings').innerHTML = "Show Timeline";
    } else {
        document.getElementById('my_settings').style.display = "none";
        document.getElementById('news-feed').style.display = "flex";
        document.getElementById('a_settings').innerHTML = "Settings &amp; Data";
    }
}

//function readArticles_in_window(){
//    articls_in_window = 0
//    JSON.parse(localStorage.articles).forEach(card => {
//        if (Date.parse(card.pubDate)>(new Date()-(1*60000*60*60*24))) {
//            articls_in_window++;
//        }
//    });
//    return articls_in_window
//}

function save_to_poeket(url){
    var win = window.open( "https://getpocket.com/edit?url="+ encodeURIComponent(url), "pocket" );
    //setTimeout( function() {
    //    win.close();
    //}, 1000);
}
    
/* Generate a share link for the user's Mastodon domain */
const instance =  localStorage.getItem("instance") || "";
document.getElementById("masto_instance").value = instance;

function MastodonShare(target){

    if ( document.getElementById("masto_instance").value=="") {
        my_instance = "mastodon.social"
        // Get the Mastodon domain
        domain = prompt("Enter your Mastodon domain. If you want to change this later, you can do so in 'Settings.'", my_instance);
    } else {
        my_instance = document.getElementById("masto_instance").value
        domain = my_instance
    }

    if (domain == "" || domain == null){
        return;
    }

    domain = domain.replace(/https?:\/\//,"")

    localStorage.instance = domain;
    document.getElementById("masto_instance").value = domain;

    // Build the URL
    url = "https://" + domain + "/share?text=" + target;

    // Open a window on the share page
    window.open(url, '_blank');
}

function reset_all() {
    let text = "This will erase all of your data and set the list of feeds to defaults. Choose OK to continue.";
    if (confirm(text) == true) {
        history.replaceState('', document.title, window.location.pathname);
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload(true);
    }
}

function saveTextAsFile(tosave,name) {
    // h/t http://runnable.com/U5HC9xtufQpsu5aj/use-javascript-to-save-textarea-as-a-txt-file 

    // I'm using file system support as a proxy for support for this feature. 
    // Check based on one found at: http://blog.teamtreehouse.com/building-an-html5-text-editor-with-the-filesystem-apis
    // Handle vendor prefixes.
    window.requestFileSystem = window.requestFileSystem || 
                            window.webkitRequestFileSystem;

    // tosave = ID of textarea to save
    // name = name to save file as, including file extension     
    // grab the content of the form field and place it into a variable
        var textToWrite = tosave //document.getElementById(tosave).value;
    //  create a new Blob (html5 magic) that conatins the data from your form feild
        var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
        
    // Specify the name of the file to be saved
        var fileNameToSaveAs = name;
        
    // Optionally allow the user to choose a file name by providing 
    // an imput field in the HTML and using the collected data here
    // var fileNameToSaveAs = txtFileName.text;

    // create a link for our script to 'click'
        var downloadLink = document.createElement("a");
    //  supply the name of the file (from the var above).
    // you could create the name here but using a var
    // allows more flexability later.
        downloadLink.download = fileNameToSaveAs;
    // provide text for the link. This will be hidden so you
    // can actually use anything you want.
        downloadLink.innerHTML = "My Hidden Link";
        
    // allow our code to work in webkit & Gecko based browsers
    // without the need for a if / else block.
        window.URL = window.URL || window.webkitURL;
            
    // Create the link Object.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    // when link is clicked call a function to remove it from
    // the DOM in case user wants to save a second file.
        downloadLink.onclick = destroyClickedElement;
    // make sure the link is hidden.
        downloadLink.style.display = "none";
    // add the link to the DOM
        document.body.appendChild(downloadLink);
        
    // click the new link
        downloadLink.click();
}

function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
}

function load_state(clear=0){

    if  (clear==1) {
        //localStorage.removeItem('');
        console.log("Loading home");

    } else {
        console.log("Loading game state");

    }
}

function upload_file() {
    console.log("Upload File")
    document.getElementById("upload").click(); 
}

//===========================================
// Data handling
//===========================================
// h/t http://answers.splunk.com/answers/125819/fill-textarea-from-a-file.html

var control = document.getElementById("upload");
control.addEventListener("change", function(event){
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var reader = new FileReader();
            reader.onload = function(event){
                your_data = event.target.result;
                let text = "Loading this file will overwrite and replace your current data.";
                if (confirm(text) == true) {
                    data_dump = JSON.parse(your_data)
                    localStorage.clear();
                    for (const [key, value] of Object.entries(data_dump)) {
                        //console.log(key,JSON.stringify(value))
                        //localStorage.clear();
                        localStorage.setItem(key,value);
                        localStorage.setItem("lastLoad",0);
                        window.location.reload(true);
                    }
                }
            };
            reader.onerror = function(event){
                console.error("File could not be read! Code " + event.target.error.code);
            };
            //console.log("Filename: " + control.files[0].name);
            reader.readAsText(control.files[0]);
    } else {
        alert('This feature is not supported by your browser.');
    }
}, false);        


var xml_doc;

document.addEventListener("DOMContentLoaded", function() {

    const body = document.body;

    const toggleModeButton = document.getElementById("toggle-mode");

    // Retrieve dark mode state from localStorage (if available)
    const darkModeState = localStorage.getItem("darkMode");
    if (darkModeState === "enabled") {
        body.classList.add("dark-mode");
        toggleModeButton.innerHTML = "💡"; // Light bulb emoji
    }

    // Toggle between light and dark mode
    toggleModeButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleModeButton.innerHTML = "💡"; // Light bulb emoji
        } else {
            localStorage.removeItem("darkMode");
            toggleModeButton.innerHTML = "🌗"; // Moon emoji
        }
    });


    const hiddenCardsCheckbox = document.getElementById("hiddenMode");

    // Retrieve ignore images value from localStorage (if available)
    const HiddenModeState = localStorage.getItem("hiddenMode") === "true";
    hiddenCardsCheckbox.checked = HiddenModeState;

    // Update ignore images value and save to localStorage when checkbox value changes
    hiddenCardsCheckbox.addEventListener("change", function () {
        const newHiddenImages = hiddenCardsCheckbox.checked;
        localStorage.setItem("hiddenMode", newHiddenImages);
    });

    if (!HiddenModeState) {
        body.classList.add("hidden-mode");
    }

    let rssFeeds = JSON.parse(localStorage.getItem("feeds")) || default_feeds;

    function arr2obj(arr) {
        return arr.reduce(
            (acc, curr) => {
    
                // Extract the key and the value
                let key = curr[0];
                let value = curr[1];
    
                // Assign key and value
                // to the accumulator
                acc[key] = value;
    
                // Return the accumulator
                return acc;
            },
    
            // Initialize with an empty object
            {}
        );
    }

    const newsFeedContainer = document.getElementById("news-feed");
    const upvotes =  JSON.parse(localStorage.getItem("upvotes")) || {};
    const downvotes = JSON.parse(localStorage.getItem("downvotes")) || {};
    const upTFIDF =  JSON.parse(localStorage.getItem("upTFIDF")) || {};
    const downTFIDF =  JSON.parse(localStorage.getItem("downTFIDF")) || {};
    const readArticles = filterOldEntries(JSON.parse(localStorage.getItem("read")) || {});
    localStorage.setItem("read", JSON.stringify(readArticles));


    const stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now','p','span','https','http']

    var articles =  JSON.parse(localStorage.getItem("articles")) || [];
    try {
        articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
        //console.log(articles)
        //console.log("First and Last dates: \n",articles[articles.length-1]["pubDate"],"\n",articles[0]["pubDate"])
        //console.log("Setting backstop:",articles[articles.length-1]["pubDate"])
        localStorage.setItem("backstop",articles[articles.length-1]["pubDate"])                
    } catch (error) {}
    if (localStorage.backstop) {
        backstop = new Date(localStorage.backstop);
    } else {
        localStorage.setItem("backstop",new Date(0))
        backstop = new Date(0)
    }
    console.log("backstop",localStorage.backstop)

    var dfreq = calculateDF(articles.filter(article => readArticles[article.itemId]))
    var crunch_numbers = false

    var ratings_mean = 0;
    var ratings_std = 0;

    function updateFeedList(loadFeeds = false, singlefeed="") {
        localStorage.setItem("feeds", JSON.stringify(rssFeeds));
        let upTFIDF =  JSON.parse(localStorage.getItem("upTFIDF")) || {};
        let downTFIDF =  JSON.parse(localStorage.getItem("downTFIDF")) || {};
        loadNews(loadFeeds,singlefeed);
        
    }

    var n_feeds = 0;
    async function fetchFeed(feedUrl) {
        document.getElementById('loading').style.display = "block";

        feedUrl_prox = "https://tools.suffolklitlab.org/rss_proxy/?url="+encodeURIComponent(feedUrl)       
        
        const response = await fetch(feedUrl_prox);
        if (!response.ok) {
            //throw new Error(`Request failed with status ${response.status}`);
            console.log("Trying corsproxy.io for "+feedUrl)
            feedUrl_prox = 'https://corsproxy.io/?' + encodeURIComponent(feedUrl);
            let response = await fetch(feedUrl_prox);    
            if (!response.ok) {
                console.log("Error fetching "+feedUrl)
                throw new Error(`Request failed with status ${response.status}`);
            }
        }
        const data = await response.text();

        n_feeds += 1;
        if (n_feeds>=rssFeeds.length) {
            document.getElementById('loading').style.display = "none";
            document.getElementById('loading').innerHTML = "<i>&nbsp;Loading...&nbsp;</i>";
        } else {
            document.getElementById('loading').innerHTML = "<i>&nbsp;Loading feed "+(1+n_feeds)+" of "+rssFeeds.length+" . . .&nbsp;</i>" 
        }

        if (n_feeds>=(rssFeeds.length)) {
            crunch_numbers = true;
        }

        return data;
    }

    function updateArticleStyles() {
        const articleContainers = newsFeedContainer.querySelectorAll(".article-container");
        const HiddenModeState = localStorage.getItem("hiddenMode") === "true";

        articleContainers.forEach(articleContainer => {
            const itemId = articleContainer.getAttribute("data-item-id");

            if (readArticles[itemId]) {
                if (HiddenModeState) {
                    articleContainer.classList.add("read-article");
                } else {
                    articleContainer.remove()
                }
            } 
                            
            if ((!HiddenModeState) && (articleContainer.classList.contains("read-article"))) {
                articleContainer.remove()
            }

            const upvoteButton = articleContainer.querySelector(".upvote");
            const downvoteButton = articleContainer.querySelector(".downvote");
            const skipButton = articleContainer.querySelector(".skip");


            if (upvotes[itemId]) {
                upvoteButton.classList.add("thumbs-up");
            } else {
                try {
                    upvoteButton.classList.remove("thumbs-up");
                } catch (error) {}
            }

            if (downvotes[itemId]) {
                downvoteButton.classList.add("thumbs-down");
            } else {
                try {
                    downvoteButton.classList.remove("thumbs-down");
                } catch (error) {}
            }

      
        });

    }


    const cooldownSlider = document.getElementById("cooldown-slider");
    const cooldownValueElement = document.getElementById("cooldown-value");
    
    // Retrieve cooldown value from localStorage (if available)
    const savedcooldown = localStorage.getItem("cooldown") || 0.5;
    if (savedcooldown) {
        cooldownSlider.value = savedcooldown;
        cooldownValueElement.textContent = savedcooldown;
    }

    // Update cooldown value and save to localStorage when slider value changes
    cooldownSlider.addEventListener("input", function () {
        const newcooldown = cooldownSlider.value;
        cooldownValueElement.textContent = newcooldown;
        localStorage.setItem("cooldown", newcooldown);
    });

    const lookbackSlider = document.getElementById("lookback-slider");
    const lookbackValueElement = document.getElementById("lookback-value");
    
    // Retrieve lookback value from localStorage (if available)
    const savedLookback = localStorage.getItem("lookback") || 3;
    if (savedLookback) {
        lookbackSlider.value = savedLookback;
        lookbackValueElement.textContent = savedLookback;
    }

    // Update lookback value and save to localStorage when slider value changes
    lookbackSlider.addEventListener("input", function () {
        const newLookback = lookbackSlider.value;
        lookbackValueElement.textContent = newLookback;
        localStorage.setItem("lookback", newLookback);
    });

    const cutoffSlider = document.getElementById("cutoff-slider");
    const cutoffValueElement = document.getElementById("cutoff-value");
    
    // Retrieve cutoff value from localStorage (if available)
    const savedcutoff = localStorage.getItem("cutoff") || -1.5;
    if (savedcutoff) {
        cutoffSlider.value = savedcutoff;
        cutoffValueElement.textContent = savedcutoff;
    }

    // Update cutoff value and save to localStorage when slider value changes
    cutoffSlider.addEventListener("input", function () {
        const newcutoff = cutoffSlider.value;
        cutoffValueElement.textContent = newcutoff;
        localStorage.setItem("cutoff", newcutoff);
    });

    const negativitySlider = document.getElementById("negativity-slider");
    const negativityValueElement = document.getElementById("negativity-value");
    
    // Retrieve negativity value from localStorage (if available)
    const savednegativity = localStorage.getItem("negativity") || 1.25;
    if (savednegativity) {
        negativitySlider.value = savednegativity;
        negativityValueElement.textContent = savednegativity;
    }

    // Update negativity value and save to localStorage when slider value changes
    negativitySlider.addEventListener("input", function () {
        const newnegativity = negativitySlider.value;
        negativityValueElement.textContent = newnegativity;
        localStorage.setItem("negativity", newnegativity);
    });

    const ignoreImagesCheckbox = document.getElementById("ignore-images");

    // Retrieve ignore images value from localStorage (if available)
    const savedIgnoreImages = localStorage.getItem("ignoreImages") === "true";
    ignoreImagesCheckbox.checked = savedIgnoreImages;

    // Update ignore images value and save to localStorage when checkbox value changes
    ignoreImagesCheckbox.addEventListener("change", function () {
        const newIgnoreImages = ignoreImagesCheckbox.checked;
        localStorage.setItem("ignoreImages", newIgnoreImages);
    });

    function dedup_articles() {
        var uniqueArticles = [];
        var uniqueArticleIds = new Set();
        var uniqueArticleTitlesAndDescriptions = new Set();
      
        articles.forEach(articleData => {
          const key = `${articleData.title}-${articleData.description}`;
          if (!uniqueArticleIds.has(articleData.itemId) && !uniqueArticleTitlesAndDescriptions.has(key)) {
            uniqueArticleIds.add(articleData.itemId);
            uniqueArticleTitlesAndDescriptions.add(key);
            uniqueArticles.push(articleData);
          }
        });

        articles = uniqueArticles;
      }    

    function extractContent(s) {
        var span = document.createElement('span');
        span.innerHTML = s.replace(/\n/g, ' ');
        return span.textContent || span.innerText;
    };

    function loadNews(loadFeeds = true, singlefeed="") {

        const lastLoad = localStorage.getItem("lastLoad") || 0;
        const lastcooldown = localStorage.getItem("lastcooldown") || 0.25;

        //console.log("new cooldown",savedcooldown,"old cooldown",lastcooldown)
        
        if (savedcooldown>=lastcooldown) {
            var time_padding = Date.parse(new Date())-savedcooldown*60*60*1000 //750000
            localStorage.setItem("lastcooldown", savedcooldown);
        } else {
            var time_padding = Date.parse(new Date())-lastcooldown*60*60*1000 //750000
        }

        if ((lastLoad>time_padding) || (rssFeeds.length==0)) {
            loadFeeds = false;
        }

        if (loadFeeds) {

            localStorage.setItem("lastLoad", Date.parse(new Date()));
            localStorage.setItem("lastcooldown", savedcooldown);

            localStorage.setItem("feeds", JSON.stringify(rssFeeds));
                
            document.getElementById('news-feed').innerHTML = ` <div style="float:left;width:100%;height:80px;"><div id="spinner_here" style="margin:0 auto;width:65px;">&nbsp;</div></div>`;
            if (localStorage.getItem("darkMode")=="enabled") {
                tickcolor = '#ddd';		
            } else {
                tickcolor = '#000';		
            }
            start_spinner('spinner_here',tickcolor);

            if (singlefeed.length>0) {
                n_feeds = rssFeeds.length - 1;
                use_feeds = [singlefeed];
            } else {
                use_feeds = rssFeeds;
                n_feeds = 0;
            }

            const lookback = new Date();
            lookback.setDate(lookback.getDate() - 30);

            backstop = new Date(localStorage.backstop);
            
            errors = 0;

            use_feeds.forEach(feedUrl => {
                fetchFeed(feedUrl)
                    .then(data => {

                        //console.log(data)

                        const parser = new DOMParser();
                        const xml = parser.parseFromString(data, "application/xml");

                        //xml_doc = xml 
                        //console.log(xml)

                        var feedTitle
                        if (xml.documentElement.nodeName=="feed") {
                            feedTitle = xml.querySelector("title").textContent;    
                            items = xml.querySelectorAll("entry");
                            mastodon = false
                            masto_profile = null
                        } else {
                            feedTitle = xml.querySelector("channel title").textContent; 
                            items = xml.querySelectorAll("item");                          
                            try {
                                generator = xml.querySelector("channel generator").textContent;
                            } catch (error) {
                                generator = ""
                            }
                            if (generator.match(/mastodon/i)){
                                mastodon = true
                                masto_profile = xml.querySelector("channel image url").textContent;
                            } else {
                                mastodon = false
                                masto_profile = null
                            }
                        }

                        j=0;
                        items.forEach(item => {

                            //console.log(item)

                            var unknown_pubDate = false
                            if (xml.documentElement.nodeName=="feed") {
                                pubDate = new Date(item.querySelector("published").textContent);                                
                            } else {
                                try {
                                    pubDate = new Date(item.querySelector("pubDate").textContent);                                    
                                } catch (error) {
                                    const tmp_date = new Date();
                                    tmp_date.setHours(tmp_date.getHours() - (Math.random() * (23 - 6) + 6));
                                    pubDate = tmp_date
                                    unknown_pubDate = true
                                }
                            }
                            
                            //console.log("Max items per feed:",(0.75*max_arts/rssFeeds.length))
                            //if ((pubDate >= backstop) && (pubDate >= lookback) && (j<Math.floor(1.45*max_arts/rssFeeds.length)) && (pubDate <= new Date())) {
                            if ((pubDate >= backstop) && (pubDate >= lookback) && (pubDate <= new Date())) {
                                
                                if (xml.documentElement.nodeName=="feed") {
                                    link = item.querySelector("link").attributes["href"].nodeValue;
                                } else {
                                    link = item.querySelector("link").textContent;
                                }

                                try {
                                    title = item.querySelector("title").textContent;
                                } catch (error) {
                                    //console.log("Empty Title",link)
                                    title = ""
                                }

                                try {
                                    if (xml.documentElement.nodeName=="feed") {
                                        description = item.querySelector("content").textContent;
                                    } else {
                                        description = item.querySelector("description").textContent;
                                    }                                    
                                } catch (error) {
                                    console.log("Empty Description",feedUrl,link)
                                    description = "";
                                }

                                if (description=="") {
                                    try{
                                        description = item.querySelector("media\\:description, description").textContent;
                                    } catch (error) {
                                        description = "";
                                    }
                                }


                                if (description!=""){
        
                                    const re = /(https?:\/\/[^\s]+\.(?:png|jpg|jpeg|gif))/i;
                                    possible_img = description.match(re)
                                    if (possible_img) {
                                        if (!possible_img[0].match("tracking") && !possible_img[0].match("count\.gif") && !possible_img[0].match("embedly\.com")) {
                                            possible_img = possible_img[0]
                                        } else if (possible_img[0].match("tracking") && possible_img[1] && !possible_img[1].match("tracking") && !possible_img[0].match("count\.gif") && !possible_img[0].match("embedly\.com")) {
                                            possible_img = possible_img[1]
                                        } else {
                                            possible_img = null
                                        }
                                    }

                                    if (!mastodon) {
                                        description = extractContent(description)
                                        if (description.length>400) {
                                            description = description.slice(0,300)+" [...]";
                                        }
                                    }

                                    //const pubDate = new Date(item.querySelector("pubDate").textContent);
                                    
                                    //const image = item.querySelector("image"); 

                                    //const mediaContent = item.querySelector("media\\:content, content");
                                    //const mediaThumbnail = mediaContent ? mediaContent.getAttribute("url") : null;

                                    try {
                                        mediaContent = item.querySelector("media\\:thumbnail, thumbnail");
                                        if (mediaContent) {
                                            mediaThumbnail = mediaContent.getAttribute("url");
                                        } else {
                                            mediaThumbnail = null
                                        }
                                    } catch(error) {
                                        mediaThumbnail = null
                                    }

                                    if (Object.is(mediaThumbnail, null)) {
                                        try {
                                            mediaThumbnail = item.querySelector("media\\:content, content").getAttribute("url");
                                        } catch(error) {
                                            mediaThumbnail = null
                                        }
                                    }

                                    if (Object.is(mediaThumbnail, null)) {
                                        mediaThumbnail = possible_img
                                    }

                                    if (Object.is(mediaThumbnail, null)) {
                                        try {
                                            blob_of_text = item.querySelector("content\\:encoded, encoded").textContent
                                            possible_img = blob_of_text.match(re)
                                            if (possible_img) {
                                                if (!possible_img[0].match("tracking")) {
                                                    possible_img = possible_img[0]
                                                } else if (possible_img[0].match("tracking") && possible_img[1] && !possible_img[1].match("tracking")) {
                                                    possible_img = possible_img[1]
                                                } else {
                                                    possible_img = null
                                                }                                                    
                                                mediaThumbnail = possible_img
                                            }
                                            } catch (error) {}
                                    }                 

                                    if (Object.is(mediaThumbnail, null) && mastodon) {
                                        mediaThumbnail = masto_profile
                                    }
                                    
                                    if (Object.is(mediaThumbnail, null)) {
                                        if(link.includes("washingtonpost.com")){
                                            // source: https://www.washingtonpost.com/reprints-permissions/
                                            mediaThumbnail = "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/store/newspaper.jpg&w=700&h=525&t=20191113b"
                                        } else if (link.includes("economist.com")) {
                                            // source: https://commons.wikimedia.org/wiki/File:The_Economist_Logo.svg
                                            mediaThumbnail = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/The_Economist_Logo.svg/640px-The_Economist_Logo.svg.png"
                                        } else if (link.includes("nytimes.com")) {
                                            // source: https://commons.wikimedia.org/wiki/File:Nytimes_hq.jpg
                                            mediaThumbnail = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Nytimes_hq.jpg/640px-Nytimes_hq.jpg"
                                        } else if (link.includes("wsj.com")) {
                                            mediaThumbnail = "https://s.wsj.net/img/meta/wsj-social-share.png"
                                        } else if (link.includes("npr.org")) {
                                            // source: https://www.npr.org/about-npr/182675632/photos-and-logos
                                            mediaThumbnail = "https://media.npr.org/assets/img/2019/06/17/nprlogo_rgb_whiteborder_custom-7c06f2837fb5d2e65e44de702968d1fdce0ce748-s1300-c85.webp";
                                        } else if (link.includes("techdirt.com")) {
                                            mediaThumbnail = "https://media.licdn.com/dms/image/sync/D4E27AQEOoSQ15-xPHA/articleshare-shrink_800/0/1693251137708?e=1694556000&v=beta&t=jvaFJ2nFoR8KkkNeR56aD82WKIAjiETvFvif6IcPKHg";
                                        } else if (link.includes("screenrant.com")) {
                                            mediaThumbnail = "https://static1.srcdn.com/wordpress/wp-content/uploads/social/sr-og-img.png";
                                        } else if (link.includes("mcsweeneys.net")) {
                                            mediaThumbnail = "https://process.filestackapi.com/KTcFSs07Q5q2Qzl7FNya";
                                        } else if (link.includes("techcrunch.com")) {
                                            //https://logos-world.net/techcrunch-logo/
                                            mediaThumbnail = "https://logos-world.net/wp-content/uploads/2023/03/TechCrunch-Logo-500x281.jpg";
                                        } else if (link.includes("wgbh.org")) {
                                            //https://www.wgbh.org/news/local/2020-09-01/welcome-to-gbh
                                            mediaThumbnail = "https://cdn.grove.wgbh.org/60/53/ee45c6c0f4a2d03052f441827877/gbh1.jpg";
                                        } else if (link.includes("masslawyersweekly.com")) {
                                            //https://seekvectorlogo.com/massachusetts-lawyers-weekly-vector-logo-svg/
                                            mediaThumbnail = "https://seekvectorlogo.com/wp-content/uploads/2022/02/massachusetts-lawyers-weekly-vector-logo-2022.png";
                                        } else if (link.includes("abovethelaw.com")) {
                                            //https://abovethelaw.com/advertise/
                                            mediaThumbnail = "https://470182.fs1.hubspotusercontent-na1.net/hubfs/470182/Imported%20images/Logo-1.png";
                                        } else if (link.includes("latimes.com")) {
                                            mediaThumbnail = "https://www.vectorlogo.zone/logos/latimes/latimes-ar21.png";
                                        } else if (link.includes("theatlantic.com")) {
                                            mediaThumbnail =  "https://logovectordl.com/wp-content/uploads/2021/01/the-atlantic-logo-vector.png"
                                        } else if (link.includes("bbc.co")) {
                                            mediaThumbnail =  "https://www.newscaststudio.com/wp-content/uploads/2021/10/new-bbc-logo.jpg";
                                        } else if (link.includes("lightspeedmagazine.com")) {
                                            mediaThumbnail =  "https://www.lightspeedmagazine.com/wp-content/uploads/2022/10/LIGHTSPEED_swordAndRocket_cover.png";
                                        } else if (link.includes("clarkesworldmagazine.com")) {
                                            mediaThumbnail =  "https://clarkesworldmagazine.com/covers/cw_08_large.jpg";
                                        } else if (link.includes("escapepod.org")) {
                                            mediaThumbnail =  "https://escapepod.org/wp-content/uploads/2018/03/Escape-Pod-social.jpg";
                                        } else if (feedTitle.trim().startsWith("Hacker News")) {
                                                mediaThumbnail =  "https://uploads-ssl.webflow.com/5e5e26b57a149fc28773c703/5eaf3dc2f728bb4e333a1546_hacker-news-logo.jpeg";
                                        } else if (link.includes("ssrn.com")) {
                                            mediaThumbnail = "data:image/png;base64,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"
                                        }
                                    }
                                
                                    const itemId = link; // Using link as a unique identifier for items
                                    const isRead = readArticles[itemId] || false;

                                    const priorityRating = getRating(feedTitle.replace(/[^a-zA-Z]/g,"")+": "+domain_from_url(link)+" "+title+" "+description); 

                                    articles.push({
                                        title,
                                        link,
                                        description,
                                        pubDate,
                                        unknown_pubDate,
                                        //image: image ? image.textContent : null,
                                        mediaThumbnail,
                                        itemId,
                                        isRead,
                                        feedTitle,
                                        feedUrl,
                                        mastodon,
                                        masto_profile,
                                        hasUpvote: upvotes[itemId] || false,
                                        hasDownvote: downvotes[itemId] || false,
                                        priorityRating
                                    });
                                }
                            }
                            j+=1
                        });

                        if (j==0){
                            console.log("** No relevant items found in "+feedUrl);
                        }

                        dedup_articles();
                        if (crunch_numbers) {
                            reorderArticles();
                            displayArticles();
                            updateItemCount();
                            displayed_cards = newsFeedContainer.childNodes.length
                            console.log("Displayed Cards: " +displayed_cards+" ("+Math.round(100*displayed_cards/stored_art)+"%)");
                            lazyload();
                            replace_broken();
                            get_quote();
                        }
                    })
                    .catch(error => {
                        // Display a warning popup for error cases
                        const feedTitle = "Unknown Feed";
                        const errorMessage = `Error fetching RSS feed: ${error.message}`;
                        if (errors==0) {
                            displayErrorPopup(feedTitle, feedUrl, errorMessage);
                        }
                        errors+=1
                        n_feeds+=1
                        console.log("Error #"+errors+": ",feedUrl,errorMessage)
                    });
        
            });

        } else {

            crunch_numbers = true;
            dedup_articles();
            reorderArticles();
            displayArticles();
            updateItemCount();
            displayed_cards = newsFeedContainer.childNodes.length
            console.log("Displayed Cards: " +displayed_cards+" ("+Math.round(100*displayed_cards/stored_art)+"%)");
            lazyload();
            replace_broken();
            get_quote();
            crunch_numbers = false;
        }

        crunch_numbers = false;
        
    }        

    function resetReadStatus() {
        articles.forEach(article => {
            article.isRead = false;
        });
    }

    function reorderArticles() {

        if (crunch_numbers) {
            tmp_ratings = []
            for (article in articles){
                rating = getRating(articles[article]['feedTitle'].replace(/[^a-zA-Z]/g,"")+": "+domain_from_url(articles[article]['link'])+""+articles[article]['title']+" "+articles[article]['description'])
                articles[article]["priorityRating"] = rating; 
                tmp_ratings.push(rating)
            }
            stats = StandardDeviation(tmp_ratings)
            ratings_mean = stats[0];
            ratings_std = stats[1];
            console.log("Ratings: mean", ratings_mean,"std",ratings_std);                    
        }

        articles.sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));

        keep_last = Math.round(max_arts*1.5);
        articles = articles.slice(-keep_last)
        
        articles.sort((a, b) => {
            if (a.isRead && !b.isRead) return 1;
            if (!a.isRead && b.isRead) return -1;
            if (a.priorityRating !== b.priorityRating) return b.priorityRating - a.priorityRating;
            return new Date(b.pubDate) - new Date(a.pubDate);
        });
        
    }

    function updateOpenButton(card) {
        const openButton = card.querySelector(".read-button");
        if (openButton) {
            if (card.classList.contains("read-article")) {
                openButton.classList.remove("btn-secondary");
                openButton.classList.add("btn-primary");
                openButton.textContent = "Open";
            } else {
                openButton.classList.remove("btn-primary");
                openButton.classList.add("btn-secondary");
                openButton.textContent = "View Again";
            }
        }
    }

    function moveCardToEnd(card) {
        // Move the card to the end of the list
        newsFeedContainer.appendChild(card);

        // Update article styles after the move
        updateArticleStyles();
    }

    function domain_from_url(url) {
        var result
        var match
        //if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
        if (match = url.match(/^https?:\/\/([^\/]+)/)) {
            result = match[1]
            if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
                result = match[1]
            }
        }
        return result
    }


    function displayArticles() {  

        newsFeedContainer.innerHTML = "";

        i=0
        articles.forEach((articleData, index) => {

            const { title, link, description, pubDate, unknown_pubDate, image, mediaThumbnail, itemId, isRead, feedTitle, feedUrl, mastodon, masto_profile, hasUpvote, hasDownvote, priorityRating } = articleData;

            const twoWeeksAgo = new Date();
            twoWeeksAgo.setDate(twoWeeksAgo.getDate() - savedLookback);

            if ((i==2 && !isRead) && (Math.random()<=0.1) && ((n_feeds>=rssFeeds.length) || (n_feeds==0))) {

                if (savedIgnoreImages){
                    img_html = `
                        <div style="postion:relative;z-index:0;top:0;height:33px;"></div>`
                } else {
                    img_html = `
                        <div style="postion:relative;z-index:0;top:0;min-height:33px;"><img src="images/sargent.jpg" class="lazyload card-img-top thumbnail-image"></div>`
                }

                const sponsor = document.createElement("div");
                sponsor.setAttribute("data-article-index", "sponsor"); 
                sponsor.setAttribute("data-item-id", "sponsor");
                sponsor.className = `col-xl-4 col-lg-5 col-md-6 col-sm-12 article-container`;
                sponsor.innerHTML = `
                    <div class="card">
                        <div class="masto_share" style="right:10px;"><a href="javascript:void('')" onclick="MastodonShare('Support Suffolk Law\\'s LIT Lab;url=https://suffolklitlab.org/docs/affiliates.pdf');">Mastodon</a></div>
                        ${img_html}
                        <div class="card-body">
                                <h5 class="card-title">Support the People Who Built <i>My RSS Algo</i>!</h5>
                                <p class="card-text">Through its Affiliates Program, Suffolk University Law School's Legal Innovation and Technology <a href="https://suffolklitlab.org/" target="_blank">(LIT) Lab</a> provides members with connections to experts and law students working with emerging legal services technologies, while growing the Lab's capacity to serve disadvantaged communities.</p>
                            <div style="text-align:right;">
                                <a href="https://suffolklitlab.org/docs/affiliates.pdf" class="btn btn-primary" target="_blank">Become an Affiliate</a>
                            </div>
                        </div>
                        <div class="card-footer">
                            <small class="feed-tag">FROM THE MAKERS OF THIS SITE</small>
                        </div>
                    </div>
                `;                        
                newsFeedContainer.appendChild(sponsor);
                i+=1;
            } 

            if (savedcutoff<=-3.5) {
                practical_cutoff = -10;
            } else {
                practical_cutoff = savedcutoff;
            }

            const HiddenModeState = localStorage.getItem("hiddenMode") === "true";
            if ((!HiddenModeState && !isRead) || (HiddenModeState)) {

                if ((Date.parse(pubDate) >= Date.parse(twoWeeksAgo)) && priorityRating >= ratings_mean+ratings_std*(practical_cutoff)) {

                    const article = document.createElement("div");
                    article.setAttribute("data-article-index", index); 
                    article.setAttribute("data-item-id", itemId);
                    article.className = `col-xl-4 col-lg-5 col-md-6 col-sm-12 article-container ${isRead ? 'read-article' : ''}`;

                    if (unknown_pubDate){
                        local_pubDate = "Publication date unknown";
                    } else {
                        local_pubDate = new Date(pubDate).toLocaleString();
                    }

                    domain_from_link = domain_from_url(link);

                    if (mastodon) {
                        favicon = masto_profile
                        card_body_text = ` <h5 class="card-title">A Post From <a href="https://joinmastodon.org/" target="_blank" class="masto_post">Mastodon</a></h5><div style="height:100%;overflow-y:auto;">${description}</div>`
                        share_html = `<div class="pocket_share"><a href="javascript:void('')" onClick="save_to_poeket(\`${link}\`)"><div style="background: url('https://getpocket.com/i/v3/pocket_logo.png');background-position: 0px -9px; width:35px;height:40px;"></div></a></div>`
                    } else {
                        favicon = "https://"+domain_from_link+"/favicon.ico"
                        card_body_text = `<h5 class="card-title">${title}</h5><p class="card-text">${description}</p>`
                        share_html = `<div class="masto_share"><a href="javascript:void('')" onclick="MastodonShare(\`${title};url=${link}\`);">Mastodon</a></div>
                            <div class="pocket_share"><a href="javascript:void('')" onClick="save_to_poeket(\`${link}\`)"><div style="background: url('https://getpocket.com/i/v3/pocket_logo.png');background-position: 0px -9px; width:35px;height:40px;"></div></a></div>`
                    }

                    if (savedIgnoreImages){
                        img_html = `
                            <div style="postion:relative;z-index:0;top:0;height:33px;"></div>`
                    } else {
                        if (mediaThumbnail) {
                            if (mediaThumbnail.match(/\.mp4$/i)) {
                                img_html = `
                                <div style="postion:relative;z-index:0;top:0"><video width="100%" controls>
                                <source src="${mediaThumbnail}" type="video/mp4">
                                Your browser does not support the video tag.
                                </video> </div>`
                            }
                        }
                        img_html = `
                            <div style="postion:relative;z-index:0;top:0">${mediaThumbnail ? `<img data-src="${mediaThumbnail}" class="lazyload card-img-top thumbnail-image">` : '<img data-src="images/placeholder.png" class="lazyload card-img-top thumbnail-image">'}</div>`
                    }

                    article.innerHTML = `
                        <div class="card">
                            ${share_html}
                            ${img_html}
                            
                            <div class="card-body">
                                    <!--<div class="priority-rating">${priorityRating}</div>-->
                                    ${card_body_text}
                                    <p class="card-text"><small class="text-muted">${local_pubDate}</small></p>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <button class="btn btn-success upvote ${hasUpvote ? 'thumbs-up' : ''}" data-item-id="${itemId}">👍</button>
                                        <button class="btn btn-danger downvote ${hasDownvote ? 'thumbs-down' : ''}" data-item-id="${itemId}">👎</button>
                                        <button class="btn btn-secondary skip ${isRead ? 'skip-read' : ''}" data-item-id="${itemId}">Seen</button>
                                    </div>
                                    <div>
                                    <a href="${link}" class="btn btn-${isRead ? 'secondary' : 'primary'} read-button" target="_blank">${isRead ? 'View Again' : 'Open'}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <a href="https://${domain_from_link}" target="_blank"><img class="favicon" src="${favicon}" height="18px"></a> <small class="feed-tag">&nbsp;&nbsp;${feedTitle}</small> 
                                <span class="btn remove_feed" data-feed-index="${feedUrl}" data-feed-name="${feedTitle}">🚫</span>
                            </div>
                        </div>
                    `;

                    newsFeedContainer.appendChild(article);

                    const upvoteButton = article.querySelector(".upvote");
                    const downvoteButton = article.querySelector(".downvote");
                    const skipButton = article.querySelector(".skip");
                    const readButton = article.querySelector(".read-button");

                    upvoteButton.addEventListener("click", function() {
                        if (downvotes[itemId]) {
                            delete downvotes[itemId];
                            localStorage.setItem("downvotes", JSON.stringify(downvotes));
                        }
                        
                        if (upvotes[itemId]) {
                            delete upvotes[itemId];
                            localStorage.setItem("upvotes", JSON.stringify(upvotes));
                        } else {
                            upvotes[itemId] = true;
                            localStorage.setItem("upvotes", JSON.stringify(upvotes));
                        }
                        localStorage.setItem("upvotes", JSON.stringify(arr2obj(Object.entries(upvotes).slice(-max_arts))));
                        
                        updateArticleStyles();
                    });

                    downvoteButton.addEventListener("click", function() {
                        if (upvotes[itemId]) {
                            delete upvotes[itemId];
                            localStorage.setItem("upvotes", JSON.stringify(upvotes));
                        }
                        
                        if (downvotes[itemId]) {
                            delete downvotes[itemId];
                            localStorage.setItem("downvotes", JSON.stringify(downvotes));
                        } else {
                            downvotes[itemId] = true;
                            localStorage.setItem("downvotes", JSON.stringify(downvotes));
                        }
                        localStorage.setItem("downvotes", JSON.stringify(arr2obj(Object.entries(downvotes).slice(-max_arts))));
                        
                        updateArticleStyles();
                    });

                    skipButton.addEventListener("click", function () {
                        const articleIndex = parseInt(article.getAttribute("data-article-index"));
                        readArticles[itemId] = new Date().toISOString();
                        localStorage.setItem("read", JSON.stringify(readArticles));

                        // Mark the article as read in the articles array
                        articles[articleIndex].isRead = true;

                        // Get the parent container of the clicked skip button
                        const articleContainer = skipButton.closest(".article-container");

                        // Update the Open button behavior
                        updateOpenButton(articleContainer);

                        // Move the article container to the end of the list
                        moveCardToEnd(articleContainer);

                        // Update the unread count
                        updateItemCount();
                        get_quote();
                    });

                    readButton.addEventListener("click", function() {
                        const articleIndex = parseInt(article.getAttribute("data-article-index"));
                        if (!isRead) {
                            readArticles[itemId] = new Date().toISOString();
                            localStorage.setItem("read", JSON.stringify(readArticles));

                            // Mark the article as read in the articles array
                            articles[articleIndex].isRead = true;

                            // Get the parent container of the clicked skip button
                            const articleContainer = skipButton.closest(".article-container");

                            // Update the Open button behavior
                            updateOpenButton(articleContainer);

                            // Move the article container to the end of the list
                            moveCardToEnd(articleContainer);

                            // Update the unread count
                            updateItemCount();
                            get_quote();
                        }
                    });

                    const RemoveFeedButton = article.querySelector(".remove_feed");

                    RemoveFeedButton.addEventListener("click", function() {
                        if (feedUrl == "undefined" || typeof feedUrl == "undefined") {
                            // Can delete after Start of Dec 2024
                            alert("This card was saved with an old version of this site and we don't have the information needed to remove the feed. Use the My Feeds button at the top of the page.")
                        } else if (rssFeeds.includes(feedUrl)) {
                            let text = "Choose OK to remove: "+feedTitle+"\n\n"+feedUrl+"\n\nChoose Cancel to keep things as they are. Note: If you remove this feed, old posts will remain visable in your timeline, but we will not fetch new ones.";
                            if (confirm(text) == true) {
                                //console.log(rssFeeds)
                                //console.log("Removing",feedUrl)
                                const feedIndex = rssFeeds.indexOf(feedUrl);
                                rssFeeds.splice(feedIndex, 1);
                                //updateFeedList();
                                //console.log(rssFeeds)
                            }
                        } else {
                            alert("It looks like this feed has already been removed. Remember, old posts from removed feeds remain visable in your timeline, but new ones are not fetched.")
                        }
                    });        
                    i+=1;
                }   
            }                 
        });

        // After all articles are displayed, update their styles
        updateArticleStyles();

    }

    function StandardDeviation(arr) {
        // Creating the mean with Array.reduce
        let mean = arr.reduce((acc, curr) => {
            return acc + curr
        }, 0) / arr.length;

        // Assigning (value - mean) ^ 2 to
        // every array item
        arr = arr.map((k) => {
            return (k - mean) ** 2
        });

        // Calculating the sum of updated array
        let sum = arr.reduce((acc, curr) => acc + curr, 0);

        // Calculating the variance
        let variance = sum / arr.length

        // Returning the standard deviation
        return [mean, Math.sqrt(sum / arr.length)]
    }

    function cosinesim(A, B) {

        var dotproduct = 0;
        var mA = 0;
        var mB = 0;

        for(var i = 0; i < A.length; i++) {
            dotproduct += A[i] * B[i];
            mA += A[i] * A[i];
            mB += B[i] * B[i];
        }


        mA = Math.sqrt(mA);
        mB = Math.sqrt(mB);


        var similarity = dotproduct / (mA * mB);

        if (isNaN(similarity)) {
            similarity = 0
        }

        return similarity;
    }

    function getRating(inputString) {

        //console.log(inputString)

        tf = countWords(inputString)

        var array1 = [];
        var array2 = [];
        for (word in upTFIDF) {
            if (dfreq["df_arr"][word]) {
                idf = Math.log(1+dfreq["n_docs"]/dfreq["df_arr"][word]);
                if (isNaN(idf)) {
                    idf = 1;
                }
                if (tf[word] && idf) {
                    array1.push((tf[word])*idf)
                } else {
                    array1.push(0)
                }
                array2.push(upTFIDF[word]*idf)
            }
        }
        up_score = cosinesim(array1, array2);
        
        var array1 = [];
        var array2 = [];
        for (word in downTFIDF) {
            if (dfreq["df_arr"][word]) {
                idf = Math.log(1+dfreq["n_docs"]/dfreq["df_arr"][word]);
                if (isNaN(idf)) {
                    idf = 1;
                }
                if (tf[word] && idf) {
                    array1.push((tf[word])*idf)
                } else {
                    array1.push(0)
                }
                array2.push(downTFIDF[word]*idf)
            }
        }
        down_score = cosinesim(array1, array2);
        
        score = up_score - down_score*savednegativity;
        //console.log(score)
        
        return score;
    }

    function get_words(inputString){
        const all_words = inputString.toLowerCase().match(/\b\w+\b/g);
        const words = []
        for (word in all_words){
            if (!stopwords.includes(all_words[word])) {
                words.push(all_words[word])
            }
        }
        //console.log(words)
        return words
    }

    function countWords(inputString) {
        const words = get_words(inputString);

        if (!words) {
            return {};
        }

        const wordCount = {};
        words.forEach(word => {
            if (wordCount[word]) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1;
            }
        });

        return wordCount;
    }

    function countWordsInArray(arrayOfStrings) {
        const wordCount = {};

        arrayOfStrings.forEach(inputString => {
            const words = get_words(inputString);

            if (words) {
                const uniqueWords = new Set(words);

                uniqueWords.forEach(word => {
                    if (wordCount[word]) {
                        wordCount[word]++;
                    } else {
                        wordCount[word] = 1;
                    }
                });
            }
        });

        return wordCount;
    }

    function extractText(articles) {
        const extractedTexts = [];

        articles.forEach(article => {
            const { link, feedTitle, title, description } = article;
            domain_from_link = domain_from_url(link)
            const extractedText =  extractContent(`${feedTitle.replace(/[^a-zA-Z]/g,"")}\n${domain_from_link}\n${title}\n${description}`);
            extractedTexts.push(extractedText);
        });

        return extractedTexts;
    }

    function calculateDF(readArticleData) {
        const read_docs = extractText(readArticleData)
        const df = countWordsInArray(read_docs)
        return {"df_arr":df,"n_docs":read_docs.length}
    }

    function calculateTFIDF(votedArticles,df) {

        n_composite_docs = votedArticles.length;

        const documents = votedArticles.map(article => article.feedTitle.replace(/[^a-zA-Z]/g,"")+' '+domain_from_url(article.link)+' '+article.title+' '+article.description);
        const doc = documents.join(' ').replace(/[^a-zA-Z]\d+[^a-zA-Z]/g,"");

        tf = countWords(doc)

        return tf;
    }

    function topWords(wordObj,exclude) {         

        //console.log(wordObj)
        
        for (word in wordObj){
            idf = Math.log(1+dfreq["n_docs"]/dfreq["df_arr"][word]);
            if (isNaN(idf)) {
                idf = 1;
            }
            wordObj[word] = wordObj[word]*idf;
        }

        const pickHighest = (wordObj, num = 1) => {
            const requiredObj = {};
            if(num > Object.keys(wordObj).length){
                return false;
            };
            Object.keys(wordObj).sort((a, b) => wordObj[b] - wordObj[a]).forEach((key, ind) =>
            {
                if(ind < num){
                    requiredObj[key] = wordObj[key];
                }
            });
            return requiredObj;
        };

        n = 60;
        word_list = pickHighest(wordObj, n)
        if (Object.keys(word_list).length>0) {
            i = 0
            words = ""
            for (word in word_list) {
                if (i==0){
                    words += " "
                } else if (i<(n-1)) {
                    words += ", "
                } else {
                    words += ", &amp; "
                }
                words += word + " ("+Math.round(word_list[word])+")"
                i+=1
            }
        } else {
            words = "<i>not enough data</i>"
        }

        return words+". "
    }
            
    function displayErrorPopup(feedTitle, feedUrl, errorMessage) {
        const errorModal = `
            <div class="modal fade" id="errorModal" tabindex="-1" aria-labelledby="errorModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="errorModalLabel">Error Fetching Feed</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p><strong>Feed:</strong> ${feedTitle}</p>
                            <p><strong>Feed URL:</strong> ${feedUrl}</p>
                            <p><strong>Error Message:</strong> ${errorMessage}</p>
                            <p>Sometimes there are issues reaching a feed. If this error persists, you can remove this feed using the "My Feeds" button.</p>
                        </div>
                        <div class="modal-footer">
                            <button id="manage-feeds" class="btn btn-primary" style="width:100%" onClick="window.open('https://github.com/colarusso/rss_algo/tree/main#troubleshooting');">Troubleshoot this error</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML("beforeend", errorModal);

        const errorModalElement = document.getElementById("errorModal");
        errorModalElement.addEventListener("hidden.bs.modal", function() {
            errorModalElement.remove();
        });

        new bootstrap.Modal(errorModalElement).show();
    }

    function filterOldEntries(entries) {

        ///
        // Filter's read articles
        ///
       
        const currentDate = new Date();
        const twoWeeksAgo = new Date();
        
        backstop = new Date(localStorage.backstop);

        const filteredEntries = {};

        for (const link in entries) {
            const entryDate = new Date(entries[link]);
            if (entryDate >= backstop) {
                filteredEntries[link] = entries[link];
            }
        }

        return filteredEntries;
    }

    function countUnreadArticles() {
        const cardElements = document.querySelectorAll(".article-container");
        let unreadCount = 0;
        cardElements.forEach(card => {
            if (!card.classList.contains("read-article")) {
                unreadCount++;
            }
        });
        return unreadCount;
    }

    function updateItemCount() {

        const readCount = Object.keys(readArticles).length.toLocaleString("en-US");;
        const unreadCount = countUnreadArticles().toLocaleString("en-US"); 
        const readCountElement = document.getElementById("read-count");
        const unreadCountElement = document.getElementById("unread-count");
        if (readCount<=1000) {
            readCountElement.textContent = `Seen: ${readCount}`;
        } else {
            readCountElement.textContent = `Seen: 1,000+`;
        }
        unreadCountElement.textContent = `New: ${unreadCount}`;

        var readArticleData = articles.filter(article => readArticles[article.itemId]);
        var upvotedArticleData = articles.filter(article => upvotes[article.itemId]);
        var downvotedArticleData = articles.filter(article => downvotes[article.itemId]);
        dfreq = calculateDF(readArticleData)
        let upTFIDF = calculateTFIDF(upvotedArticleData,dfreq);
        let downTFIDF = calculateTFIDF(downvotedArticleData,dfreq);

        localStorage.setItem("upTFIDF", JSON.stringify(upTFIDF));
        localStorage.setItem("downTFIDF", JSON.stringify(downTFIDF));

        document.getElementById('upwords').innerHTML = topWords(upTFIDF,downTFIDF);
        document.getElementById('downwords').innerHTML = topWords(downTFIDF,upTFIDF);

        //var order_arr = []
        //console.log("Updating Order")
        //for (article in articles){
        //    order_arr.push([articles[article].isRead,articles[article].priorityRating,new Date(articles[article].pubDate).toLocaleString(),articles[article].title,articles[article].itemId])
        //}
        //console.log(order_arr)
        
        localStorage.setItem("articles", JSON.stringify(articles));  
        
    }

    function get_quote() {
        const HiddenModeState = localStorage.getItem("hiddenMode") === "true";
        if (countUnreadArticles().toLocaleString("en-US")==0 && !HiddenModeState) {
            items = [
                        "Be kind. Have Fun. Try something new.",
                        "In life and on apps, always question defaults. Fiddle with some settings, and see what happens.",
                        "Civilization is a positive-sum game."
                    ]
            const quote = document.createElement("div");
            quote.className = `end_quote`;
            quote.innerHTML = items[Math.floor(Math.random()*items.length)];
            newsFeedContainer.textContent = "";
            newsFeedContainer.appendChild(quote);    
        }
    }
    
    const clearUpvotesButton = document.getElementById("clear-upvotes");
    clearUpvotesButton.addEventListener("click", function() {
        // Clear the "upvotes" key from localStorage
        localStorage.removeItem("upvotes");

        // Clear the upvotes status of all articles in the upvotes object
        for (var member in upvotes) delete upvotes[member];

        // Update article styles and the feed list
        updateFeedList();            
    });

    const clearDownvotesButton = document.getElementById("clear-downvotes");
    clearDownvotesButton.addEventListener("click", function() {
        // Clear the "downvotes" key from localStorage
        localStorage.removeItem("downvotes");

        // Clear the downvotes status of all articles in the downvotes object
        for (var member in downvotes) delete downvotes[member];

        // Update article styles and the feed list
        updateFeedList();
    });

    const clearReadHistoryButton = document.getElementById("clear-read-history");
    clearReadHistoryButton.addEventListener("click", function() {
        // Clear the "read" key from localStorage
        localStorage.removeItem("read");

        // Clear the read status of all articles in the readArticles object
        for (var member in readArticles) delete readArticles[member];
        localStorage.setItem("backstop",new Date(0))
        backstop = new Date(0)

        articles = [];
        localStorage.setItem("articles", JSON.stringify(articles));
        let lastLoad = 0;
        localStorage.setItem("lastLoad", 0);

        // Update article styles and the feed list
        updateFeedList();
        updateItemCount();
        get_quote();
    });            
    
    loadNews(true);

    const addFeedButton = document.getElementById("add-feed");
    addFeedButton.addEventListener("click", function() {
        if (rssFeeds.length>=50) {
            alert("Generally speaking, the more feeds you follow the more posts in your timeline and the slower the site will preform. You can shrink the size of your timeline by setting a shorter History window. Also, to accommodate large feed follows, we truncate feeds to avoid overloading your browser's storage. How much we have to cut is proportional to how many feeds you follow. So following a lot of feeds may cause you to miss posts if they are too far down the feed. If this issue comes up, consider following fewer feeds or checking in more often.")
        }
        const newFeedUrl = prompt("Enter the URL for a new RSS feed:");
        if (newFeedUrl) {
            let lastLoad = 0;
            localStorage.setItem("lastLoad", 0);
            rssFeeds.push(newFeedUrl);
            updateFeedList(true,newFeedUrl);
        }
    });

    const manageFeedsButton = document.getElementById("manage-feeds");
    manageFeedsButton.addEventListener("click", function() {

        const feedList = rssFeeds.map((feed, index) => `
                <tr><td width="1%">
                <button class="btn btn-danger remove-feed" data-feed-index="${index}">Remove</button>
                </td><td width="100%"><textarea style="width:100%;word-wrap:break-word;resize: none;" readonly>${feed}</textarea></td></tr>
        `).join("");

        const feedListModal = `
            <div class="modal fade" id="feedListModal" tabindex="-1" aria-labelledby="feedListModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="feedListModalLabel">My Feeds</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                Remove individual feeds using the "Remove" buttons below, OR wipe and/or replace your existing list of feeds. If you need help finding feeds, check out our <a href="https://github.com/SuffolkLITLab/rss_algo/tree/main#notes-on-rss-feeds" target="_blank">notes on RSS feeds</a>.
                            </p> 
                            <p>
                                Consider starting with a premade list. Then over time you can whittle it down and add new feeds as you like. <i>Note: If you "remove" a feed or selection of feeds, <b>old articles will remain on your timeline and in your history by default</b>. You must use <i>Settings &amp; Data</i> to clear your history or one of the "wipe" options to remove old saved feed data</b>.</i>
                            </p>
                            <select id="feed_list">
                                <option value="default_feeds">Generic US News Mix (default)</option>
                                <option value="suffolk_law_feeds">Suffolk Mix: Select Papers + Boston + Law</option>
                                <option value="papers_feeds">US Print: NYT, WaPo, WSJ, &amp; LA Times</option>
                                <option value="condenast_feeds">Condé Nast Lite: New Yorker, ArsTechnica, &amp; Wired</option>
                                <option value="magazine_feeds">Magazines: New Yorker, Economist, Atalantic, Wired &amp; Quanta</option>
                                <option value="scifi_shorts_feed">SciFi Short Stories: Clarkesworld, Lightspeed &amp; Escape Pod</option>
                                <option value="geeek_feeds">Geekery: Science, Tech, Space, &amp; Star Trek</option>
                                <option value="feeds_long_list">All of the Above Plus More (over 150 feeds)</option>
                            </select>
                            </p>
                            <p>
                                <button type="button" id="remove_all_add_selection" class="btn btn-danger remove_all">Wipe &amp; Replace w/ Above Selection</button>
                                <button type="button" id="remove_all_feeds" class="btn btn-danger remove_all">Wipe All</button>
                            <p>
                            <table cellpadding="10px" width="100%">${feedList}</table>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML("beforeend", feedListModal);

        const feedListModalElement = document.getElementById("feedListModal");
        feedListModalElement.addEventListener("hidden.bs.modal", function() {
            feedListModalElement.remove();
        });

        const removeALLaddSelection = document.getElementById("remove_all_add_selection");
        const removeALLfeeds = document.getElementById("remove_all_feeds");
        
        removeALLaddSelection.addEventListener("click", function() {
            let text = "This will empty your current list of feeds, replacing it with the selection you made. It will remove all current records relating to articles, including votes. Choose OK to continue.";
            if (confirm(text) == true) {
                feed_name = document.getElementById("feed_list").value;
                rssFeeds = window[feed_name]
                localStorage.setItem("feeds",rssFeeds)
                feedListModalElement.querySelector("table").innerHTML = rssFeeds.map((feed, index) => `
                    <tr><td width="1%">
                    <button class="btn btn-danger remove-feed" data-feed-index="${index}">Remove</button>
                    </td><td width="100%"><textarea style="width:100%;word-wrap:break-word;resize: none;" readonly>${feed}</textarea></td></tr>
                `).join("");
                // Clear the "upvotes" key from localStorage
                localStorage.removeItem("upvotes");
                // Clear the upvotes status of all articles in the upvotes object
                for (var member in upvotes) delete upvotes[member];
                // Clear the "downvotes" key from localStorage
                localStorage.removeItem("downvotes");
                // Clear the downvotes status of all articles in the downvotes object
                for (var member in downvotes) delete downvotes[member];
                // Clear the "read" key from localStorage
                localStorage.removeItem("read");
                // Clear the read status of all articles in the readArticles object
                for (var member in readArticles) delete readArticles[member];
                const readCountElement = document.getElementById("read-count");
                const unreadCountElement = document.getElementById("unread-count");
                readCountElement.textContent = `Seen: ?`;
                unreadCountElement.textContent = `New: ?`;
                localStorage.setItem("backstop",new Date(0))
                backstop = new Date(0)    
                dfreq = {"df_arr":{},"n_docs":0}    
                let upTFIDF = {};
                let downTFIDF = {};
                articles = [];
                localStorage.setItem("articles", JSON.stringify(articles));
                let lastLoad = 0;
                localStorage.setItem("lastLoad", 0);
                modal_win.hide();
                updateFeedList(true);
            }
        });

        removeALLfeeds.addEventListener("click", function() {
            let text = "This will empty your feed list and remove all article records. This will reset your algo traing. Choose OK to continue.";
            if (confirm(text) == true) {
                rssFeeds = []
                localStorage.setItem("feeds",JSON.stringify(rssFeeds))
                feedListModalElement.querySelector("table").innerHTML = rssFeeds.map((feed, index) => `
                    <tr><td width="1%">
                    <button class="btn btn-danger remove-feed" data-feed-index="${index}">Remove</button>
                    </td><td width="100%"><textarea style="width:100%;word-wrap:break-word;resize: none;" readonly>${feed}</textarea></td></tr>
                `).join("");
                // Clear the "upvotes" key from localStorage
                localStorage.removeItem("upvotes");
                // Clear the upvotes status of all articles in the upvotes object
                for (var member in upvotes) delete upvotes[member];
                // Clear the "downvotes" key from localStorage
                localStorage.removeItem("downvotes");
                // Clear the downvotes status of all articles in the downvotes object
                for (var member in downvotes) delete downvotes[member];
                // Clear the "read" key from localStorage
                localStorage.removeItem("read");
                // Clear the read status of all articles in the readArticles object
                for (var member in readArticles) delete readArticles[member];
                const readCountElement = document.getElementById("read-count");
                const unreadCountElement = document.getElementById("unread-count");
                readCountElement.textContent = `Seen: ?`;
                unreadCountElement.textContent = `New: ?`;
                localStorage.setItem("backstop",new Date(0))
                backstop = new Date(0)        
                dfreq = {"df_arr":{},"n_docs":0}    
                let upTFIDF = {};
                let downTFIDF = {};
                articles = [];
                localStorage.setItem("articles", JSON.stringify(articles));
                let lastLoad = 0;
                localStorage.setItem("lastLoad", 0);
                modal_win.hide();
                updateFeedList();
                //get_quote();
            }
        });

        feedListModalElement.querySelector(".modal-body").addEventListener("click", function(event) {
            if (event.target.classList.contains("remove-feed")) {
                const feedIndex = event.target.getAttribute("data-feed-index");
                rssFeeds.splice(feedIndex, 1);
                localStorage.setItem("feeds",rssFeeds)
                updateFeedList();
                feedListModalElement.querySelector("table").innerHTML = rssFeeds.map((feed, index) => `
                    <tr><td width="1%">
                    <button class="btn btn-danger remove-feed" data-feed-index="${index}">Remove</button>
                    </td><td width="100%"><textarea style="width:100%;word-wrap:break-word;resize: none;" readonly>${feed}</textarea></td></tr>
                `).join("");
            }
        });

        modal_win = new bootstrap.Modal(feedListModalElement)
        modal_win.show();
    });

    function replace_broken(){
        const images = document.querySelectorAll(".favicon");
        images.forEach((img) => {
          img.addEventListener("error", function (event) {
            event.target.src = "images/favicon.ico";
            event.target.onerror = null;
          });
        });    
    }

});


function start_spinner(target_id,tickcolor='#000') {
    var opts = {
      lines: 10, // The number of lines to draw
      length: 15, // The length of each line
      width: 5, // The line thickness
      radius: 12, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      color: tickcolor, // #rgb or #rrggbb
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: '10', // Top position relative to parent in px
      left: '0' // Left position relative to parent in px
    };
    var target = document.getElementById(target_id);
    var spinner = new Spinner(opts).spin(target);
}
