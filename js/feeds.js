var default_feeds = [
    "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
    "http://feeds.washingtonpost.com/rss/politics?itid=lk_inline_manual_2",
    "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
    "https://feeds.npr.org/1001/rss.xml", //news
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC6ZFN9Tx6xh-skXCuRHCDpQ", //PBS News Hour
    "https://theconversation.com/us/articles.atom",
    "http://www.newyorker.com/feed/everything",
    "https://feeds.arstechnica.com/arstechnica/index",
    "https://pluralistic.net/feed/",
    "https://botsin.space/@APoD.rss"
]        

var papers_feeds = [
    "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/charles-m-blow/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/jamelle-bouie/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/david-brooks/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/frank-bruni/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/gail-collins/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/ross-douthat/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/maureen-dowd/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/thomas-l-friedman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/michelle-goldberg/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/ezra-klein/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/nicholas-kristof/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/paul-krugman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/farhad-manjoo/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/bret-stephens/rss.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
    "http://feeds.washingtonpost.com/rss/politics?itid=lk_inline_manual_2",
    "https://www.washingtonpost.com/arcio/rss/category/opinions/?itid=lk_inline_manual_7",
    "http://feeds.washingtonpost.com/rss/sports?itid=lk_inline_manual_20",
    "http://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "http://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_32",
    "http://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_36",
    "http://feeds.washingtonpost.com/rss/business?itid=lk_inline_manual_37",
    "http://feeds.washingtonpost.com/rss/lifestyle?itid=lk_inline_manual_38",
    "http://feeds.washingtonpost.com/rss/entertainment?itid=lk_inline_manual_39",
    "https://feeds.a.dj.com/rss/RSSOpinion.xml",
    "https://feeds.a.dj.com/rss/RSSWorldNews.xml",
    "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
    "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
    "https://feeds.a.dj.com/rss/RSSWSJD.xml",
    "https://feeds.a.dj.com/rss/RSSLifestyle.xml",
    "https://www.latimes.com/business/rss2.0.xml",
    "https://www.latimes.com/environment/rss2.0.xml",
    "https://www.latimes.com/entertainment-arts/rss2.0.xml",
    "https://www.latimes.com/food/rss2.0.xml",
    "https://www.latimes.com/lifestyle/rss2.0.xml",
    "https://www.latimes.com/obituaries/rss2.0.xml",
    "https://www.latimes.com/opinion/rss2.0.xml",
    "https://www.latimes.com/politics/rss2.0.xml",
    "https://www.latimes.com/science/rss2.0.xml",
    "https://www.latimes.com/sports/rss2.0.xml",
    "https://www.latimes.com/travel/rss2.0.xml",
    "https://www.latimes.com/world-nation/rss2.0.xml"
]

var condenast_feeds = [
    "http://www.newyorker.com/feed/news",
    "http://www.newyorker.com/feed/culture",
    "http://www.newyorker.com/feed/humor",
    "http://www.newyorker.com/feed/tag/books/rss",
    "http://www.newyorker.com/feed/tech",
    "http://www.newyorker.com/feed/news/sporting-scene",   
    "https://feeds.arstechnica.com/arstechnica/technology-lab",
    "https://feeds.arstechnica.com/arstechnica/tech-policy",
    "https://feeds.arstechnica.com/arstechnica/science",
    "https://feeds.arstechnica.com/arstechnica/features",
    "https://www.wired.com/feed/category/gear/latest/rss",
    "https://www.wired.com/feed/category/ideas/latest/rss",
    "https://www.wired.com/feed/category/science/latest/rss",
    "https://www.wired.com/feed/category/security/latest/rss",
    "https://www.wired.com/feed/category/backchannel/latest/rss",
    "https://www.wired.com/feed/tag/wired-guide/latest/rss",
    "https://www.wired.com/feed/tag/ai/latest/rss",
]

