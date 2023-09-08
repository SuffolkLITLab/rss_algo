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
    "https://feeds.a.dj.com/rss/RSSLifestyle.xml"
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
    "https://www.wired.com/feed/category/science/latest/rss",
    "https://www.wired.com/feed/category/ideas/latest/rss",
    "https://www.wired.com/feed/tag/ai/latest/rss",
    "https://www.wired.com/feed/rss"
]

var geeek_feeds = [
    "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
    "http://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "https://feeds.npr.org/1007/rss.xml", //science
    "http://www.newyorker.com/feed/tech",
    "https://www.economist.com/science-and-technology/rss.xml",
    "https://feeds.bloomberg.com/technology/news.rss",
    "https://feeds.arstechnica.com/arstechnica/technology-lab",
    "https://feeds.arstechnica.com/arstechnica/tech-policy",
    "https://feeds.arstechnica.com/arstechnica/science",
    "https://feeds.arstechnica.com/arstechnica/features",
    "https://www.wired.com/feed/category/science/latest/rss",
    "https://www.wired.com/feed/category/ideas/latest/rss",
    "https://www.wired.com/feed/tag/ai/latest/rss",
    "https://theconversation.com/us/technology/articles.atom",
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
    "https://botsin.space/@APoD.rss"
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
    "https://api.ssrn.com/content/v1/journals/956475/papers/rss"
]

var feeds_long_list = [
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
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/ezra-klein/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/jamelle-bouie/rss.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
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
    "http://feeds.washingtonpost.com/rss/politics?itid=lk_inline_manual_2",
    "https://www.washingtonpost.com/arcio/rss/category/opinions/?itid=lk_inline_manual_7",
    "http://feeds.washingtonpost.com/rss/sports?itid=lk_inline_manual_20",
    "http://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "http://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_32",
    "http://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_36",
    "http://feeds.washingtonpost.com/rss/business?itid=lk_inline_manual_37",
    "http://feeds.washingtonpost.com/rss/lifestyle?itid=lk_inline_manual_38",
    "http://feeds.washingtonpost.com/rss/entertainment?itid=lk_inline_manual_39",
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
    "https://feeds.a.dj.com/rss/RSSOpinion.xml",
    "https://feeds.a.dj.com/rss/RSSWorldNews.xml",
    "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
    "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
    "https://feeds.a.dj.com/rss/RSSWSJD.xml",
    "https://feeds.a.dj.com/rss/RSSLifestyle.xml",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC6ZFN9Tx6xh-skXCuRHCDpQ", //PBS News Hour
    "https://feeds.bloomberg.com/markets/news.rss",
    "https://feeds.bloomberg.com/politics/news.rss",
    "https://feeds.bloomberg.com/technology/news.rss",
    "https://feeds.bloomberg.com/wealth/news.rss",
    "http://www.newyorker.com/feed/news",
    "http://www.newyorker.com/feed/culture",
    "http://www.newyorker.com/feed/humor",
    "http://www.newyorker.com/feed/tag/books/rss",
    "http://www.newyorker.com/feed/tech",
    "http://www.newyorker.com/feed/news/sporting-scene",
    "https://slate.com/feeds/news-and-politics.rss",
    "https://slate.com/feeds/technology.rss",
    "https://slate.com/feeds/business.rss",
    "https://slate.com/feeds/culture.rss",
    "https://slate.com/feeds/human-interest.rss",
    "https://theconversation.com/us/arts/articles.atom",
    "https://theconversation.com/us/business/articles.atom",
    "https://theconversation.com/us/education/articles.atom",
    "https://theconversation.com/us/environment/articles.atom",
    "https://theconversation.com/us/ethics/articles.atom",
    "https://theconversation.com/us/health/articles.atom",
    "https://theconversation.com/us/politics/articles.atom",
    "https://theconversation.com/us/technology/articles.atom",
    "https://theconversation.com/us/articles.atom",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCx_SjDi4CS5ALkWCS9ffldQ", //GBH News
    "https://www.wgbh.org/news/local.rss",
    "https://www.wgbh.org/news/politics.rss",
    "https://www.wgbh.org/news/education-news.rss",
    "https://www.wgbh.org/news/housing.rss",
    "https://www.wgbh.org/news/health.rss",
    "https://www.wgbh.org/news/commentary.rss",
    "https://www.masslive.com/arc/outboundfeeds/rss/?outputType=xml",
    "https://patch.com/feeds/aol/massachusetts/boston",
    "https://patch.com/feeds/aol/massachusetts/somerville",
    "https://patch.com/feeds/aol/massachusetts/cambridge",
    "https://patch.com/feeds/aol/massachusetts/arlington",
    "https://patch.com/feeds/aol/massachusetts/lexington",
    "https://feeds.arstechnica.com/arstechnica/features",
    "https://feeds.arstechnica.com/arstechnica/technology-lab",
    "https://feeds.arstechnica.com/arstechnica/tech-policy",
    "https://feeds.arstechnica.com/arstechnica/science",
    "https://feeds.arstechnica.com/arstechnica/features",
    "https://www.wired.com/feed/category/science/latest/rss",
    "https://www.wired.com/feed/category/ideas/latest/rss",
    "https://www.wired.com/feed/tag/ai/latest/rss",
    "https://www.wired.com/feed/rss",
    "http://gizmodo.com/vip.xml",
    "https://techcrunch.com/feed/",
    "https://pluralistic.net/feed/",
    "https://www.techdirt.com/techdirt_rss.xml",
    "https://masslawyersweekly.com/feed/",
    "https://www.lawnext.com/feed",
    "https://www.scotusblog.com/feed/",
    "https://buttondown.email/LawyerExMachina/rss",
    "https://api.ssrn.com/content/v1/journals/956475/papers/rss",
    "https://api.quantamagazine.org/feed/",
    "https://hnrss.org/best",
    "https://screenrant.com/feed/tag/star-trek/",
    "https://xkcd.com/rss.xml",
    "https://feeds.feedburner.com/mcsweeneys",
    "https://spacenews.com/feed/",
    "https://badastronomy.substack.com/feed/",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCYO_jab_esuFRV4b17AJtAw", //3blue1brown
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC415bOPUcGSamy543abLmRA", //Cleo Abram
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCHnyfMqiRRG1u-2MsSQLbXA", //Veritasium 
    "https://botsin.space/@APoD.rss"
]

test_feeds = [
    
    // CORS proxy doesn't resolve feed (entierly broken)
    //"http://rss.sciam.com/ScientificAmerican-Global",

    // Seems to "work" but there are no new posts
    //"https://lawprofblawg.wordpress.com/feed/",
    //"https://www.reutersagency.com/feed/?best-regions=north-america&post_type=best",
    //"https://www.smithsonianmag.com/rss/air-space-magazine/"

]

//default_feeds = test_feeds
