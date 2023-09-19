history.replaceState('', document.title, window.location.pathname);window.scrollTo(0, 0);

function show_timeline() {
    document.getElementById('my_settings').style.display = "none";
    document.getElementById('news-feed').style.display = "flex";
    document.getElementById('a_settings').innerHTML = "Settings &amp; Data";
}

function toggle_settings() {
    if (document.getElementById('my_settings').style.display=="none") {
        document.getElementById('news-feed').style.display = "none";
        document.getElementById('my_settings').style.display = "block";
        document.getElementById('a_settings').innerHTML = "Show Timeline";
    } else {
        show_timeline();
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
    
/* Generate a share link for the user's Mastodon domain */
const instance =  localStorage.getItem("instance") || "";
document.getElementById("masto_instance").value = instance;

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
    var dfreq_all = {}
    var crunch_numbers = false
    var decluter_cards = true

    var ratings_mean = 0;
    var ratings_std = 0;

    function updateFeedList(loadFeeds = false, singlefeed="") {
        rssFeeds = removeDuplicates(rssFeeds);
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
        const HiddenModeState = localStorage.getItem("hiddenMode") === "true";
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


    const pocketPopCheckbox = document.getElementById("pocket-pop");
    // Retrieve ignore images value from localStorage (if available)
    const pocketPopModeState = localStorage.getItem("pocketPopMode") === "true";
    pocketPopCheckbox.checked = pocketPopModeState;
    // Update ignore images value and save to localStorage when checkbox value changes
    pocketPopCheckbox.addEventListener("change", function () {
        const newPocketPopImages = pocketPopCheckbox.checked;
        localStorage.setItem("pocketPopMode", newPocketPopImages);
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
    
    
    const afterOpenCheckbox = document.getElementById("after-open");
    // Retrieve ignore images value from localStorage (if available)
    if (localStorage.getItem("afterOpenMode")) {
        afterOpenModeState = localStorage.getItem("afterOpenMode") === "true";
    } else {
        afterOpenModeState = true;
        localStorage.setItem("afterOpenMode", afterOpenModeState);
    }
    afterOpenCheckbox.checked = afterOpenModeState;
    // Update ignore images value and save to localStorage when checkbox value changes
    afterOpenCheckbox.addEventListener("change", function () {
        const newafterOpenImages = afterOpenCheckbox.checked;
        localStorage.setItem("afterOpenMode", newafterOpenImages);
    });


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

        decluter_cards = true
        if ((lastLoad>time_padding) || (rssFeeds.length==0)) {
            loadFeeds = false;
            decluter_cards = false;
        }
        

        document.getElementById('news-feed').innerHTML = ` <div style="float:left;width:100%;height:80px;"><div id="spinner_here" style="margin:0 auto;width:65px;">&nbsp;</div></div>`;
        if (localStorage.getItem("darkMode")=="enabled") {
            tickcolor = '#ddd';		
        } else {
            tickcolor = '#000';		
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
                                    tmp_date.setHours(tmp_date.getHours() - (Math.random() * (24*savedLookback - 6) + 6));
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
                                    
                                    if (Object.is(mediaThumbnail, null)) {
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
                                        }
                                    }
                                
                                    const itemId = link; // Using link as a unique identifier for items
                                    const isRead = readArticles[itemId] || false;

                                    const priorityRating = getRating(feedTitle.replace(/[^a-zA-Z]+/g,"-")+": "+domain_from_url(link).replace(/[^a-zA-Z]+/g,"-")+" "+title+" "+description); 

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
                            displayErrorPopup(feedTitle, feedUrl, errorMessage);
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
                rating = getRating(articles[article]['feedTitle'].replace(/[^a-zA-Z]+/g,"-")+": "+domain_from_url(articles[article]['link']).replace(/[^a-zA-Z]+/g,"-")+""+articles[article]['title']+" "+articles[article]['description'])
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

        if (decluter_cut<1 && crunch_numbers) {
            dfreq_all = calculateDF(articles)
        }

        newsFeedContainer.innerHTML = "";

        i=0
        articles.forEach((articleData, index) => {

            const { title, link, description, pubDate, unknown_pubDate, image, mediaThumbnail, itemId, isRead, feedTitle, feedUrl, mastodon, masto_profile, hasUpvote, hasDownvote, priorityRating } = articleData;

            const twoWeeksAgo = new Date();
            twoWeeksAgo.setDate(twoWeeksAgo.getDate() - savedLookback);

            if ((i==2 && !isRead) && (Math.random()<=0.1) && ((n_feeds>=rssFeeds.length) || (n_feeds==0))) {

                if (savedIgnoreImages){
                    img_html = `
                        <div style="postion:relative;z-index:0;top:0;height:40px;background:#eee;"></div>`
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
                        share_html = `<div class="masto_share"><a href="javascript:void('')" class="share_to_mastodon">Mastodon</a></div><div class="pocket_share"><a href="javascript:void('')" class="save_to_pocket"><div style="background: url('images/cached_logos/pocket.png');background-position: 0px -9px; width:35px;height:40px;"></div></a></div>`
                    } else {
                        favicon = "https://"+domain_from_link+"/favicon.ico"
                        card_body_text = `<h5 class="card-title">${title}</h5><p class="card-text">${description}</p>`
                        share_html = `<div class="masto_share"><a href="javascript:void('')" class="share_to_mastodon">Mastodon</a></div>
                            <div class="pocket_share"><a href="javascript:void('')" class="save_to_pocket"><div style="background: url('images/cached_logos/pocket.png');background-position: 0px -9px; width:35px;height:40px;"></div></a></div>`
                    }

                    if (savedIgnoreImages){
                        img_html = `
                            <div style="postion:relative;z-index:0;top:0;height:40px;background:#eee;"></div>`
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
                                <a href="https://${domain_from_link}" target="_blank"><img class="favicon" src="${favicon}" height="18px"></a> <small class="feed-tag">&nbsp;&nbsp;${feedTitle}</small> 
                                <span class="btn remove_feed" data-feed-index="${feedUrl}" data-feed-name="${feedTitle}">🚫</span>
                            </div>
                        </div>
                    `;

                    newsFeedContainer.appendChild(article);

                    const mastoButton = article.querySelector(".share_to_mastodon");
                    const pocketButton = article.querySelector(".save_to_pocket");

                    const upvoteButton = article.querySelector(".upvote");
                    const downvoteButton = article.querySelector(".downvote");
                    const skipButton = article.querySelector(".skip");
                    const readButton = article.querySelector(".read-button");


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

                    pocketButton.addEventListener("click", function() {

                        save_to_poeket(itemId)

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

                        if (!isRead && afterOpenModeState) {
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
                            alert("This card was saved with an old version of this site and we don't have the information needed to remove the feed. Use the My Feeds button at the top of the page.")
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
            if (upTFIDF[word]) {
                array2.push(upTFIDF[word]*idf)
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
            alert("Generally speaking, the more feeds you follow the more posts in your timeline and the slower the site will preform. You can shrink the size of your timeline by setting a shorter History window. Also, to accommodate large feed follows, we truncate feeds to avoid overloading your browser's storage.")
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
                                <option value="papers_feeds">US Print: NYT, WaPo, WSJ, &amp; LA Times</option>
                                <option value="condenast_feeds">Condé Nast Lite: New Yorker, ArsTechnica, &amp; Wired</option>
                                <option value="magazine_feeds">Mags: New Yorker, Economist, Atalantic, Wired, Rolling Stone &amp; Quanta</option>
                                <option value="geeek_feeds">Geekery: Science, Space, Tech, Star Trek and &amp; SciFi Shorts</option>
                                <option value="scifi_shorts_feed">SciFi Shorts: Clarkesworld, Lightspeed &amp; Escape Pod</option>
                                <option value="suffolk_law_feeds">Suffolk Mix: Select Papers + Boston + Law &amp; Scholarship</option>
                                <option value="dc_law_feeds">Digital Commons Orgs w/ Law Content (400+ orgs)</option>
                                <option value="law_school_feeds">Digital Commons Orgs w/ ABA-Accredited Law Schools (100+ feeds)</option>
                                <option value="feeds_long_list">All of the Above, Plus Some, Minus Digital Commons Feeds</option>
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
                show_timeline();
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
                show_timeline();
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


    function save_to_poeket(url){
        var win = window.open( "https://getpocket.com/edit?url="+ encodeURIComponent(url), "pocket" );

        if (pocketPopModeState) {
            setTimeout( function() {
                win.close();
            }, 500);
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
      top: '10', // Top position relative to parent in px
      left: '0' // Left position relative to parent in px
    };
    var target = document.getElementById(target_id);
    var spinner = new Spinner(opts).spin(target);
}