var magazine_feeds = [
    "http://www.newyorker.com/feed/news",
    "http://www.newyorker.com/feed/culture",
    "http://www.newyorker.com/feed/humor",
    "http://www.newyorker.com/feed/tag/books/rss",
    "http://www.newyorker.com/feed/tech",
    "http://www.newyorker.com/feed/news/sporting-scene",   
    "https://www.economist.com/the-world-this-week/rss.xml",
    "https://www.economist.com/letters/rss.xml",
    "https://www.economist.com/leaders/rss.xml",
    "https://www.economist.com/briefing/rss.xml",
    "https://www.economist.com/special-report/rss.xml",
    "https://www.economist.com/britain/rss.xml",
    "https://www.economist.com/europe/rss.xml",
    "https://www.economist.com/united-states/rss.xml",
    "https://www.economist.com/the-americas/rss.xml",
    "https://www.economist.com/middle-east-and-africa/rss.xml",
    "https://www.economist.com/asia/rss.xml",
    "https://www.economist.com/china/rss.xml",
    "https://www.economist.com/international/rss.xml",
    "https://www.economist.com/business/rss.xml",
    "https://www.economist.com/finance-and-economics/rss.xml",
    "https://www.economist.com/books-and-arts/rss.xml",
    "https://www.economist.com/obituary/rss.xml",
    "https://www.economist.com/graphic-detail/rss.xml",
    "https://www.economist.com/economic-and-financial-indicators/rss.xml",
    "https://www.economist.com/science-and-technology/rss.xml",
    "https://www.theatlantic.com/feed/all/",
    "https://www.wired.com/feed/category/business/latest/rss",
    "https://www.wired.com/feed/tag/ai/latest/rss",
    "https://www.wired.com/feed/category/culture/latest/rss",
    "https://www.wired.com/feed/category/gear/latest/rss",
    "https://www.wired.com/feed/category/ideas/latest/rss",
    "https://www.wired.com/feed/category/science/latest/rss",
    "https://www.wired.com/feed/category/security/latest/rss",
    "https://www.wired.com/feed/category/backchannel/latest/rss",
    "https://www.wired.com/feed/tag/wired-guide/latest/rss",
    "https://www.rollingstone.com/music/feed/",
    "https://www.rollingstone.com/politics/feed/",
    "https://www.rollingstone.com/tv-movies/feed/",
    "https://www.rollingstone.com/culture/feed/",
    "https://www.rollingstone.com/product-recommendations/feed/",
    "https://api.quantamagazine.org/feed/"
]

var scifi_shorts_feed = [
    "https://clarkesworldmagazine.com/feed/",
    "https://www.lightspeedmagazine.com/rss-2/",
    "https://escapepod.org/feed/podcast/"
]

var geeek_feeds = [
    "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
    "http://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "https://www.latimes.com/science/rss2.0.xml",
    "https://feeds.npr.org/1007/rss.xml", //science
    "https://feeds.a.dj.com/rss/RSSWSJD.xml", // Tech
    "http://www.newyorker.com/feed/tech",
    "http://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    "http://feeds.bbci.co.uk/news/technology/rss.xml",
    "https://www.economist.com/science-and-technology/rss.xml",
    "https://feeds.bloomberg.com/technology/news.rss",
    "https://feeds.arstechnica.com/arstechnica/technology-lab",
    "https://feeds.arstechnica.com/arstechnica/tech-policy",
    "https://feeds.arstechnica.com/arstechnica/science",
    "https://feeds.arstechnica.com/arstechnica/features",
    "https://www.wired.com/feed/category/business/latest/rss",
    "https://www.wired.com/feed/tag/ai/latest/rss",
    "https://www.wired.com/feed/category/culture/latest/rss",
    "https://www.wired.com/feed/category/gear/latest/rss",
    "https://www.wired.com/feed/category/ideas/latest/rss",
    "https://www.wired.com/feed/category/science/latest/rss",
    "https://www.wired.com/feed/category/security/latest/rss",
    "https://www.wired.com/feed/category/backchannel/latest/rss",
    "https://www.wired.com/feed/tag/wired-guide/latest/rss",
    "https://theconversation.com/us/technology/articles.atom",
    "https://phys.org/rss-feed/earth-news/",
    "https://phys.org/rss-feed/science-news/",
    "https://phys.org/rss-feed/nanotech-news/",
    "https://phys.org/rss-feed/physics-news/",
    "https://phys.org/rss-feed/space-news/",
    "https://phys.org/rss-feed/biology-news/",
    "https://phys.org/rss-feed/chemistry-news/",
    "https://thegradient.pub/rss/",
    "https://slate.com/feeds/technology.rss",
    "http://gizmodo.com/vip.xml",
    "https://techcrunch.com/feed/",
    "https://www.techdirt.com/techdirt_rss.xml",
    "https://www.theinformation.com/feed",
    "https://pluralistic.net/feed/",
    "https://xkcd.com/rss.xml",
    "https://feeds.feedburner.com/mcsweeneys",
    "https://spacenews.com/feed/",
    "https://hnrss.org/best",
    "https://screenrant.com/feed/tag/star-trek/",
    "https://api.quantamagazine.org/feed/",
    "https://badastronomy.substack.com/feed/",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCYO_jab_esuFRV4b17AJtAw", //3blue1brown
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC415bOPUcGSamy543abLmRA", //Cleo Abram
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCHnyfMqiRRG1u-2MsSQLbXA", //Veritasium 
    "https://botsin.space/@APoD.rss",
    "https://clarkesworldmagazine.com/feed/",
    "https://www.lightspeedmagazine.com/rss-2/",
    "https://escapepod.org/feed/podcast/"
]

