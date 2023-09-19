var max_arts = 1200;
function report() {
    new_check = 5000;
    if (localStorage.lastLoad) {
        console.log("Last Sync: "+((Date.parse(new Date) - localStorage.lastLoad)/60000).toFixed(2)+" min. ago")
    }
    if (localStorage.cooldown) {
        console.log("Cooldown: "+localStorage.cooldown+" hours")
    }
    if (localStorage.read) {
        console.log("Read Cards: "+Object.keys(JSON.parse(localStorage.read)).length)
        //console.log(localStorage.read)
    }
    if (localStorage.upvotes) {
        console.log("Upvotes: "+Object.keys(JSON.parse(localStorage.upvotes)).length)
    }
    if (localStorage.downvotes) {
        console.log("Downvotes: "+Object.keys(JSON.parse(localStorage.downvotes)).length)
    }
    console.log("MEMORY REPORT");
    var _lsTotal = 0,
    _xLen, _x;
    for (_x in localStorage) {
        if (!localStorage.hasOwnProperty(_x)) {
            continue;
        }
        _xLen = ((localStorage[_x].length + _x.length) * 2);
        _lsTotal += _xLen;
        if (new_check) {
            console.log(" - " + _x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
        }
    };
    kbs = (_lsTotal / 1024).toFixed(2)
    percentage = (_lsTotal / 1024).toFixed(2)/new_check	
    console.log("Memory Check: " + Math.round(percentage*10000)/100 + "% (" + kbs + "KB/" + new_check + "KB)");
    if (localStorage.articles) {
        stored_art = JSON.parse(localStorage.articles).length
        console.log("Stored Articles: "+stored_art)
        if (stored_art>100) {
            try {
                _xLen = ((localStorage["articles"].length + "articles".length) * 2);
                size = (_xLen / 1024)/stored_art; // size per article in stored articles 
                vote_size = ((localStorage["upvotes"].length + "upvotes".length) * 2)/1024/Object.keys(JSON.parse(localStorage.upvotes)).length;
                read_size = ((localStorage["read"].length + "read".length) * 2)/1024/Object.keys(JSON.parse(localStorage.read)).length;
                tfidf_size = ((localStorage["upTFIDF"].length + "upTFIDF".length) * 2)/1024/Object.keys(JSON.parse(localStorage.upvotes)).length;
                size_per_art = (vote_size*2.5+read_size*2.5+tfidf_size*1.7+size*1.5); // (size_votes_item + size_read_item*kept + size_TFIDF*kept + sizer_per_stored_article*padding)
                feed_size = ((localStorage["feeds"].length + "feeds".length) * 2)/1024/Object.keys(JSON.parse(localStorage.feeds)).length;
                max_arts = Math.round((5000*1-10-feed_size)/size_per_art)  // 100% of limit - 10 for all settings 
            } catch (error) {}
            console.log("Article Cap: "+max_arts);
        }
    } else {
        stored_art = 0
    }
    if (localStorage.feeds) {                
        console.log("Feeds ("+Object.keys(JSON.parse(localStorage.feeds)).length+")");//,JSON.parse(localStorage.feeds));
        //for (feed in JSON.parse(localStorage.feeds)){
        //    console.log("- "+JSON.parse(localStorage.feeds)[feed]);
        //}
    }
}
report();
