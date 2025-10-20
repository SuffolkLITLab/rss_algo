var version = "v1.24.1";

//history.replaceState('', document.title, window.location.pathname);
//window.scrollTo(0, 0);

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


function show_timeline() {
    document.getElementById('spin_container').style.display = "block";
    document.getElementById('news-feed').style.display = "flex";
    document.getElementById('my_settings').style.display = "none";
    document.getElementById('a_settings').innerHTML = "Settings";

    unreadcount = countUnreadArticles() - document.querySelectorAll(".article-container[data-article-index='sponsor']").length
    if (unreadcount>0) {
        document.getElementById('mark-all').style.display = "block"    
    } else {
        document.getElementById('mark-all').style.display = "none"    
    }

}

var searching = false
var summarizing = false

var feed_names = JSON.parse(localStorage.getItem("feed_names")) || {}

function hide_timeline(){
    document.getElementById('spin_container').style.display = "none";
    document.getElementById('news-feed').style.display = "none";
    document.getElementById('mark-all').style.display = "none";
    document.getElementById('my_settings').style.display = "block";
    document.getElementById('a_settings').innerHTML = "Timeline";
    document.getElementById('search_msg').style.display = "none";
    document.getElementById('sum_msg').style.display = "none";
    sum_msg
}

function toggle_settings(clear=false) {
    if ((clear == false) && document.getElementById('my_settings').style.display=="none") {
         hide_timeline();
    } else {
        show_timeline();
        if (searching){
            document.getElementById('search_msg').style.display = "block";
        }
        if (summarizing){
            document.getElementById('sum_msg').style.display = "block";
        }
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

async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options;
    
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
  
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    });
    clearTimeout(id);
  
    return response;
  }

const regex_always =  localStorage.getItem("regex_always") || "";
document.getElementById("regex_always").value = regex_always;

const regex_always_op =  localStorage.getItem("regex_always_op") || "";
document.getElementById("regex_always_op").value = regex_always_op;

const regex_never =  localStorage.getItem("regex_never") || "";
document.getElementById("regex_never").value = regex_never;

const regex_never_op =  localStorage.getItem("regex_never_op") || "";
document.getElementById("regex_never_op").value = regex_never_op;

const instance =  localStorage.getItem("instance") || "";
document.getElementById("masto_instance").value = instance;

const passto_url =  localStorage.getItem("passto_url") || "";
document.getElementById("passto_url").value = passto_url;

const api_base =  localStorage.getItem("api_base") || "https://api.openai.com/v1/chat/completions";
document.getElementById("api_base").value = api_base;

const api_key =  localStorage.getItem("api_key") || "";
document.getElementById("api_key").value = api_key;

const prompt_pref =  localStorage.getItem("prompt_pref") || `Read the following collection of headlines and introductory sentences for a set of news posts. Then provide a short summary/briefing based on their content and only their content.\n-----\n{{news-feed}}\n-----\nNow provide your briefing. Keep it short, no more than 100 words!`;
document.getElementById("prompt_pref").value = prompt_pref;

if (api_base.length>0 && api_key.length>0 && prompt_pref.length>0) {
    document.getElementById('summarize-news').style.display = "block";
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

function getTodayString(){
    const d=new Date();
    const mm=String(d.getMonth()+1).padStart(2,'0');
    const dd=String(d.getDate()).padStart(2,'0');
    const yyyy=d.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
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

var consolidated_from = 0

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
                    var data_dump = {}
                    try {
                        // Code that might throw an error
                        data_dump = JSON.parse(your_data)
                    } catch (error) {
                        // Code to execute if an error occurs in the try block
                        // The 'error' variable contains information about the error
                        data_dump = RssOpmlIO.opmlToJson(your_data)
                    }               
                    if (data_dump["feeds"]!="[]"){
                        localStorage.clear();
                        for (const [key, value] of Object.entries(data_dump)) {
                            //console.log(key,JSON.stringify(value))
                            //localStorage.clear();
                            localStorage.setItem(key,value);
                            localStorage.setItem("lastLoad",0);
                            window.location.reload(true);
                        }
                    } else {
                        alert("Error Parsing File: No feeds found. Check file format.")
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
var dfreq_last;


document.addEventListener("DOMContentLoaded", function() {

    const body = document.body;

    const toggleModeButton = document.getElementById("toggle-mode");

    let metaThemeColor = document.querySelector('meta[name="theme-color"]');

    // Retrieve dark mode state from localStorage (if available)
    const darkModeState = localStorage.getItem("darkMode");
    if (darkModeState === "enabled") {
        body.classList.add("dark-mode");
        toggleModeButton.innerHTML = "💡"; // Light bulb emoji
        metaThemeColor.setAttribute('content', '#333');
    }

    // Toggle between light and dark mode
    toggleModeButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleModeButton.innerHTML = "💡"; // Light bulb emoji
            metaThemeColor.setAttribute('content', '#333');
        } else {
            localStorage.removeItem("darkMode");
            toggleModeButton.innerHTML = "🌗"; // Moon emoji
            metaThemeColor.setAttribute('content', '#fff');
        }
    });

   const donateButton = document.getElementById("donate");
    // Toggle between light and dark mode
    donateButton.addEventListener("click", function () {
        window.open( "https://www.givecampus.com/campaigns/70271/donations/new", "_donate" );
    });

     const hiddenCardsCheckbox = document.getElementById("hiddenMode");

    // Retrieve ignore images value from localStorage (if available)
    var HiddenModeState = localStorage.getItem("hiddenMode") === "true";
    hiddenCardsCheckbox.checked = HiddenModeState;

    // Update ignore images value and save to localStorage when checkbox value changes
    hiddenCardsCheckbox.addEventListener("change", function () {
        const newHiddenImages = hiddenCardsCheckbox.checked;
        localStorage.setItem("hiddenMode", newHiddenImages);
    });

    if (!HiddenModeState) {
        body.classList.add("hidden-mode");
    }

    // load feed
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.get('feeds'))
    if (searchParams.has('feeds')){
        if (feed_lib[searchParams.get('feeds').trim()]) {
            if (!localStorage.getItem("backstop")) {
                feed_name = searchParams.get('feeds').trim(); // "feeds_us_fire_hose_legal_tech"
                localStorage.setItem("votelib",feed_name);
                rssFeeds = feed_lib[feed_name];
                localStorage.setItem("feeds",rssFeeds);
                localStorage.removeItem("upvotes");
                localStorage.removeItem("downvotes");
                localStorage.removeItem("read");
                localStorage.setItem("backstop",new Date(0));
                localStorage.setItem("articles", JSON.stringify([]));
                localStorage.setItem("lastLoad", 0);
                load_default_feed = 0;
            } else {
                if (confirm(`By clicking "OK" you will overwrite your list of feeds and replace it with "`+searchParams.get('feeds').trim()+`." It will also rest all of your votes and clear your history of read articles. Regex boosts and mutes will remain in place, as will other settings. Choose "Cancel" to stop without loading this new list or making any changes.`) == true) {
                    feed_name = searchParams.get('feeds').trim(); // "feeds_us_fire_hose_legal_tech"
                    localStorage.setItem("votelib",feed_name);
                    rssFeeds = feed_lib[feed_name];
                    localStorage.setItem("feeds",rssFeeds);
                    localStorage.removeItem("upvotes");
                    localStorage.removeItem("downvotes");
                    localStorage.removeItem("read");
                    localStorage.setItem("backstop",new Date(0));
                    localStorage.setItem("articles", JSON.stringify([]));
                    localStorage.setItem("lastLoad", 0);
                    load_default_feed = 0;
                } else {
                    load_default_feed = 1;
                }    
            }
        } else {
            alert("Error reading feed list. Loading default.")
            load_default_feed = 1;
        }
        //var url= document.location.href;
        //window.history.pushState({}, "", url.split("?")[0]);
    } else {
        load_default_feed = 1;
    }

    if (load_default_feed==1){
        var feed_name = "default_feeds"
        rssFeeds = JSON.parse(localStorage.getItem("feeds")) || feed_lib[feed_name];
    }
    

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
    upTFIDF =  JSON.parse(localStorage.getItem("upTFIDF")) || {};
    const downTFIDF =  JSON.parse(localStorage.getItem("downTFIDF")) || {};
    const readArticles = filterOldEntries(JSON.parse(localStorage.getItem("read")) || {});    
    localStorage.setItem("read", JSON.stringify(readArticles));

    //var suffolk = 0

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
    var dfreq_all = {}
    var crunch_numbers = false
    var decluter_cards = true

    var ratings_mean = 0;
    var ratings_std = 0;

    function removeDuplicates(inputList) {
        // Create a new Set to store unique elements
        const uniqueSet = new Set();
      
        // Iterate through the input list and add elements to the Set
        for (let item of inputList) {
          uniqueSet.add(item);
        }
      
        // Convert the Set back to an array to get the unique elements
        const uniqueList = Array.from(uniqueSet);
      
        return uniqueList;
    }  
    
    function updateFeedList(loadFeeds = false, singlefeed="") {
        rssFeeds = removeDuplicates(rssFeeds);
        localStorage.setItem("feeds", JSON.stringify(rssFeeds));
        upTFIDF =  JSON.parse(localStorage.getItem("upTFIDF")) || {};
        let downTFIDF =  JSON.parse(localStorage.getItem("downTFIDF")) || {};
        loadNews(loadFeeds,singlefeed);        
    }

    var n_feeds = 0;
    async function fetchFeed(feedUrl) {
        document.getElementById('loading').style.display = "block";

        // https://github.com/distribuyed/proxies?tab=readme-ov-file
        var proxy_00 = "https://workers-playground-dawn-hill-de20.dcolarusso.workers.dev/?url=";
        var proxy_01 = "https://corsproxy.io/?";
        //var proxy_01 = "https://api.allorigins.win/raw?url=";
        //var proxy_01 = "https://tools.suffolklitlab.org/rss_proxy/?url=";
        var proxy_02 = "https://api.cors.lol/?url=";
        var feedUrl_prox = proxy_00 + encodeURIComponent(feedUrl);

        async function fetchRSS(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) {  // Check for HTTP errors.
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response;  // Return the successful response object.
            } catch (error) {
                console.log("Error fetching "+feedUrl+": " + error.message);
                return null;  // Return null or appropriate error handling.
            }
        }

        async function tryFetchWithProxies() {
            let response = await fetchRSS(feedUrl_prox);
            if (!response) {
                console.log("Trying first proxy for " + feedUrl);
                feedUrl_prox = proxy_01 + encodeURIComponent(feedUrl);
                response2 = await fetchRSS(feedUrl_prox);
                //if (!response2) {
                //    console.log("Trying second proxy for " + feedUrl);
                //    feedUrl_prox = proxy_02 + feedUrl; //no encoding for this service
                //    response3 = await fetchRSS(feedUrl_prox);
                //    if (!response3) {
                //        console.log("Error fetching with both proxies.");
                //    } else {
                //        response = response3
                //    }
                //} else {
                    response = response2
                //}
            }
            return response;
        }

        //tryFetchWithProxies().then(response => {
        //    if (response) {
        //        console.log("Fetched successfully:", response);
        //    }
        //});

        var response = await tryFetchWithProxies(feedUrl_prox);   
        const data = await response.text();

        n_feeds += 1;
        if (n_feeds>=rssFeeds.length) {
            document.getElementById('loading').style.display = "none";
            document.getElementById('loading').innerHTML = "<i>&nbsp;Loading . . .&nbsp;</i>";
        } else {
            document.getElementById('loading').innerHTML = "<i>&nbsp;Loading feed "+(1+n_feeds)+" of "+rssFeeds.length+" . . .&nbsp;</i>" 
        }

        if (n_feeds>=(rssFeeds.length)) {
            crunch_numbers = true;
        }

        //console.log("Fetching "+feedUrl+" ("+n_feeds+" of "+rssFeeds.length+")")
        
        return data;
    }