// These feeds are a mix of sites without paywalls and sites with paywalls for which 
// the Suffolk Law community has access. 
// See https://www.suffolk.edu/law/faculty-research/research/law-school-research-databases/washington-post
var suffolk_law_feeds = [
    "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/charles-m-blow/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/jamelle-bouie/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/david-brooks/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/frank-bruni/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/gail-collins/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/ross-douthat/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/maureen-dowd/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/thomas-l-friedman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/michelle-goldberg/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/ezra-klein/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/nicholas-kristof/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/paul-krugman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/farhad-manjoo/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/bret-stephens/rss.xml",    "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
    "http://feeds.washingtonpost.com/rss/politics?itid=lk_inline_manual_2",
    "https://www.washingtonpost.com/arcio/rss/category/opinions/?itid=lk_inline_manual_7",
    "http://feeds.washingtonpost.com/rss/sports?itid=lk_inline_manual_20",
    "http://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "http://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_32",
    "http://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_36",
    "http://feeds.washingtonpost.com/rss/business?itid=lk_inline_manual_37",
    "http://feeds.washingtonpost.com/rss/lifestyle?itid=lk_inline_manual_38",
    "http://feeds.washingtonpost.com/rss/entertainment?itid=lk_inline_manual_39",
    "https://feeds.a.dj.com/rss/RSSOpinion.xml",
    "https://feeds.a.dj.com/rss/RSSWorldNews.xml",
    "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
    "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
    "https://feeds.a.dj.com/rss/RSSWSJD.xml",
    "https://feeds.a.dj.com/rss/RSSLifestyle.xml",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC6ZFN9Tx6xh-skXCuRHCDpQ", //PBS News Hour
    "https://theconversation.com/us/arts/articles.atom",
    "https://theconversation.com/us/business/articles.atom",
    "https://theconversation.com/us/education/articles.atom",
    "https://theconversation.com/us/environment/articles.atom",
    "https://theconversation.com/us/ethics/articles.atom",
    "https://theconversation.com/us/health/articles.atom",
    "https://theconversation.com/us/politics/articles.atom",
    "https://theconversation.com/us/technology/articles.atom",
    "https://patch.com/feeds/aol/massachusetts/boston",
    "https://feeds.npr.org/1003/rss.xml", //national
    "https://feeds.npr.org/1004/rss.xml", //world
    "https://feeds.npr.org/1006/rss.xml", //business
    "https://feeds.npr.org/1007/rss.xml", //science
    "https://feeds.npr.org/1014/rss.xml", //politics
    "https://feeds.npr.org/1015/rss.xml", //race
    "https://feeds.npr.org/1032/rss.xml", //books
    "https://feeds.npr.org/1045/rss.xml", //movies
    "https://feeds.npr.org/1048/rss.xml", //pop culture
    "https://feeds.npr.org/1128/rss.xml", //health
    "https://feeds.npr.org/1138/rss.xml", //television
    "https://feeds.npr.org/1167/rss.xml", //climate
    "https://feeds.npr.org/1001/rss.xml", //news
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCx_SjDi4CS5ALkWCS9ffldQ", //GBH News
    "https://www.wgbh.org/news/local.rss",
    "https://www.wgbh.org/news/politics.rss",
    "https://www.wgbh.org/news/education-news.rss",
    "https://www.wgbh.org/news/housing.rss",
    "https://www.wgbh.org/news/health.rss",
    "https://www.wgbh.org/news/commentary.rss",
    "https://theconversation.com/us/articles.atom",
    "https://masslawyersweekly.com/feed/", 
    "https://www.lawnext.com/feed",
    "https://www.scotusblog.com/feed/",
    "https://buttondown.email/LawyerExMachina/rss",
    "https://api.ssrn.com/content/v1/journals/956475/papers/rss",
    "https://abovethelaw.com/feed/"
]

