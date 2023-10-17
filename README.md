# RSS Algo

This code is used to breath life into [https://myRSSalgo.org/](https://myrssalgo.org/), a client-side open source algo-driven RSS reader. 

The RSS algo lives on your device with your data. We make use of a proxy server to help facilitate access to feeds. So we know some of the feeds folks are consuming, but we don't use tracking tools that drop cookies like Google Analytics. We do, however, point to the properties provided in your RSS list, and many of these sites may use such. You may want to consider installing an ad blocker. Most importantly, on our end, however, all of your votes and views live in your browser. We just lunched and we're still woking things out, but if you don't mind the sparse documentation and a few bugs from time to time, feel free to play around.

Follow [#SuffolkRSSalgo](https://mastodon.social/deck/tags/suffolkrssalgo) on Mastodon for project updates.

# Notes on RSS Feeds

It's harder to find RSS feeds now than it was 20 years ago when every site had an RSS button. So, here are a few tips and tricks. 

If you're looking for local news in the US, you can probably find a [Patch.com](https://patch.com/) feed. They aren't listed anywhere, but they are of the form `https://patch.com/feeds/aol/massachusetts/boston`. So you can try swapping out your state and locality names. This is a common theme, websites with RSS feeds but no clear way of discovering them. My goto method for finding a site's feed has three main steps: 

1. See if you can find the letters RSS anywhere on the site. These often link right to the feed (e.g., [Pluralistic](https://pluralistic.net/) has an [RSS link](https://pluralistic.net/feed/) right in the menu. You'll probably want to `right click > copy link` such links to get the url as clicking on the link often triggers a download. If that doesn't work...

2. Google `[website name] RSS feeds` and see if anything comes up. If you're lucky, you'll get results like these:
    - [RSS Feeds - The New York Times](https://www.nytimes.com/rss)
    - [RSS Feeds - The New Yorker](https://www.newyorker.com/about/feeds?verso=true)
    - [RSS Feeds | Ars Technica](https://arstechnica.com/rss-feeds/)
    - [RSS Feeds | WIRED](https://www.wired.com/about/rss-feeds/)
    - [Slate’s RSS feeds.](https://slate.com/rss)
  
3. And if you can't find anything that way, you're best bet is viewing a webpage's source (`right click + view source` in most browsers). This will open a text file where you can look for a link ending in `.rss`. Here, `Control/Command + F` is your friend. For example, this is how you can find YouTube and SubStack feeds which are of the form `https://www.youtube.com/feeds/videos.xml?channel_id=UCHnyfMqiRRG1u-2MsSQLbXA` and `https://badastronomy.substack.com/feed/` repectivly. 

FWIW, here's a set of feeds I was able to find: [list of feeds](https://github.com/SuffolkLITLab/rss_algo/blob/main/js/feeds.js). That file is the source of the groups found under "Feeds." 

# Troubleshooting

Make sure that your url is a properly formated url (e.g. `https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml`). If that doens'y work try opeing your feed in a browser like FireFox where it will show you the XML. I've noticed that a good number of sites have links to RSS feeds that haven't been updated in years despite new content being created. :(