function declutter(title_source,id_source,tf_source,n=0){

        //document.getElementById('loading').style.display = "block";
        //console.log("starts",document.getElementById('loading').style.display )

        var similar_arts = []

        const articleContainers = newsFeedContainer.querySelectorAll(".article-container");

        k=0;
        articleContainers.forEach(articleContainer => {

            if(k>n) {
                const itemId = articleContainer.getAttribute("data-item-id");
                if (id_source!=itemId) {
                    
                    if (articleContainer.querySelector(".card-text")) {
                        art_text = articleContainer.querySelector(".card-text").innerHTML
                    } else {
                        art_text = ""
                    }
                    text = articleContainer.querySelector(".card-title").innerHTML + " " + art_text

                    tf = countWords(text)

                    if (Object.keys(tf_source).length>Object.keys(tf).length){
                        tf_source_tmp = JSON.parse(JSON.stringify(tf_source));
                        tf_tmp = JSON.parse(JSON.stringify(tf)); 
                        flipped = 0
                    } else {
                        tf_source_tmp = JSON.parse(JSON.stringify(tf)); 
                        tf_tmp = JSON.parse(JSON.stringify(tf_source));
                        flipped = 1
                    }

                    var array1 = [];
                    var array2 = [];
                    for (word in tf_source_tmp) {
                        try {
                            idf = Math.log(1+dfreq_all["n_docs"]/dfreq_all["df_arr"][word]);                            
                        } catch (error) {
                            this_here = 1
                            if (tf_tmp[word]) {
                                 this_here+=1;
                            }
                            idf = Math.log(1+dfreq_all["n_docs"]/this_here);                             
                        }

                        if (tf_source_tmp[word] && idf) {
                            array1.push((tf_source_tmp[word])*idf)
                        } else {
                            array1.push(0)
                        }
                        if (tf_tmp[word]) {
                            array2.push(tf_tmp[word]*idf)
                        } else {
                            array2.push(0)
                        }
                    }
                    score = cosinesim(array1, array2);

                    //console.log(n,score,decluter_cut,tf_source,tf,array1, array2)
                    //delete array1, array2, tf_source_tmp, tf_tmp
                    
                    //if ((score>=0.5) || (itemId=="https://www.npr.org/2023/09/13/1199168440/how-strong-is-republicans-impeachment-inquiry-into-president-biden")) {
                    if (score>=decluter_cut) {
                        //console.log(Object.keys(tf_source_tmp).length,Object.keys(tf_tmp).length)
                        //console.log(score)//,flipped,itemId,tf_source_tmp,tf_tmp,array1, array2)
                        //console.log(tf_source,tf)
                        //console.log("-",title_source,"\n-",articleContainer.querySelector(".card-title").innerHTML )
                        
                        //var el = articleContainer.querySelector(".similar");
                        //console.log(el)
                        //el.innerHTML += `<li>`+title_source+`</li>`
                        
                        similar_arts.push([articleContainer.querySelector(".card-title").innerHTML,itemId])

                        readArticles[itemId] = new Date().toISOString();
                        localStorage.setItem("read", JSON.stringify(readArticles));

                        articleContainer.remove()
                    }
                }
            }
            k+=1;
            //document.getElementById('loading').style.display = "none";

        });

        return similar_arts

    }

    function updateArticleStyles() {
        const articleContainers = newsFeedContainer.querySelectorAll(".article-container");

        if (searching) {
            HiddenModeState = true;
        } else {
            HiddenModeState = localStorage.getItem("hiddenMode") === "true";
        }
        consolidated_from = articleContainers.length

        j = 0;
        articleContainers.forEach(articleContainer => {
            const itemId = articleContainer.getAttribute("data-item-id");

            var similar_arts = []
            if (decluter_cut<1 && crunch_numbers && decluter_cards) {
                console.log("decluttering")
                if (articleContainer.querySelector(".card-text")) {
                    art_text = articleContainer.querySelector(".card-text").innerHTML
                } else {
                    art_text = ""
                }
                source = articleContainer.querySelector(".card-title").innerHTML + " " + art_text
                title_source = articleContainer.querySelector(".card-title").innerHTML
                tf_source = countWords(source)
                similar_arts = declutter(title_source,itemId,tf_source,j)
            }

            const upvoteButton = articleContainer.querySelector(".upvote");
            const downvoteButton = articleContainer.querySelector(".downvote");
            //const skipButton = articleContainer.querySelector(".skip");

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
            
            if (readArticles[itemId]) {
                if (HiddenModeState) {
                    articleContainer.classList.add("read-article");
                } else {
                    consolidated_from -= 1
                    articleContainer.remove()
                }
            } 
                            
            if ((!HiddenModeState) && (articleContainer.classList.contains("read-article"))) {
                consolidated_from -= 1
                articleContainer.remove()
            } else {
                try {
                    var el = articleContainer.querySelector(".similar");
                    html = ""
                    if (similar_arts.length>0){
                        html += `Similar Articles: <ul>`
                    }
                    for (art in similar_arts){
                        html += `<li><a href="`+similar_arts[art][1]+`" target="_blank">`+similar_arts[art][0]+`</a></li>`
                    }
                    if (similar_arts.length>0){
                        html += `</ul>`
                    }
                    el.innerHTML += html                        
                } catch (error) {}
            }

            j+=1;

        });

    }


    const cooldownSlider = document.getElementById("cooldown-slider");
    const cooldownValueElement = document.getElementById("cooldown-value");
    
    // Retrieve cooldown value from localStorage (if available)
    const savedcooldown = localStorage.getItem("cooldown");
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
    const savedLookback = localStorage.getItem("lookback");
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




    const simcutSlider = document.getElementById("sim-cutoff");
    const simcutValueElement = document.getElementById("sim-cutoff-value");
    
    // Retrieve lookback value from localStorage (if available)
    const decluter_cut = localStorage.getItem("decluter_cut") || 1;
    if (decluter_cut) {
        simcutSlider.value = decluter_cut;
        simcutValueElement.textContent = decluter_cut;
    }

    // Update lookback value and save to localStorage when slider value changes
    simcutSlider.addEventListener("input", function () {
        const newsimcut= simcutSlider.value;
        simcutValueElement.textContent = newsimcut;
        localStorage.setItem("decluter_cut", newsimcut);
    });


    const maxonpageSlider = document.getElementById("max-cards-slider");  
    const maxonpageValueElement = document.getElementById("max-cards-value");
    
    // Retrieve cardcutoff value from localStorage (if available)
    const max_on_page = localStorage.getItem("cardcutoff");
    if (max_on_page) {
        maxonpageSlider.value = max_on_page;
        maxonpageValueElement.textContent = max_on_page;
    }

    // Update cardcutoff value and save to localStorage when slider value changes
    maxonpageSlider.addEventListener("input", function () {
        const max_on_page = maxonpageSlider.value;
        maxonpageValueElement.textContent = max_on_page;
        localStorage.setItem("cardcutoff", max_on_page);
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


    const passtoPopCheckbox = document.getElementById("passto-pop");
    // Retrieve ignore images value from localStorage (if available)
    const passtoPopModeState = localStorage.getItem("passtoPopMode") === "true";
    passtoPopCheckbox.checked = passtoPopModeState;
    // Update ignore images value and save to localStorage when checkbox value changes
    passtoPopCheckbox.addEventListener("change", function () {
        const newpasstoPopImages = passtoPopCheckbox.checked;
        localStorage.setItem("passtoPopMode", newpasstoPopImages);
    });

    const voteViewCheckbox = document.getElementById("vote-view");
    // Retrieve ignore images value from localStorage (if available)
    if (localStorage.getItem("voteViewMode")) {
        voteViewModeState = localStorage.getItem("voteViewMode") === "true";
    } else {
        voteViewModeState = true;
        localStorage.setItem("voteViewMode", voteViewModeState);
    }
    voteViewCheckbox.checked = voteViewModeState;
    // Update ignore images value and save to localStorage when checkbox value changes
    voteViewCheckbox.addEventListener("change", function () {
        const newvoteViewImages = voteViewCheckbox.checked;
        localStorage.setItem("voteViewMode", newvoteViewImages);
    });

    
    //const afterOpenCheckbox = document.getElementById("after-open");
    //// Retrieve ignore images value from localStorage (if available)
    //if (localStorage.getItem("afterOpenMode")) {
    //    afterOpenModeState = localStorage.getItem("afterOpenMode") === "true";
    //} else {
    //    afterOpenModeState = true;
    //    localStorage.setItem("afterOpenMode", afterOpenModeState);
    //}
    //afterOpenCheckbox.checked = afterOpenModeState;
    //// Update ignore images value and save to localStorage when checkbox value changes
    //afterOpenCheckbox.addEventListener("change", function () {
    //    const newafterOpenImages = afterOpenCheckbox.checked;
    //    localStorage.setItem("afterOpenMode", newafterOpenImages);
    //});    



    const autoVoteCheckbox = document.getElementById("auto-vote");
    // Retrieve ignore images value from localStorage (if available)
    if (localStorage.getItem("autoVote")) {
        savedautoVote = localStorage.getItem("autoVote") === "true";
    } else {
        savedautoVote = true;
        localStorage.setItem("autoVote", savedautoVote);
    }
    autoVoteCheckbox.checked = savedautoVote;
    // Update ignore images value and save to localStorage when checkbox value changes
    autoVoteCheckbox.addEventListener("change", function () {
        const newautoVote = autoVoteCheckbox.checked;
        localStorage.setItem("autoVote", newautoVote);
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

    const weatherCheckbox = document.getElementById("weather-report");
    // Retrieve ignore images value from localStorage (if available)
    const savedWeather = localStorage.getItem("weather") === "true";
    weatherCheckbox.checked = savedWeather;
    // Update ignore images value and save to localStorage when checkbox value changes
    weatherCheckbox.addEventListener("change", function () {
        const newWeather = weatherCheckbox.checked;
        localStorage.setItem("weather", newWeather);
    });  

    if (savedWeather){
        getUserWeather();
    }

    const savedtemp = localStorage.getItem("temp") || "fahrenheit"
    document.getElementById("temp").value = savedtemp
    localStorage.setItem("temp", document.getElementById("temp").value);
    

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

        votelib = localStorage.getItem("votelib")
        if ( Object.keys(defaultTFIDF).includes(votelib) ) {
            vote_discount = default_dfreq[votelib]["n_docs"]/(default_dfreq[votelib]["n_docs"]+2*dfreq["n_docs"]);
            upTFIDF_tmp = combineWordCounts(defaultTFIDF[votelib], upTFIDF, vote_discount);
            dfreq_tmp["n_docs"] = default_dfreq[votelib]["n_docs"]*vote_discount+dfreq["n_docs"]*1;
            dfreq_tmp["df_arr"] = combineWordCounts(default_dfreq[votelib]["df_arr"], dfreq["df_arr"], vote_discount);
            //console.log(upTFIDF_tmp,dfreq_tmp)
        } else {
            upTFIDF_tmp = upTFIDF;
            dfreq_tmp["n_docs"] = dfreq["n_docs"];
            dfreq_tmp["df_arr"] = dfreq["df_arr"];
        }
        dfreq_last = dfreq; 

        //console.log("new cooldown",savedcooldown,"old cooldown",lastcooldown)
        
        if (savedcooldown>=lastcooldown) {
            var time_padding = Date.parse(new Date())-savedcooldown*60*60*1000 //750000
            localStorage.setItem("lastcooldown", savedcooldown);
        } else {
            var time_padding = Date.parse(new Date())-lastcooldown*60*60*1000 //750000
        }

        decluter_cards = true
        if ((lastLoad>time_padding) || (rssFeeds.length==0)) {
            loadFeeds = false;
            decluter_cards = false;
        }
        
        document.getElementById('spin_container').innerHTML = `<div style="float:left;width:100%;height:115px;"><div id="spinner_here" style="margin:0 auto;width:65px;">&nbsp;</div></div>`;
        if (localStorage.getItem("darkMode")=="enabled") {
            tickcolor = '#909090' //'#ddd';		
        } else {
            tickcolor = '#909090' //'#000';		
        }
        start_spinner('spinner_here',tickcolor);

        if (loadFeeds) {

            localStorage.setItem("lastLoad", Date.parse(new Date()));
            localStorage.setItem("lastcooldown", savedcooldown);

            localStorage.setItem("feeds", JSON.stringify(rssFeeds));

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

                        //console.log(feedUrl,data)

                        const parser = new DOMParser();
                        const xml = parser.parseFromString(data, "application/xml");    

                        //console.log(feedUrl,xml)

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

                        feed_names[feedUrl] = feedTitle;
                        localStorage.setItem("feed_names",JSON.stringify(feed_names));  

                        j=0;
                        //infeed_count = 0;

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
                                    tmp_date.setHours(tmp_date.getHours() - (Math.random() * (24*savedLookback - 6) + 6));
                                    pubDate = tmp_date
                                    unknown_pubDate = true
                                }
                            }

                            if (unknown_pubDate) {
                                try {
                                    adate = item.querySelector("description").textContent.match(/arXiv:\d+\.\d+/);
                                } finally {
                                    if (adate.length>0) {
                                        const tmp_date = new Date(adate[0].slice(8,10)+"-"+adate[0].slice(11,13)+"-"+adate[0].slice(6,8)); 
                                        pubDate = tmp_date;
                                        unknown_pubDate = false;    
                                    }
                                }
                            }

                            //console.log(new Date(pubDate).toLocaleString())
                            
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
                                    author = item.querySelector("author").textContent;
                                    //console.log("Author",author)
                                } catch (error) {
                                    author = ""
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

                                //console.log(author)
                                if (author!="") {
                                    author = author.replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g,"").trim();
                                    if (author!="") {
                                        description = "By " + author +". "+ description;
                                    }
                                }

                                if (description!="" && link){
        
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
                                            description = description.slice(0,350)+" [...]";
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
                                    
                                    if (Object.is(mediaThumbnail, null) || mediaThumbnail.includes("favicon")) {
                                        if(link.includes("washingtonpost.com")){
                                            mediaThumbnail =  "images/cached_logos/wapo.webp";
                                        } else if (link.includes("economist.com")) {
                                            mediaThumbnail =  "images/cached_logos/economist.png";
                                        } else if (link.includes("nytimes.com")) {
                                            mediaThumbnail =  "images/cached_logos/nyt.jpg";
                                        } else if (link.includes("wsj.com")) {
                                            mediaThumbnail =  "images/cached_logos/wsj.png";
                                        } else if (link.includes("npr.org")) {
                                            mediaThumbnail =  "images/cached_logos/npr.png";
                                        } else if (link.includes("techdirt.com")) {
                                            mediaThumbnail =  "images/cached_logos/techdirt.jpg";
                                        } else if (link.includes("screenrant.com")) {
                                            mediaThumbnail =  "images/cached_logos/screenrant.png";
                                        } else if (link.includes("mcsweeneys.net")) {
                                            mediaThumbnail =  "images/cached_logos/mcsweenys.jpg";
                                        } else if (link.includes("techcrunch.com")) {
                                            mediaThumbnail =  "images/cached_logos/techcrunch.jpg";
                                        } else if (link.includes("wgbh.org")) {
                                            mediaThumbnail =  "images/cached_logos/gbh.png";
                                        } else if (link.includes("masslawyersweekly.com")) {
                                            mediaThumbnail =  "images/cached_logos/malawyersweekly.png";
                                        } else if (link.includes("abovethelaw.com")) {
                                            mediaThumbnail =  "images/cached_logos/atl.png";
                                        } else if (link.includes("latimes.com")) {
                                            mediaThumbnail =  "images/cached_logos/latimes.png";
                                        } else if (link.includes("theatlantic.com")) {
                                            mediaThumbnail =  "images/cached_logos/atlantic.png";
                                        } else if (link.includes("bbc.co")) {
                                            mediaThumbnail =  "images/cached_logos/bbc.jpg";
                                        } else if (link.includes("lightspeedmagazine.com")) {
                                            mediaThumbnail =  "images/cached_logos/lightspeed.png";
                                        } else if (link.includes("clarkesworldmagazine.com")) {
                                            mediaThumbnail =  "images/cached_logos/clarkesworld.jpg";
                                        } else if (link.includes("escapepod.org")) {
                                            mediaThumbnail =  "images/cached_logos/escapepod.jpg";
                                        } else if (link.includes("rollingstone.com")) {
                                            mediaThumbnail =  "images/cached_logos/rollingstone.png";
                                        } else if (feedTitle.trim().startsWith("Hacker News")) {
                                                mediaThumbnail =  "images/cached_logos/hackernews.jpeg";
                                        } else if (link.includes("ssrn.com")) {
                                            mediaThumbnail = "images/cached_logos/ssrn.png"
                                        } else if (link.includes("arstechnica.com")) {
                                            mediaThumbnail = "images/cached_logos/arstechnica.png"
                                        } else if (link.includes("technologyreview.com")) {
                                            mediaThumbnail = "images/cached_logos/mittechreview.png"
                                        } else if (link.includes("nautil.us")) {
                                            mediaThumbnail = "images/cached_logos/nautilus.png"
                                        } else if (link.includes("smithsonianmag.com")) {
                                            mediaThumbnail = "images/cached_logos/smithsonianmag.png"
                                        } else if (link.includes("propublica.org")) {
                                            mediaThumbnail = "images/cached_logos/propublica.png"
                                        } else if (link.includes("schneier.com")) {
                                            mediaThumbnail = "images/cached_logos/schneier.jpg"
                                        } else if (link.includes("scientificamerican.com")) {
                                            mediaThumbnail = "images/cached_logos/sciam.png"
                                        } else if (link.includes("lexblog.com")) {
                                            mediaThumbnail = "images/cached_logos/lexblog.png"
                                        } else if (link.includes("artificiallawyer.com")) {
                                            mediaThumbnail = "images/cached_logos/al.png"
                                        } else if (link.includes("suffolklitlab.org")) {
                                            mediaThumbnail = "images/cached_logos/lit.png"
                                        } else if (link.includes("eff.org")) {
                                            mediaThumbnail = "images/cached_logos/eff.png"
                                        } else if (link.includes("arxiv.org")) {
                                            mediaThumbnail = "images/cached_logos/arxiv.png"
                                        } else if (link.includes("lawfaremedia.org")) {
                                            mediaThumbnail = "images/cached_logos/lawfare.png"
                                        }                                          
                                        
                                        //} else if (link.includes("")) {
                                        //    mediaThumbnail = "images/cached_logos/"
                                        //}
                                    }
                                
                                    const itemId = link; // Using link as a unique identifier for items
                                    const isRead = readArticles[itemId] || false;

                                    const priorityRating = getRating(feedTitle.replace(/[^a-zA-Z]+/g,"-")+": "+domain_from_url(link).replace(/[^a-zA-Z]+/g,"-")+" "+title+" "+description,link,feedTitle,feedUrl); 

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

                                    //infeed_count += 1;
                                    j+=1;
                                }
                            }
                            //j+=1
                        });

                        //if (infeed_count<=0) {
                        //    console.log("NO ITEMS FOUND: \n"+feedUrl,infeed_count);
                        //} else {
                        //    console.log("ITEMS FOUND: \n"+feedUrl,infeed_count);
                        //}

                        if (j==0){
                            console.log("** No relevant items found in "+feedUrl);
                        }// else {
                        //    console.log("** "+feedUrl+" | Sample: "+articles[articles.length-1]["link"]);
                        //}

                        dedup_articles();
                        if (crunch_numbers) {
                            reorderArticles();
                            displayArticles();
                            updateItemCount();
                            displayed_cards = newsFeedContainer.childNodes.length
                            //console.log(consolidated_from + " cards were consolidated to " + displayed_cards)
                            console.log("Displayed Cards: " +displayed_cards+" ("+Math.round(100*displayed_cards/stored_art)+"%)");
                            lazyload();
                            replace_broken();
                            get_quote();
                            decluter_cards = false;
                        }
                    })
                    .catch(error => {
                        // Display a warning popup for error cases
                        const feedTitle = "Unknown Feed";
                        const errorMessage = `Error fetching RSS feed: ${error.message}`;
                        if (errors==0) {
                            
                            console.log("THERE WAS AN ERROR")
                            //displayErrorPopup(feedTitle, feedUrl, errorMessage);
                            
                            setTimeout(function(){
                                crunch_numbers = true;
                                dedup_articles();
                                reorderArticles();
                                displayArticles();
                                updateItemCount();
                                displayed_cards = newsFeedContainer.childNodes.length
                                //console.log(consolidated_from + " cards were consolidated to " + displayed_cards)
                                console.log("Displayed Cards: " +displayed_cards+" ("+Math.round(100*displayed_cards/stored_art)+"%)");
                                lazyload();
                                replace_broken();
                                get_quote();
                                decluter_cards = false;
                                document.getElementById('loading').style.display = "none";
                                crunch_numbers = false;
                            }, 1);
                        }
                        errors+=1
                        n_feeds+=1
                    });
            });


        } else {

            setTimeout(function(){
                crunch_numbers = true;
                dedup_articles();
                reorderArticles();
                displayArticles();
                updateItemCount();
                displayed_cards = newsFeedContainer.childNodes.length
                //console.log(consolidated_from + " cards were consolidated to " + displayed_cards)
                console.log("Displayed Cards: " +displayed_cards+" ("+Math.round(100*displayed_cards/stored_art)+"%)");
                lazyload();
                replace_broken();
                get_quote();
                decluter_cards = false;
                document.getElementById('loading').style.display = "none";
                crunch_numbers = false;
            }, 1);
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
                    rating = getRating(articles[article]['feedTitle'].replace(/[^a-zA-Z]+/g,"-")+": "+domain_from_url(articles[article]['link']).replace(/[^a-zA-Z]+/g,"-")+" "+articles[article]['title']+" "+articles[article]['description'],articles[article]['link'],articles[article]['feedTitle'],articles[article]['feedUrl'])
                    articles[article]["priorityRating"] = rating; 
                    tmp_ratings.push(rating)
                }
                stats = StandardDeviation(tmp_ratings)
                ratings_mean = stats[0];
                ratings_std = stats[1];
                console.log("Ratings: mean", ratings_mean,"std",ratings_std);                    
            }

            articles.sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));

            // trim for memory
            //console.log("before filter:",articles.length,"last",articles[0]["pubDate"])
            keep_last = Math.round(max_arts*1.5);
            articles = articles.slice(-keep_last)
            //console.log("after filter:",articles.length,"last",articles[0]["pubDate"])
           
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
        if (!searching) {
            // Move the card to the end of the list
            newsFeedContainer.appendChild(card);
        }
        // Update article styles after the move
        updateArticleStyles();
    }

    function domain_from_url(url) {
        var result
        var match
        try {
            //if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
            if (match = url.match(/^https?:\/\/([^\/]+)/)) {
                result = match[1]
                if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
                    result = match[1]
                }
            }            
        } catch (error) {
            result = ""
        }
        return result
    }


    function displayArticles(search=false) {  

        if (search) {
            local_list = searchResults;
            local_lookback = 365;
            local_cutoff = -10;
        } else {
            local_list = articles;
            local_lookback = savedLookback;
            local_cutoff = savedcutoff;
        }

        if (decluter_cut<1 && crunch_numbers) {
            dfreq_all = calculateDF(articles)
        }

        document.getElementById('spin_container').innerHTML = ``;
        newsFeedContainer.innerHTML = "";
        //suffolk = 0
        const twoWeeksAgo = new Date();
        twoWeeksAgo.setDate(twoWeeksAgo.getDate() - local_lookback);

        i=0
        local_list.forEach((articleData, index) => {

            const { title, link, description, pubDate, unknown_pubDate, image, mediaThumbnail, itemId, isRead, feedTitle, feedUrl, mastodon, masto_profile, hasUpvote, hasDownvote, priorityRating } = articleData;

            if (regex_never!="" && !search) {
                regex = new RegExp(regex_never, regex_never_op); 
                test_string = feedTitle.replace(/[^a-zA-Z]+/g,"-")+" "+title+" "+description+""+link
                if (test_string.match(regex)) {
                    //console.log("Muting match for /"+regex_never+"/"+regex_never_op)
                    match = 1
                } else {
                    match = 0
                }
            } else {
                match = 0
            }

            if (match==0) {

                
                if ((!searching) && (i==2 && !isRead) && (Math.random()<=0.15) && ((n_feeds>=rssFeeds.length) || (n_feeds==0))) {

                    
                    //suffolk = 1

                    if (savedIgnoreImages){
                        img_html = `
                            <div style="postion:relative;z-index:0;top:0;height:40px;background:#eee;"></div>`
                    } else {
                        img_html = `
                            <div style="postion:relative;z-index:0;top:0;min-height:33px;"><img src="images/sargent.jpg" class="lazyload card-img-top thumbnail-image" onError="this.onerror=null;this.src='images/placeholder.png';"></div>`
                    }

                    const sponsor = document.createElement("div");
                    sponsor.setAttribute("data-article-index", "sponsor"); 
                    sponsor.setAttribute("data-item-id", "sponsor");
                    sponsor.className = `col-xl-4 col-lg-5 col-md-6 col-sm-12 article-container`;
                    sponsor.innerHTML = `
                        <div class="card">
                            ${img_html}
                            <div class="card-body">
                                    <h5 class="card-title">Support the People Who Built <i>My RSS Algo</i>!</h5>
                                    <p class="card-text">
                                        Your support empowers students and staff at Suffolk's Legal Innovation &amp; Technology Lab (LIT Lab) to create cutting-edge legal tech solutions that make a real impact in communities, while giving students hands-on experience at one of the nation's top clinical programs. Your gift fuels innovation, access to justice, and the future of legal services.
                                    </p>
                                <div style="text-align:right;">
                                    <a href="https://www.givecampus.com/campaigns/70271/donations/new" class="btn btn-primary" target="_blank">Donate</a>
                                </div>
                            </div>
                            <div class="card-footer">
                                <small class="feed-tag">FROM THE MAKERS OF THIS SITE</small>
                            </div>
                        </div>
                    `;                        

                    readArticles["sponsor"] = false
                    newsFeedContainer.appendChild(sponsor);
                    i+=1;
                } 

                if (local_cutoff<=-3.5) {
                    practical_cutoff = -1*1000;
                } else {
                    practical_cutoff = local_cutoff;
                }

                if (!searching) {
                    HiddenModeState = localStorage.getItem("hiddenMode") === "true";
                } else {
                    HiddenModeState = true;
                }
                
                if ((!HiddenModeState && !isRead) || (HiddenModeState)) {

                    if ((Date.parse(pubDate) >= Date.parse(twoWeeksAgo)) && priorityRating >= ratings_mean+ratings_std*(practical_cutoff) && i<max_on_page) {

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
                            card_body_text = `<h5 class="card-title">A Post From <a href="https://joinmastodon.org/" target="_blank" class="masto_post">Mastodon</a></h5><div style="height:100%;overflow-y:auto;">${description}</div>`
                            //share_html = `<div class="masto_share"><a href="javascript:void('')" class="share_to_mastodon">Mastodon</a></div><div class="passto_share"><a href="javascript:void('')" class="save_to_passto"><div style="background: url('images/cached_logos/externallink.png');background-position: 0px -9px; width:35px;height:40px;"></div></a></div>`
                        } else {
                            favicon = "https://"+domain_from_link+"/favicon.ico"
                            card_body_text = `<h5 class="card-title">${title}</h5><p class="card-text">${description}</p>`
                            //share_html = `<div class="masto_share"><a href="javascript:void('')" class="share_to_mastodon">Mastodons</a></div>
                          //      <div class="passto_share"><a href="javascript:void('')" class="save_to_passto"><div style="background: url('images/cached_logos/externallink.png');background-position: 0px -9px; width:35px;height:40px;"></div></a></div>`
                        }
                        if (document.getElementById("masto_instance").value.trim()!=""){
                            if (document.getElementById("passto_url").value.trim()=="") {
                                share_html = `<div class="masto_share"><a href="javascript:void('')" class="share_to_mastodon">Mastodon</a></div>`
                            } else {
                                share_html = `<div class="masto_share" style="padding-right:25px;"><a href="javascript:void('')" class="share_to_mastodon">Mastodon</a></div>`

                            }
                        } else {
                            share_html = `<div class="masto_share" style="display:none"><a href="javascript:void('')" class="share_to_mastodon">Mastodon</a></div>`
                        }
                        if (document.getElementById("passto_url").value.trim()=="") {
                            passto_style = " style='display:none'";
                        } else {
                            passto_style = ""
                        }
                        share_html += `<div class="passto_share"`+passto_style+`><a href="javascript:void('')" class="save_to_passto"><div style="background: url('images/externallink.png');width:23px;height:23px;margin-top:2px;background-size: contain;opacity:0.7"></div></a></div>`

                        if (savedIgnoreImages){
                            img_html = `
                                <div style="postion:relative;z-index:0;top:0;height:40px;background:#eee;"></div>`
                            favicon = "images/favicon.ico"
                        } else {
                            if (mediaThumbnail) {
                                if (mediaThumbnail.match(/\.mp4$/i)) {
                                    img_html = `
                                    <div style="postion:relative;z-index:0;top:0"><video width="100%" controls>
                                    <source src="${mediaThumbnail}" type="video/mp4">
                                    Your browser does not support the video tag.
                                    </video> </div>`
                                } else {
                                    img_html = `
                                    <div style="postion:relative;z-index:0;top:0">${mediaThumbnail ? `<img data-src="${mediaThumbnail}" class="lazyload card-img-top thumbnail-image" onError="this.onerror=null;this.src='images/placeholder.png';">` : '<img data-src="images/placeholder.png" class="lazyload card-img-top thumbnail-image">'}</div>`
                                }
                            } else {
                                img_html = `
                                    <div style="postion:relative;z-index:0;top:0">${mediaThumbnail ? `<img data-src="${mediaThumbnail}" class="lazyload card-img-top thumbnail-image" onError="this.onerror=null;this.src='images/placeholder.png';">` : '<img data-src="images/placeholder.png" class="lazyload card-img-top thumbnail-image">'}</div>`
                            }
                        }

                        article.innerHTML = `
                            <div class="card">
                                ${share_html}
                                ${img_html}
                                
                                <div class="card-body">
                                        <!--<div class="priority-rating">${priorityRating}</div>-->
                                        ${card_body_text}
                                        <div class="similar"></div>
                                        <p class="d-flex"><small class="text-muted">${local_pubDate}</small></p>
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
                                    <button class="feed_search" data-item-id="${feedUrl}"><img class="favicon" src="${favicon}" height="18px"> <small class="feed-tag">&nbsp;&nbsp;${feedTitle}</small></button>  
                                    <span class="btn remove_feed" data-feed-index="${feedUrl}" data-feed-name="${feedTitle}">🚫</span>
                                </div>
                            </div>
                        `;

                        newsFeedContainer.appendChild(article);

                        const mastoButton = article.querySelector(".share_to_mastodon");
                        const passtoButton = article.querySelector(".save_to_passto");

                        const upvoteButton = article.querySelector(".upvote");
                        const downvoteButton = article.querySelector(".downvote");
                        const skipButton = article.querySelector(".skip");
                        const readButton = article.querySelector(".read-button");

                        const feedSearch = article.querySelector(".feed_search");

                        feedSearch.addEventListener("click", function() {
                            search_string = feedSearch.getAttribute("data-item-id")
                            search_string = search_string.replaceAll("?","\\?").replaceAll("+","\\+").replaceAll(".","\\.")
                            //console.log(search_string)
                            regex_search(search_string);
                            setTimeout( function() {window.scrollTo(0,0)}, 100);
                        });

                        mastoButton.addEventListener("click", function() {

                            MastodonShare(`${title};url=${link}`);

                            if (savedautoVote) {
                                upvotes[itemId] = true;
                                localStorage.setItem("upvotes", JSON.stringify(upvotes));
                                localStorage.setItem("upvotes", JSON.stringify(arr2obj(Object.entries(upvotes).slice(-max_arts*1.25))));
                                updateArticleStyles();
                            }

                            if (voteViewModeState){
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
                            }
                            
                        });

                        passtoButton.addEventListener("click", function() {

                            //save_to_passto(itemId)
                            save_to_passto(link,title)

                            if (savedautoVote) {
                                upvotes[itemId] = true;
                                localStorage.setItem("upvotes", JSON.stringify(upvotes));
                                localStorage.setItem("upvotes", JSON.stringify(arr2obj(Object.entries(upvotes).slice(-max_arts*1.25))));
                                updateArticleStyles();
                            }

                            if (voteViewModeState){
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
                                setTimeout( function() {}, 100);
                            }
                            
                        });

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
                            localStorage.setItem("upvotes", JSON.stringify(arr2obj(Object.entries(upvotes).slice(-max_arts*1.25))));

                            if (voteViewModeState){
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
                            } else {
                                updateArticleStyles();
                            }
                            
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
                            localStorage.setItem("downvotes", JSON.stringify(arr2obj(Object.entries(downvotes).slice(-max_arts*1.25))));
                            //updateArticleStyles();

                            if (voteViewModeState){
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
                            } else {
                                updateArticleStyles();
                            }
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
                            
                            if (savedautoVote) {
                                upvotes[itemId] = true;
                                localStorage.setItem("upvotes", JSON.stringify(upvotes));
                                localStorage.setItem("upvotes", JSON.stringify(arr2obj(Object.entries(upvotes).slice(-max_arts*1.25))));
                                updateArticleStyles();
                            }

                            if (savedautoVote && voteViewModeState) {
                            //afterOpenModeState = false
                            //if (!isRead && afterOpenModeState) {
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
                            }
                        });

                        const RemoveFeedButton = article.querySelector(".remove_feed");

                        RemoveFeedButton.addEventListener("click", function() {
                            if (feedUrl == "undefined" || typeof feedUrl == "undefined") {
                                // Can delete after Start of Dec 2024
                                alert("This card was saved with an old version of this site and we don't have the information needed to remove the feed. Use the Feeds button at the top of the page.")
                            } else if (rssFeeds.includes(feedUrl)) {
                                let text = "Choose OK to remove: "+feedTitle+"\n\n"+feedUrl+"\n\nChoose Cancel to keep things as they are. Note: If you remove this feed, old posts will remain visable in your timeline, but we will not fetch new ones.";
                                if (confirm(text) == true) {
                                    //console.log(rssFeeds)
                                    //console.log("Removing",feedUrl)
                                    const feedIndex = rssFeeds.indexOf(feedUrl);
                                    rssFeeds.splice(feedIndex, 1);
                                    localStorage.setItem("feeds", JSON.stringify(rssFeeds));
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
            } 
        });

        if (!searching){
            document.getElementById("mark-all").innerHTML = `<button id="mark-above-seen" class="btn btn-danger btn-block" style="margin: 15px 0 0;" onClick="document.getElementById('sum_msg').style.display = 'none';document.getElementById('news-feed').style.display = 'none';document.getElementById('spin_container').innerHTML = \`<div style='float:left;width:100%;height:115px;'><div id='spinner_here' style='margin:0 auto;width:65px;'>&nbsp;</div></div>\`;">Mark Above as Seen</button>`
            const markAboveSeen = document.getElementById("mark-above-seen");

            markAboveSeen.addEventListener("click", function() {

                document.getElementById("mark-all").innerHTML = "";
                if (localStorage.getItem("darkMode")=="enabled") {
                    tickcolor = '#ddd';		
                } else {
                    tickcolor = '#000';		
                }
                start_spinner('spinner_here',tickcolor);

                setTimeout( function() {
                    const articleContainers = newsFeedContainer.querySelectorAll(".article-container");
                    articleContainers.forEach(articleContainer => {
                        const itemId = articleContainer.getAttribute("data-item-id");
                        const articleIndex = parseInt(articleContainer.getAttribute("data-article-index"));
                        //console.log(articleIndex)
                        readArticles[itemId] = new Date().toISOString();                    
                        localStorage.setItem("read", JSON.stringify(readArticles));
    
                        if (!isNaN(articleIndex) && articles[articleIndex].isRead == false) {
                            // Mark the article as read in the articles array
                            articles[articleIndex].isRead = true;
        
                            // Update the Open button behavior
                            updateOpenButton(articleContainer);
        
                            // Move the article container to the end of the list
                            moveCardToEnd(articleContainer);
        
                            // Update the unread count
                            updateItemCount();
                            get_quote();
                        }
                    });
                }, 150); 

            });

        } else {
            document.getElementById("mark-all").innerHTML = ``
        }

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

    function combineWordCounts(obj1, obj2, vote_discount) {
        // Create a new object to store the combined results
        let combined = {};
    
        // Add counts from obj1
        for (let word in obj1) {
            combined[word] = obj1[word]*vote_discount;
        }
    
        // Add counts from obj2, summing where necessary
        for (let word in obj2) {
            if (combined[word]) {
                combined[word] += obj2[word]; // Sum the counts if the word is in both objects
            } else {
                combined[word] = obj2[word]; // Otherwise, just add the count from obj2
            }
        }
    
        return combined;
    }

    
    function getRating(inputString,link="",feed_title="",feedUrl="") {

        if (regex_always!="" && !searching) {
            full_input = inputString + " " + link + " " + feed_title + " " + feedUrl
            regex = new RegExp(regex_always, regex_always_op); 
            if (full_input.match(regex)) {
                //console.log("Bumping match for /"+regex_always+"/"+regex_always_op)
                match = 1
            } else {
                match = 0
            }
        } else {
            match = 0
        }
        
        tf = countWords(inputString)

        var array1 = [];
        var array2 = [];
        for (word in upTFIDF_tmp) {
            
            if (dfreq_tmp["df_arr"][word]) {
                idf = Math.log(1+dfreq_tmp["n_docs"]/dfreq_tmp["df_arr"][word]);
                //if (isNaN(idf)) {
                //    idf = 1;
                //}
            } else {
                idf = Math.log(1+dfreq_tmp["n_docs"]/1);
            }
                if (tf[word] && idf) {
                    array1.push((tf[word])*idf)
                } else {
                    array1.push(0)
                }
            if (upTFIDF_tmp[word]) {
                array2.push(upTFIDF_tmp[word]*idf)
            } else {
                array2.push(0)
            }
        }
        up_score = cosinesim(array1, array2);
        
        var array1 = [];
        var array2 = [];
        for (word in downTFIDF) {
            if (dfreq["df_arr"][word]) {
                idf = Math.log(1+dfreq["n_docs"]/dfreq["df_arr"][word]);
                //if (isNaN(idf)) {
                //    idf = 1;
                //}
            } else {
                idf = Math.log(1+dfreq["n_docs"]/1);
            }
                if (tf[word] && idf) {
                    array1.push((tf[word])*idf)
                } else {
                    array1.push(0)
                }
            if (downTFIDF[word]) {
                array2.push(downTFIDF[word]*idf)
            } else {
                array2.push(0)
            }
        }
        down_score = cosinesim(array1, array2);

        score = up_score - down_score*savednegativity;

        if (match==1) {
            score = score + 1;
        }

        //console.log(score)
        
        return score;
    }

    function get_words(inputString){
        //const all_words = inputString.toLowerCase().match(/\b\w+\b/g);
        const all_words = inputString.toLowerCase().match(/\b[a-zA-Z\-]+\b/g);
        
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
            domain_from_link = domain_from_url(link).replace(/[^a-zA-Z]+/g,"-")
            const extractedText =  extractContent(`${feedTitle.replace(/[^a-zA-Z]+/g,"-")}\n${domain_from_link}\n${title}\n${description}`);
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

        const documents = votedArticles.map(article => article.feedTitle.replace(/[^a-zA-Z]+/g,"-")+' '+domain_from_url(article.link).replace(/[^a-zA-Z]+/g,"-")+' '+article.title+' '+article.description);
        const doc = documents.join(' ').replace(/[^a-zA-Z]\d+[^a-zA-Z]/g,"");

        tf = countWords(doc)

        return tf;
    }

    function topWords(wordObj,exclude,n=115) {         

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

        //n = 115;
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
                            <p>Sometimes there are issues reaching a feed. If this error persists, you can remove this feed using the "Feeds" button.</p>
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
       
        var sortable = [];
        for (var x in entries) {
            sortable.push([x, entries[x]]);
        }
        sorted = sortable.sort(function(a, b) {
            return new Date(a[1]) - new Date(b[1]);
        });

        const filteredEntries = arr2obj(sorted.slice(-max_arts*2.5))

        //backstop = new Date(localStorage.backstop);
        //console.log(sorted.length, filteredEntries.length)

        //const filteredEntries = {};
        //for (const link in entries) {
        //    const entryDate = new Date(entries[link]);
        //    if (entryDate >= backstop) {
        //        filteredEntries[link] = entries[link];
        //    }
        //}

        return filteredEntries;
    }

    function updateItemCount() {

        var url= document.location.href;
        window.history.pushState({}, "", url.split("?")[0]);

        const readCount = Object.keys(readArticles).length.toLocaleString("en-US");
        var unreadCount = (countUnreadArticles() - document.querySelectorAll(".article-container[data-article-index='sponsor']").length).toLocaleString("en-US"); 

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
        upTFIDF = calculateTFIDF(upvotedArticleData,dfreq);
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
        
            HiddenModeState = localStorage.getItem("hiddenMode") === "true";
            unreadcount = countUnreadArticles() - document.querySelectorAll(".article-container[data-article-index='sponsor']").length
            if (unreadcount>0) {
                if (document.getElementById('my_settings').style.display=="none") {       
                    document.getElementById('mark-all').style.display = "block"    
                }
            } else {
                document.getElementById('mark-all').style.display = "none"    
            }
            
            if (unreadcount.toLocaleString("en-US")<=0 && !HiddenModeState) {
                items = [
                            "Be kind. Have Fun. Try something new.",
                            "Patience is a superpower.",
                            'In life and on apps, always question defaults. Fiddle with some "settings," and see what happens.',
                            "Civilization is a positive-sum game.",
                            "Few things threaten good work more than being in a rush. Breathe..."
                        ]
                if (document.getElementById('my_settings').style.display=="none") {       
                    document.getElementById('news-feed').style.display = "flex";
                }
                const quote = document.createElement("div");
                quote.className = `end_quote`;
                quote.innerHTML = items[Math.floor(Math.random()*items.length)];
                newsFeedContainer.textContent = "";
                document.getElementById('spin_container').innerHTML = `` 
                newsFeedContainer.appendChild(quote);    
            } else if (unreadcount.toLocaleString("en-US")==0) {
                document.getElementById('spin_container').innerHTML = `` 
            }
            if (document.getElementById('my_settings').style.display=="none") {
                document.getElementById('news-feed').style.display = "flex";
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
        //get_quote();
       
    });            
    
    loadNews(true);

    const addFeedButton = document.getElementById("add-feed");
    addFeedButton.addEventListener("click", function() {
        if (rssFeeds.length>=60) {
            alert("FYI, to accommodate large feed follows, we may truncate feeds to avoid overloading your browser's storage.")
        }
        const newFeedUrl = prompt("Enter the URL for a new RSS feed:");
        if (newFeedUrl) {
            clear_search();
            document.getElementById('news-feed').style.display = "none";
            document.getElementById('mark-all').style.display = "none";
            let lastLoad = 0;
            localStorage.setItem("lastLoad", 0);
            rssFeeds.push(newFeedUrl);
            updateFeedList(true,newFeedUrl);
        }
    });

    function clear_search() {
        document.getElementById('unread-count').style.display = "block";
        document.getElementById('read-count').style.display = "block";
        document.getElementById('results-count').style.display = "none";
        document.getElementById('search_msg').style.display = "none";  
        document.getElementById('sum_msg').style.display = "none"; 
    }

    const matching_regex = document.getElementById("matching_regex");

    function regex_search(newSearch) {
        
        document.getElementById('unread-count').style.display = "none";
        document.getElementById('read-count').style.display = "none";
        document.getElementById('results-count').style.display = "block";
        document.getElementById('search_msg').style.display = "block";   
        //if (summarizing){
        //    document.getElementById('sum_msg').style.display = "block";
        //}
        document.getElementById('sum_msg').style.display = "none";
        show_timeline();

        searchResults = []

        saved_articles =  JSON.parse(localStorage.getItem("articles")) || [];

        regex = new RegExp(newSearch, "i")
        matching_regex.innerHTML = `Results matching <b>"${newSearch}"</b>. `;

        saved_articles.forEach(articleData => {
            testString = articleData.title + " " + articleData.description + " " + articleData.link  + " " + articleData.feedTitle + " " + articleData.feedUrl
            //console.log(testString)
            if (testString.match(regex)) {
                searchResults.push(articleData);
            }
        });

        //articles = searchResults;

        //dedup_articles();
        //reorderArticles(search=true);

        searchResults.sort((a, b) => {
            return new Date(b.pubDate) - new Date(a.pubDate);
        });

        searching = true
        document.querySelector('body').classList.remove("hidden-mode"); 

        displayArticles(search=true);

        displayed_cards = newsFeedContainer.childNodes.length.toLocaleString("en-US");

        document.getElementById("results-count").textContent = `Results: ${displayed_cards}`;

        lazyload();
        replace_broken();
    }

    var searchResults = [];
    const runSearch = document.getElementById("search_btn");
    runSearch.addEventListener("click", function() {
        const newSearch = prompt("Search titles, descriptions, feed names, and links (case-insensitive regex match on \"all\" articles):");
        if (newSearch === null) {
            return; //break out of the function early
        }   
        regex_search(newSearch);
    });

    async function openai_call(prompt_text) {

        var xhr = new XMLHttpRequest();
        xhr.open("POST", api_base);
      
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer "+api_key);
      
        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
            try {
              console.log(xhr.responseText);
              LLM_text = JSON.parse(xhr.responseText)["choices"][0]["message"]["content"];
              llm_messages.push({"role": "assistant", "content": LLM_text})
            } catch (error) {
              llm_messages.pop();
              try {
                if (JSON.parse(xhr.responseText)["error"]["code"]=="context_length_exceeded") {
                  if (llm_messages.length==0) {
                    console.log("ERROR: The prompt and its expected reply exceeds the token limit for this model.");
                    LLM_text = "ERROR: The prompt and its expected reply exceeds the token limit for this model."
                  } else {
                    console.log("ERROR: Over the course of this chat, you have reached the token limit for this model.");
                    LLM_text = "ERROR: Over the course of this chat, you have reached the token limit for this model."
                  }
                } else {
                  LLM_text = `There was an ERROR calling the LLM. Make sure you are using a valid endpoint and API Key. The credentials may have expired.`
                }            
              } catch (error) {
                LLM_text = `There was an ERROR calling the LLM. Make sure you are using a valid endpoint and API Key. The credentials may have expired.`
              }
            }
            sum_msg.innerHTML = LLM_text.replaceAll("\n","<br>") + " <div style='width:100%;text-align:center;font-size:14px;margin-top:3px;'> <a href='https://sadlynothavocdinosaur.com/posts/rss-reader' target='_blank'>Magic AI Fairy Dust</a> </div>";
          }};
      
          llm_messages = []  
      
          llm_messages.push({"role": "user", "content": prompt_text})
          var data = {
                    "model": "gpt-4o-mini",//"gpt-3.5-turbo-1106", 
                    "messages": llm_messages,
                    "temperature": 0.0,
                    "max_tokens": 500
                  };
            
        console.log(data);
      
        return xhr.send(JSON.stringify(data));    
        
      }

    const sumNewsFeedsButton = document.getElementById("summarize-news");
    sumNewsFeedsButton.addEventListener("click", function() {
        
        if (document.getElementById("news-feed").innerText!=""){

            document.getElementById('sum_msg').style.display = "block";
            if (searching){
                document.getElementById('unread-count').style.display = "none";
                document.getElementById('read-count').style.display = "none";
                document.getElementById('results-count').style.display = "block";
                document.getElementById('search_msg').style.display = "block";
            }
            show_timeline();

            summarizing = true;
            sum_msg.innerHTML = `Processing LLM prompt... `;
            document.getElementById('sum_msg').style.display = "block";
            //prompt_text = document.getElementById("prompt_pref").value+document.getElementById("news-feed").innerText.substring(0,13000*4);

            // Select all elements with the class 'card-body'
            var cardBodies = document.querySelectorAll('.card-body');

            // Initialize an array to hold the title and text of each card
            var cardDetails = "";

            // Iterate over each 'card-body' element
            cardBodies.forEach(card => {
                // Find the card title within the current card
                cardDetails += "- "+card.querySelector('.card-title')?.innerText + "\n";

                // Find the card text within the current card
                cardDetails += "  "+card.querySelector('.card-text')?.innerText + "\n\n";

            });

            // Log or process the cardDetails array as needed
            console.log(cardDetails.substring(0,13000*4));
            
            prompt_text = document.getElementById("prompt_pref").value.replace(/{{news-feed}}/g, cardDetails.substring(0,100000*4)) // cutoff prompt size
            //console.log("prompt_text: "+prompt_text)

            if ((document.getElementById("prompt_pref").value.search(/{{news-feed}}/g)>=0) && (cardDetails.substring(0,100000*4).trim().length<=0)) {
                let text = `There doesn't seem to be anything in your news feed. Your LLM will likely make something up!!!!!`;
                if (confirm(text) == true) {
                    openai_call(prompt_text);    
                } else {
                    document.getElementById('sum_msg').style.display = "none";
                    summarizing = false;
                }
            } else {
                openai_call(prompt_text);    
            }

        } else {
            alert("Try again after feeds have finished loading.")
        }

    });

    const manageFeedsButton = document.getElementById("manage-feeds");
    manageFeedsButton.addEventListener("click", function() {

        const feedList = rssFeeds.map((feed, index) => `
            <tr style="border-top:1px solid #eee"><td colspan=2><b>${feed_names[feed]}</b></td><tr>
            <tr><td width="1%">
            <button class="btn btn-danger remove-feed" data-feed-index="${index}">Remove</button>
            </td><td width="100%"><textarea style="width:100%;word-wrap:break-word;resize: none;" readonly>${feed}</textarea></td></tr>
        `).join("");

        const feedListModal = `
            <div class="modal fade" id="feedListModal" tabindex="-1" aria-labelledby="feedListModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="feedListModalLabel">Feeds</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                You can import and overwrite the current feed list by <a href="javascript:upload_file()">uploading an OPLM file</a>, or you can use any of the options below.
                            </p>
                            <p>
                                Remove individual feeds using the "Remove" buttons below, OR wipe and/or replace your existing list of feeds. If you need help finding feeds, check out our <a href="https://github.com/SuffolkLITLab/rss_algo/tree/main#notes-on-rss-feeds" target="_blank">notes on RSS feeds</a>.
                            </p> 
                            <p>
                                Consider starting with a premade list. Then over time you can whittle it down and add new feeds as you like. <i>Note: If you "remove" a feed or selection of feeds, <b>old articles will remain on your timeline and in your history by default</b>. You must use <i>Settings</i> to clear your history or one of the "wipe" options to remove old saved feed data</b>.</i>
                            </p>
                            <p>
                                If an option below inludes a parenthetical, that means it comes with a pre-trained algo focusing on the named theme. Your interactions will of course refine its operation, and FWIW, it includes the same feeds as others with the same name. It's just the intial focus that's different.
                            </p>
                            <select id="feed_list">
                                <option value="default_feeds">Generic US Mix</option>
                                <option value="default_feeds_legal_tech">Generic US Mix (legal tech &amp; AI)</option>
                                <option value="default_feeds_science">Generic US Mix (math, science, &amp; space)</option>
                                <option value="default_feeds_politics">Generic US Mix (politics)</option>
                                <option value="feeds_us_fire_hose">Whittle Me Down: US Fire Hose</option>
                                <option value="feeds_us_fire_hose_legal_tech">Whittle Me Down: US Fire Hose (legal tech &amp; AI)</option>
                                <option value="feeds_us_fire_hose_science">Whittle Me Down: US Fire Hose (math, science, &amp; space)</option>
                                <option value="feeds_us_fire_hose_politics">Whittle Me Down: US Fire Hose (politics)</option>
                                <!--<option value="default_feeds">Default: Generic US News Mix (small)</option>
                                <option value="magazine_feeds">Mags: New Yorker, Economist, Atlantic, Vanity Fair, Wired, Rolling Stone, Quanta, Nautilus, &amp; Aeon</option>
                                <option value="papers_feeds">Papers: NYT, WaPo, WSJ, LA Times &amp; The Guardian</option>
                                <option value="condenast_feeds">Condé Nast Lite: New Yorker, Vanity Fair, ArsTechnica, &amp; Wired</option>
                                <option value="geeek_feeds">Geekery: Science, Space, Tech, &amp; SciFi Shorts</option>
                                <option value="scifi_shorts_feed">SciFi Shorts: Clarkesworld, Lightspeed &amp; Escape Pod</option>
                                <option value="suffolk_law_feeds">Suffolk Law Mix: Select Papers + Boston + Law</option>
                                <option value="dc_law_feeds">Digital Commons Orgs w/ Law Content (400+ orgs)</option>
                                <option value="law_school_feeds">Digital Commons Orgs w/ ABA-Accredited Law Schools (100+ feeds)</option>
                                <option value="feeds_long_list">Fire Hose: All of the Above, Plus Some</option>-->
                            </select>
                            </p>
                            <p>
                                <button type="button" id="remove_all_add_selection" class="btn btn-danger remove_all">Wipe &amp; Replace w/ Above Selection</button>
                                <button type="button" id="remove_all_feeds" class="btn btn-danger remove_all">Wipe All</button>
                            <p>
                            <hr>
                            <p>
                                <b>Current Feeds</b>: You experience was built on top of <a href="?feeds=${localStorage.getItem("votelib")}">myrssalgo.org/?feeds=${localStorage.getItem("votelib")}</a>. Share that link to have folks start where you did.
                            </p>
                            <table cellpadding="5px" width="100%">${feedList}</table>
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
                var url= document.location.href;
                clear_search();
                show_timeline();
                document.getElementById('news-feed').style.display = "none";
                document.getElementById('mark-all').style.display = "none";
                feed_name = document.getElementById("feed_list").value;
                window.history.pushState({}, "", url.split("?")[0]+"?feeds="+feed_name);
                localStorage.setItem("votelib",feed_name);
                rssFeeds = feed_lib[feed_name]
                localStorage.setItem("feeds",rssFeeds)
                feedListModalElement.querySelector("table").innerHTML = rssFeeds.map((feed, index) => `
                    <tr style="border-top:1px solid #eee"><td colspan=2><b>${feed_names[feed]}</b></td><tr>
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
                upTFIDF = {};
                let downTFIDF = {};
                articles = [];
                localStorage.setItem("articles", JSON.stringify(articles));
                let lastLoad = 0;
                localStorage.setItem("lastLoad", 0);
                modal_win.hide();
                updateFeedList(true);
                //get_quote();
            }
        });

        removeALLfeeds.addEventListener("click", function() {
            let text = "This will empty your feed list and remove all article records. This will reset your algo traing. Choose OK to continue.";
            if (confirm(text) == true) {
                clear_search();
                show_timeline();
                document.getElementById('news-feed').style.display = "none";
                document.getElementById('mark-all').style.display = "none";
                rssFeeds = []
                localStorage.setItem("feeds",JSON.stringify(rssFeeds))
                feedListModalElement.querySelector("table").innerHTML = rssFeeds.map((feed, index) => `
                    <tr style="border-top:1px solid #eee"><td colspan=2><b>${feed_names[feed]}</b></td><tr>
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
                upTFIDF = {};
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
                document.getElementById('news-feed').style.display = "none";
                document.getElementById('mark-all').style.display = "none";
                updateFeedList();
                feedListModalElement.querySelector("table").innerHTML = rssFeeds.map((feed, index) => `
                    <tr style="border-top:1px solid #eee"><td colspan=2><b>${feed_names[feed]}</b></td><tr>
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


    function MastodonShare(target){

        if ( document.getElementById("masto_instance").value.trim()=="" ) {
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

    function save_to_passto(url,title=""){

        var pop_url = document.getElementById("passto_url").value.trim()

        pop_url = pop_url.replace(/{{url}}/gi,  encodeURIComponent(url))
        pop_url = pop_url.replace(/{{title}}/gi,  encodeURIComponent(title))
        
        var win = window.open( pop_url, "_blank" );

        if (passtoPopModeState) {
            setTimeout( function() {
                win.close();
            }, 1000);
        }
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
      top: '25', // Top position relative to parent in px
      left: '0' // Left position relative to parent in px
    };
    var target = document.getElementById(target_id);
    var spinner = new Spinner(opts).spin(target);
}

var userLocation = {}
function getUserWeather() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            position => {
                userLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                weatherAPI(userLocation["latitude"],userLocation["longitude"]);
            },
            error => {
                console.error(error);
                useLocationCheckbox.checked = false;
            }
        );
    } else {
        console.log("Geolocation is not available in this browser.");
        useLocationCheckbox.checked = false;
    }
}

async function weatherAPI(lat,lon){
    var data;
    var lastWeatherReport = localStorage.getItem("lastWeatherReport") || 0;
    var WeatherDiff = (Date.parse(new Date())-lastWeatherReport)/1000
    if (WeatherDiff>15*60){
        try {
            const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lon+"&current_weather=true&temperature_unit="+document.getElementById("temp").value+"&is_day=true");        
            data = await response.text();
            localStorage.setItem("lastWeatherReport", Date.parse(new Date()));
        } catch (error) {
            data = "no data"
        }
        data = JSON.parse(data)
        //console.log(data)

        /* 

        Code 	Description
        0 	Clear sky
        1, 2, 3 	Mainly clear, partly cloudy, and overcast
        45, 48 	Fog and depositing rime fog
        51, 53, 55 	Drizzle: Light, moderate, and dense intensity
        56, 57 	Freezing Drizzle: Light and dense intensity
        61, 63, 65 	Rain: Slight, moderate and heavy intensity
        66, 67 	Freezing Rain: Light and heavy intensity
        71, 73, 75 	Snow fall: Slight, moderate, and heavy intensity
        77 	Snow grains
        80, 81, 82 	Rain showers: Slight, moderate, and violent
        85, 86 	Snow showers slight and heavy
        95 * 	Thunderstorm: Slight or moderate
        96, 99 * 	Thunderstorm with slight and heavy hail

        */

        //"☁️☀️🌤️🌥️⛅️🌦️🌧️🌨️⛈️🌩️";
        if (data["current_weather"]["weathercode"]==0) {
            if (data["current_weather"]["is_day"]==1) {
                weather_icon = "☀️";
            } else {
                weather_icon = "🌙";
            }
        } else if ([1,2,3].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "☁️";
        } else if ([45,48].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "☁️";
        } else if ([51,53,55].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "🌧️";
        } else if ([56,57].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "🌧️";
        } else if ([61,63,65].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "🌧️";
        } else if ([66,67].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "🌧️";
        } else if ([71,73,75].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "❄️";
        } else if ([77].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "❄️";
        } else if ([80,81,82].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "🌧️";
        } else if ([85,86].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "❄️";
        } else if ([95].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "⛈️";
        } else if ([96,99].includes(data["current_weather"]["weathercode"])) {
            weather_icon = "⛈️";
        } else {
            weather_icon = "";
        }

        var weatherString = "<a href='https://www.wunderground.com/hourly/"+lat+","+lon+"' target='_blank' style='text-decoration:none;'>" + Math.round(data["current_weather"]["temperature"]) + "" + data["current_weather_units"]["temperature"]+" "+weather_icon+"</a>"
        localStorage.setItem("lastWeatherString", weatherString);
    } else if (WeatherDiff<=10*60) {
        var weatherString = localStorage.getItem("lastWeatherString") || "";
    } else {
        var weatherString = "";
    }
    document.getElementById('weather').innerHTML = weatherString;
    document.getElementById('weather').style.display = "block";
    //return data
}

/**
 * OPML <-> bespoke RSS JSON translator (no deps)
 * Works in browsers and Node.
 *
 * Export options:
 *   - title: OPML <head><title>...</title>
 *   - groupBy: 'none' | 'feedTitle'  (default: 'feedTitle')
 *     If 'feedTitle', we put items in folders by feedTitle when available.
 */
const RssOpmlIO = (() => {
  // ---------------------------
  // Utilities
  // ---------------------------
  const esc = (s = "") =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const uniq = (arr) => Array.from(new Set(arr));

  const toArray = (maybeJsonOrArray) => {
    if (Array.isArray(maybeJsonOrArray)) return maybeJsonOrArray;
    if (maybeJsonOrArray == null) return [];
    if (typeof maybeJsonOrArray === "string") {
      try { return JSON.parse(maybeJsonOrArray); } catch {}
    }
    return [];
  };

  const toArticlesArray = (maybeJsonOrArray) => {
    const arr = toArray(maybeJsonOrArray);
    // guard: ensure we're looking at "article-ish" objects
    return Array.isArray(arr) ? arr.filter(o => o && (o.feedUrl || o.feedTitle || o.link)) : [];
  };

  // Attribute parser for <outline ...> tags (regex-based, good enough for OPML)
  const parseOutlineAttrs = (tag) => {
    const attrs = {};
    const re = /([^\s=]+)\s*=\s*(['"])(.*?)\2/g;
    let m;
    while ((m = re.exec(tag))) {
      attrs[m[1]] = m[3];
    }
    return attrs;
  };

  // Find all outline tags (both self-closing and openers); we only need attributes.
  const findOutlineTags = (xml) => {
    const tags = [];
    const re = /<outline\b[^>]*\/?>/gi;
    let m;
    while ((m = re.exec(xml))) {
      tags.push(m[0]);
    }
    return tags;
  };

  // Build a nice display title from URL if we have nothing else.
  const fallbackTitleFromUrl = (url) => {
    try {
      const u = new URL(url);
      return u.hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  };

  // ---------------------------
  // EXPORT: JSON -> OPML
  // ---------------------------
  /**
   * @param {object} rssJson - Your app's JSON object.
   * @param {object} [opts]
   * @param {string} [opts.title="Exported Feeds"]
   * @param {"none"|"feedTitle"} [opts.groupBy="feedTitle"]
   * @returns {string} OPML XML
   */
  function jsonToOpml(rssJson, opts = {}) {
    const title = opts.title || "Exported Feeds";
    const groupBy = opts.groupBy || "feedTitle";

    // 1) Gather feed URLs:
    const feedsFromList = toArray(rssJson.feeds); // may be a JSON string
    const articles = toArticlesArray(rssJson.articles);
    const feedsFromArticles = uniq(
      articles.map(a => a.feedUrl).filter(Boolean)
    );

    const allFeedUrls = uniq([...feedsFromList, ...feedsFromArticles]);

    // 2) Build feed metadata map (title, htmlUrl best-effort) from articles:
    const byFeed = new Map();
    for (const url of allFeedUrls) {
      byFeed.set(url, { title: null, htmlUrl: null });
    }
    for (const a of articles) {
      const url = a.feedUrl;
      if (!url || !byFeed.has(url)) continue;
      const cur = byFeed.get(url);
      // Prefer a consistent title if we see one
      if (!cur.title && a.feedTitle) cur.title = a.feedTitle;
      // htmlUrl: try to infer from an article link's origin if it looks like the site
      if (!cur.htmlUrl && a.link) {
        try { cur.htmlUrl = new URL(a.link).origin; } catch {}
      }
      byFeed.set(url, cur);
    }

    // 3) Grouping
    let bodyXml = "";
    if (groupBy === "feedTitle") {
      // Group multiple feeds that share the same feedTitle (rare but possible)
      const groups = new Map(); // title => [{ url, title, htmlUrl }]
      for (const url of allFeedUrls) {
        const meta = byFeed.get(url);
        const t = meta?.title || fallbackTitleFromUrl(url);
        if (!groups.has(t)) groups.set(t, []);
        groups.get(t).push({ url, title: t, htmlUrl: meta?.htmlUrl || null });
      }
      // Emit folders (one per title). If a folder has >1 different feeds, fine;
      // if it has only 1, it's still a folder—harmless. Change if you prefer flat singletons.
      for (const [t, items] of groups.entries()) {
        bodyXml += `  <outline text="${esc(t)}" title="${esc(t)}">\n`;
        for (const it of items) {
          bodyXml += `    <outline text="${esc(it.title)}" title="${esc(it.title)}" type="rss" xmlUrl="${esc(it.url)}"${it.htmlUrl ? ` htmlUrl="${esc(it.htmlUrl)}"` : ""} />\n`;
        }
        bodyXml += `  </outline>\n`;
      }
    } else {
      // Flat list
      for (const url of allFeedUrls) {
        const meta = byFeed.get(url);
        const t = meta?.title || fallbackTitleFromUrl(url);
        bodyXml += `  <outline text="${esc(t)}" title="${esc(t)}" type="rss" xmlUrl="${esc(url)}"${meta?.htmlUrl ? ` htmlUrl="${esc(meta.htmlUrl)}"` : ""} />\n`;
      }
    }

    // 4) Build OPML
    const opml =
`<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
<head>
  <title>${esc(title)}</title>
  <dateCreated>${new Date().toUTCString()}</dateCreated>
</head>
<body>
${bodyXml}</body>
</opml>`;
    return opml;
  }

  // ---------------------------
  // IMPORT: OPML -> JSON
  // ---------------------------
  /**
   * @param {string} opmlXml
   * @returns {object} minimal JSON object that your app can accept
   *                   (keeps your original schema shape as much as possible)
   */
  function opmlToJson(opmlXml) {
    // 1) Collect all <outline ...> tags and pick those with xmlUrl
    const tags = findOutlineTags(opmlXml || "");
    const xmlUrls = [];
    const feedNames = {};

    for (const tag of tags) {
      const attrs = parseOutlineAttrs(tag);
      const url = attrs.xmlUrl || attrs.xmlurl; // case-insensitive-ish
      if (url) {
        xmlUrls.push(url);
        feedNames[url] = attrs.title || attrs.text || null
      }
    }

    const feeds = uniq(xmlUrls);

    // 2) Reconstruct your app's JSON shape with safe defaults / placeholders.
    //    (Adjust to taste if your app requires different defaults.)
    const nowMs = Date.now();

    return {
      backstop: new Date(0),
      regex_never_op: "i",
      cardcutoff: "30",
      votelib: "default_feeds",
      lastLoad: 0,
      upTFIDF: "{}",
      downTFIDF: "{}",           
      feeds: JSON.stringify(feeds, null, 0),
      voteViewMode: "true",
      regex_always: "",          
      //afterOpenMode: "true",
      lastcooldown: "0.5",
      articles: "[]",            
      feed_names : JSON.stringify(feedNames, null, 0)
    };
  }

  return { jsonToOpml, opmlToJson };
})();

document.getElementById('version').innerHTML = "<a href='https://www.geeksforgeeks.org/introduction-semantic-versioning/' target='_blank'>"+version+"</a>";