var feeds_long_list = [
    // New York Times
    "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/charles-m-blow/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/jamelle-bouie/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/david-brooks/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/frank-bruni/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/gail-collins/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/ross-douthat/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/maureen-dowd/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/thomas-l-friedman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/michelle-goldberg/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/ezra-klein/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/nicholas-kristof/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/paul-krugman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/farhad-manjoo/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/bret-stephens/rss.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
    // NPR
    "https://feeds.npr.org/1003/rss.xml", //national
    "https://feeds.npr.org/1004/rss.xml", //world
    "https://feeds.npr.org/1006/rss.xml", //business
    "https://feeds.npr.org/1007/rss.xml", //science
    "https://feeds.npr.org/1014/rss.xml", //politics
    "https://feeds.npr.org/1015/rss.xml", //race
    "https://feeds.npr.org/1032/rss.xml", //books
    "https://feeds.npr.org/1045/rss.xml", //movies
    "https://feeds.npr.org/1048/rss.xml", //pop culture
    "https://feeds.npr.org/1128/rss.xml", //health
    "https://feeds.npr.org/1138/rss.xml", //television
    "https://feeds.npr.org/1167/rss.xml", //climate
    "https://feeds.npr.org/1001/rss.xml", //news
    // BBC
    "http://feeds.bbci.co.uk/news/world/rss.xml",
    "http://feeds.bbci.co.uk/news/uk/rss.xml",
    "http://feeds.bbci.co.uk/news/business/rss.xml",
    "http://feeds.bbci.co.uk/news/politics/rss.xml",
    "http://feeds.bbci.co.uk/news/health/rss.xml",
    "http://feeds.bbci.co.uk/news/education/rss.xml",
    "http://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    "http://feeds.bbci.co.uk/news/technology/rss.xml",
    "http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml",
    // Washington Post
    "http://feeds.washingtonpost.com/rss/politics?itid=lk_inline_manual_2",
    "https://www.washingtonpost.com/arcio/rss/category/opinions/?itid=lk_inline_manual_7",
    "http://feeds.washingtonpost.com/rss/sports?itid=lk_inline_manual_20",
    "http://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "http://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_32",
    "http://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_36",
    "http://feeds.washingtonpost.com/rss/business?itid=lk_inline_manual_37",
    "http://feeds.washingtonpost.com/rss/lifestyle?itid=lk_inline_manual_38",
    "http://feeds.washingtonpost.com/rss/entertainment?itid=lk_inline_manual_39",
    // The Economist
    "https://www.economist.com/the-world-this-week/rss.xml",
    "https://www.economist.com/letters/rss.xml",
    "https://www.economist.com/leaders/rss.xml",
    "https://www.economist.com/briefing/rss.xml",
    "https://www.economist.com/special-report/rss.xml",
    "https://www.economist.com/britain/rss.xml",
    "https://www.economist.com/europe/rss.xml",
    "https://www.economist.com/united-states/rss.xml",
    "https://www.economist.com/the-americas/rss.xml",
    "https://www.economist.com/middle-east-and-africa/rss.xml",
    "https://www.economist.com/asia/rss.xml",
    "https://www.economist.com/china/rss.xml",
    "https://www.economist.com/international/rss.xml",
    "https://www.economist.com/business/rss.xml",
    "https://www.economist.com/finance-and-economics/rss.xml",
    "https://www.economist.com/books-and-arts/rss.xml",
    "https://www.economist.com/obituary/rss.xml",
    "https://www.economist.com/graphic-detail/rss.xml",
    "https://www.economist.com/economic-and-financial-indicators/rss.xml",
    "https://www.economist.com/science-and-technology/rss.xml",
    // Wall Street Journal
    "https://feeds.a.dj.com/rss/RSSOpinion.xml",
    "https://feeds.a.dj.com/rss/RSSWorldNews.xml",
    "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
    "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
    "https://feeds.a.dj.com/rss/RSSWSJD.xml", // Tech What's New
    "https://feeds.a.dj.com/rss/RSSLifestyle.xml",
    // LA Times
    "https://www.latimes.com/business/rss2.0.xml",
    "https://www.latimes.com/environment/rss2.0.xml",
    "https://www.latimes.com/entertainment-arts/rss2.0.xml",
    "https://www.latimes.com/food/rss2.0.xml",
    "https://www.latimes.com/lifestyle/rss2.0.xml",
    "https://www.latimes.com/obituaries/rss2.0.xml",
    "https://www.latimes.com/opinion/rss2.0.xml",
    "https://www.latimes.com/politics/rss2.0.xml",
    "https://www.latimes.com/science/rss2.0.xml",
    "https://www.latimes.com/sports/rss2.0.xml",
    "https://www.latimes.com/travel/rss2.0.xml",
    "https://www.latimes.com/world-nation/rss2.0.xml",
    // PBS News Hour
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC6ZFN9Tx6xh-skXCuRHCDpQ", 
    // Bloomberg
    "https://feeds.bloomberg.com/markets/news.rss",
    "https://feeds.bloomberg.com/politics/news.rss",
    "https://feeds.bloomberg.com/technology/news.rss",
    "https://feeds.bloomberg.com/wealth/news.rss",
    // New Yorker
    "http://www.newyorker.com/feed/news",
    "http://www.newyorker.com/feed/culture",
    "http://www.newyorker.com/feed/humor",
    "http://www.newyorker.com/feed/tag/books/rss",
    "http://www.newyorker.com/feed/tech",
    "http://www.newyorker.com/feed/news/sporting-scene",
    "https://www.theatlantic.com/feed/all/",
    "https://slate.com/feeds/news-and-politics.rss",
    // Slate
    "https://slate.com/feeds/technology.rss",
    "https://slate.com/feeds/business.rss",
    "https://slate.com/feeds/culture.rss",
    "https://slate.com/feeds/human-interest.rss",
    // The Conversation
    "https://theconversation.com/us/arts/articles.atom",
    "https://theconversation.com/us/business/articles.atom",
    "https://theconversation.com/us/education/articles.atom",
    "https://theconversation.com/us/environment/articles.atom",
    "https://theconversation.com/us/ethics/articles.atom",
    "https://theconversation.com/us/health/articles.atom",
    "https://theconversation.com/us/politics/articles.atom",
    "https://theconversation.com/us/technology/articles.atom",
    "https://theconversation.com/us/articles.atom",
    // Phys.org
    "https://phys.org/rss-feed/earth-news/",
    "https://phys.org/rss-feed/science-news/",
    "https://phys.org/rss-feed/nanotech-news/",
    "https://phys.org/rss-feed/physics-news/",
    "https://phys.org/rss-feed/space-news/",
    "https://phys.org/rss-feed/biology-news/",
    "https://phys.org/rss-feed/chemistry-news/",
    // The Gradient
    "https://thegradient.pub/rss/",
    //GBH News
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCx_SjDi4CS5ALkWCS9ffldQ", 
    "https://www.wgbh.org/news/local.rss",
    "https://www.wgbh.org/news/politics.rss",
    "https://www.wgbh.org/news/education-news.rss",
    "https://www.wgbh.org/news/housing.rss",
    "https://www.wgbh.org/news/health.rss",
    "https://www.wgbh.org/news/commentary.rss",
    // Patch
    "https://patch.com/feeds/aol/massachusetts/boston",
    "https://patch.com/feeds/aol/massachusetts/somerville",
    "https://patch.com/feeds/aol/massachusetts/cambridge",
    "https://patch.com/feeds/aol/massachusetts/arlington",
    "https://patch.com/feeds/aol/massachusetts/lexington",
    // Arstechnica
    "https://feeds.arstechnica.com/arstechnica/technology-lab",
    "https://feeds.arstechnica.com/arstechnica/tech-policy",
    "https://feeds.arstechnica.com/arstechnica/science",
    "https://feeds.arstechnica.com/arstechnica/features",
    // Wired
    "https://www.wired.com/feed/category/business/latest/rss",
    "https://www.wired.com/feed/tag/ai/latest/rss",
    "https://www.wired.com/feed/category/culture/latest/rss",
    "https://www.wired.com/feed/category/gear/latest/rss",
    "https://www.wired.com/feed/category/ideas/latest/rss",
    "https://www.wired.com/feed/category/science/latest/rss",
    "https://www.wired.com/feed/category/security/latest/rss",
    "https://www.wired.com/feed/category/backchannel/latest/rss",
    "https://www.wired.com/feed/tag/wired-guide/latest/rss",
    // Rollingstone
    "https://www.rollingstone.com/music/feed/",
    "https://www.rollingstone.com/politics/feed/",
    "https://www.rollingstone.com/tv-movies/feed/",
    "https://www.rollingstone.com/culture/feed/",
    "https://www.rollingstone.com/product-recommendations/feed/",
    // Vox
    "https://www.vox.com/rss/index.xml",
    // Gizmodo
    "http://gizmodo.com/vip.xml",
    // Techcrunch
    "https://techcrunch.com/feed/",
    // Pluralistic
    "https://pluralistic.net/feed/",
    // Techdirt
    "https://www.techdirt.com/techdirt_rss.xml",
    // MA Lawyers Weekly
    "https://masslawyersweekly.com/feed/",
    // Law Next
    "https://www.lawnext.com/feed",
    // SCOTUS Blog
    "https://www.scotusblog.com/feed/",
    // ExMachina Newsletter
    "https://buttondown.email/LawyerExMachina/rss",
    // SSRN
    "https://api.ssrn.com/content/v1/journals/956475/papers/rss",
    // Above the Law
    "https://abovethelaw.com/feed/",
    // Quanta Magazine
    "https://api.quantamagazine.org/feed/",
    // Hacker News
    "https://hnrss.org/best",
    // Screen Rant
    "https://screenrant.com/feed/tag/star-trek/",
    // XKCD
    "https://xkcd.com/rss.xml",
    // McSweeney's 
    "https://feeds.feedburner.com/mcsweeneys",
    // Space News
    "https://spacenews.com/feed/",
    // Bad Astornomy 
    "https://badastronomy.substack.com/feed/",
    // 3blue1brown
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCYO_jab_esuFRV4b17AJtAw", 
    // Cleo Abram
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC415bOPUcGSamy543abLmRA", 
    // Veritasium 
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCHnyfMqiRRG1u-2MsSQLbXA", 
    // Astronomy Picture of the Day
    "https://botsin.space/@APoD.rss",
    // Clarksworld
    "https://clarkesworldmagazine.com/feed/",
    // Lightspeed
    "https://www.lightspeedmagazine.com/rss-2/",
    // Escape Pod
    "https://escapepod.org/feed/podcast/"
]

test_feeds = [

    // New York Times
    "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
    //"https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/charles-m-blow/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/jamelle-bouie/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/david-brooks/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/frank-bruni/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/gail-collins/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/ross-douthat/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/maureen-dowd/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/thomas-l-friedman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/michelle-goldberg/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/ezra-klein/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/nicholas-kristof/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/paul-krugman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/farhad-manjoo/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/bret-stephens/rss.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
    // NPR
    "https://feeds.npr.org/1003/rss.xml", //national
    "https://feeds.npr.org/1004/rss.xml", //world
    "https://feeds.npr.org/1006/rss.xml", //business
    "https://feeds.npr.org/1007/rss.xml", //science
    "https://feeds.npr.org/1014/rss.xml", //politics
    "https://feeds.npr.org/1015/rss.xml", //race
    "https://feeds.npr.org/1032/rss.xml", //books
    "https://feeds.npr.org/1045/rss.xml", //movies
    "https://feeds.npr.org/1048/rss.xml", //pop culture
    "https://feeds.npr.org/1128/rss.xml", //health
    "https://feeds.npr.org/1138/rss.xml", //television
    "https://feeds.npr.org/1167/rss.xml", //climate
    "https://feeds.npr.org/1001/rss.xml", //news
    // BBC
    "http://feeds.bbci.co.uk/news/world/rss.xml",
    //"http://feeds.bbci.co.uk/news/uk/rss.xml",
    "http://feeds.bbci.co.uk/news/business/rss.xml",
    "http://feeds.bbci.co.uk/news/politics/rss.xml",
    "http://feeds.bbci.co.uk/news/health/rss.xml",
    "http://feeds.bbci.co.uk/news/education/rss.xml",
    "http://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    "http://feeds.bbci.co.uk/news/technology/rss.xml",
    "http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml",
    // Washington Post
    "http://feeds.washingtonpost.com/rss/politics?itid=lk_inline_manual_2",
    "https://www.washingtonpost.com/arcio/rss/category/opinions/?itid=lk_inline_manual_7",
    //"http://feeds.washingtonpost.com/rss/sports?itid=lk_inline_manual_20",
    "http://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "http://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_32",
    "http://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_36",
    "http://feeds.washingtonpost.com/rss/business?itid=lk_inline_manual_37",
    "http://feeds.washingtonpost.com/rss/lifestyle?itid=lk_inline_manual_38",
    "http://feeds.washingtonpost.com/rss/entertainment?itid=lk_inline_manual_39",
    // The Economist
    "https://www.economist.com/the-world-this-week/rss.xml",
    "https://www.economist.com/letters/rss.xml",
    "https://www.economist.com/leaders/rss.xml",
    "https://www.economist.com/briefing/rss.xml",
    "https://www.economist.com/special-report/rss.xml",
    "https://www.economist.com/britain/rss.xml",
    "https://www.economist.com/europe/rss.xml",
    "https://www.economist.com/united-states/rss.xml",
    "https://www.economist.com/the-americas/rss.xml",
    "https://www.economist.com/middle-east-and-africa/rss.xml",
    "https://www.economist.com/asia/rss.xml",
    "https://www.economist.com/china/rss.xml",
    "https://www.economist.com/international/rss.xml",
    "https://www.economist.com/business/rss.xml",
    "https://www.economist.com/finance-and-economics/rss.xml",
    "https://www.economist.com/books-and-arts/rss.xml",
    "https://www.economist.com/obituary/rss.xml",
    "https://www.economist.com/graphic-detail/rss.xml",
    "https://www.economist.com/economic-and-financial-indicators/rss.xml",
    "https://www.economist.com/science-and-technology/rss.xml",
    // Wall Street Journal
    //"https://feeds.a.dj.com/rss/RSSOpinion.xml",
    "https://feeds.a.dj.com/rss/RSSWorldNews.xml",
    "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
    //"https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
    "https://feeds.a.dj.com/rss/RSSWSJD.xml", // Tech What's New
    "https://feeds.a.dj.com/rss/RSSLifestyle.xml",
    // LA Times
    "https://www.latimes.com/business/rss2.0.xml",
    "https://www.latimes.com/environment/rss2.0.xml",
    "https://www.latimes.com/entertainment-arts/rss2.0.xml",
    //"https://www.latimes.com/food/rss2.0.xml",
    "https://www.latimes.com/lifestyle/rss2.0.xml",
    //"https://www.latimes.com/obituaries/rss2.0.xml",
    "https://www.latimes.com/opinion/rss2.0.xml",
    "https://www.latimes.com/politics/rss2.0.xml",
    "https://www.latimes.com/science/rss2.0.xml",
    //"https://www.latimes.com/sports/rss2.0.xml",
    "https://www.latimes.com/travel/rss2.0.xml",
    "https://www.latimes.com/world-nation/rss2.0.xml",
    // PBS News Hour
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC6ZFN9Tx6xh-skXCuRHCDpQ", 
    // Bloomberg
    //"https://feeds.bloomberg.com/markets/news.rss",
    //"https://feeds.bloomberg.com/politics/news.rss",
    //"https://feeds.bloomberg.com/technology/news.rss",
    //"https://feeds.bloomberg.com/wealth/news.rss",
    // New Yorker
    "http://www.newyorker.com/feed/news",
    "http://www.newyorker.com/feed/culture",
    "http://www.newyorker.com/feed/humor",
    "http://www.newyorker.com/feed/tag/books/rss",
    "http://www.newyorker.com/feed/tech",
    //"http://www.newyorker.com/feed/news/sporting-scene",
    "https://www.theatlantic.com/feed/all/",
    "https://slate.com/feeds/news-and-politics.rss",
    // Slate
    "https://slate.com/feeds/technology.rss",
    "https://slate.com/feeds/business.rss",
    "https://slate.com/feeds/culture.rss",
    "https://slate.com/feeds/human-interest.rss",
    // The Conversation
    "https://theconversation.com/us/arts/articles.atom",
    "https://theconversation.com/us/business/articles.atom",
    "https://theconversation.com/us/education/articles.atom",
    "https://theconversation.com/us/environment/articles.atom",
    "https://theconversation.com/us/ethics/articles.atom",
    "https://theconversation.com/us/health/articles.atom",
    "https://theconversation.com/us/politics/articles.atom",
    "https://theconversation.com/us/technology/articles.atom",
    "https://theconversation.com/us/articles.atom",
    // Phys.org
    //"https://phys.org/rss-feed/earth-news/",
    "https://phys.org/rss-feed/science-news/",
    //"https://phys.org/rss-feed/nanotech-news/",
    "https://phys.org/rss-feed/physics-news/",
    "https://phys.org/rss-feed/space-news/",
    //"https://phys.org/rss-feed/biology-news/",
    //"https://phys.org/rss-feed/chemistry-news/",
    // The Gradient
    "https://thegradient.pub/rss/",
    //GBH News
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCx_SjDi4CS5ALkWCS9ffldQ", 
    "https://www.wgbh.org/news/local.rss",
    "https://www.wgbh.org/news/politics.rss",
    "https://www.wgbh.org/news/education-news.rss",
    "https://www.wgbh.org/news/housing.rss",
    "https://www.wgbh.org/news/health.rss",
    "https://www.wgbh.org/news/commentary.rss",
    // Patch
    "https://patch.com/feeds/aol/massachusetts/boston",
    "https://patch.com/feeds/aol/massachusetts/somerville",
    "https://patch.com/feeds/aol/massachusetts/cambridge",
    "https://patch.com/feeds/aol/massachusetts/arlington",
    "https://patch.com/feeds/aol/massachusetts/lexington",
    // Arstechnica
    "https://feeds.arstechnica.com/arstechnica/technology-lab",
    "https://feeds.arstechnica.com/arstechnica/tech-policy",
    "https://feeds.arstechnica.com/arstechnica/science",
    "https://feeds.arstechnica.com/arstechnica/features",
    // Wired
    "https://www.wired.com/feed/category/business/latest/rss",
    "https://www.wired.com/feed/tag/ai/latest/rss",
    "https://www.wired.com/feed/category/culture/latest/rss",
    //"https://www.wired.com/feed/category/gear/latest/rss",
    "https://www.wired.com/feed/category/ideas/latest/rss",
    "https://www.wired.com/feed/category/science/latest/rss",
    "https://www.wired.com/feed/category/security/latest/rss",
    "https://www.wired.com/feed/category/backchannel/latest/rss",
    "https://www.wired.com/feed/tag/wired-guide/latest/rss",
    // Rollingstone
    "https://www.rollingstone.com/music/feed/",
    "https://www.rollingstone.com/politics/feed/",
    "https://www.rollingstone.com/tv-movies/feed/",
    "https://www.rollingstone.com/culture/feed/",
    //"https://www.rollingstone.com/product-recommendations/feed/",
    // Vox
    "https://www.vox.com/rss/index.xml",
    // Gizmodo
    //"http://gizmodo.com/vip.xml",
    // Techcrunch
    "https://techcrunch.com/feed/",
    // Pluralistic
    "https://pluralistic.net/feed/",
    // Techdirt
    "https://www.techdirt.com/techdirt_rss.xml",
    // MA Lawyers Weekly
    "https://masslawyersweekly.com/feed/",
    // Law Next
    "https://www.lawnext.com/feed",
    // SCOTUS Blog
    "https://www.scotusblog.com/feed/",
    // ExMachina Newsletter
    "https://buttondown.email/LawyerExMachina/rss",
    // SSRN
    "https://api.ssrn.com/content/v1/journals/956475/papers/rss",
    // Above the Law
    "https://abovethelaw.com/feed/",
    // Quanta Magazine
    "https://api.quantamagazine.org/feed/",
    // Hacker News
    "https://hnrss.org/best",
    // Screen Rant
    "https://screenrant.com/feed/tag/star-trek/",
    // XKCD
    "https://xkcd.com/rss.xml",
    // McSweeney's 
    "https://feeds.feedburner.com/mcsweeneys",
    // Space News
    "https://spacenews.com/feed/",
    // Bad Astornomy 
    "https://badastronomy.substack.com/feed/",
    // 3blue1brown
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCYO_jab_esuFRV4b17AJtAw", 
    // Cleo Abram
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC415bOPUcGSamy543abLmRA", 
    // Veritasium 
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCHnyfMqiRRG1u-2MsSQLbXA", 
    // Astronomy Picture of the Day
    "https://botsin.space/@APoD.rss",
    // Clarksworld
    "https://clarkesworldmagazine.com/feed/",
    // Lightspeed
    "https://www.lightspeedmagazine.com/rss-2/",
    // Escape Pod
    "https://escapepod.org/feed/podcast/"
    
    // CORS proxy doesn't resolve feed (entierly broken)
    //"http://rss.sciam.com/ScientificAmerican-Global",

    // Seems to "work" but there are no new posts
    //"https://lawprofblawg.wordpress.com/feed/",
    //"https://www.reutersagency.com/feed/?best-regions=north-america&post_type=best",
    //"https://www.smithsonianmag.com/rss/air-space-magazine/"

]

//default_feeds = test_feeds
