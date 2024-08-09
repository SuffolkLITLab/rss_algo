var default_feeds = [
    "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
    "https://www.washingtonpost.com/arcio/rss/category/politics/?itid=lk_inline_manual_2",
    "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
    "https://feeds.npr.org/1001/rss.xml", //news
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC6ZFN9Tx6xh-skXCuRHCDpQ", //PBS News Hour
    "https://theconversation.com/us/articles.atom",
    "https://www.newyorker.com/feed/rss",
    "https://feeds.arstechnica.com/arstechnica/index",
    //"https://feeds.feedburner.com/brainpickings/rss",
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
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/charles-m-blow/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/jamelle-bouie/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/david-brooks/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/frank-bruni/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/gail-collins/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/ross-douthat/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/maureen-dowd/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/thomas-l-friedman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/michelle-goldberg/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/ezra-klein/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/nicholas-kristof/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/paul-krugman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/farhad-manjoo/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/bret-stephens/rss.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
    "https://www.washingtonpost.com/arcio/rss/category/politics/?itid=lk_inline_manual_2",
    "https://www.washingtonpost.com/arcio/rss/category/opinions/?itid=lk_inline_manual_7",
    "https://feeds.washingtonpost.com/rss/sports?itid=lk_inline_manual_20",
    "https://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "https://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_32",
    "https://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_36",
    "https://feeds.washingtonpost.com/rss/business?itid=lk_inline_manual_37",
    "https://feeds.washingtonpost.com/rss/lifestyle?itid=lk_inline_manual_38",
    "https://feeds.washingtonpost.com/rss/entertainment?itid=lk_inline_manual_39",
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
    "https://www.latimes.com/world-nation/rss2.0.xml",
    // The Guardian
    "https://www.theguardian.com/us-news/rss",
    "https://www.theguardian.com/world/rss",
    "https://www.theguardian.com/us/environment/rss",
    "https://www.theguardian.com/us/soccer/rss",
    "https://www.theguardian.com/us/business/rss",
    "https://www.theguardian.com/us/technology/rss",
    "https://www.theguardian.com/science/rss",
    "https://www.theguardian.com/us-news/series/the-fight-for-democracy/rss"
]

var condenast_feeds = [
    "https://www.newyorker.com/feed/rss",
    "https://www.vanityfair.com/feed/rss",
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
    "https://www.newyorker.com/feed/rss",
    "https://www.vanityfair.com/feed/rss",
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
    "https://api.quantamagazine.org/feed/",
    "https://nautil.us/feed/",
    "https://aeon.co/philosophy.rss",
    "https://aeon.co/science.rss",
    "https://aeon.co/psychology.rss",
    "https://aeon.co/society.rss",
    "https://aeon.co/culture.rss"
]

var scifi_shorts_feed = [
    "https://clarkesworldmagazine.com/feed/",
    //"https://www.lightspeedmagazine.com/rss-2/",
    "https://escapepod.org/feed/podcast/"
]

var geeek_feeds = [
    "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
    "https://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "https://www.latimes.com/science/rss2.0.xml",
    "https://feeds.npr.org/1007/rss.xml", //science
    "https://feeds.a.dj.com/rss/RSSWSJD.xml", // Tech
    //"https://www.newyorker.com/feed/tech",
    "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    "https://feeds.bbci.co.uk/news/technology/rss.xml",
    "https://www.theguardian.com/us/technology/rss",
    "https://www.theguardian.com/science/rss",
    "https://www.economist.com/science-and-technology/rss.xml",
    "https://feeds.bloomberg.com/technology/news.rss",
    "https://feeds.arstechnica.com/arstechnica/technology-lab",
    "https://feeds.arstechnica.com/arstechnica/tech-policy",
    "https://feeds.arstechnica.com/arstechnica/science",
    "https://feeds.arstechnica.com/arstechnica/features",
    "https://www.technologyreview.com/feed/",
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
    "https://www.ailawlibrarians.com/feed/",
    "https://slate.com/feeds/technology.rss",
    "https://gizmodo.com/feed",
    //"https://www.404media.co/rss",
    "https://techcrunch.com/feed/",
    "https://www.techdirt.com/feed/",
    //"https://www.theinformation.com/feed",
    "https://pluralistic.net/feed/",
    "https://xkcd.com/rss.xml",
    "https://feeds.feedburner.com/mcsweeneys",
    "https://spacenews.com/feed/",
    "https://hnrss.org/best",
    "https://api.quantamagazine.org/feed/",
    "https://nautil.us/feed/",
    "https://aeon.co/philosophy.rss",
    "https://aeon.co/science.rss",
    "https://aeon.co/psychology.rss",
    "https://rss.beehiiv.com/feeds/t0Uscv6JDz.xml",
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCYO_jab_esuFRV4b17AJtAw", //3blue1brown
    "https://www.youtube.com/feeds/videos.xml?channel_id=UC415bOPUcGSamy543abLmRA", //Cleo Abram
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCHnyfMqiRRG1u-2MsSQLbXA", //Veritasium 
    "https://botsin.space/@APoD.rss",
    "https://tor.com/feed"
]

geeek_feeds = geeek_feeds.concat(scifi_shorts_feed)

// .edu domains linked to from https://www.americanbar.org/groups/legal_education/resources/aba_approved_law_schools/in_alphabetical_order/
var law_schools = [
    "uakron.edu",
    "law.ua.edu",
    "albanylaw.edu",
    "wcl.american.edu",
    "asl.edu",
    "law.arizona.edu",
    "asu.edu",
    "uark.edu",
    "johnmarshall.edu",
    "avemarialaw.edu",
    "ubalt.edu",
    "barry.edu",
    "baylor.edu",
    "belmont.edu",
    "bc.edu",
    "bu.edu",
    "law.byu.edu",
    "brooklaw.edu",
    "law.buffalo.edu",
    "law.berkeley.edu",
    "law.ucdavis.edu",
    "uchastings.edu",
    "law.uci.edu",
    "law.ucla.edu",
    "cwsl.edu",
    "campbell.edu",
    "law.capital.edu",
    "case.edu",
    "chapman.edu",
    "charlestonlaw.edu",
    "law.uchicago.edu",
    "kentlaw.edu",
    "law.uc.edu",
    "law.cuny.edu",
    "law.csuohio.edu",
    "colorado.edu",
    "law.columbia.edu",
    "law.uconn.edu",
    "lawschool.cornell.edu",
    "creighton.edu",
    "udayton.edu",
    "law.du.edu",
    "depaul.edu",
    "udmercy.edu",
    "udc.edu",
    "law.drake.edu",
    "drexel.edu",
    "law.duke.edu",
    "duq.edu",
    "elon.edu",
    "law.emory.edu",
    "faulkner.edu",
    "law.ufl.edu",
    "fcsl.edu",
    "famu.edu",
    "fcsl.edu",
    "fiu.edu",
    "law.fsu.edu",
    "fordham.edu",
    "law.gmu.edu",
    "law.georgetown.edu",
    "law.gwu.edu",
    "law.uga.edu",
    "georgetown.edu",
    "gsu.edu",
    "ggu.edu",
    "law.gonzaga.edu",
    "law.harvard.edu",
    "law.hawaii.edu",
    "hofstra.edu",
    "law.uh.edu",
    "howard.edu",
    "uidaho.edu",
    "uic.edu",
    "illinois.edu",
    "indiana.edu",
    "iu.edu",
    "derecho.inter.edu",
    "uiowa.edu",
    "uidaho.edu",
    "law.ku.edu",
    "uky.edu",
    "liberty.edu",
    "lmunet.edu",
    "lclark.edu",
    "law.lsu.edu",
    "law.louisville.edu",
    "luc.edu",
    "lls.edu",
    "loyno.edu",
    "maine.edu",
    "marquette.edu",
    "law.umaryland.edu",
    "umassd.edu",
    "mcgeorge.edu",
    "memphis.edu",
    "mercer.edu",
    "law.miami.edu",
    "law.msu.edu",
    "law.umich.edu",
    "law.umn.edu",
    "mc.edu",
    "law.olemiss.edu",
    "law.missouri.edu",
    "umkc.edu",
    "umt.edu",
    "unl.edu",
    "unlv.edu",
    "nesl.edu",
    "unm.edu",
    "unh.edu",
    "nyls.edu",
    "law.nyu.edu",
    "unc.edu",
    "nccu.edu",
    "law.und.edu",
    "northeastern.edu",
    "niu.edu",
    "nku.edu",
    "law.northwestern.edu",
    "nd.edu",
    "law.nova.edu",
    "onu.edu",
    "osu.edu",
    "law.ou.edu",
    "okcu.edu",
    "uoregon.edu",
    "law.pace.edu",
    "law.upenn.edu",
    "psu.edu",
    "pennstatelaw.psu.edu",
    "pepperdine.edu",
    "law.pitt.edu",
    "pucpr.edu",
    "uprrp.edu",
    "quinnipiac.edu",
    "regent.edu",
    "richmond.edu",
    "rwu.edu",
    "law.rutgers.edu",
    "stjohns.edu",
    "slu.edu",
    "stmarytx.edu",
    "stu.edu",
    "stthomas.edu",
    "samford.edu",
    "sandiego.edu",
    "usfca.edu",
    "scu.edu",
    "law.seattleu.edu",
    "shu.edu",
    "law.sc.edu",
    "usd.edu",
    "stcl.edu",
    "sulc.edu",
    "usc.edu",
    "siu.edu",
    "law.smu.edu",
    "stcl.edu",
    "swlaw.edu",
    "law.stanford.edu",
    "stetson.edu",
    "suffolk.edu",
    "law.syr.edu",
    "law.temple.edu",
    "law.utk.edu",
    "utexas.edu",
    "tamu.edu",
    "tsulaw.edu",
    "law.ttu.edu",
    "cooley.edu",
    "utoledo.edu",
    "tourolaw.edu",
    "law.tulane.edu",
    "utulsa.edu",
    "untdallas.edu",
    "law.utah.edu",
    "vanderbilt.edu",
    "vermontlaw.edu",
    "law.villanova.edu",
    "law.virginia.edu",
    "law.wfu.edu",
    "wlu.edu",
    "law.washington.edu",
    "wustl.edu",
    "law.wayne.edu",
    "wne.edu",
    "wsulaw.edu",
    "law.wvu.edu",
    "widener.edu",
    "widener.edu",
    "wm.edu",
    "law.wisc.edu",
    "uwyo.edu",
    "law.yale.edu",
    "cardozo.yu.edu"
    ]

//  domains found at https://network.bepress.com/institutions/law/ with /recent.rss appended to the end
var dc_law_feeds = [
    "https://digitalcommons.acu.edu/recent.rss",
    "https://arc.accesslex.org/recent.rss",
    "https://institutionalrepository.aah.org/recent.rss",
    "https://ecommons.aku.edu/recent.rss",
    "https://scholar.afit.edu/recent.rss",
    "https://digitalcommons.wcl.american.edu/recent.rss",
    "https://fount.aucegypt.edu/recent.rss",
    "https://digitalcommons.andrews.edu/recent.rss",
    "https://aura.antioch.edu/recent.rss",
    "https://scholarworks.arcadia.edu/recent.rss",
    "https://place.asburyseminary.edu/recent.rss",
    "https://jle.aals.org/recent.rss",
    "https://digitalcommons.aaru.edu.jo/recent.rss",
    "https://digitalcommons.assumption.edu/recent.rss",
    "https://archium.ateneo.edu/recent.rss",
    "https://idun.augsburg.edu/recent.rss",
    "https://digitalcommons.augustana.edu/recent.rss",
    "https://www.journal.acorn.org.au/recent.rss",
    "https://research.acer.edu.au/recent.rss",
    "https://research.avondale.edu.au/recent.rss",
    "https://law.bepress.com/recent.rss",
    "https://digitalcommons.bard.edu/recent.rss",
    "https://lawpublications.barry.edu/recent.rss",
    "https://digitalcommons.bau.edu.lb/recent.rss",
    "https://scholarworks.bellarmine.edu/recent.rss",
    "https://repository.belmont.edu/recent.rss",
    "https://scholars.bentley.edu/recent.rss",
    "https://orb.binghamton.edu/recent.rss",
    "https://scholarworks.boisestate.edu/recent.rss",
    "https://scholarship.law.bu.edu/recent.rss",
    "https://digitalcommons.bowdoin.edu/recent.rss",
    "https://scholarworks.bgsu.edu/recent.rss",
    "https://digitalcommons.bridgewater.edu/recent.rss",
    "https://vc.bridgew.edu/recent.rss",
    "https://scholarsarchive.byu.edu/recent.rss",
    "https://digitalcommons.law.byu.edu/recent.rss",
    "https://brooklynworks.brooklaw.edu/recent.rss",
    "https://digitalcommons.bryant.edu/recent.rss",
    "https://digitalcommons.bucknell.edu/recent.rss",
    "https://digitalcommons.butler.edu/recent.rss",
    "https://digitalcommons.humboldt.edu/recent.rss",
    "https://digitalcommons.calpoly.edu/recent.rss",
    "https://digitalcommons.csumb.edu/recent.rss",
    "https://scholarworks.lib.csusb.edu/recent.rss",
    "https://scholarlycommons.law.cwsl.edu/recent.rss",
    "https://digitalcommons.calvin.edu/recent.rss",
    "https://scholarship.law.campbell.edu/recent.rss",
    "https://scholarlycommons.law.case.edu/recent.rss",
    "https://digitalcommons.cedarville.edu/recent.rss",
    "https://cbe.miis.edu/recent.rss",
    "https://digitalcommons.centracare.com/recent.rss",
    "https://dc.cbn.gov.ng/recent.rss",
    "https://digitalcommons.cwu.edu/recent.rss",
    "https://digitalcommons.chapman.edu/recent.rss",
    //"https://chapmanlaw.works.bepress.com/recent.rss", //unreadable feed
    "https://charlestonlaw.works.bepress.com/recent.rss",
    "https://scholarship.kentlaw.iit.edu/recent.rss",
    "https://bulletinofcas.researchcommons.org/recent.rss",
    "https://digital.car.chula.ac.th/recent.rss",
    "https://academicworks.cuny.edu/recent.rss",
    "https://scholarship.claremont.edu/recent.rss",
    "https://commons.clarku.edu/recent.rss",
    "https://tigerprints.clemson.edu/recent.rss",
    "https://engagedscholarship.csuohio.edu/recent.rss",
    "https://digitalcommons.coastal.edu/recent.rss",
    "https://digitalcommons.colby.edu/recent.rss",
    "https://digitalcommons.csbsju.edu/recent.rss",
    "https://crossworks.holycross.edu/recent.rss",
    "https://digitalcommons.collin.edu/recent.rss",
    "https://digitalcommons.colum.edu/recent.rss",
    "https://scholarship.law.columbia.edu/recent.rss",
    "https://digitalcommons.csp.edu/recent.rss",
    "https://digitalcommons.conncoll.edu/recent.rss",
    "https://scholarship.law.cornell.edu/recent.rss",
    "https://digitalcommons.daemen.edu/recent.rss",
    "https://scholar.dsu.edu/recent.rss",
    "https://digitalcommons.dartmouth.edu/recent.rss",
    "https://animorepository.dlsu.edu.ph/recent.rss",
    "https://via.library.depaul.edu/recent.rss",
    "https://scholarship.depauw.edu/recent.rss",
    "https://library.dpird.wa.gov.au/recent.rss",
    "https://scholar.dominican.edu/recent.rss",
    "https://digitalcollections.dordt.edu/recent.rss",
    //"https://drexellaw.works.bepress.com/recent.rss", //unreadable feed
    "https://scholarship.law.duke.edu/recent.rss",
    "https://dsc.duq.edu/recent.rss",
    //"https://duquesnelaw.works.bepress.com/recent.rss", //unreadable feed
    "https://dc.etsu.edu/recent.rss",
    "https://thekeep.eiu.edu/recent.rss",
    "https://encompass.eku.edu/recent.rss",
    "https://commons.emich.edu/recent.rss",
    "https://dc.ewu.edu/recent.rss",
    "https://ro.ecu.edu.au/recent.rss",
    "https://commons.erau.edu/recent.rss",
    "https://scholarlycommons.law.emory.edu/recent.rss",
    "https://digitalcommons.uncfsu.edu/recent.rss",
    "https://commons.law.famu.edu/recent.rss",
    "https://digitalcommons.fiu.edu/recent.rss",
    "https://ecollections.law.fiu.edu/recent.rss",
    "https://ir.law.fsu.edu/recent.rss",
    "https://griffinshare.fontbonne.edu/recent.rss",
    "https://ir.lawnet.fordham.edu/recent.rss",
    "https://research.library.fordham.edu/recent.rss",
    "https://scholars.fhsu.edu/recent.rss",
    "https://fuse.franklin.edu/recent.rss",
    "https://oer.galileo.usg.edu/recent.rss",
    "https://digitalcommons.gardner-webb.edu/recent.rss",
    "https://digitalcommons.georgefox.edu/recent.rss",
    "https://scholarship.law.gwu.edu/recent.rss",
    "https://scholarship.law.georgetown.edu/recent.rss",
    "https://digitalcommons.gaacademy.org/recent.rss",
    "https://kb.gcsu.edu/recent.rss",
    "https://digitalcommons.georgiasouthern.edu/recent.rss",
    "https://scholarworks.gsu.edu/recent.rss",
    "https://readingroom.law.gsu.edu/recent.rss",
    "https://cupola.gettysburg.edu/recent.rss",
    "https://digitalcommons.law.ggu.edu/recent.rss",
    "https://repository.gonzaga.edu/recent.rss",
    "https://opus.govst.edu/recent.rss",
    "https://scholarworks.gvsu.edu/recent.rss",
    "https://helindigitalcommons.org/recent.rss",
    "https://digitalcommons.hamilton.edu/recent.rss",
    "https://digitalcommons.hamline.edu/recent.rss",
    "https://scholarworks.harding.edu/recent.rss",
    "https://hsrc.himmelfarb.gwu.edu/recent.rss",
    "https://digitalcommons.hollins.edu/recent.rss",
    "https://dh.howard.edu/recent.rss",
    "https://digitalcommons.imsa.edu/recent.rss",
    "https://ir.library.illinoisstate.edu/recent.rss",
    "https://digitalcommons.iwu.edu/recent.rss",
    "https://ir.iba.edu.pk/recent.rss",
    "https://gensoken.toyo.ac.jp/recent.rss",
    "https://www.interscience.in/recent.rss",
    "https://digitalcommons.jsu.edu/recent.rss",
    "https://commons.lib.jmu.edu/recent.rss",
    "https://scholarsarchive.jwu.edu/recent.rss",
    "https://scholarspace.jccc.edu/recent.rss",
    "https://www.jpsa.ac.ae/recent.rss",
    "https://www.steps-journal.com/recent.rss",
    "https://newprairiepress.org/recent.rss",
    "https://digitalcommons.kean.edu/recent.rss",
    "https://digitalcommons.kennesaw.edu/recent.rss",
    "https://research.library.kutztown.edu/recent.rss",
    "https://digitalcommons.lasalle.edu/recent.rss",
    "https://dclu.langston.edu/recent.rss",
    "https://lux.lawrence.edu/recent.rss",
    "https://digitalcommons.lesley.edu/recent.rss",
    "https://lawcommons.lclark.edu/recent.rss",
    "https://digitalcommons.liberty.edu/recent.rss",
    "https://digitalcommons.lmunet.edu/recent.rss",
    "https://lincolnlaw.works.bepress.com/recent.rss",
    "https://bluetigercommons.lincolnu.edu/recent.rss",
    "https://digitalcommons.lindenwood.edu/recent.rss",
    "https://digitalcommons.linfield.edu/recent.rss",
    "https://commons.ln.edu.hk/recent.rss",
    "https://digitalcollections.lipscomb.edu/recent.rss",
    "https://scholarsrepository.llu.edu/recent.rss",
    "https://digitalcommons.liu.edu/recent.rss",
    "https://digitalcommons.longwood.edu/recent.rss",
    "https://digitalcommons.lsu.edu/recent.rss",
    "https://digitalcommons.law.lsu.edu/recent.rss",
    "https://digitalcommons.latech.edu/recent.rss",
    "https://digitalcommons.lmu.edu/recent.rss",
    "https://ecommons.luc.edu/recent.rss",
    "https://lawecommons.luc.edu/recent.rss",
    "https://digitalcommons.luthersem.edu/recent.rss",
    "https://spiral.lynn.edu/recent.rss",
    "https://digitalcommons.macalester.edu/recent.rss",
    "https://knowledgeconnection.mainehealth.org/recent.rss",
    "https://impressions.manipal.edu/recent.rss",
    "https://epublications.marquette.edu/recent.rss",
    "https://scholarship.law.marquette.edu/recent.rss",
    "https://mds.marshall.edu/recent.rss",
    "https://www.repository.law.indiana.edu/recent.rss",
    "https://scholarlycommons.law.hofstra.edu/recent.rss",
    "https://digitalcommons.law.mercer.edu/recent.rss",
    "https://scholarworks.merrimack.edu/recent.rss",
    "https://mosaic.messiah.edu/recent.rss",
    "https://digitalcommons.mtu.edu/recent.rss",
    //"https://uzjournals.edu.uz/recent.rss", //unreadable feed
    "https://cornerstone.lib.mnsu.edu/recent.rss",
    "https://digitalcommons.misericordia.edu/recent.rss",
    "https://dc.law.mc.edu/recent.rss",
    "https://scholarsjunction.msstate.edu/recent.rss",
    "https://athenacommons.muw.edu/recent.rss",
    "https://bearworks.missouristate.edu/recent.rss",
    "https://scholarsmine.mst.edu/recent.rss",
    "https://open.mitchellhamline.edu/recent.rss",
    "https://digitalcommons.molloy.edu/recent.rss",
    "https://digitalcommons.mtech.edu/recent.rss",
    "https://digitalcommons.montclair.edu/recent.rss",
    "https://scholarworks.moreheadstate.edu/recent.rss",
    "https://sword.cit.ie/recent.rss",
    "https://digitalcommons.murraystate.edu/recent.rss",
    "https://repository.nls.ac.in/recent.rss",
    "https://digitalcommons.nl.edu/recent.rss",
    "https://digitalcommons.njit.edu/recent.rss",
    "https://digitalcommons.nyls.edu/recent.rss",
    "https://digital.library.ncat.edu/recent.rss",
    "https://archives.law.nccu.edu/recent.rss",
    "https://neiudc.neiu.edu/recent.rss",
    "https://huskiecommons.lib.niu.edu/recent.rss",
    "https://commons.nmu.edu/recent.rss",
    "https://scholarlycommons.law.northwestern.edu/recent.rss",
    "https://scholarship.law.nd.edu/recent.rss",
    "https://nsuworks.nova.edu/recent.rss",
    "https://digitalcommons.onu.edu/recent.rss",
    "https://ohioopen.library.ohio.edu/recent.rss",
    "https://digitalcommons.owu.edu/recent.rss",
    "https://oculaw.works.bepress.com/recent.rss",
    "https://digitalcommons.odu.edu/recent.rss",
    "https://digitalcommons.olivet.edu/recent.rss",
    "https://digitalshowcase.oru.edu/recent.rss",
    "https://digitalcommons.osgoode.yorku.ca/recent.rss",
    "https://digitalcommons.otterbein.edu/recent.rss",
    "https://scholarlycommons.obu.edu/recent.rss",
    "https://digitalcommons.pace.edu/recent.rss",
    "https://spark.parkland.edu/recent.rss",
    "https://ideas.dickinsonlaw.psu.edu/recent.rss",
    "https://elibrary.law.psu.edu/recent.rss",
    "https://digitalcommons.pepperdine.edu/recent.rss",
    "https://digitalcommons.pittstate.edu/recent.rss",
    "https://knowledgecommons.popcouncil.org/recent.rss",
    "https://pdxscholar.library.pdx.edu/recent.rss",
    "https://digitalcommons.providence.edu/recent.rss",
    "https://docs.lib.purdue.edu/recent.rss",
    "https://epublications.regis.edu/recent.rss",
    "https://digitalcommons.ric.edu/recent.rss",
    "https://digitalcommons.risd.edu/recent.rss",
    "https://scholarworks.rit.edu/recent.rss",
    "https://docs.rwu.edu/recent.rss",
    "https://scholarship.rollins.edu/recent.rss",
    "https://ecommons.roseman.edu/recent.rss",
    "https://rdw.rowan.edu/recent.rss",
    "https://rutgerslawnewark.works.bepress.com/recent.rss",
    "https://www.ebrjournal.net/recent.rss",
    "https://digitalcollections.sit.edu/recent.rss",
    "https://dc.law.utah.edu/recent.rss",
    "https://knightscholar.geneseo.edu/recent.rss",
    "https://digitalcommons.sacredheart.edu/recent.rss",
    "https://scholarship.law.slu.edu/recent.rss",
    "https://digitalcommons.stmarys-ca.edu/recent.rss",
    "https://digitalcommons.salve.edu/recent.rss",
    "https://scholarworks.sjsu.edu/recent.rss",
    "https://digitalcommons.law.scu.edu/recent.rss",
    "https://scholarcommons.scu.edu/recent.rss",
    "https://digitalcommons.slc.edu/recent.rss",
    "https://digitalcommons.schulichlaw.dal.ca/recent.rss",
    "https://digitalcommons.spu.edu/recent.rss",
    "https://lawpublications.seattleu.edu/recent.rss",
    "https://scholarship.shu.edu/recent.rss",
    "https://source.sheridancollege.ca/recent.rss",
    "https://ink.library.smu.edu.sg/recent.rss",
    "https://creativematter.skidmore.edu/recent.rss",
    "https://digitalcommons.sia.edu/recent.rss",
    "https://openprairie.sdstate.edu/recent.rss",
    "https://firescholars.seu.edu/recent.rss",
    "https://knowledge.e.southern.edu/recent.rss",
    "https://opensiuc.lib.siu.edu/recent.rss",
    "https://spark.siue.edu/recent.rss",
    "https://scholar.smu.edu/recent.rss",
    "https://digitalcommons.subr.edu/recent.rss",
    "https://sophia.stkate.edu/recent.rss",
    "https://repository.stcloudstate.edu/recent.rss",
    "https://fisherpub.sjf.edu/recent.rss",
    "https://scholar.stjohns.edu/recent.rss",
    "https://scholarship.law.stjohns.edu/recent.rss",
    "https://commons.stmarytx.edu/recent.rss",
    "https://scholarship.stu.edu/recent.rss",
    "https://digitalcommons.buffalostate.edu/recent.rss",
    "https://scholarworks.sfasu.edu/recent.rss",
    "https://soar.stonehill.edu/recent.rss",
    "https://commons.library.stonybrook.edu/recent.rss",
    "https://dc.suffolk.edu/recent.rss",
    "https://works.swarthmore.edu/recent.rss",
    "https://surface.syr.edu/recent.rss",
    "https://arrow.tudublin.ie/recent.rss",
    "https://digitalscholarship.tnstate.edu/recent.rss",
    "https://scholarship.law.tamu.edu/recent.rss",
    "https://digitalcommons.tamuc.edu/recent.rss",
    "https://digitalcommons.tamusa.edu/recent.rss",
    "https://digitalscholarship.tsu.edu/recent.rss",
    "https://pxjournal.org/recent.rss",
    "https://buescholar.bue.edu.eg/recent.rss",
    "https://scholarship.law.edu/recent.rss",
    "https://openworks.wooster.edu/recent.rss",
    "https://mouseion.jax.org/recent.rss",
    "https://commons.allard.ubc.ca/recent.rss",
    "https://digitalcommons.library.tmc.edu/recent.rss",
    "https://ideaexchange.uakron.edu/recent.rss",
    "https://digitalcommons.library.umaine.edu/recent.rss",
    "https://researchonline.nd.edu.au/recent.rss",
    "https://repository.usfca.edu/recent.rss",
    "https://aquila.usm.edu/recent.rss",
    "https://falconcommons.utpb.edu/recent.rss",
    "https://jdc.jefferson.edu/recent.rss",
    "https://touroscholar.touro.edu/recent.rss",
    "https://digitalcommons.tourolaw.edu/recent.rss",
    "https://digitalrepository.trincoll.edu/recent.rss",
    "https://tuspubs.tuskegee.edu/recent.rss",
    "https://digital-commons.usnwc.edu/recent.rss",
    "https://repository.uclawsf.edu/recent.rss",
    "https://jnf.ufm.edu/recent.rss",
    "https://repository.law.uic.edu/recent.rss",
    "https://digitalcommons.law.uidaho.edu/recent.rss",
    "https://digitalcommons.umassglobal.edu/recent.rss",
    "https://press.armywarcollege.edu/recent.rss",
    "https://digitalworks.union.edu/recent.rss",
    "https://scholarworks.uaeu.ac.ae/recent.rss",
    //"https://digitalcommons.usmalibrary.org/recent.rss", //unreadable feed
    "https://ciencia.lasalle.edu.co/recent.rss",
    "https://scholarhub.ui.ac.id/recent.rss",
    "https://scholarsarchive.library.albany.edu/recent.rss",
    "https://digitalcommons.law.buffalo.edu/recent.rss",
    "https://knowledgecenter.ubt-uni.net/recent.rss",
    "https://scholarship.law.ua.edu/recent.rss",
    "https://louis.uah.edu/recent.rss",
    "https://lawrepository.ualr.edu/recent.rss",
    "https://scholarworks.uark.edu/recent.rss",
    "https://scholarworks.law.ubalt.edu/recent.rss",
    "https://scholarship.law.uci.edu/recent.rss",
    "https://stars.library.ucf.edu/recent.rss",
    "https://chicagounbound.uchicago.edu/recent.rss",
    "https://scholarship.law.uc.edu/recent.rss",
    "https://scholar.law.colorado.edu/recent.rss",
    "https://opencommons.uconn.edu/recent.rss",
    "https://ecommons.udayton.edu/recent.rss",
    "https://digitalcommons.du.edu/recent.rss",
    "https://scholarship.law.ufl.edu/recent.rss",
    "https://digitalcommons.law.uga.edu/recent.rss",
    "https://uknowledge.uky.edu/recent.rss",
    "https://repository.ulm.edu/recent.rss",
    "https://ir.library.louisville.edu/recent.rss",
    "https://digitalshowcase.lynchburg.edu/recent.rss",
    "https://digitalcommons.mainelaw.maine.edu/recent.rss",
    "https://scholar.umw.edu/recent.rss",
    "https://digitalcommons.law.umaryland.edu/recent.rss",
    "https://scholarworks.umass.edu/recent.rss",
    "https://scholarworks.umb.edu/recent.rss",
    "https://scholarship.law.umassd.edu/recent.rss",
    "https://digitalcommons.memphis.edu/recent.rss",
    //"https://scholarlyrepository.miami.edu/recent.rss", //unreadable feed
    "https://repository.law.miami.edu/recent.rss",
    "https://repository.law.umich.edu/recent.rss",
    "https://scholarship.law.umn.edu/recent.rss",
    "https://egrove.olemiss.edu/recent.rss",
    "https://scholarship.law.missouri.edu/recent.rss",
    "https://irl.umsl.edu/recent.rss",
    "https://irlaw.umkc.edu/recent.rss",
    "https://scholarworks.umt.edu/recent.rss",
    "https://digitalcommons.unl.edu/recent.rss",
    "https://digitalcommons.unmc.edu/recent.rss",
    "https://openspaces.unk.edu/recent.rss",
    "https://digitalcommons.unomaha.edu/recent.rss",
    "https://digitalscholarship.unlv.edu/recent.rss",
    "https://scholars.law.unlv.edu/recent.rss",
    "https://dune.une.edu/recent.rss",
    "https://scholars.unh.edu/recent.rss",
    "https://digitalcommons.newhaven.edu/recent.rss",
    "https://digitalrepository.unm.edu/recent.rss",
    "https://scholarworks.uno.edu/recent.rss",
    "https://scholarship.law.unc.edu/recent.rss",
    //"https://commons.und.edu/recent.rss",  //unreadable feed
    "https://digitalcommons.unf.edu/recent.rss",
    "https://digscholarship.unco.edu/recent.rss",
    "https://scholarworks.uni.edu/recent.rss",
    "https://digitalcommons.law.ou.edu/recent.rss",
    //"https://repository.upenn.edu/recent.rss", //unreadable feed
    "https://scholarship.law.upenn.edu/recent.rss",
    "https://scholarship.law.pitt.edu/recent.rss",
    //"https://pilotscholars.up.edu/recent.rss", //unreadable feed
    "https://soundideas.pugetsound.edu/recent.rss",
    "https://digitalcommons.uri.edu/recent.rss",
    "https://scholarship.richmond.edu/recent.rss",
    "https://digital.sandiego.edu/recent.rss",
    "https://scholarcommons.sc.edu/recent.rss",
    "https://red.library.usd.edu/recent.rss",
    "https://digitalcommons.usf.edu/recent.rss",
    "https://digitalcommons.usm.maine.edu/recent.rss",
    "https://soar.usa.edu/recent.rss",
    "https://ir.stthomas.edu/recent.rss",
    "https://ir.law.utk.edu/recent.rss",
    "https://scholar.utc.edu/recent.rss",
    "https://trace.tennessee.edu/recent.rss",
    "https://scholarworks.utrgv.edu/recent.rss",
    "https://scholarworks.utep.edu/recent.rss",
    "https://scholarworks.uttyler.edu/recent.rss",
    "https://digitalcommons.law.utulsa.edu/recent.rss",
    "https://scholarworks.uvm.edu/recent.rss",
    "https://digitalcommons.law.uw.edu/recent.rss",
    "https://digitalcommons.tacoma.uw.edu/recent.rss",
    "https://scholar.uwindsor.ca/recent.rss",
    "https://dc.uwm.edu/recent.rss",
    "https://ro.uow.edu.au/recent.rss",
    "https://scholarship.law.uwyo.edu/recent.rss",
    "https://digitalcommons.law.udc.edu/recent.rss",
    "https://athenaeum.uiw.edu/recent.rss",
    "https://scholarlycommons.pacific.edu/recent.rss",
    "https://www.ukdr.uplb.edu.ph/recent.rss",
    "https://digitalcommons.ursinus.edu/recent.rss",
    "https://digitalcommons.usu.edu/recent.rss",
    "https://scholar.valpo.edu/recent.rss",
    "https://scholarship.law.vanderbilt.edu/recent.rss",
    "https://digitalcommons.law.villanova.edu/recent.rss",
    "https://scholarscompass.vcu.edu/recent.rss",
    "https://commons.vccs.edu/recent.rss",
    "https://research.upjohn.org/recent.rss",
    "https://scholarworks.waldenu.edu/recent.rss",
    "https://openscholarship.wustl.edu/recent.rss",
    "https://scholarlycommons.law.wlu.edu/recent.rss",
    "https://digitalcommons.wayne.edu/recent.rss",
    "https://www.wellbeingintlstudiesrepository.org/recent.rss",
    "https://digitalcommons.wcupa.edu/recent.rss",
    "https://researchrepository.wvu.edu/recent.rss",
    "https://digitalcommons.wku.edu/recent.rss",
    "https://scholarworks.wmich.edu/recent.rss",
    "https://digitalcommons.law.wne.edu/recent.rss",
    //"https://ir.lib.uwo.ca/recent.rss", //unreadable feed
    "https://cedar.wwu.edu/recent.rss",
    "https://poetcommons.whittier.edu/recent.rss",
    "https://commonwealthlawwidener.works.bepress.com/recent.rss",
    "https://scholars.wlu.ca/recent.rss",
    "https://scholarworks.wm.edu/recent.rss",
    "https://scholarship.law.wm.edu/recent.rss",
    "https://openriver.winona.edu/recent.rss",
    "https://digitalcommons.winthrop.edu/recent.rss",
    "https://digitalcommons.wofford.edu/recent.rss",
    "https://commons.wmu.se/recent.rss",
    "https://corescholar.libraries.wright.edu/recent.rss",
    "https://digitalcommons.xula.edu/recent.rss",
    "https://elischolar.library.yale.edu/recent.rss",
    "https://larc.cardozo.yu.edu/recent.rss",
    "https://zuscholars.zu.ac.ae/recent.rss"
    ]

function filterListByStrings(A, B) {
    // Initialize an empty list C to store the filtered items
    let C = [];
    
    // Iterate through each item in list A
    for (let itemA of A) {
        // Flag to check if itemA contains any string from list B
        let containsStringFromB = false;
    
        // Iterate through each string in list B
        for (let stringB of B) {
        // Check if itemA contains the current string from B
        if (itemA.includes(stringB)) {
            containsStringFromB = true;
            break; // No need to check further once a match is found
        }
        }
    
        // If itemA contains any string from B, add it to list C
        if (containsStringFromB) {
        C.push(itemA);
        }
    }
    
    return C;
}
    
var law_school_feeds = filterListByStrings(dc_law_feeds, law_schools);

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
    "https://www.nytimes.com/svc/collections/v1/publish/www.nytimes.com/column/bret-stephens/rss.xml",    
    "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
    "https://www.washingtonpost.com/arcio/rss/category/politics/?itid=lk_inline_manual_2",
    "https://www.washingtonpost.com/arcio/rss/category/opinions/?itid=lk_inline_manual_7",
    //"https://feeds.washingtonpost.com/rss/sports?itid=lk_inline_manual_20",
    "https://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "https://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_32",
    "https://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_36",
    "https://feeds.washingtonpost.com/rss/business?itid=lk_inline_manual_37",
    //"https://feeds.washingtonpost.com/rss/lifestyle?itid=lk_inline_manual_38",
    "https://feeds.washingtonpost.com/rss/entertainment?itid=lk_inline_manual_39",
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
    //"https://masslawyersweekly.com/feed/", 
    "https://www.lawnext.com/feed",
    "https://www.ailawlibrarians.com/feed/",
    "https://www.scotusblog.com/feed/",
    "https://buttondown.email/LawyerExMachina/rss",
    "https://abovethelaw.com/feed/"
]

//suffolk_law_feeds = suffolk_law_feeds.concat(law_school_feeds)
    
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
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/charles-m-blow/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/jamelle-bouie/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/david-brooks/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/frank-bruni/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/gail-collins/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/ross-douthat/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/maureen-dowd/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/thomas-l-friedman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/michelle-goldberg/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/ezra-klein/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/nicholas-kristof/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/paul-krugman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/farhad-manjoo/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/bret-stephens/rss.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
    // Vanity Fair
    "https://www.vanityfair.com/feed/rss",
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
    "https://feeds.bbci.co.uk/news/world/rss.xml",
    "https://feeds.bbci.co.uk/news/uk/rss.xml",
    "https://feeds.bbci.co.uk/news/business/rss.xml",
    "https://feeds.bbci.co.uk/news/politics/rss.xml",
    "https://feeds.bbci.co.uk/news/health/rss.xml",
    "https://feeds.bbci.co.uk/news/education/rss.xml",
    "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    "https://feeds.bbci.co.uk/news/technology/rss.xml",
    "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml",
    // The Guardian
    "https://www.theguardian.com/us-news/rss",
    "https://www.theguardian.com/world/rss",
    "https://www.theguardian.com/us/environment/rss",
    "https://www.theguardian.com/us/soccer/rss",
    "https://www.theguardian.com/us/business/rss",
    "https://www.theguardian.com/us/technology/rss",
    "https://www.theguardian.com/science/rss",
    "https://www.theguardian.com/us-news/series/the-fight-for-democracy/rss",
    // Washington Post
    "https://www.washingtonpost.com/arcio/rss/category/politics/?itid=lk_inline_manual_2",
    "https://www.washingtonpost.com/arcio/rss/category/opinions/?itid=lk_inline_manual_7",
    "https://feeds.washingtonpost.com/rss/sports?itid=lk_inline_manual_20",
    "https://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "https://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_32",
    "https://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_36",
    "https://feeds.washingtonpost.com/rss/business?itid=lk_inline_manual_37",
    "https://feeds.washingtonpost.com/rss/lifestyle?itid=lk_inline_manual_38",
    "https://feeds.washingtonpost.com/rss/entertainment?itid=lk_inline_manual_39",
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
    "https://www.newyorker.com/feed/rss",
    // The Atlantic
    "https://www.theatlantic.com/feed/all/",
    // Slate
    "https://slate.com/feeds/news-and-politics.rss",
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
    // MIT Tech Reviw
    "https://www.technologyreview.com/feed/",
    // Wired
    "https://www.wired.com/feed/category/business/latest/rss",
    "https://www.wired.com/feed/tag/ai/latest/rss",
    "https://www.wired.com/feed/category/culture/latest/rss",
    "https://www.wired.com/feed/category/gear/latest/rss",
    "https://www.wired.com/feed/category/ideas/latest/rss",
    "https://www.wired.com/feed/category/science/latest/rss",
    "https://www.wired.com/feed/category/security/latest/rss",
    "https://www.wired.com/feed/category/backchannel/latest/rss",
    //"https://www.wired.com/feed/tag/wired-guide/latest/rss",
    // Rollingstone
    "https://www.rollingstone.com/music/feed/",
    "https://www.rollingstone.com/politics/feed/",
    "https://www.rollingstone.com/tv-movies/feed/",
    "https://www.rollingstone.com/culture/feed/",
    //"https://www.rollingstone.com/product-recommendations/feed/",
    // Vox
    "https://www.vox.com/rss/index.xml",
    // The Markup
    "https://themarkup.org/feeds/rss.xml",
    // ProPublica
    "https://www.propublica.org/feeds/propublica/main",
    // Lifehacker
    "https://lifehacker.com/feed/rss",
    // Them Marginalian
    "https://feeds.feedburner.com/brainpickings/rss",
    // Smithsonian Mag
    "https://www.smithsonianmag.com/rss/latest_articles/",
    // Gizmodo
    "https://gizmodo.com/feed",
    // 404 Media
    //"https://www.404media.co/rss",
    // Techcrunch
    "https://techcrunch.com/feed/",
    // Pluralistic
    "https://pluralistic.net/feed/",
    // Techdirt
    "https://www.techdirt.com/feed/",
    // The Information
    //"https://www.theinformation.com/feed",
    // MA Lawyers Weekly
    //"https://masslawyersweekly.com/feed/",
    // Law Next
    "https://www.lawnext.com/feed",
    // AI Law Librarians
    "https://www.ailawlibrarians.com/feed/",
    // SCOTUS Blog
    "https://www.scotusblog.com/feed/",
    // ExMachina Newsletter
    "https://buttondown.email/LawyerExMachina/rss",
    // Above the Law
    "https://abovethelaw.com/feed/",
    // Quanta Magazine
    "https://api.quantamagazine.org/feed/",
    // Nautilus
    "https://nautil.us/feed/",
    // Aeon
    "https://aeon.co/philosophy.rss",
    "https://aeon.co/science.rss",
    "https://aeon.co/psychology.rss",
    "https://aeon.co/society.rss",
    "https://aeon.co/culture.rss",
    // Hacker News
    "https://hnrss.org/best",
    // XKCD
    "https://xkcd.com/rss.xml",
    // McSweeney's 
    "https://feeds.feedburner.com/mcsweeneys",
    // Space News
    "https://spacenews.com/feed/",
    // Bad Astornomy 
    "https://rss.beehiiv.com/feeds/t0Uscv6JDz.xml",
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
    //"https://www.lightspeedmagazine.com/rss-2/",
    // Escape Pod
    "https://escapepod.org/feed/podcast/",
    // Tor (Reactor)
    "https://reactormag.com/feed",
    // The Walrus
    "https://thewalrus.ca/feed/",
    // Sadly Not Havoc Dinosaur
    "https://sadlynothavocdinosaur.com/feed.xml",
    // NonProfit Techy
    "https://www.nonprofittechy.com/feed/",
    // Citation Needed
    "https://www.citationneeded.news/rss/",
    // Artifical Lawyer
    "https://www.artificiallawyer.com/feed/",
    // Sarah Glassmeyer
    "https://sarahglassmeyer.com/?feed=rss2",
    // Schneier on Security
    "https://www.schneier.com/feed/",
    // JOTWELL
    "https://feedpress.me/jotwell",
    // ScientificAmerican
    "http://rss.sciam.com/ScientificAmerican-Global",
    // LexBlog
    "https://www.lexblog.com/feed/",
    // One Usefulthing
    "https://www.oneusefulthing.org/feed",
    // AI Law Librarians
    "https://www.ailawlibrarians.com/feed/",
    // SCOTUS Blog
    "https://www.scotusblog.com/feed/",
    // LawyerExMachina
    "https://buttondown.email/LawyerExMachina/rss",
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
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/charles-m-blow/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/jamelle-bouie/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/david-brooks/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/frank-bruni/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/gail-collins/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/ross-douthat/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/maureen-dowd/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/thomas-l-friedman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/michelle-goldberg/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/ezra-klein/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/nicholas-kristof/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/paul-krugman/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/farhad-manjoo/rss.xml",
    "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/by/bret-stephens/rss.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
    // Vanity Fair
    "https://www.vanityfair.com/feed/rss",
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
    "https://feeds.bbci.co.uk/news/world/rss.xml",
    //"https://feeds.bbci.co.uk/news/uk/rss.xml",
    "https://feeds.bbci.co.uk/news/business/rss.xml",
    //"https://feeds.bbci.co.uk/news/politics/rss.xml",
    "https://feeds.bbci.co.uk/news/health/rss.xml",
    "https://feeds.bbci.co.uk/news/education/rss.xml",
    "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    "https://feeds.bbci.co.uk/news/technology/rss.xml",
    "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml",
    // The Guardian
    "https://www.theguardian.com/us-news/rss",
    "https://www.theguardian.com/world/rss",
    "https://www.theguardian.com/us/environment/rss",
    //"https://www.theguardian.com/us/soccer/rss",
    "https://www.theguardian.com/us/business/rss",
    "https://www.theguardian.com/us/technology/rss",
    "https://www.theguardian.com/science/rss",
    "https://www.theguardian.com/us-news/series/the-fight-for-democracy/rss",
    // Washington Post
    "https://www.washingtonpost.com/arcio/rss/category/politics/?itid=lk_inline_manual_2",
    "https://www.washingtonpost.com/arcio/rss/category/opinions/?itid=lk_inline_manual_7",
    //"https://feeds.washingtonpost.com/rss/sports?itid=lk_inline_manual_20",
    "https://feeds.washingtonpost.com/rss/business/technology?itid=lk_inline_manual_31",
    "https://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_32",
    "https://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_36",
    "https://feeds.washingtonpost.com/rss/business?itid=lk_inline_manual_37",
    //"https://feeds.washingtonpost.com/rss/lifestyle?itid=lk_inline_manual_38",
    "https://feeds.washingtonpost.com/rss/entertainment?itid=lk_inline_manual_39",
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
    "https://www.newyorker.com/feed/rss",
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
    // MIT Tech Reviw
    "https://www.technologyreview.com/feed/",
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
    // The Markup
    "https://themarkup.org/feeds/rss.xml",
    // ProPublica
    "https://www.propublica.org/feeds/propublica/main",
    // Lifehacker
    "https://lifehacker.com/vip.xml",
    // Them Marginalian
    "https://feeds.feedburner.com/brainpickings/rss",
    // Smithsonian Mag
    "https://www.smithsonianmag.com/rss/latest_articles/",
    // Gizmodo
    //"https://gizmodo.com/feed",
    // 404 Media
    "https://www.404media.co/rss",
    // Techcrunch
    "https://techcrunch.com/feed/",
    // Pluralistic
    "https://pluralistic.net/feed/",
    // Techdirt
    "https://www.techdirt.com/feed/",
    // The Information
    //"https://www.theinformation.com/feed",
    // MA Lawyers Weekly
    //"https://masslawyersweekly.com/feed/",
    // Law Next
    "https://www.lawnext.com/feed",
    // AI Law Librarians
    "https://www.ailawlibrarians.com/feed/",
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
    //  Nautilus
    "https://nautil.us/feed/",
    // Aeon
    "https://aeon.co/philosophy.rss",
    "https://aeon.co/science.rss",
    "https://aeon.co/psychology.rss",
    "https://aeon.co/society.rss",
    "https://aeon.co/culture.rss",
    // Hacker News
    "https://hnrss.org/best",
    // XKCD
    "https://xkcd.com/rss.xml",
    // McSweeney's 
    "https://feeds.feedburner.com/mcsweeneys",
    // Space News
    "https://spacenews.com/feed/",
    // Bad Astornomy 
    "https://rss.beehiiv.com/feeds/t0Uscv6JDz.xml",
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
    //"https://www.lightspeedmagazine.com/rss-2/",
    // Escape Pod
    "https://escapepod.org/feed/podcast/",
    // Tor (Reactor)
    "https://reactormag.com/feed",
    // The Walrus
    "https://thewalrus.ca/feed/",
    // Sadly Not Havoc Dinosaur
    "https://sadlynothavocdinosaur.com/feed.xml",
    // NonProfit Techy
    "https://www.nonprofittechy.com/feed/",
    // Citation Needed
    "https://www.citationneeded.news/rss/",
    // Artifical Lawyer
    "https://www.artificiallawyer.com/feed/",
    // Sarah Glassmeyer
    "https://sarahglassmeyer.com/?feed=rss2",
    // Schneier on Security
    "https://www.schneier.com/feed/",
    // JOTWELL
    "https://feedpress.me/jotwell",
    // ScientificAmerican
    "http://rss.sciam.com/ScientificAmerican-Global",
    // LexBlog
    "https://www.lexblog.com/feed/"



    // CORS proxy doesn't resolve feed (entierly broken)
    //"http://rss.sciam.com/ScientificAmerican-Global",

    // Seems to "work" but there are no new posts
    //"https://lawprofblawg.wordpress.com/feed/",
    //"https://www.reutersagency.com/feed/?best-regions=north-america&post_type=best",

]

//default_feeds = test_feeds

// localStorage.upTFIDF
defaultTFIDF = {
    "feeds_long_list_": {"bloomberg-technology":2,"bloomberg-com":2,"ai":32,"researchers":1,"worried":1,"model":2,"collapse":1,"certain":2,"corners":1,"tech":9,"industry":1,"article":2,"faith":1,"training":3,"artificial":5,"intelligence":7,"systems":2,"larger":1,"amounts":1,"online":4,"data":1,"allow":1,"tools":3,"get":2,"better":1,"time":2,"possibly":1,"point":1,"outperforming":1,"humans":1,"tasks":1,"bbc-news":1,"bbc-com":1,"healthcare":1,"risks":2,"nhs":2,"generative":3,"transformative":1,"patient":1,"outcomes":1,"senior":1,"government":2,"advisor":1,"says":4,"lifehacker":3,"lifehacker-com":3,"apple":3,"instructions":2,"reveal":1,"directing":1,"new":10,"peek":1,"behind":1,"curtain":1,"upcoming":1,"business":3,"economist-com":1,"history-lover":1,"guide":1,"market":3,"panic":1,"past":1,"technologies":1,"offer":1,"clues":1,"comes":2,"next":1,"reddit":2,"soon":1,"try":1,"summaries":1,"maybe":2,"paywalls":1,"gone":1,"public":2,"thinking":1,"kinds":1,"ways":1,"turn":1,"profit":1,"washington-post":5,"washingtonpost-com":4,"scrub":1,"nude":1,"deepfakes":1,"google":9,"search":5,"updated":1,"tool":2,"taking":2,"ai-generated":1,"explicit":1,"images":2,"lawsites":5,"lawnext-com":4,"much":2,"coffee":2,"take":2,"fuel":1,"week-long":2,"legal":14,"conference":4,"iltacon":3,"spills":1,"beans":1,"ever":2,"wonder":2,"gets":2,"consumed":1,"well":3,"annual":1,"international":1,"technology":4,"association":1,"set":2,"convene":1,"weekend":1,"nashville":1,"organizers":2,"plan":3,"serve":1,"somegallons":1,"caffeinated":1,"brew":1,"hope":1,"year":4,"attendance":1,"record":1,"business-the-guardian":1,"theguardian-com":2,"elon":6,"musk":7,"sues":3,"openai":14,"alleging":1,"deceit":1,"shakespearean":1,"proportions":1,"tesla":2,"ceo":3,"alleges":1,"former":2,"partners":2,"including":4,"sam":5,"altman":5,"manipulated":3,"co-founding":2,"companyelon":1,"suing":2,"chief":1,"executive":1,"resurrecting":1,"battle":1,"case":1,"claims":2,"company":9,"months":1,"af":1,"biz-it-ars-technica":2,"arstechnica-com":5,"crowdstrike":2,"claps":1,"back":1,"delta":2,"airline":1,"rejected":1,"offers":1,"help":1,"creating":1,"misleading":1,"narrative":2,"according":4,"lawyers":2,"artificial-lawyer":1,"artificiallawyer-com":1,"stanford":2,"codex":2,"flatiron":1,"launch":3,"genai":2,"m":1,"simulator":1,"main":1,"value":1,"supporting":1,"view":1,"held":2,"group":1,"within":2,"law":7,"science-ars-technica":1,"memo":1,"supreme":1,"court":2,"clean":1,"air":1,"act":2,"targeted":1,"climate":1,"pollutant":1,"study":1,"paper":1,"digs":1,"congressional":1,"archives":1,"settle":1,"debate":1,"illegal":2,"monopoly":2,"federal":3,"rules":1,"ruling":2,"victory":1,"doj":2,"first":1,"string":1,"antitrust":2,"lawsuits":1,"big":5,"washingtonpost-comways":1,"could":5,"change":2,"internet":1,"choose":1,"google-quality":1,"engine":1,"tailored":1,"children":2,"news":2,"would":3,"android":1,"chrome":1,"split":1,"policy-ars-technica":2,"loses":1,"trial":1,"exclusive":1,"deals":1,"maintained":1,"monopolies":1,"two":5,"markets":1,"judge":1,"ruled":1,"mac":1,"windows":1,"users":3,"infected":1,"software":1,"updates":1,"delivered":1,"hacked":1,"isp":1,"dns":2,"poisoning":1,"attack":1,"worked":2,"even":5,"targets":1,"used":2,"cloudflare":1,"secretaries":6,"state":6,"urge":2,"fix":2,"chatbot":5,"spreading":3,"false":3,"election":4,"info":1,"five":4,"send":2,"open":2,"letter":3,"monday":2,"urging":1,"immediately":1,"implement":1,"changes":3,"x":5,"assistant":4,"grok":5,"stop":2,"spread":1,"information":4,"voters":1,"vox":1,"vox-com":1,"practically":1,"impossible":1,"run":1,"ethically":1,"sigal":1,"samuel":1,"anthropic":2,"supposed":2,"good":1,"ethical":1,"one":3,"safe":1,"different":2,"maker":1,"chatgpt":3,"fact":1,"founders":1,"quit":1,"part":1,"differences":1,"safety":6,"culture":1,"moved":1,"spin":1,"works":2,"demo":1,"practice":3,"management":2,"platform":3,"leap":3,"recently":2,"announced":2,"three":1,"major":1,"features":1,"built":2,"directly":1,"lawy":1,"backed":1,"human":4,"verification":1,"latest":1,"installment":1,"video":2,"series":1,"see":1,"action":1,"nyt-world-news":1,"nytimes-com":5,"takeaways":1,"investigation":1,"banned":1,"chips":3,"china":2,"times":1,"found":2,"active":1,"trade":1,"nvidia":3,"despite":3,"u":1,"national":1,"security":1,"restrictions":1,"unreported":1,"incidents":1,"defense":1,"research":1,"mit-technology-review":1,"technologyreview-com":1,"need":2,"prepare":1,"addictive":1,"concerns":1,"overemphasize":1,"harms":2,"arising":1,"subversion":1,"rather":1,"seduction":1,"worries":2,"often":1,"imagine":1,"doomsday":1,"scenarios":1,"escape":1,"control":1,"understanding":1,"short":2,"nightmares":1,"nearer-term":1,"seriously":1,"jeopardize":1,"discourse":1,"misinformation":4,"cement":1,"biases":1,"loan":1,"decisions":1,"judging":1,"hiring":1,"disrupt":1,"back-to-back":1,"conferences":2,"evidence":3,"re":4,"moving":2,"ball":2,"forward":2,"using":1,"days":1,"chicago":1,"attended":1,"somewhat":1,"developing":1,"implementing":1,"practical":1,"applications":1,"may":2,"needed":1,"last":3,"techcrunch":7,"techcrunch-com":4,"many":2,"evaluations":1,"models":3,"significant":1,"limitations":1,"increasing":1,"demand":1,"accountability":1,"today":1,"tests":1,"benchmarks":1,"fall":2,"report":1,"analyze":1,"output":1,"text":3,"music":1,"videos":1,"coming":1,"increased":1,"scrutiny":1,"tendency":1,"make":2,"mistakes":1,"generally":1,"behave":1,"unpredictably":1,"organiz":1,"nyt-business":3,"companies":5,"keep":1,"spending":3,"slow":1,"payoff":2,"show":1,"signs":1,"slowing":2,"though":1,"still":1,"looks":1,"long":3,"way":2,"away":1,"next-generation":1,"chip":1,"rollout":1,"slowed":1,"engineering":2,"snags":2,"corp":1,"hit":1,"development":1,"advanced":1,"release":2,"products":2,"designed":1,"extend":1,"lead":2,"computing":1,"wsj-com-wsjd":2,"wsj-com":2,"breaking":1,"giants":1,"surge":1,"alphabet":1,"amazon":1,"meta":1,"microsoft":2,"placing":1,"ever-bigger":1,"bets":1,"boom":1,"execs":1,"say":1,"getting":1,"started":1,"the-new-yorker":1,"newyorker-com":1,"age":1,"makes":1,"people":1,"unique":1,"challenged":1,"define":1,"valuable":1,"nyt-david-brooks":1,"benefits":1,"outweigh":1,"machines":1,"match":1,"brain":1,"confused":1,"homophonic":1,"startup":1,"groq":1,"morning":1,"raised":1,"million":1,"vice":1,"president":1,"kamala":2,"harris":2,"social":3,"network":1,"formerly":1,"known":2,"twitter":1,"penned":1,"addressed":1,"rights":2,"reserved":2,"personal":2,"use":3,"hacker-news-best":1,"carlini-com":1,"url":2,"nicholas":1,"carlini":1,"com":2,"writinghow-i-use-ai":1,"html":1,"comments":2,"ycombinator":1,"item":1,"idpoints":1,"humanity":1,"win":1,"arms":1,"race":1,"questions":1,"asking":2,"giving":1,"watermark":1,"certainty":1,"won":1,"yet":1,"accurate":1,"hurt":1,"bottom":1,"line":1,"us-news-the-guardian":1,"call":1,"falsely":1,"told":3,"ballot":2,"deadline":1,"passed":1,"several":1,"states":1,"calling":1,"billionaire":2,"owner":1,"media":2,"gave":1,"appearing":1,"thewhite":1,"house":1,"cer":1,"kill":1,"meaningless":1,"jobs":1,"bad":1,"feed-artificial-intelligence-latest":1,"wired-com":1,"zoom":1,"going":1,"ai-driven":1,"docs":1,"video-conferencing":1,"app":3,"trying":1,"create":1,"everything":1,"workplace":1,"crowded":1,"deliberate":1,"approach":1,"releasing":1,"detect":1,"writing":1,"potentially":1,"catch":1,"students":1,"cheat":1,"write":1,"assignments":1,"wall":1,"street":1,"journal":1,"debating":1,"whether":1,"actually":1,"statement":1,"provided":1,"spokesperson":1,"confirmed":1,"researching":1,"watermarking":1,"method":1,"accused":2,"shady":1,"efforts":2,"pushed":1,"explain":1,"recent":2,"revives":1,"lawsuit":2,"alleged":1,"believing":1,"artificial-intelligence":1,"helping":1,"nonprofit":1,"techdirt":1,"techdirt-com":1,"always":2,"dumber":2,"ad":1,"coalition":1,"rejoined":1,"thinks":1,"advertise":3,"extwitter":2,"remember":2,"advertisers":1,"go":1,"fuck":1,"serious":1,"crime":1,"might":1,"rico":1,"wanting":1,"site":1,"oh":1,"detailed":1,"tempers":1,"expectations":1,"less":2,"bombastic":1,"gptless":1,"devday":2,"splashy":1,"press":1,"event":2,"san":1,"francisco":1,"bevy":1,"ill-fated":1,"store-like":1,"gpt":1,"store":1,"quieter":1,"affair":1,"however":1,"said":1,"changing":1,"format":1,"tentpole":1,"david":2,"cambria":2,"godfather":2,"operations":4,"joins":1,"epiq":1,"advisory":1,"names":1,"innovation":1,"hard":1,"think":1,"bigger":1,"described":1,"trailblazing":1,"work":1,"coo":1,"head":1,"global":1,"fortunecompany":1,"archer":1,"daniels":1,"midland":1,"npr-topics-health":1,"npr-org":1,"historic":1,"protect":1,"kids":2,"hold":1,"accountable":1,"require":1,"limit":1,"exposure":1,"dangerous":1,"content":1,"congress":2,"legislated":1,"smartphones":1,"the-atlantic":1,"theatlantic-com":1,"america":1,"laws":4,"neil":1,"gorsuch":1,"country":2,"nation":1,"something":1,"changed":1,"dramatically":1,"decades":1,"contrary":1,"racked":1,"inability":1,"pass":1,"bills":1,"number":1,"simply":1,"exploded":1,"thanyears":1,"ago":1,"statutes":1,"fit":1,"single":1,"volume":1,"b":1,"entertainment-arts":1,"latimes-com":1,"justice":2,"department":1,"tiktok":2,"allegedly":1,"violating":1,"child":1,"privacy":1,"sweeping":1,"dept":1,"friday":1,"illegally":1,"collecting":1,"minors":1,"without":1,"parents":1,"permission":1,"friendship":1,"bill":1,"gates":1,"warren":1,"buffett":1,"reached":1,"final":1,"growing":1,"tensions":1,"billionaires":1,"issues":1,"substantive":1,"stylistic":1,"roiled":1,"world":1,"philanthropy":1}
}

//JSON.stringify(dfreq_last)
default_dfreq = {
    "feeds_long_list_": {"df_arr":{"lexblog":24,"lexblog-com":24,"quantum":6,"computing":6,"developments":3,"uk":34,"us":66,"update":7,"focuses":3,"growing":9,"sector":11,"investment":11,"leading":11,"development":10,"commercialization":1,"technologies":8,"potential":21,"revolutionize":1,"disrupt":4,"key":15,"sectors":3,"fast-growing":2,"area":6,"seeing":2,"significant":5,"levels":4,"public":29,"private":14,"activity":3,"take":29,"look":28,"help":34,"wanted":3,"justice":14,"department":10,"debuts":1,"corporate":3,"whistleblower":1,"awards":1,"pilot":5,"program":9,"august":30,"deputy":2,"attorney":7,"general":9,"lisa":1,"monaco":1,"unveiled":2,"new":215,"announcement":3,"marks":4,"conclusion":1,"previously":9,"announced":19,"sprint":4,"towards":3,"dag":1,"first":87,"previewed":1,"back":32,"march":3,"year":54,"three-year":2,"wh":1,"taxing":1,"foreigner":1,"sale":8,"partnership":5,"interest":7,"d":12,"j":4,"vu":1,"match":5,"made":18,"heaven":1,"denying":1,"many":28,"parts":7,"code":4,"complex":7,"cases":5,"obscure":1,"laypersons":1,"comprehend":3,"ii":2,"time":40,"reality":3,"spawned":1,"need":25,"advisers":2,"knowledgeable":1,"experienced":3,"ways":13,"iii":1,"yet":12,"even":47,"within":9,"group":21,"learned":6,"gizmodo":14,"gizmodo-com":14,"researchers":21,"using":16,"mayonnaise":1,"improve":6,"nuclear":3,"fusion":2,"experiments":5,"condiment":1,"unique":6,"off-putting":1,"texture":1,"serves":1,"useful":2,"tool":5,"studying":2,"phase":2,"transitions":1,"capsules":1,"contain":2,"fuel":4,"cold":3,"smoked":1,"capelin":1,"recalled":2,"clostridium":1,"botulinum":1,"concerns":9,"north":6,"fish":3,"usa":3,"inc":14,"hallandale":1,"fl":1,"recalling":2,"imported":1,"-ounce":1,"packages":1,"product":5,"found":29,"length":2,"uneviscerated":1,"contaminated":1,"contamination":1,"noted":3,"patriot":1,"foods":3,"routine":4,"inspection":1,"deadpool":2,"wolverine":2,"originally":2,"way":19,"less":11,"variants":1,"spoke":5,"one":59,"editors":2,"marvel":2,"latest":37,"hit":12,"starring":1,"ryan":4,"reynolds":4,"hugh":1,"jackman":1,"healthcare":2,"life":19,"sciences":5,"equity":1,"deal":24,"tracker":3,"consello":1,"acquires":1,"ehe":1,"health":8,"capital":7,"acquisition":1,"founded":3,"based":6,"york":23,"national":22,"network":13,"provider":2,"preventive":1,"employers":2,"arm":2,"largely":9,"pursues":1,"investments":3,"middle":10,"reactor":15,"reactormag-com":14,"horror":3,"romantasy":1,"sff":2,"crossover":1,"books":6,"arriving":6,"phoenix":1,"keepers":1,"goddesses":1,"vampires":1,"appear":3,"titles":4,"post":46,"appeared":43,"lifehacker":53,"lifehacker-com":53,"best":23,"tv":12,"series":14,"stream":5,"week":43,"binge":1,"watch":18,"moderation":1,"fdic":1,"proposes":3,"amendments":2,"change":17,"bank":12,"control":12,"act":11,"regulations":1,"proposal":3,"would":30,"establish":1,"stricter":2,"oversight":3,"certain":5,"transactions":2,"responds":2,"large":5,"asset":4,"managers":1,"may":66,"exerting":1,"influence":3,"fdic-supervised":1,"institutions":2,"arthur":2,"long":23,"pia":1,"naib":1,"deric":1,"behar":1,"july":15,"board":6,"directors":1,"federal":19,"deposit":1,"insurance":1,"corporation":1,"approved":1,"notice":3,"proposed":5,"rulemaking":1,"amend":2,"scientific-american-content-global":24,"scientificamerican-com":24,"perseid":2,"meteor":2,"shower":3,"joins":4,"stunning":2,"mars":6,"jupiter":1,"conjunction":1,"early":12,"risers":1,"get":38,"double":4,"sky":2,"treat":2,"dhs":1,"updates":4,"uflpa":1,"entity":1,"list":7,"five":17,"chinese":9,"entities":1,"homeland":1,"security":22,"via":6,"register":1,"effective":2,"immediately":5,"added":4,"determined":2,"either":3,"working":8,"government":28,"xinjiang":1,"uyghur":1,"autonomous":3,"region":8,"xuar":1,"recruit":1,"transport":5,"transfer":3,"harbor":2,"receive":5,"cvs":2,"h-e-b":1,"infant":1,"formula":1,"excess":2,"vitamin":1,"perrigo":1,"company":43,"plc":3,"cans":1,"store":3,"brand":4,"premium":1,"iron":3,"milk-based":1,"powder":1,"maximum":1,"level":6,"permitted":1,"issue":4,"testing":2,"shipped":1,"grocery":4,"lp":1,"texas":8,"following":11,"states":31,"florida":9,"passenger":1,"goes":7,"overboard":1,"royal":3,"caribbean":1,"adventure":1,"seas":2,"morning":16,"reportedly":7,"went":10,"cruise":1,"ship":1,"sailing":2,"adriatic":1,"sea":6,"according":25,"several":14,"passengers":3,"contacted":1,"today":20,"explorer":1,"seven":3,"day":29,"greece-croatia":1,"described":4,"young":13,"man":14,"around":16,"m":17,"another":24,"biden":17,"administration":3,"grants":1,"-month":1,"removal":3,"relief":4,"lebanese":1,"president":48,"joe":7,"granted":1,"deferred":1,"enforced":1,"departure":3,"ded":1,"nationals":1,"months":15,"due":10,"humanitarian":1,"conditions":3,"southern":2,"lebanon":4,"created":6,"ongoing":2,"conflict":4,"hezbollah":7,"israel":27,"eligible":1,"must":7,"united":21,"quanta-magazine":3,"quantamagazine-org":3,"base":8,"beats":3,"binary":1,"explored":1,"infrequently":1,"embraced":1,"find":13,"home":26,"cybersecurity":5,"quanta":3,"magazine":5,"bbc-news":80,"bbc-com":79,"tory":5,"politician":2,"used":14,"racist":2,"slur":1,"whatsapp":1,"chat":1,"senedd":1,"member":7,"laura":3,"anne":2,"jones":2,"apologised":1,"highly":4,"offensive":2,"term":6,"people":53,"sow":1,"biennials":1,"beautiful":3,"blooms":1,"next":30,"grow":4,"seed":3,"ground":4,"winter":2,"trade":10,"law":39,"husch":1,"blackwell":1,"ll":8,"learn":10,"international":17,"supply":3,"chain":2,"questions":10,"please":2,"contact":2,"team":19,"purple":1,"haze":1,"lpa":1,"mandate":1,"poised":4,"continue":15,"causing":5,"confusion":1,"chaos":4,"california":13,"cannabis":3,"licensees":1,"jennifer":2,"l":7,"mora":1,"elliot":1,"fink":1,"seyfarth":2,"synopsis":2,"often":6,"opportunity":7,"regulate":1,"oversee":1,"entirely":2,"market":38,"case":26,"legalized":2,"recreational":1,"adult-use":1,"decided":4,"involvement":2,"labor":4,"unions":1,"state":27,"emerging":4,"industry":19,"implementation":1,"happened":11,"re":36,"like":38,"in-box":1,"spam":2,"filter":1,"packed":2,"ilta":1,"messages":3,"come":16,"visit":4,"vendors":1,"booth":1,"xxx":1,"amazing":1,"legal":14,"tech":19,"folks":1,"going":14,"vying":1,"attention":2,"say":28,"calendar":2,"corbyn":1,"talks":13,"form":6,"independent":5,"mps":1,"could":63,"unlock":1,"hundreds":7,"thousands":8,"pounds":1,"funding":6,"access":5,"propublica":7,"propublica-org":6,"spends":1,"millions":4,"open":13,"stores":2,"food":10,"deserts":1,"real":9,"test":11,"survival":2,"molly":1,"parker":1,"capitol":2,"news":36,"illinois":1,"photography":2,"julia":1,"rendleman":1,"article":8,"produced":5,"local":7,"reporting":2,"sign":17,"dispatches":3,"stories":8,"star":13,"wars":3,"skeleton":1,"crew":3,"introduces":2,"motley":1,"alien":2,"plus":9,"disney":2,"korean":2,"genre":2,"close":13,"finding":3,"movies":5,"looking":6,"great":8,"movie":5,"weekend":13,"check":2,"choices":2,"big":40,"fall":8,"migrant":1,"visa":1,"applications":4,"changes":6,"number":12,"overseas":1,"workers":8,"students":11,"families":3,"applying":1,"falls":2,"third":8,"techdirt":10,"techdirt-com":10,"hulu":1,"espn":3,"jack":4,"prices":5,"streaming":2,"enshittification":1,"continues":9,"subscriber":2,"growth":12,"slowed":2,"ve":19,"repeatedly":2,"falling":2,"bad":8,"habits":2,"ultimately":1,"doomed":2,"traditional":4,"cable":1,"involved":5,"chasing":1,"pointless":1,"sake":2,"megamergers":1,"imposing":2,"bottomless":2,"price":7,"hikes":2,"annoying":1,"restrictions":3,"simultaneously":1,"cutting":2,"corners":2,"quality":3,"biggest":15,"mistakes":3,"franchisees":1,"make":27,"insights":4,"franchise":4,"lawyer":9,"entering":1,"agreement":6,"exciting":2,"lucrative":1,"venture":3,"aspiring":1,"business":19,"owners":6,"however":5,"path":4,"successful":1,"ownership":2,"fraught":1,"pitfalls":1,"opening":4,"observed":1,"common":6,"lead":11,"financial":9,"weed":1,"welcome":5,"friday":8,"happening":2,"world":27,"marijuana":1,"comes":16,"ohio":2,"retail":2,"sales":9,"began":3,"tuesday":15,"eastern":3,"cherokee":1,"planning":5,"begin":1,"september":3,"started":9,"cracking":1,"sam":6,"club":5,"memberships":1,"right":14,"one-year":1,"membership":1,"additional":3,"perks":1,"vizio":1,"-inch":1,"smart":4,"soundbar":1,"review":12,"affordable":5,"screen":4,"tradeoffs":1,"fair":2,"demand":16,"cheap":3,"possible":8,"see":23,"wall":13,"china":16,"space":21,"reports":8,"earth-orbiting":1,"astronauts":6,"glimpsing":1,"artificial":15,"structures":1,"wildly":2,"exaggerated":1,"humanity":4,"planetary":1,"isn":5,"invisible":2,"afar":1,"jotwell":4,"feedpress-me":4,"dismantling":2,"silence":3,"blackness":1,"mobility":3,"philip":1,"kretsedemas":1,"jamella":1,"n":11,"gow":1,"modern":5,"migrations":1,"black":10,"interrogations":1,"revisioning":1,"migrants":2,"mobilities":1,"critique":1,"antiblackness":1,"jaya":1,"ramji-nogales":1,"immigration":3,"field":4,"scholarly":1,"inquiry":1,"critical":3,"status":1,"quo":1,"much":19,"literature":2,"describing":1,"inequities":1,"authorized":1,"implemented":2,"th":4,"sec":1,"imposes":1,"requirements":2,"broker-dealers":1,"companies":13,"registered":1,"agents":2,"covered":3,"incident":4,"response":8,"policies":4,"procedures":1,"ahead":13,"applicable":2,"compliance":1,"deadline":4,"robert":7,"blamires":1,"ferrell":1,"daniel":2,"filstrup":1,"howes":1,"sarah":1,"zahedi":1,"securities":3,"exchange":8,"commission":2,"adopted":1,"regulation":1,"s-p":1,"expand":4,"scope":2,"the-atlantic":21,"theatlantic-com":21,"richard":2,"nixon":1,"unlucky":1,"david":13,"frum":1,"fifty":2,"years":41,"ago":13,"laid":2,"presidency":3,"casualty":1,"watergate":1,"scandal":2,"era":6,"sweeping":3,"political":15,"reform":5,"congress":5,"reduced":2,"once-awesome":1,"power":22,"committee":5,"chairs":1,"opened":4,"work":22,"usually":2,"closed":6,"view":7,"greater":3,"archaeologists":2,"confront":3,"extreme":7,"ethical":2,"dilemmas":1,"investigating":2,"ancient":3,"human":16,"sacrifice":1,"mountaintop":1,"burial":1,"site":9,"offers":8,"glimpse":2,"inka":1,"raises":6,"unearthing":1,"remains":4,"wrong":3,"argument":1,"olympic":25,"boxers":1,"helen":3,"lewis":2,"past":15,"days":28,"imane":2,"khelif":2,"lin":2,"yu-ting":2,"two":60,"center":9,"storm":10,"eligibility":2,"compete":3,"women":16,"category":4,"olympics":22,"subjected":1,"brutal":6,"scrutiny":4,"appalling":1,"abuse":5,"never":7,"allowed":4,"ugly":1,"spectacle":2,"happen":7,"convention":4,"kamala":37,"harris":55,"ronald":2,"brownstein":1,"presidential":22,"nominee":8,"decades":11,"approached":1,"reshape":2,"image":1,"vice":23,"nonincumbent":1,"since":27,"hubert":1,"humphrey":2,"claim":6,"party":11,"nomination":3,"without":14,"enduring":3,"grueling":1,"primary":5,"contests":1,"photos":3,"swimming":3,"elephant":1,"table":3,"bookstore":1,"maze":1,"alan":4,"taylor":8,"skateboarding":1,"steeplechase":1,"paris":25,"snoop":2,"dogg":2,"martha":1,"stewart":1,"dressage":1,"event":8,"volcanic":2,"eruption":1,"atop":1,"mount":1,"etna":1,"mask":1,"festival":4,"benin":1,"anti-government":1,"protests":7,"bangladesh":14,"military":11,"robot":1,"dog":5,"ukraine":7,"moreto":1,"email":6,"notification":1,"every":11,"photo":6,"published":13,"standard":3,"contract":6,"waiver":1,"analysis":7,"applies":2,"arbitration":2,"agreements":1,"clara":1,"rademacher":1,"joshua":3,"rodine":1,"supreme":23,"court":44,"reaffirmed":1,"equal":1,"footing":1,"types":1,"contracts":1,"therefore":1,"apply":1,"principles":1,"determine":2,"whether":10,"seeking":2,"enforce":2,"waived":1,"gambling":1,"sponsorship":1,"codes":2,"conduct":1,"likely":21,"mean":9,"football":8,"horseracing":1,"industries":2,"last":59,"month":22,"english":5,"british":9,"address":2,"arrangements":1,"stakeholders":1,"sports":23,"betting":1,"prepared":2,"subsequent":1,"release":9,"white":14,"paper":2,"high":11,"stakes":2,"vermont":2,"correctly":2,"rejects":3,"vaccine":4,"prep":1,"applied":2,"dismiss":2,"state-law":1,"claims":7,"arising":2,"covid":3,"politella":1,"v":7,"windham":1,"southeast":8,"school":11,"dist":1,"-ap-":1,"wl":1,"vt":1,"easy":6,"aka":1,"readiness":1,"dismissal":1,"reversed":1,"villaver":1,"paglinawan":1,"ny":2,"slip":1,"op":1,"division":2,"second":15,"situation":5,"plaintiffs":1,"sued":2,"defendants":3,"moved":5,"upon":6,"clause":1,"plaintiff":1,"said":66,"afford":2,"respond":3,"thereafter":1,"commenced":1,"de":5,"facto":1,"exclusion":1,"catholic":2,"schools":4,"tuition":1,"grant":1,"antidiscrimination":1,"survives":1,"strict":1,"st":5,"dominic":1,"academy":3,"makin":1,"aug":13,"maine":1,"district":5,"-page":1,"opinion":10,"refused":1,"preliminarily":1,"enjoin":1,"enforcement":2,"educational":1,"employment":2,"laws":10,"suit":7,"brought":5,"diocese":1,"family":7,"u":38,"held":11,"organizations":1,"promoting":1,"abortion":3,"pill":1,"reversal":1,"sue":3,"three":30,"anti-abortion":1,"promote":4,"abortion-pill":1,"filed":5,"letitia":1,"james":4,"complaint":3,"full":7,"text":5,"summit":1,"outreach":1,"wd":1,"alleges":3,"part":17,"blitz":1,"attack":33,"mailed":1,"boilerplate":1,"notices-of-intention-to-sue":1,"nois":1,"council":4,"pulls":1,"funds":5,"firms":6,"linked":1,"arms":2,"waltham":1,"forest":2,"says":68,"decision":13,"divest":1,"pension":2,"line":10,"beliefs":1,"cash-strapped":1,"pins":1,"hopes":4,"family-style":1,"children":12,"somerset":1,"homes":4,"avoid":7,"relying":4,"providers":1,"pm":6,"swift":6,"acting":2,"riot":1,"deterrent":1,"tells":5,"emergency":6,"cobra":1,"meeting":5,"police":13,"remain":9,"alert":3,"wordle":4,"hints":4,"answer":6,"win":31,"denies":1,"passport":1,"applicant":1,"name":6,"intellectual":1,"property":4,"believe":4,"almost":12,"exactly":2,"decade":6,"tim":15,"cushing":1,"wrote":2,"bonkers":1,"story":7,"skywalker":1,"denied":1,"purported":1,"trademark":1,"copyright":1,"question":3,"ought":1,"leap":3,"mind":7,"subpoena":1,"australian":8,"episode":6,"elementor":1,"-":9,"elementor-widget-text-editor":1,"elementor-drop-cap-view-stacked":1,"elementor-drop-cap":1,"background-":1,"fff":1,"elementor-drop-cap-view-framed":1,"border":5,"solid":1,"background-color":1,"transparent":3,"elementor-drop-cap-view-default":1,"ele":1,"skadden":1,"discusses":4,"ai":44,"reforms":3,"labour":5,"king":2,"speech":3,"introduce":1,"intelligence":20,"rules":13,"alongside":1,"digital":6,"information":8,"bills":3,"brief":2,"overview":1,"set":23,"intelligencehttps":1,"clsbluesky":1,"columbia":2,"edu":1,"wp-admin":1,"post-new":1,"php":1,"date":5,"h":3,"age-gating":1,"online":19,"porn":2,"unconstitutional":1,"eight":1,"enacted":2,"force":6,"adults":5,"prove":3,"age":7,"accessing":1,"sites":1,"soon":9,"try":7,"persuade":2,"doesn":9,"violate":3,"amendment":2,"good":16,"luck":1,"deny":1,"well-established":1,"constitutionally":1,"dueling":1,"vice-presidential":7,"campaigns":2,"lora":1,"kelley":1,"edition":5,"atlantic":5,"daily":17,"newsletter":4,"guides":2,"helps":2,"discover":4,"ideas":3,"recommends":2,"culture":6,"else":3,"american":25,"politics":17,"trump":57,"role":6,"campaign":24,"trail":3,"changed":8,"wal":1,"rings":6,"fully":3,"embracing":1,"lord":3,"deep":4,"connection":2,"heavy":3,"metal":1,"composer":2,"bear":9,"mccreary":1,"teases":1,"thunderous":1,"riffs":1,"coming":15,"prime":19,"video":20,"season":20,"babbel":1,"subscription":1,"catalog":1,"lessons":1,"languages":2,"elon":19,"musk":23,"ad":1,"f":7,"cking":1,"well":18,"discontinuing":1,"operations":3,"global":39,"alliance":3,"responsible":4,"media":20,"told":6,"staff":5,"shutting":1,"games":11,"workshop":1,"miniatures":1,"game":18,"models":4,"middle-earth":1,"strategy":9,"battle":5,"war":14,"rohirrim":1,"galaxy":4,"laptops":1,"samsung":6,"high-end":1,"book":7,"start":11,"processors":2,"ram":1,"latest-articles-smithsonianmag-com":7,"smithsonianmag-com":7,"nasa":9,"launched":5,"eight-day":1,"mission":7,"might":14,"iss":3,"february":1,"technical":3,"issues":6,"boeing":5,"starliner":4,"spacecraft":2,"agency":7,"considering":2,"bringing":3,"earth":6,"spacex":4,"dragon":5,"instead":6,"images":6,"yorkers":1,"pets":3,"across":25,"centuries":1,"upcoming":9,"exhibition":2,"trace":1,"history":19,"city":23,"domesticated":1,"dogs":3,"cats":1,"horses":1,"animals":5,"conviction":2,"secured":2,"lapd":2,"officer":6,"falsely":2,"pd":1,"gang":2,"database":1,"pretty":2,"vehicle":2,"investigative":2,"value":3,"maintaining":2,"affirmed":1,"members":9,"data":24,"collections":1,"run":7,"guardrails":1,"allowing":2,"officers":3,"add":1,"anyone":3,"want":18,"collection":1,"live":18,"travel":5,"wow":1,"borderlands":2,"sounds":1,"reviews":1,"eli":2,"roth":1,"adaptation":1,"sure":4,"expect":5,"long-delayed":1,"go":19,"smartcard":1,"wallet":1,"card":2,"works":4,"app":13,"track":6,"keys":1,"luggage":1,"lanyard":1,"item":3,"lose":4,"epic":2,"drilling":1,"sets":3,"record":16,"-foot":1,"mantle":2,"core":2,"rocks":2,"minerals":1,"pushed":3,"seafloor":1,"scientists":13,"drilled":1,"really":6,"hole":2,"drink":3,"chilled":1,"wine":2,"summer":13,"hot":3,"park":10,"ros":1,"microwave":1,"teeming":2,"bacteria":3,"study":23,"suggests":7,"thriving":2,"communities":4,"microbes":1,"ovens":1,"kitchens":1,"shared":4,"spaces":3,"laboratories":1,"steep":1,"climb":4,"fabrice":1,"coffrini":1,"afp":1,"gettyolympic":1,"sport":4,"climbing":2,"divided":1,"medal":13,"events":7,"speed":4,"combined":1,"boulder":1,"format":2,"athletes":9,"six":6,"minutes":2,"scaling":1,"meters":4,"seen":7,"route":2,"beforehand":1,"steepest":1,"sections":1,"-degree":1,"criticism":4,"disorder":7,"dangerous":8,"minister":20,"talk":8,"two-tier":1,"policing":1,"apple":14,"wants":10,"mac":6,"mini":1,"smaller":1,"debut":4,"-powered":1,"macs":1,"macbook":2,"pros":1,"airs":3,"cdc":3,"iud":1,"guidelines":2,"finally":7,"include":4,"pain":1,"management":8,"talking":4,"options":5,"recommendations":1,"rare":4,"italian":3,"renaissance":1,"drawings":1,"buckingham":1,"palace":3,"feature":8,"sketches":1,"masters":1,"leonardo":1,"da":1,"vinci":1,"titian":1,"destroyed":2,"-year-old":7,"cave":1,"painting":1,"facebook":3,"vibrant":1,"reminder":1,"create":8,"art":6,"idiot":1,"phone":5,"dream":2,"giant":10,"adt":1,"admits":3,"hacked":2,"lot":10,"details":3,"aren":3,"clear":7,"hackers":2,"customer":1,"including":15,"addresses":2,"google":36,"loses":10,"antitrust":16,"fight":3,"violation":2,"remedies":1,"wouldn":3,"actually":4,"fix":6,"things":11,"loss":7,"means":6,"doj":3,"historic":10,"thrones":3,"spinoff":1,"important":3,"knights":2,"extra":5,"targaryen":1,"knight":1,"kingdoms":1,"vital":2,"figures":3,"george":3,"r":3,"martin":2,"hedge":2,"complete":5,"pmp":1,"training":9,"bundle":1,"project":11,"professions":1,"similar":2,"accountant":1,"skills":3,"talents":1,"place":6,"-course":1,"provides":7,"comprehensive":3,"courses":1,"adult":2,"reapers":1,"princesses":1,"ghosts":1,"science":14,"employees":7,"skirted":1,"policy":10,"target":8,"ads":1,"teens":2,"times":12,"googlers":1,"targeting":4,"minors":3,"despite":11,"prohibiting":1,"practices":1,"asteroids":1,"cute":1,"little":10,"moonlets":1,"identifying":1,"moons":1,"aid":6,"understanding":6,"aspects":1,"solar":4,"system":8,"biology-news-evolution-cell-theory-gene-theory-microbiology-biotechnology":23,"phys-org":71,"genetic":2,"uncovers":1,"onion":1,"bulb":2,"shape":4,"size":3,"secrets":1,"plant":6,"agroecosystem":1,"university":23,"wisconsin":2,"mechanisms":3,"influencing":1,"volume":1,"bulbs":1,"along":5,"effects":3,"daylength":1,"bulbing":1,"process":7,"research":26,"advancements":2,"agricultural":1,"implications":3,"crop":4,"improvement":2,"lahaina":2,"fire":8,"swift-moving":1,"wildfires":2,"burning":2,"hawaiian":1,"island":7,"maui":2,"devastating":2,"community":4,"killing":9,"disaster":4,"done":6,"debris":2,"temporary":1,"housing":3,"mourn":2,"remember":3,"loved":1,"ones":3,"lost":6,"rec":1,"beefs":1,"android":5,"second-favorite":1,"weather":6,"pixel":1,"took":8,"away":14,"dark":7,"biocides":1,"combat":3,"antibiotic":2,"resistance":5,"appropriate":1,"use":30,"suggest":6,"recent":20,"journal":6,"sustainable":1,"microbiology":1,"well-being":2,"benefits":5,"mcsweeney-s":8,"mcsweeneys-net":8,"x":16,"sends":1,"cease":1,"desist":1,"letter":11,"former":30,"user":2,"lawsuit":6,"coalition":1,"major":24,"advertisers":1,"claiming":2,"violated":5,"coordinating":1,"brands":1,"dissuade":1,"spending":3,"money":15,"social":20,"platform":9,"dear":2,"gentle":1,"request":3,"witches":1,"maybe":4,"point":8,"favorite":7,"amazon":7,"generation":4,"ipad":3,"tablet":3,"lowest":3,"racism":5,"society":3,"o":6,"neill":1,"consecutive":1,"nights":2,"violence":10,"belfast":1,"smooth":1,"eggplant":2,"breakthrough":2,"prickle":1,"formation":3,"discovered":5,"gene":1,"prickles":1,"eggplants":1,"trait":1,"complicates":1,"farming":2,"advanced":6,"techniques":1,"identified":6,"prickly":1,"pe":1,"chromosome":1,"pinpointed":1,"factor":2,"humza":2,"yousaf":2,"ending":3,"greens":1,"mistake":1,"move":11,"led":12,"ex-first":1,"resignation":1,"earlier":8,"faced":3,"motions":1,"confidence":1,"reasons":1,"ncmec":1,"failing":1,"insider":1,"yesterday":4,"posted":4,"podcast":4,"guest":1,"mcgowan":1,"missing":5,"exploited":2,"counsel":2,"chief":23,"bungie":1,"pokemon":1,"sometimes":5,"disagree":2,"coverage":5,"detail":2,"french":4,"sheep":1,"farmers":2,"fret":1,"bluetongue":1,"outbreak":3,"authorities":3,"reported":8,"thursday":3,"suspected":6,"virus":1,"raising":5,"fears":13,"potentially":6,"fatal":2,"infected":2,"neighboring":1,"belgium":1,"hemp":1,"standards":2,"sativa":1,"commercial":3,"production":5,"recently":12,"revival":2,"motivated":2,"passage":1,"reversing":1,"long-standing":1,"prohibitions":1,"markets":25,"flow":1,"sweetness":1,"sugar":1,"transporters":1,"enhanced":2,"camellia":1,"crucial":6,"reproduction":1,"yield":1,"dependent":1,"efficient":4,"metabolism":2,"plants":3,"detailed":2,"import":1,"unclear":2,"extensive":2,"model":9,"species":3,"flight":3,"delay":2,"end":13,"delays":1,"marina":1,"koren":1,"imagine":4,"traveling":3,"somewhere":1,"far":12,"turbulent":2,"excited":3,"return":14,"journey":6,"gets":9,"delayed":7,"airline":3,"puts":5,"nice":1,"hotel":2,"decide":3,"employer":1,"booked":1,"tickets":1,"lakes":1,"parasites":2,"fishing":1,"enthusiast":1,"already":12,"noticed":1,"abnormalities":1,"wild":3,"catch":6,"fact":3,"commonly":2,"bass":1,"trout":1,"although":3,"natural":7,"ecosystems":4,"presence":3,"serious":6,"consequences":2,"hits":5,"brother":1,"aquaman":1,"kingdom":2,"uninteresting":1,"guys":2,"relentlessly":1,"boring":1,"sidekick":2,"hackneyed":1,"plot":1,"explain":5,"sequel":3,"tanked":1,"leaving":5,"fate":1,"doubt":3,"four":16,"consider":2,"choosing":5,"credit":3,"starting":3,"considerations":1,"keep":10,"success":3,"riches":1,"hardscrabble":1,"corner":1,"pacific":2,"sloshing":1,"bougainville":1,"papua":2,"guinea":1,"running":22,"short":9,"goods":2,"locals":1,"partying":1,"dawn":1,"death":4,"immortality":1,"matteo":1,"wong":1,"time-travel":1,"thursdays":1,"archives":1,"contextualize":1,"present":2,"surface":4,"delightful":2,"treasures":1,"axioms":1,"everybody":1,"dies":4,"ages":1,"depending":1,"circle":1,"social-media":1,"bubble":1,"bl":1,"scotland":2,"send":4,"northern":4,"ireland":2,"riots":10,"constable":1,"asks":3,"saying":2,"exhausted":1,"protecting":2,"mangroves":1,"seagrass":1,"boost":8,"indonesia":2,"climate":16,"targets":6,"signaled":1,"blue":6,"carbon":7,"carbon-rich":1,"coastal":1,"marine":3,"areas":4,"shift":5,"follows":2,"heavily":2,"forestry":1,"land":5,"energy":11,"olfactory":1,"abilities":1,"impacts":2,"environmental":4,"biological":1,"factors":2,"ethologists":1,"elte":1,"e":6,"lor":1,"nd":1,"valuable":3,"revealing":2,"indeed":2,"impact":6,"performance":4,"thought":11,"scientific":2,"calculate":1,"billion":23,"birds":3,"die":3,"collisions":1,"windows":4,"ornithologists":1,"fordham":1,"graduate":1,"arts":3,"nyc":2,"bird":2,"max":5,"planck":1,"institute":5,"geoanthropology":1,"evidence":10,"killed":9,"window":2,"edwards":2,"helped":5,"particle":3,"smasher":1,"probe":3,"mysteries":2,"atoms":1,"physicist":2,"design":5,"construction":3,"tevatron":1,"machine":5,"built":6,"deeper":2,"atom":1,"gone":5,"matter":5,"hunters":1,"meet":9,"feared":2,"neutrino":1,"fog":1,"detection":2,"long-predicted":1,"search":24,"particles":4,"entered":3,"possibility":4,"peril":1,"dna":1,"topoisomerase":1,"hold":7,"drug":3,"discovery":2,"protection":4,"function":1,"vi":1,"topo":1,"provide":11,"springboard":1,"feeding":2,"polluting":1,"environments":1,"nau":1,"alumnus":1,"shows":20,"backyard":1,"feeders":1,"put":13,"intentions":1,"changing":5,"chemistry":2,"introducing":1,"harmful":1,"amount":5,"phosphorus":1,"environment":3,"lens-free":1,"fluorescence":1,"instrument":1,"detects":2,"deadly":4,"microorganisms":2,"drinking":1,"water":10,"shown":1,"lenses":2,"sensitive":1,"approach":9,"low-cost":1,"easy-to-use":1,"monitor":4,"resource-limited":1,"settings":3,"developing":8,"countries":8,"affected":2,"disasters":3,"everything":8,"know":21,"worldhoppers":1,"wind":1,"truth":2,"encountered":2,"stormlight":1,"archive":1,"came":5,"apps":2,"kid":2,"read":7,"give":9,"child":4,"reading":11,"village":1,"evolved":2,"makeshift":1,"cabins":1,"accommodations":1,"expanding":4,"hubs":1,"ten":3,"chlamydia":1,"save":7,"lives":4,"koalas":1,"largest":9,"longest-ever":1,"survey":3,"confirmed":6,"developed":7,"sunshine":1,"coast":8,"protect":7,"dying":2,"disease":4,"mp":2,"apologises":1,"wholeheartedly":1,"tweets":1,"lauren":1,"posts":2,"error":1,"judgment":1,"south":12,"africa":8,"controversial":5,"lion":1,"fueling":3,"illegal":7,"cat":4,"bones":1,"paw":1,"bone":2,"nature":3,"conservation":2,"uncovered":2,"concerning":2,"activities":2,"captive":1,"shedding":1,"light":7,"urgent":1,"governmental":1,"action":10,"economist-com":29,"overhauling":1,"leaders":13,"volatile":1,"easier":5,"manufacturers":2,"broke":6,"overcapacity":1,"soaring":1,"bankruptcies":1,"the-americas":1,"colombia":1,"prepares":5,"vanilla":1,"boom":2,"purveyors":1,"scented":1,"products":9,"posh":1,"ice-creams":1,"note":3,"middle-east-africa":3,"foreign":7,"better":8,"relations":3,"west":7,"lamola":1,"counts":4,"britain":8,"handle":1,"quantitative-easing":1,"losses":5,"accounting":2,"fiddle":1,"rachel":2,"reeves":3,"room":5,"tax":13,"rises":4,"fallen":3,"love":6,"dating":3,"tinder":1,"bumble":1,"struggling":3,"singles":1,"refuse":1,"pay":9,"olympians":3,"teach":2,"executives":2,"citius":1,"altius":1,"spurious":1,"europe":8,"siesta":1,"still":19,"copied":1,"widely":2,"obituary":1,"inna":1,"solovyova":1,"studied":2,"stagecraft":1,"russian":5,"soul":1,"historian":1,"moscow":2,"theatre":3,"died":4,"aged":2,"plan":10,"tracking":1,"digital-id":1,"meant":4,"consumers":2,"communist":1,"iran":15,"frightening":2,"playbook":2,"abandoning":1,"restraint":2,"prevented":1,"mass":7,"bleaching":1,"sponges":1,"recorded":3,"worldwide":4,"million":12,"fiordland":1,"kind":6,"ever":10,"estimated":2,"cut":7,"population":2,"half":4,"trunks":1,"tank":3,"paddling":1,"pachyderms":1,"chunky":1,"legs":1,"snorkel":1,"elephants":2,"fuji":1,"safari":3,"japan":9,"taking":8,"dip":2,"pool":2,"graceful":1,"movement":6,"visible":1,"thanks":4,"special":7,"see-through":1,"metoo":1,"offenders":1,"elizabeth":3,"bruenig":1,"journalist":1,"aebra":1,"coe":1,"bombshell":1,"publication":2,"profession":1,"titled":1,"suffered":7,"silently":1,"ex-law":1,"prof":1,"allegedly":1,"preyed":1,"wright":1,"professor":13,"mason":1,"forme":1,"predicting":2,"metabolic":1,"limited":6,"genome":1,"eat":1,"kinds":3,"dictated":1,"enzyme":1,"patterns":3,"encoded":1,"genomes":1,"computational":2,"methods":2,"known":16,"allows":5,"analyzed":1,"reveals":9,"c":7,"epichlo":1,"festucae":1,"antifungal":1,"protein":1,"efe-afpa":1,"reviewed":2,"behind":11,"endophyte-mediated":1,"strong":8,"creeping":1,"red":3,"fescue":1,"festuca":1,"rubra":1,"subsp":1,"dollar":1,"spot":2,"caused":6,"clarireedia":1,"jacksonii":1,"nasturtiums":1,"jam":1,"sushi":1,"citrus-colored":1,"flowers":1,"easily":2,"fill":2,"brighten":1,"joint":5,"aphids":1,"also":19,"delicious":2,"nitrogen":1,"input":2,"promotes":1,"redistribution":1,"organic":2,"soil":3,"layers":1,"exogenous":1,"reactive":1,"profound":1,"effect":4,"cycle":2,"terrestrial":1,"current":6,"soc":1,"dynamics":1,"relation":1,"focused":5,"predominantly":1,"studies":1,"layer":1,"cannot":2,"reveal":5,"nitro":1,"mechanism":2,"animal":3,"caching":1,"behavior":3,"hebrew":1,"novel":5,"non-memory-based":1,"cache":1,"retrieve":1,"memory":2,"neural":3,"hash":1,"functions":1,"storage":2,"retrieval":1,"locations":4,"ted":1,"cruz":2,"proudly":1,"pledges":2,"kill":4,"ditch":1,"effort":1,"popular":8,"low-income":1,"broadband":1,"trumplican":1,"lawmakers":4,"deliver":1,"discount":1,"low":4,"income":4,"americans":12,"fcc":3,"care":4,"acp":1,"peak":3,"proved":2,"immensely":1,"helpful":2,"booted":1,"male":3,"female":3,"lions":2,"socialize":1,"differently":1,"throughout":3,"oxford":1,"revealed":4,"males":1,"females":1,"experience":1,"vastly":1,"different":12,"hope":5,"spreads":2,"problem":13,"republic":1,"america":7,"choice":11,"nightmarish":1,"vision":3,"decline":3,"strongman":2,"optimistic":2,"vow":1,"aspiration":1,"dichotomy":1,"points":8,"huge":4,"risk":12,"rooted":1,"hopefulness":1,"cheer":2,"feel":4,"demo":2,"pick":9,"seat":1,"plane":2,"flying":5,"scenario":1,"always":4,"worst":8,"prepare":7,"consciousness":2,"arises":1,"weirdness":2,"wish":2,"basis":1,"mechanical":1,"phenomena":1,"hurricanes":1,"stronger":1,"massive":8,"prompted":1,"destructive":1,"hurricane":10,"ike":1,"solutions-based":1,"preview":4,"future":12,"crybaby":1,"christopher":3,"beam":3,"forgiven":1,"akio":1,"kaminaga":1,"losing":3,"cool":1,"heading":3,"gold-medal":1,"tokyo":1,"japanese":6,"judo":1,"champion":3,"enormous":2,"pressure":6,"heralded":1,"comeback":1,"wartime":1,"defeat":4,"particular":2,"symbol":2,"pride":1,"w":1,"therapy":2,"anxiety":2,"epidemic":3,"brooks":2,"stay":2,"writing":3,"column":8,"mental-health":1,"crisis":15,"hitting":1,"adolescents":1,"hardly":1,"emerge":4,"confirmation":1,"april":3,"grateful":2,"needs":8,"rethinking":1,"overdose":3,"opioid":3,"treatment":3,"account":3,"evolving":1,"chances":3,"recovery":4,"drugs":3,"constitutional":4,"failure":5,"pozen":1,"constitution":2,"ilya":2,"somin":1,"purposes":1,"liberty":1,"abuses":5,"regarded":1,"greatest":2,"failures":2,"century":3,"especially":3,"expansion":2,"beginning":1,"controlled":2,"su":2,"finance-economics":6,"populous":1,"economies":2,"brave":1,"tough":3,"ethiopia":2,"nigeria":3,"able":4,"stick":1,"living":6,"computers":5,"neurons":1,"energy-hungry":1,"exploring":3,"ethan":2,"deaths":3,"involving":2,"opioids":1,"tally":1,"least":12,"though":6,"culprits":1,"prescription":2,"heroin":1,"synthetics":1,"fentanyl":1,"constant":2,"difficult":4,"contemporar":1,"secret":2,"service":8,"fails":2,"eliot":1,"cohen":1,"assassination":4,"attempt":4,"donald":24,"bullet":1,"missed":1,"achieving":1,"lethality":1,"inch":1,"director":4,"kimberly":1,"cheatle":1,"called":15,"carpet":1,"house":18,"responsibility":1,"whose":7,"ear":1,"wa":2,"central":8,"bankers":3,"argue":1,"weakness":1,"warren":2,"buffett":2,"mighty":1,"cash":4,"mountain":2,"berkshire":2,"hathaway":1,"boss":2,"impressive":1,"investor":2,"economic":7,"oracle":1,"guardian":3,"enriched":1,"finances":2,"vulnerable":1,"judges":3,"let":4,"jake":1,"pearson":1,"judge":17,"appointed":2,"yvonne":1,"murphy":1,"chorost":1,"late":9,"diabetes":2,"dementia":1,"constellation":2,"maladies":1,"assets":6,"worth":7,"the-marginalian":2,"themarginalian-org":2,"voice":2,"garden":2,"margaret":1,"watts":1,"hughes":1,"wondrous":1,"victorian":1,"sound":3,"visualizations":1,"hear":6,"bravuras":1,"walt":1,"whitman":1,"exulted":1,"ode":1,"puzzle":1,"puzzles":1,"call":6,"puzzling":1,"miraculous":1,"spacetime":1,"emerged":2,"warm":3,"loveliness":1,"vibrating":1,"interaction":1,"oscillating":1,"disp":1,"rise":10,"antisemitic":2,"incidents":2,"charity":2,"jewish":1,"cst":1,"anti-jewish":1,"hate":1,"january":2,"june":4,"scottish":2,"leadership":4,"tories":1,"leader":23,"direction":1,"winner":4,"michigan":4,"dent":1,"abusive":1,"forfeiture":2,"terrible":2,"terms":1,"everywhere":2,"cops":1,"cars":5,"taken":4,"simply":3,"pass":3,"prostitution":1,"drivers":3,"crowdstrike":5,"dmca":1,"parody":1,"wake":3,"outage":2,"aware":2,"oopsie":1,"falcon":4,"sensor":1,"software":8,"result":2,"hospitals":1,"airlines":2,"banks":6,"impacted":2,"servers":1,"gop":6,"messy":2,"soap":1,"opera":1,"tom":3,"nichols":1,"democratic":12,"ticket":7,"handling":1,"meanwhile":1,"mate":16,"rest":6,"choose":6,"gymnastics":2,"workouts":1,"gymnasts":1,"versatile":1,"possibilities":3,"plans":13,"chancellor":2,"economy":13,"canadian-style":1,"pensions":1,"walz":16,"minnesota":6,"governor":13,"experts":9,"publishes":1,"si":2,"gana":2,"spanish":3,"translation":1,"wins":5,"cover":2,"package":1,"highly-sought-after":1,"featuring":2,"essays":1,"dozen":3,"writers":3,"courts":2,"educati":1,"publica":1,"una":1,"traducci":1,"al":4,"espa":1,"ol":1,"del":2,"mero":1,"especial":1,"agosto":1,"hoy":1,"un":3,"muy":1,"solicitado":1,"la":3,"revista":1,"que":2,"presenta":1,"ensayos":1,"dos":1,"docenas":1,"escritores":1,"sobre":1,"las":1,"consecuencias":1,"posible":1,"segunda":1,"presidencia":1,"y":3,"posibles":1,"implicaciones":1,"pol":1,"ticas":1,"para":1,"cortes":1,"reddit":2,"summaries":1,"paywalls":1,"thinking":3,"turn":5,"profit":6,"row":1,"allahu":1,"akbar":1,"arrest":3,"hopeful":1,"protesters":5,"shouting":1,"habituator":1,"ios":3,"widgets":1,"trying":14,"build":9,"unraveling":1,"attu":1,"forgotten":3,"underwater":1,"shipwrecks":1,"submerged":1,"near":6,"small":16,"alaskan":1,"deadliest":1,"conflicts":2,"vienna":1,"concert":1,"threat":5,"measures":2,"singer":4,"gigs":1,"tightened":1,"attacks":7,"sauron":1,"rationale":1,"sexy":1,"seducing":1,"celebrimbor":1,"finds":7,"documents":3,"army":4,"ira":1,"spy":1,"discovers":1,"agent":2,"stakeknife":1,"washington-post":68,"washingtonpost-com":68,"accused":6,"bias":2,"pro-harris":1,"accounts":1,"labeled":1,"prominent":4,"intentionally":1,"limiting":1,"opposing":1,"emotional":8,"finish":3,"isabel":1,"infantes":1,"reutersanother":1,"making":16,"marathon":1,"race":12,"walk":5,"mixed":1,"relay":1,"teams":4,"athlete":4,"alternate":1,"stages":3,"race-walking":1,"kilometers":1,"stage":4,"totaling":1,"distance":3,"maria":1,"perez":1,"spain":6,"reacts":1,"crosses":1,"the-new-yorker":11,"newyorker-com":11,"radicalization":1,"alleged":5,"palestinian":7,"detainees":1,"wider":3,"ideological":1,"chatty":1,"father-in-law":1,"ruins":1,"peaceful":1,"mornings":1,"hax":2,"readers":1,"advice":5,"writer":5,"struggles":5,"accept":1,"chitchat":1,"widowered":1,"extension":1,"cord":1,"won":16,"burn":1,"cords":1,"surprisingly":2,"varieties":1,"dad":3,"ballot":2,"charlie":1,"warzel":1,"dark-horse":1,"among":15,"top":15,"contenders":3,"appeal":3,"educator":1,"veteran":2,"progressive":3,"bona":1,"fides":1,"respected":1,"plainspoken":1,"flaw":2,"allow":2,"roll":4,"microsoft":3,"fixes":1,"presented":5,"annual":4,"hat":1,"conference":7,"science-technology":2,"engineered":2,"dust":1,"habitable":1,"restoring":2,"think":8,"fiction":3,"hive":1,"empire":3,"manager":9,"daughter":2,"genetically":1,"posthuman":1,"sf":1,"signs":3,"thieves":1,"casing":1,"yes":3,"burglars":1,"houses":2,"items":4,"steal":2,"temperatures":2,"debby":13,"spike":2,"east":10,"england":11,"hobbit":1,"fossil":3,"clarifies":1,"origin":3,"tiny":4,"relative":2,"homo":1,"floresiensis":1,"larger":3,"ancestor":1,"shrunk":1,"indonesian":2,"flores":1,"monkeys":1,"banksy":2,"artwork":2,"anonymous":1,"street":13,"artists":3,"london":5,"bridge":1,"instagram":2,"gaza":6,"polio":1,"vaccines":2,"amid":16,"ceasefire":2,"total":3,"freedom":1,"programme":2,"rolled":1,"asia":5,"thailand":3,"tramples":1,"country":26,"democracy":1,"pita":2,"limjaroenrat":2,"forward":8,"banned":5,"oral":1,"aging":4,"body":6,"eyes":4,"brag":1,"required":5,"glasses":2,"stomach":1,"definitely":1,"mention":1,"guess":1,"quite":3,"ears":1,"got":9,"damaged":1,"loud":1,"music":6,"didn":6,"goner":1,"stephen":2,"pet":1,"sematary":1,"weird":5,"girl":2,"cooties":1,"cosmic":1,"lovecraftiana":1,"historical":1,"roots":1,"branches":1,"chapter":4,"spoilers":2,"jud":1,"takes":7,"hack":1,"exposed":2,"planet":3,"breached":1,"hotels":3,"became":3,"rioters":5,"muddled":1,"becomes":3,"lightning":1,"rod":1,"anger":2,"mathematicians":1,"reinvent":1,"wheel":2,"higher":6,"dimensions":1,"solve":4,"decades-old":1,"geometry":1,"mathematical":2,"technique":4,"objects":1,"dimension":1,"dimensional":1,"putin":1,"calls":8,"cross-border":1,"kursk":1,"provocation":1,"ukrainian":2,"forces":2,"crossed":1,"western":4,"russia":7,"batteries":1,"stretchable":1,"enough":5,"wear":1,"skin":3,"inspiration":1,"electric":7,"eels":1,"shamima":2,"begum":2,"bid":8,"challenge":8,"citizenship":2,"smuggling":1,"cocaine":2,"bananas":1,"delivery":2,"glasgow":1,"fruit":1,"containing":1,"intercepted":1,"port":1,"dover":1,"stalls":1,"rains":1,"flooding":6,"southeastern":3,"foot":1,"rain":4,"tropical":5,"moving":6,"original":3,"watching":4,"probably":6,"paying":4,"enjoy":1,"exclusive":8,"self-esteem":1,"neighborhood":1,"williamsburg":1,"psht":1,"basically":1,"native":1,"quit":3,"chelsea":4,"leu":1,"pursuit":1,"hazy":1,"notions":1,"spend":1,"jumping":2,"hoops":1,"tell":4,"jump":5,"toiling":1,"toward":2,"promotion":1,"frequently":1,"source":6,"purpo":1,"refurbished":1,"pro":5,"grade":1,"condition":1,"parents":5,"aberdeenshire":1,"teacher":3,"numbers":7,"parent":2,"councils":1,"subjects":1,"taught":2,"running-mate":3,"progressives":1,"candidate":10,"moderates":1,"index":3,"buy":9,"hamburger":1,"meat-eaters":1,"argentina":5,"critics":3,"notable":1,"nonfiction":1,"poetry":1,"understand":7,"formidable":1,"scene":3,"moca":2,"arlington":2,"golden":4,"classics":1,"gathers":1,"celebrate":1,"anniversary":2,"formerly":7,"devices":2,"stuff":1,"safe":4,"vacation":1,"trip":1,"anxiety-free":1,"strikes":2,"union":3,"performers":2,"strike":9,"multiplayer":1,"democrats":15,"trauma":1,"packer":1,"gather":2,"chicago":5,"victim":1,"irresistibly":1,"drawn":2,"returning":1,"overcome":1,"spell":3,"succumb":1,"nothing":2,"drake":1,"surprises":2,"fans":6,"mega":1,"dump":1,"unseen":1,"content":6,"includes":3,"songs":2,"scenes":3,"footage":2,"previous":5,"physicists":2,"pinpoint":1,"greenhouse":1,"dioxide":1,"powerful":4,"heat-trapping":1,"traced":1,"quirk":2,"structure":2,"computer":3,"cartoon":1,"wednesday":7,"congratulations":1,"received":7,"one-millionth":1,"political-fund-raising":1,"e-mail":1,"backward":1,"step":7,"banning":2,"main":4,"opposition":2,"holding":5,"office":11,"dissolved":1,"squad":3,"cori":1,"bush":1,"congressional":2,"ms":3,"unseated":1,"missouri":5,"louis":1,"prosecutor":1,"wesley":1,"bell":1,"ends":3,"glittery":2,"traumatic":1,"oh":2,"abs":1,"blake":2,"lively":2,"justin":1,"baldoni":1,"bring":5,"colleen":1,"hoover":1,"bestseller":1,"unwieldy":1,"heartbreaking":1,"patched":1,"earliest":1,"convenience":1,"rebuke":1,"republican":12,"dominance":4,"opponents":1,"norm":1,"desired":2,"bloomberg-markets":23,"bloomberg-com":87,"evergrande":1,"unit":3,"faces":4,"liquidation":1,"petition":1,"unpaid":1,"sum":2,"become":7,"yuan":1,"related":3,"el-erian":1,"boj":2,"press":3,"pause":2,"rewind":1,"mohamed":1,"bloomberg":7,"contributor":1,"external":2,"dovish":2,"signal":2,"speaks":5,"television":3,"stole":1,"bluey":1,"coins":2,"arrested":4,"dollarbucks":1,"truck":2,"proportion":1,"recovered":4,"gang-rape":1,"sparks":1,"uproar":1,"tanzania":2,"urge":4,"stop":15,"circulating":1,"calm":1,"investigate":2,"highlights":2,"trivia":1,"roubini":2,"treasury":2,"issuance":2,"nouriel":2,"atlas":2,"fund":9,"portfolio":2,"macro":1,"associates":1,"ceo":12,"accusation":1,"manipulated":3,"lowers":1,"borrowing":3,"costs":6,"speaking":3,"comments":7,"outlook":5,"inside":7,"bbc":3,"shock":4,"dreaming":1,"direct":3,"traffic":3,"wonder":3,"fled":7,"bloomberg-politics":24,"unity":1,"cheers":1,"investors":17,"banking":1,"prospects":1,"drive":2,"helping":5,"bolster":1,"sentiment":2,"head":7,"pessimistic":1,"hard":5,"landing":4,"anytime":1,"sheikh":7,"hasina":7,"final":14,"hours":5,"hated":1,"autocrat":1,"woman":6,"ruled":9,"grip":1,"denial":2,"tapped":1,"credits":1,"upgrades":1,"taxpayers":1,"projected":2,"claimed":4,"inflation":3,"reduction":1,"incentives":2,"panels":2,"heat":4,"pumps":2,"climate-friendly":1,"projects":2,"monopoly":14,"ruling":10,"expert":2,"explains":2,"monday":45,"landmark":5,"illegally":4,"cemented":1,"internet":10,"tradition":2,"passeggiata":1,"evenings":1,"mood":1,"relationships":1,"stepping":2,"outdoors":1,"ecb":1,"rehn":1,"sees":6,"swings":1,"overreaction":1,"turbulence":1,"stock":13,"european":5,"governing":1,"olli":1,"show":16,"prompts":1,"complaints":1,"regulator":1,"ofcom":1,"assessing":1,"interviews":2,"itv":1,"owner":6,"chosen":2,"wade":1,"opine":1,"unrest":5,"driving":9,"bloomberg-wealth":13,"bulls":2,"charge":1,"yen":3,"draw":1,"panic":3,"meta":4,"kicks":1,"bond":4,"high-grade":1,"platforms":4,"tap":1,"investment-grade":1,"borrowers":1,"advantage":3,"left":7,"wide":6,"volatility":3,"slammed":2,"shut":3,"demonstrate":2,"jumper":1,"yaroslava":1,"mahuchikh":1,"fencer":1,"olga":1,"kharlan":1,"excel":1,"lift":3,"nation":6,"diplomats":1,"wife":2,"councillor":1,"bailed":1,"race-hate":1,"lucy":1,"connolly":1,"regrets":1,"calling":5,"ex-nfl":1,"leads":4,"wagers":1,"brazil":2,"tycoon":2,"league":8,"cleveland":1,"browns":1,"joined":5,"firm":8,"richest":1,"fintech":2,"tycoons":1,"farewells":2,"sixth":4,"extinction":1,"agree":2,"midst":2,"goodbye":1,"increasing":4,"frequency":1,"unfortunately":1,"average":4,"knows":2,"pitifully":1,"ask":1,"crocodile":2,"surges":4,"warn":3,"sorely":1,"coordinated":1,"marcia":1,"mcnutt":1,"malnutrition":1,"soars":1,"cost":6,"surging":1,"grapples":1,"cost-of-living":1,"nonprofit":5,"doctors":1,"borders":1,"justices":3,"italy":2,"flat":2,"wealthy":5,"residents":4,"levy":1,"flocking":1,"delivers":2,"agenda":5,"guests":1,"valentin":1,"marinov":1,"agricole":1,"fx":2,"kevin":2,"mahn":1,"hennion":1,"walsh":1,"cio":1,"glencore":1,"cobalt":1,"glut":1,"lasting":1,"second-biggest":2,"miner":1,"oversupply":1,"stretch":3,"output":4,"overwhelms":1,"abn":1,"amro":1,"grilled":1,"explanation":1,"nv":1,"executive":10,"swaak":1,"resign":1,"eclipsed":1,"positive":3,"earnings":5,"dutch":1,"lender":4,"journalists":2,"peppered":1,"ducked":1,"bitcoin":1,"stockpile":1,"alarms":1,"promise":2,"cryptocurrency":1,"alarmed":1,"prosecutors":5,"divert":1,"seized":1,"otherwise":2,"compensate":1,"victims":3,"crime":3,"estimates":4,"adds":3,"subscribers":1,"co":3,"second-quarter":5,"beat":8,"analysts":3,"expectations":4,"count":1,"slow":3,"systems":6,"blocking":2,"unleash":1,"longer":2,"brookfield":1,"trillion":4,"ltd":7,"gain":7,"quarterly":3,"profits":3,"rose":4,"approximately":1,"thai":2,"dissolves":1,"reformist":1,"election":22,"seats":1,"blocked":3,"forming":1,"hamas":17,"yehiya":1,"sinwar":4,"mastermind":2,"oct":4,"succeed":3,"ismail":3,"haniyeh":3,"bureau":1,"air":13,"canada":1,"drops":3,"weighed":1,"airfares":1,"drop":5,"margins":1,"pressured":1,"competition":4,"softening":1,"schneier-on-security":3,"schneier-com":3,"problems":5,"georgia":7,"voter":2,"registration":1,"portal":2,"cancel":1,"warning":4,"actors":3,"canceling":2,"registrations":2,"secretary":3,"acknowledged":1,"multiple":3,"attempts":2,"nhs":3,"gender":2,"centres":1,"regional":3,"clinics":2,"emphasis":1,"mental":3,"support":13,"polish":2,"jailed":2,"punching":1,"danish":2,"drunk":1,"deported":1,"denmark":2,"mortgage":2,"rates":7,"tumble":5,"-year":2,"plunged":4,"reaching":2,"sparking":3,"surge":1,"refinancing":1,"scrub":2,"nude":1,"deepfakes":1,"updated":3,"ai-generated":1,"explicit":1,"niger":2,"cuts":6,"ties":3,"backing":1,"malian":1,"rebels":3,"junta":1,"mali":1,"severing":1,"diplomatic":2,"rebel":1,"extend":2,"zimbabwean":1,"rule":6,"gains":6,"momentum":4,"emmerson":1,"mnangagwa":1,"indicated":2,"intends":1,"mounting":3,"serve":3,"german":3,"collapse":3,"services":9,"rescue":2,"trapped":1,"rubble":1,"town":5,"kr":1,"moon":4,"spiders":1,"underground":2,"lunar":2,"caves":1,"newfound":1,"spiderlike":1,"features":8,"explorers":1,"standby":2,"evacuation":2,"preparations":2,"warned":5,"deteriorate":1,"bonds":3,"traders":2,"pounce":1,"fragile":1,"appetite":1,"fell":8,"gripped":1,"continued":4,"subside":1,"executor":1,"neal":1,"devins":1,"myth":1,"cornell":1,"rev":1,"walker":1,"true":2,"roberts":1,"overrules":1,"precedent":2,"per":1,"nearly":18,"ninety":1,"upheld":3,"constitutionality":1,"statutory":1,"for-c":1,"slashes":1,"launches":4,"corp":4,"lowered":1,"straight":4,"quarter":3,"cost-cutting":1,"health-care":1,"expenses":1,"soar":4,"deports":1,"sentenced":2,"deportation":1,"prison":4,"attacking":2,"mette":1,"frederiksen":1,"copenhagen":1,"sues":3,"unilever":1,"boycott":1,"unfairly":1,"deprived":2,"billions":5,"dollars":3,"advertising":1,"revenue":1,"implats":1,"expects":1,"report":14,"writedown":1,"impala":1,"platinum":1,"holdings":3,"results":6,"impairments":1,"rand":1,"swing":3,"full-year":1,"platinum-group":1,"metals":1,"retreated":1,"rate":4,"halifax":1,"lower":4,"modest":1,"businessman":1,"tackled":1,"southport":4,"knifeman":1,"hearing":2,"screams":1,"johnathan":1,"hayes":2,"stabbed":1,"leg":1,"intervened":1,"cunning":1,"yahya":3,"named":4,"scrawled":1,"document":1,"knew":3,"egyptian":1,"intermediaries":1,"hand":1,"israeli":6,"benjamin":3,"netanyahu":4,"lyft":1,"shares":5,"bookings":2,"miss":6,"slid":1,"ride-hailing":1,"issued":3,"israel-iran":1,"faceoff":1,"spur":1,"truce":1,"balance":2,"haven":2,"latimes-com":55,"disappointments":1,"courage":1,"vp":8,"kudos":1,"blatantly":1,"thing":5,"select":2,"battleground":5,"rip":1,"van":1,"winkle":1,"lately":1,"subject":1,"paintings":1,"naming":3,"motel":1,"cities":8,"pushing":3,"fontana":1,"beverly":1,"hills":4,"opposed":1,"aims":3,"prestige":2,"tiktok":9,"inheritor":1,"ex":1,"personality":1,"son":5,"divorced":1,"mom":3,"encourage":2,"steven":2,"mnuchin":1,"quick":2,"glance":1,"curve":1,"realize":2,"something":4,"detached":1,"hovers":1,"yields":1,"surrounding":2,"booming":1,"scanners":1,"aimed":4,"assurance":1,"checks":1,"increasingly":4,"kids":4,"rely":1,"style":3,"surveillance":2,"ranges":1,"somewhat":4,"privacy":1,"violating":2,"authoritarian":1,"nightmare":2,"daisy":1,"ridley":1,"graves":1,"diagnosis":4,"actress":2,"initially":3,"symptoms":2,"stressful":1,"film":3,"infrastructure":5,"urgently":1,"crippling":1,"bottlenecks":1,"derailing":1,"budding":1,"pro-china":1,"criticize":1,"rights":17,"agitators":1,"extremists":2,"inflame":1,"state-backed":1,"domestic":2,"coalesced":1,"stoke":1,"incite":1,"messaging":1,"telegram":1,"dbs":1,"picks":1,"tan":2,"singapore":1,"shan":1,"piyush":1,"gupta":1,"becoming":4,"risks":9,"exacerbated":1,"downside":1,"fiscal":2,"metrics":1,"ratings":1,"nobel":4,"tasked":2,"muhammad":3,"yumus":1,"interim":4,"ouster":3,"ex-pm":2,"ex-catalan":1,"puigdemont":1,"catalan":1,"carles":1,"stake":2,"defying":1,"adviser":2,"scott":2,"bessent":1,"founder":4,"square":2,"fray":1,"ousted":1,"resigned":3,"dramatic":3,"reign":2,"shaped":2,"criticises":1,"civil":3,"spokesperson":3,"justification":1,"stars":5,"strictly":1,"dancing":1,"tasha":1,"ghouri":1,"towie":1,"pete":2,"wicks":1,"join":7,"line-up":1,"raise":2,"messaggero":1,"regime":1,"turning":4,"destination":1,"rapid":2,"sentencing":5,"starmer":6,"teenager":1,"nelson":1,"person":5,"generative":7,"transformative":2,"patient":4,"outcomes":1,"senior":7,"advisor":1,"weathered":1,"double-digit":1,"turmoil":6,"showing":2,"faster":4,"increase":6,"hospital":2,"facility":2,"united-states":1,"coach":8,"trusty":1,"republicans":6,"seek":3,"rivals":5,"dangerously":2,"liberal":3,"matching":1,"displays":1,"enthusiasm":1,"unfinished":1,"ben":2,"elton":1,"rik":1,"mayall":1,"launch":14,"bristol":2,"old":6,"vic":1,"fourth":5,"mapping":1,"ocean":3,"floor":4,"cameras":1,"attached":1,"backs":1,"captured":1,"awe-inspiring":1,"flipping":1,"octopus":1,"switzerland":1,"discussing":2,"super-rich":1,"entrepreneurs":2,"threatened":2,"leave":5,"inheritance":1,"proposals":2,"carolyn":1,"partner":4,"bothersome":1,"prior-life":1,"baggage":1,"frustrated":2,"husband":2,"weaknesses":1,"motorcycle":1,"sons":1,"prior":1,"marriage":1,"manners":2,"rude":1,"offer":8,"gift":1,"co-worker":1,"offered":2,"pricey":1,"accessory":1,"cream":1,"soda":2,"dairy-based":1,"vanilla-flavored":1,"nary":1,"dairy":1,"sight":2,"sodas":1,"asking":5,"eric":1,"sister":1,"distress":2,"ailing":1,"considers":2,"waiting":2,"mother":4,"passes":1,"reach":6,"patrols":1,"disputed":3,"allies":3,"defense":3,"drills":1,"naval":1,"patrol":1,"contested":2,"maritime":1,"upholds":1,"ban":5,"gender-affirming":1,"bans":2,"vibes":2,"jibes":1,"picked":1,"convincing":1,"undecided":1,"voters":8,"rhetoric":2,"writes":6,"anthony":1,"zurcher":1,"yunus":2,"transitional":1,"laureate":2,"asked":3,"guide":4,"transitory":1,"period":3,"awkward":1,"connections":1,"inform":1,"trouble":3,"beijing":1,"reassuring":1,"faith":2,"fellow":4,"citizens":1,"mint":1,"starts":1,"e-waste":1,"gold":19,"coin-maker":1,"opens":2,"industrial":3,"extract":1,"circuit":3,"boards":1,"oil":4,"climbs":1,"equities":1,"rally":8,"eye":1,"retaliation":7,"rallied":1,"globally":1,"rout":5,"remained":2,"edge":7,"retaliatory":2,"teachers":2,"spotlight":3,"lionized":1,"hollywood":6,"practice":6,"underpaid":1,"overworked":1,"disrespected":1,"baltimore":1,"baltimore-area":1,"homeowners":1,"utility":1,"mid-":1,"procuring":1,"supplies":1,"soared":2,"all-time":2,"grid":1,"auction":1,"heads":2,"vote":2,"efforts":3,"rank-and-file":1,"fold":2,"tow":1,"charged":6,"unarmed":1,"sonya":1,"massey":1,"fear":2,"sean":2,"grayson":1,"murder":5,"shooting":4,"pot":2,"flagged":1,"impulsive":1,"decision-making":1,"stocks":12,"wrap":2,"climbed":1,"globe":1,"reassure":1,"sparked":4,"asian":3,"unexpected":1,"hike":1,"maryland":1,"assault-style":1,"weapons":2,"appeals":2,"comports":1,"self-defense":1,"makes":13,"appointment":3,"architect":1,"october":4,"closer":5,"stayed":1,"cautious":2,"vanity-fair":17,"vanityfair-com":17,"fundraiser":1,"hamptons":1,"unleashed":1,"gridlock":1,"never-ending":1,"riverhead":1,"amagansett":1,"lasted":2,"night":4,"vehicles":5,"roads":2,"side":5,"streets":1,"highways":2,"snarled":1,"brings":3,"classic":2,"menu":2,"bar":4,"prefer":1,"tiger":1,"catalina":1,"mavericks":1,"washington":4,"arab":2,"scramble":1,"avert":1,"all-out":1,"braces":4,"iranian":4,"officials":10,"fume":1,"spiraling":1,"must-have":2,"solutions":2,"ready":8,"all-in":1,"reorganizing":1,"k":4,"blame":3,"declared":4,"inevitable":2,"keir":5,"deplorable":1,"disbands":1,"push":5,"ordered":3,"dissolution":1,"verdict":2,"igniting":1,"fresh":2,"order":7,"hindus":1,"targeted":6,"hindu":1,"properties":3,"shrines":1,"attacked":3,"wannabe":1,"tie":2,"linking":2,"strategists":2,"pundits":1,"figure":2,"resonates":1,"views":1,"ultimate":2,"seeks":2,"everyman":1,"giving":3,"someone":2,"sync":1,"presents":2,"sense":3,"centrist":1,"spans":1,"nine":7,"users":8,"jd":3,"vance":7,"unbearable":1,"kennedy":4,"jr":5,"menagerie":1,"tales":1,"out-weird":1,"dead":8,"interview":8,"transcripts":2,"paint":1,"picture":2,"assembly":1,"testify":1,"hearings":1,"examining":1,"breakdowns":1,"mid-air":1,"blowout":1,"aboard":1,"jet":4,"airbnb":1,"slide":2,"weak":3,"disappointing":2,"slowing":4,"vacationers":1,"getting":15,"scammed":1,"mechanic":1,"mercy":1,"defend":2,"simple":2,"steps":4,"knowing":4,"moment":6,"selection":4,"exceeding":1,"disappointed":1,"kerr":1,"silver":3,"josh":2,"proud":3,"saw":3,"personal":18,"cole":1,"hocker":1,"clarence":4,"thomas":6,"saga":3,"theoretical":1,"slams":1,"recovering":2,"flooded":1,"bend":2,"pounded":1,"idalia":1,"levoit":1,"purifiers":1,"upgrade":2,"lockdown":1,"bunch":1,"bangladeshi":1,"student":3,"chiefs":4,"represents":2,"initial":3,"reaches":1,"silver-medal":1,"math":1,"olympiad":2,"deepmind":1,"debuted":1,"generate":3,"proofs":1,"goldman":2,"solomon":1,"fed":4,"forgo":1,"jobs":6,"sachs":2,"predicted":4,"reserve":5,"skirting":2,"recession":10,"granderson":1,"picking":2,"needed":8,"woo":2,"guy":2,"happens":3,"answering":1,"everyone":10,"goldman-led":1,"tower":2,"consortium":1,"lenders":1,"tsx":1,"broadway":2,"heart":6,"failed":3,"repay":1,"loan":3,"dashing":2,"cease-fire":2,"assault":3,"blow":6,"multilateral":1,"delves":1,"dwarf-rings":1,"gives":4,"fury":1,"road-inspired":1,"rh":1,"fantasy":2,"assassins":1,"sorceresses":1,"deathspeakers":1,"releases":4,"troops":6,"contractors":1,"injured":4,"rocket":7,"iraq":3,"assad":1,"wounded":4,"carried":3,"iranian-back":1,"militants":1,"pentagon":2,"witnessed":3,"utterly":1,"horrendous":1,"stockmarket":1,"breath":1,"assess":1,"correction":2,"crash":8,"channing":1,"tatum":1,"bit":2,"zo":1,"kravitz":1,"actor":6,"mythological":1,"greek":2,"god":1,"versace":1,"eros":1,"fragrance":1,"reflects":3,"career":4,"passions":1,"donatella":1,"monopolist":2,"big-tech":1,"showdown":2,"pitbull":1,"stadium":2,"mr":3,"struck":2,"particularly":1,"mideast":2,"cardiologist":1,"moderate":1,"mustafa":1,"barghouti":1,"tries":4,"drum":1,"hill":1,"cause":4,"far-right":5,"spread":3,"violent":5,"stabbing":3,"instructions":1,"directing":3,"peek":2,"curtain":1,"moves":4,"landfall":2,"steinhatchee":1,"history-lover":1,"clues":3,"passwords":1,"estate":2,"savings":1,"tangible":1,"goodwill":1,"thrift":1,"shop":1,"looks":5,"cowboy":1,"boots":2,"wore":1,"college":3,"neuromancer":1,"william":2,"gibson":1,"archetypal":1,"cyberpunk":1,"turned":7,"forty":2,"month--how":1,"lets":3,"browse":1,"wikipedia":1,"smoothest":1,"rabbit":1,"protest":3,"deploy":3,"groups":5,"planned":6,"dozens":2,"demonstrations":4,"shaping":1,"quell":1,"wave":2,"anti-immigrant":4,"sent":7,"blank":1,"emails":8,"exam":1,"pupils":1,"exams":1,"sqa":1,"ministers":2,"minimum":1,"abolish":1,"duchess":2,"sophie":1,"tears":2,"prince":2,"kate":1,"middleton":1,"unlikely":2,"appearance":4,"proximity":1,"princess":2,"history-making":2,"moments":1,"oppose":1,"sending":4,"poll":2,"findings":1,"tensions":2,"loom":1,"repositioned":1,"preparation":1,"airpods":1,"top-tier":1,"headphones":1,"currently":1,"addictive":5,"filled":1,"fuckups":1,"creators":3,"mickey":1,"konrad":1,"kay":1,"cast":5,"kit":1,"harington":1,"succession":1,"overlap":2,"odds":2,"cult":2,"hbo":4,"drama":4,"bloody":2,"hurting":1,"kremlin":1,"donbas":1,"bbc-co-uk":1,"loans":2,"borrow":1,"meat":2,"thermometer":1,"accurate":2,"instant-read":1,"cooking":1,"temperature":2,"youtube":2,"library":3,"wherever":1,"google-quality":1,"engine":4,"tailored":1,"chrome":1,"split":1,"soccer-the-guardian":17,"theguardian-com":88,"germany":3,"soccer":1,"semi-final":1,"beau":1,"dure":1,"theguardian":1,"com":5,"thoughtsthe":1,"schedule":2,"resultswelcome":1,"referendum":1,"legendary":1,"emma":1,"vaunted":1,"frontline":1,"seems":2,"dipped":1,"productivity":2,"ripping":1,"goals":2,"pas":1,"captains":1,"crossroads":1,"twilight":1,"chapters":1,"reunite":1,"mat":1,"spendolini-sirieix":1,"misses":2,"quan":1,"dives":1,"hongchan":1,"andrea":1,"finishes":2,"ripley":1,"dakota":2,"fanning":1,"anything":3,"onscreen":1,"emmy":1,"netflix":1,"vanity":1,"imagines":1,"gazing":1,"algorithmic":1,"abyss":1,"wondering":2,"hq":1,"speculates":1,"structural":1,"atl":2,"tico":2,"madrid":3,"hoovering":1,"unwanted":1,"premier":5,"talent":1,"juli":2,"lvarez":2,"cup":1,"copa":1,"rica":1,"twice":4,"libertadores":1,"fa":2,"fifa":1,"hasn":6,"france":5,"grudge":1,"ma":2,"brain":7,"drain":1,"threatens":3,"boat":1,"lawrence":2,"solving":3,"iceland":2,"mystery":2,"erupting":1,"tools":8,"gardener":1,"fancy":2,"basic":1,"hern":1,"ndez":1,"dodgers":5,"tested":2,"toughest":1,"four-week":1,"relatively":1,"unscathed":1,"commandments":1,"louisiana":1,"gov":1,"jeff":2,"landry":1,"liz":1,"murrill":1,"requiring":2,"displayed":2,"classrooms":1,"dismissed":2,"extended":4,"hargreaves":1,"lansdown":1,"takeover":3,"employs":1,"girardi":1,"housewives":2,"trial":11,"injury":3,"famous":3,"erin":1,"brockovich":1,"infamous":1,"divorce":1,"played":3,"bravo":2,"fraud":2,"underway":2,"los":2,"angeles":2,"blew":1,"whistle":1,"describes":1,"significantly":3,"worse":4,"bernie":1,"madoff":1,"slot":1,"creator":4,"weirdos":1,"schoolteacher":1,"proving":1,"entertaining":1,"appears":5,"elusive":2,"artist":1,"unveils":4,"stencil":1,"piece":4,"south-west":1,"ex-football":1,"guardsman":1,"overdoses":1,"pandemic":3,"chromecast":1,"favor":1,"streamer":2,"ai-powered":1,"box":2,"thermostat":1,"yep":1,"guessed":1,"nest":1,"learning":3,"heating":2,"cooling":1,"remi":1,"allen":1,"southampton":1,"weeks":10,"retiring":2,"player":4,"landed":2,"championship":3,"job":6,"coaching":1,"liferemi":1,"seem":3,"hung":2,"playing":5,"hard-earned":1,"b":5,"golfer":1,"crashes":2,"course":2,"injuries":1,"onto":1,"haggin":1,"oaks":1,"golf":2,"sacramento":1,"jenna":5,"ortega":1,"settles":1,"fame":1,"beetlejuice":1,"slightly":2,"overwhelming":1,"friendships":1,"winona":1,"ryder":1,"burton":1,"superstar":1,"underworld":1,"bounce":1,"fundamentals":1,"driver":2,"refuses":1,"deciding":1,"wsj-com-world-news":17,"wsj-com":38,"dow":2,"futures":2,"steadied":1,"muted":1,"nikkei":3,"clawing":1,"chunk":1,"session":1,"aramco":1,"payout":1,"net":4,"dividends":1,"saudi":2,"shareholders":1,"zalando":1,"finance":3,"reshuffle":1,"fashion":1,"retailer":1,"cfo":1,"sandra":1,"dembeck":1,"renew":1,"announce":8,"replacement":2,"damon":1,"casey":1,"affleck":1,"sputter":1,"instigators":1,"doug":2,"liman":1,"stellar":2,"supporting":2,"boston-based":1,"caper":1,"comedy":1,"limits":3,"pathogens":1,"spark":2,"humans":3,"electable":1,"wonderful":1,"critiques":1,"concern":4,"fantastic":2,"communicator":1,"clip":1,"blown":1,"knowledge":2,"poise":1,"meme-able":1,"laugh":1,"worry":5,"others":6,"willing":3,"substance":1,"reputati":1,"fastest":3,"climber":1,"alive":1,"trains":2,"chess":3,"watson":1,"world-record":2,"holder":1,"hones":1,"pattern-recognition":1,"sitting":2,"sterling":1,"sensitivity":2,"compared":2,"euro":2,"monex":1,"unwinding":3,"bets":3,"rising":3,"regain":1,"unusual":3,"sell-off":7,"possibly":5,"desirability":1,"mbapp":1,"play":5,"kane":1,"trophy":1,"weekly":2,"rushden":1,"barry":1,"glendenning":1,"nicky":1,"bandini":1,"lars":1,"sivertsen":1,"phil":1,"kitromilides":1,"pod":1,"seasonrate":1,"share":4,"podcasts":4,"soundcloud":1,"audioboom":1,"mixcloud":1,"acast":1,"stitcher":1,"conversation":2,"twitter":5,"kylian":1,"arrived":1,"madri":1,"argentinian":1,"scores":1,"sensational":2,"bicycle":1,"kick":2,"outside":3,"lan":1,"walter":2,"bou":1,"scored":3,"contender":2,"puskas":1,"award":2,"tigre":1,"ball":2,"chest":1,"keeper":2,"chance":4,"auto":1,"roundup":6,"volvo":1,"cdk":1,"covering":6,"cyber":1,"safety":6,"airplane":2,"impartial":1,"investigatory":1,"bodies":2,"empowered":1,"unearth":1,"faulty":1,"unfolded":1,"ensnarling":1,"tune":1,"bayer":1,"leverkusen":1,"nathan":1,"tella":1,"loanee":1,"bundesliga":1,"returns":3,"arsenal":1,"friendly":1,"burnley":1,"ended":5,"vincent":1,"kompany":1,"seal":1,"title":2,"forwa":1,"andr":1,"onana":1,"vows":3,"manchester":4,"accepts":1,"justified":1,"pointsonana":1,"carry":3,"responsibilityandr":1,"victories":2,"goalkeeper":1,"trafford":2,"uneven":1,"jus":1,"brentford":1,"toney":1,"rumbles":1,"signings":1,"fast":5,"relegation":1,"scrap":1,"position":2,"nb":2,"necessarily":2,"uzzi":1,"majid":1,"prediction":2,"tips":3,"abnormal":1,"ipo":3,"secures":2,"baby":4,"boomers":1,"stand":3,"congestion":1,"pricing":1,"hurt":6,"retirees":1,"promised":3,"charts":1,"normal":1,"involves":1,"fewer":2,"screens":2,"novelty":2,"popcorn":1,"uber":1,"profitability":1,"rides":1,"sunpower":1,"files":3,"bankruptcy":2,"sell":5,"solaria":1,"agreed":5,"associated":2,"raven":1,"new-homes":1,"non-installing":1,"dealer":2,"rcm":1,"lilly":1,"utilities":1,"woodside":1,"beng":1,"kuang":1,"telecom":1,"nvidia":5,"super":2,"micro":1,"technology":22,"barclays":1,"hsbc":1,"racial":4,"emotions":1,"systemic":2,"tristin":1,"green":4,"emotion":1,"discrimination":3,"building":3,"workplace":2,"tippett":1,"regarding":1,"implies":1,"interactions":2,"goe":1,"newcastle":2,"marc":1,"gu":1,"hi":1,"crystal":1,"defender":1,"keen":1,"negotiations":1,"continuing":3,"-plus":2,"transferwest":1,"ham":2,"midfielder":1,"guido":1,"rodr":1,"gueznewcastle":1,"cautiously":1,"component":1,"believed":3,"progressing":1,"crucially":1,"factory":2,"orders":3,"economists":2,"forecasts":1,"manufacturing":1,"driven":2,"car":6,"offering":4,"beleaguered":1,"goldberg":1,"avoiding":2,"substantial":1,"withdrew":2,"given":5,"antics":1,"wise":1,"acceptable":1,"wearing":1,"pommel":2,"horse":2,"wizard":1,"nedoroscik":1,"shooter":1,"kim":1,"yeji":1,"consumer":2,"powering":1,"cascades":1,"conflicting":1,"marines":1,"killings":1,"perspective":1,"challenged":3,"define":1,"alphabet":3,"newcomer":1,"second-rate":1,"weirdo":1,"roller-coaster":1,"ride":5,"gyrating":1,"currency":2,"weakening":2,"strikeratl":1,"gallaghermanchester":1,"striker":1,"champions":1,"numerou":1,"oklahoma":2,"touts":1,"voluntary":1,"clean":3,"wells":1,"drillers":1,"contributions":3,"refunded":1,"mark":6,"olalde":1,"nick":2,"bowlin":1,"newsroom":3,"investigates":4,"toronto":1,"cooled":1,"shouldn":1,"selloff":6,"capped":1,"three-week":1,"wealth":4,"wary":1,"mario":1,"sonic":1,"absent":1,"gonna":2,"cry":1,"lioness":1,"ella":1,"toone":1,"friend":2,"keely":2,"hodgkinson":2,"celebrates":3,"rollercoaster":2,"staying":2,"signing":2,"harry":2,"mclean":1,"two-year":1,"guarantee":1,"freddie":1,"freeman":1,"highlight":3,"phillies":1,"appreciative":1,"lengthy":1,"standing":1,"ovation":1,"hospitalization":2,"prodigy":1,"youngest":1,"grandmaster":1,"woolwich":1,"youth":1,"india":5,"prestigious":1,"championships":1,"san":9,"francisco":7,"multi-billionaire":1,"michelin":1,"restaurants":3,"first-ever":2,"nyt-business":9,"nytimes-com":83,"elevates":1,"pin":1,"trading":7,"unofficial":1,"celebrities":1,"chronicling":1,"chase":2,"prized":1,"conquests":1,"designs":1,"simone":4,"biles":4,"kushner":1,"balkan":1,"relics":1,"luxury":3,"son-in-law":1,"glitzy":1,"accommodation":1,"albania":1,"serbia":1,"happy":3,"daughter-in-law":1,"condoms":1,"pack":2,"unplanned":1,"pregnancy":1,"skillet":1,"gnocchi":1,"eggplant-tomato":1,"sauce":1,"store-bought":1,"potato":1,"sauteed":1,"crisp":1,"stirred":1,"tomato":1,"world-news-the-guardian":34,"australia":7,"linda":3,"shocked":1,"brittany":2,"higgins":2,"sexual":3,"rba":1,"two-day":1,"unchanged":1,"gathering":1,"follow":3,"liveget":1,"afternoon":8,"free":12,"podcastaustralia":1,"entry":1,"creating":5,"pathway":1,"australians":2,"visi":1,"river":5,"defendant":2,"condoning":1,"slogan":1,"protesta":1,"berlin":1,"expected":9,"pro-palestinian":2,"activist":2,"divisive":1,"supporters":4,"woma":1,"nyt-health":3,"yearly":1,"tag":1,"cancer":4,"screening":1,"estimate":1,"cancers":1,"medically":1,"recommended":1,"breast":1,"cervical":1,"colorectal":1,"lung":1,"prostate":1,"colonoscopies":1,"accounted":1,"shook":1,"surged":2,"rebounding":1,"tuesdayjapanese":1,"plunging":2,"setting":4,"tumbling":2,"settled":1,"spacenews":14,"spacenews-com":14,"benchmark":2,"starlight":1,"thruster":1,"logan":7,"utah":7,"strategic":2,"startup":13,"engines":1,"satellite":5,"hybrid":1,"sharply":2,"overdue":1,"pullback":2,"us-news-the-guardian":20,"robinson":1,"surfing":1,"hero":1,"tahiti":1,"kauli":1,"vaast":1,"men":7,"teahupo":1,"caroline":1,"tatiana":1,"weston-webbfrance":1,"thrilling":2,"hel":1,"remove":3,"lite":3,"removing":1,"rewards":2,"regulators":1,"harm":1,"witness":1,"defamation":1,"hears":1,"senator":3,"rape":1,"parliament":1,"returned":2,"afte":1,"bloomberg-technology":27,"softbank":1,"log":1,"slim":1,"masayoshi":1,"bet":2,"indication":1,"weigh":1,"billionaire":5,"resigns":3,"elections":3,"celebrationsexplainer":1,"coordinators":1,"scheduled":2,"gen":3,"waker-uz-zaman":1,"techcrunch":19,"techcrunch-com":19,"openai":13,"co-founder":1,"schulman":2,"leaves":3,"anthropic":3,"brockman":2,"john":5,"co-founders":2,"rival":2,"addition":2,"greg":2,"relax":1,"recharge":1,"peter":1,"deng":1,"reserved":12,"fast-moving":1,"wildfire":2,"destroys":1,"burns":1,"acres":1,"edgehill":1,"bernardino":1,"forced":1,"evacuations":1,"firefighters":1,"assigned":2,"blazea":1,"county":2,"burned":1,"shandin":1,"music-rolling-stone":7,"rollingstone-com":18,"pnb":1,"rock":1,"weeps":1,"testimony":1,"ridiculous":1,"rolling":2,"stone":1,"rapper":2,"pbs-newshour":14,"youtube-com":17,"pbs":14,"hour":5,"newshour":14,"breaking":5,"ranked":3,"credible":3,"objective":3,"subscribe":5,"newsletters":3,"www":4,"org":3,"favorites":3,"wi":3,"nyt-arts":9,"akili":1,"mcdowell":1,"parking":1,"houston":1,"apartment":2,"deploys":3,"renewed":2,"richer":1,"xpeng":1,"aeroht":1,"carmaker":1,"raised":6,"guangzhou":1,"edges":2,"asx":1,"enjoys":1,"reprieve":1,"sessions":1,"fearsfollow":1,"blog":6,"updatesget":5,"podcastthe":3,"enjoying":1,"intense":1,"selling":3,"nyt-u-s-news":13,"nears":1,"fierce":1,"lobbying":2,"democrat":1,"recounted":1,"word":1,"empty":1,"churches":1,"malls":1,"vaulted":1,"ceilings":1,"stained-glass":1,"architectural":1,"draws":1,"seize":2,"downturn":3,"blamed":2,"variety":2,"tunisia":1,"jails":1,"candidates":2,"bars":1,"challengers":1,"tunisan":1,"kais":1,"saied":1,"tunisian":1,"politicians":2,"excluding":1,"fujitsu":1,"consultancy":2,"winning":1,"bigger":5,"integrators":1,"accenture":1,"victory":5,"string":1,"lawsuits":2,"queensland":3,"revelations":1,"abominable":1,"commissioner":1,"steve":2,"gollschewski":1,"facilities":1,"examined":1,"periodsfollow":1,"acknowledges":1,"end-to-end":1,"issu":1,"anitta":1,"gymnast":3,"rebeca":2,"andrade":2,"song":2,"decorated":3,"brazilian":3,"olympian":3,"earning":1,"thank":1,"representing":1,"beautifully":2,"xiaomi-backed":1,"chipmaker":1,"sesame":1,"hong":2,"kong":2,"bottom":2,"range":3,"priced":1,"marketed":1,"piles":1,"nyt-world-news":34,"flees":2,"formed":4,"demonstrators":2,"successfully":2,"harsh":1,"colorado":1,"funeral":1,"jon":1,"carie":1,"hallford":1,"liable":1,"paid":3,"outthe":1,"couple":2,"owned":3,"decaying":1,"symbolic":2,"deceased":1,"victi":1,"technology-the-guardian":7,"maintain":3,"web":2,"interact":2,"amit":2,"mehta":2,"researcher":1,"nyt-sports":6,"sox":1,"embarrassment":1,"columnist":3,"athletic":3,"steph":1,"curry":1,"ideal":1,"lauri":1,"markkanen":1,"interested":2,"switching":1,"assistants":1,"conditioning":1,"handful":1,"coaches":1,"attempted":2,"scaled-down":1,"version":2,"physical":1,"raiders":2,"players":3,"noah":2,"lyles":2,"-meter":3,"usain":1,"bolt":1,"stride":1,"eating":2,"cruising":1,"appreciate":1,"rodeo":2,"soak":1,"reshaped":1,"nbc":2,"believing":2,"commodity":1,"ye":1,"complicated":1,"praised":1,"kanye":1,"remarks":2,"drew":1,"widespread":1,"condemnations":1,"spat":2,"echoes":1,"dispute":4,"grown":3,"perceived":1,"resembled":1,"iraqi":1,"armed":1,"backed":3,"shrug":1,"offices":1,"complained":1,"homelessness":1,"drowned":1,"montana":1,"glacier":1,"rangers":1,"siddhant":1,"vitthal":1,"patil":1,"creek":1,"julyglacier":1,"avalanche":1,"cree":1,"separatists":1,"helicopter":1,"zealand":3,"easternmost":1,"kidnap":1,"pilotseparatist":1,"adding":1,"onboard":1,"aircraft":3,"glen":1,"malcolm":1,"conning":1,"aviation":2,"next-generation":3,"chip":7,"rollout":1,"engineering":2,"snags":1,"chips":3,"designed":3,"ex-police":2,"raid":1,"kansas":2,"newspaper":1,"gideon":1,"cody":1,"interference":2,"judicial":1,"felony":2,"marion":1,"rs-recommends-rolling-stone":2,"trap":2,"blink":1,"batman":1,"caped":1,"crusader":1,"entertainment-arts":6,"vet":1,"clinic":1,"belly":1,"rubs":1,"veterinary":1,"sharing":1,"joking":1,"redeeming":1,"politics-rolling-stone":5,"unmitigated":1,"polling":1,"smother":1,"november":2,"polls":3,"biz-it-ars-technica":2,"arstechnica-com":11,"delivered":2,"isp":1,"dns":1,"poisoning":1,"worked":4,"cloudflare":1,"readies":1,"tour":7,"contest":3,"local-news":3,"wgbh-org":4,"rugby":2,"popularity":1,"visibility":1,"armand":1,"duplantis":1,"timoth":1,"chalamet":1,"pole":2,"vault":4,"swedish":2,"heartthrob":1,"showed":2,"mastery":2,"strangest":1,"secretaries":3,"grok":3,"chatbot":3,"spreading":3,"misinformation":3,"confused":2,"homophonic":1,"groq":4,"false":3,"penned":1,"addressed":1,"tesla":5,"ripple":1,"plunge":2,"batters":1,"inland":2,"tod":1,"fisherman":1,"belong":1,"nsw":1,"cooktown":1,"saturday":3,"podcasthuman":1,"located":1,"boxing":2,"clarity":1,"medals":5,"kobe":1,"bryant":1,"gianna":1,"crypto":2,"arena":1,"entrance":1,"lakers":1,"icon":1,"statue":2,"lifestyle":3,"huh":1,"surfers":1,"carving":1,"charging":1,"competed":1,"inspired":1,"waves":2,"surf":1,"lingo":1,"allyson":2,"felix":2,"narrative":4,"mothers":1,"competing":1,"dominate":2,"goal":2,"highest":2,"amna":4,"nawaz":4,"discuss":5,"multistate":1,"unprecedented":1,"followed":1,"withdrawal":1,"sza":1,"break":6,"performing":3,"together":4,"concluded":1,"sos":1,"osheaga":1,"sunday":9,"sen":1,"wyden":2,"undisclosed":3,"flights":3,"donor":2,"ron":3,"harlan":3,"crow":4,"tamara":1,"keith":1,"amy":2,"importance":2,"npr":7,"cook":1,"fundraising":2,"struggle":3,"message":3,"opponent":2,"lynch":3,"twin":1,"peaks":1,"emphysema":3,"remotely":1,"capture":1,"tackle":1,"capturing":1,"storing":1,"directly":4,"atmosphere":1,"bournemouth":1,"andoni":1,"iraola":1,"pressing":1,"plaudits":1,"ambitious":1,"consistent":2,"campaignguardian":1,"brewin":1,"celebrations":1,"replacing":1,"funerals":1,"co-op":1,"funeralcare":1,"venues":1,"coffinstraditional":1,"sombre":1,"religious":2,"replaced":2,"touches":1,"dr":3,"who-themed":1,"coffins":1,"above-the-law":10,"abovethelaw-com":10,"accountable":2,"scotus":1,"angry":1,"bill":5,"barr":3,"hates":1,"ethics":4,"bipartisan":3,"cursed":1,"poor":4,"turns":3,"trips":2,"clients":2,"midsized":1,"uptick":1,"ranking":2,"statu":1,"feminist":1,"legend":1,"jane":3,"fonda":2,"endorsing":1,"endorse":2,"begins":3,"camera":1,"close-up":1,"pope":1,"francis":1,"names":3,"boston":5,"archdiocese":1,"bishop":1,"henning":1,"cardinal":1,"se":2,"malley":1,"trusted":1,"usha":2,"defends":1,"childless":2,"ladies":2,"quip":2,"fox":2,"substantive":2,"jest":1,"facing":4,"quits":1,"defied":1,"curfew":1,"expecting":1,"crackdowns":2,"marked":1,"round":6,"balloting":1,"delegates":1,"officially":1,"secure":1,"parties":2,"n-l":1,"pez":1,"traveled":1,"pivotal":1,"voting":1,"bloc":1,"democ":1,"soften":1,"shadow":1,"generates":1,"roughly":1,"payments":1,"mexican":2,"reporter":4,"gunned":1,"alejandro":1,"mart":1,"nez":1,"threats":2,"shot":4,"bodyguards":1,"npr-topics-world":6,"npr-org":36,"detains":1,"binance":1,"caught":2,"effectively":1,"hostage":1,"wsj-com-markets":9,"worried":3,"exceptions":2,"jean-philippe":1,"mateta":1,"fires":5,"reel":1,"egypt":2,"morocco":1,"fifth":4,"finalcrystal":1,"beaten":2,"mahmoud":1,"saber":1,"lucid":1,"arabia":1,"committing":1,"motors":1,"ev":5,"erase":1,"affiliate":1,"sovereign":1,"placement":1,"doom-mongering":1,"npr-topics-climate":1,"rainy":1,"abnormally":1,"trundling":1,"dropping":2,"amounts":3,"npr-topics-news":2,"sweden":2,"mondo":1,"american-swede":1,"eager":1,"wait":3,"clinching":1,"knocking":1,"physicians":1,"listen":1,"telltale":1,"hearts":1,"memoir":1,"dean-david":1,"schillinger":1,"traces":1,"links":3,"despair":1,"desire":1,"fighting":4,"occupation":2,"citing":3,"fired":3,"unrwa":3,"determining":1,"hamas-led":3,"shine":1,"ilona":1,"maher":1,"stood":1,"virality":1,"wreak":1,"havoc":3,"crack":1,"right-wing":1,"thugs":1,"ignited":1,"racially":1,"towns":4,"arrests":2,"correspondent":2,"meetings":1,"road":3,"premature":1,"evan":1,"gershkovich":1,"editorsbloomberg":1,"disciplinary":1,"editorial":3,"outlet":1,"prematurely":1,"prisoner":5,"swap":4,"lashes":1,"rainfall":3,"barreled":1,"slowly":1,"affect":1,"carolinas":1,"gusty":1,"winds":1,"packing":1,"punch":1,"outages":2,"concerned":3,"rai":1,"science-ars-technica":5,"suffers":4,"weight":2,"glp-":1,"cautionary":1,"tale":2,"atrial":1,"fibrillation":1,"soup":1,"shake":1,"diet":2,"type":3,"remission":1,"expanded":1,"life-changing":1,"meal":1,"schemetens":1,"-calorie-a-day":1,"groundbreaking":2,"scheme":3,"permanently":2,"wiped":2,"giants":3,"operate":5,"vox":7,"vox-com":7,"bizarre":1,"rfk":3,"briefly":2,"explained":1,"li":1,"zhou":1,"libertarian":1,"dc":1,"dietsch":1,"getty":6,"perhaps":2,"anti-vaccine":1,"viewpoints":1,"proclivity":1,"cons":1,"exit":1,"pelosi":1,"speaker":1,"clashes":2,"written":2,"exercise":3,"re-election":1,"personnel":1,"asad":1,"blinken":1,"counterparts":1,"encouraging":1,"es":1,"rebuild":1,"fire-ravaged":1,"cleared":3,"steeped":1,"thorny":1,"clears":1,"raids":1,"investigators":1,"lack":3,"strongest":2,"indexes":2,"recording":1,"wessel":1,"hutchins":1,"monetary":1,"brooking":1,"surprising":4,"texas-based":2,"tops":1,"catgory":1,"nyt-technology":3,"flagship":2,"clashed":1,"headquarters":1,"searches":2,"upend":1,"fundamentally":1,"discussed":2,"rebecca":1,"allensworth":1,"vanderbilt":1,"disciplines":2,"organization":2,"broken":1,"embargo":1,"tv-movies-rolling-stone":4,"cardi":1,"charli":1,"xcx":1,"barbra":1,"streisand":1,"celebs":1,"kerry":1,"sheryl":1,"lee":2,"ralph":1,"bowed":1,"meltdown":3,"lock":1,"spear":1,"helmet":1,"qanon":1,"shaman":1,"renowned":1,"spear-tipped":1,"flagpole":1,"chansley":1,"served":1,"sentence":1,"kellyanne":1,"conway":1,"lobbies":1,"interests":2,"aide":1,"filing":1,"oligarch":1,"touring":1,"stops":2,"npr-topics-movies":1,"jan":1,"mary":1,"louise":1,"kelly":2,"co-directors":1,"tony":1,"gerber":1,"jesse":1,"moss":1,"documentary":1,"venu":1,"unless":1,"shuts":1,"assuming":1,"long-serving":1,"outrage":1,"zac":1,"efron":1,"healthy":2,"ibiza":1,"shirtless":1,"assures":1,"fine":3,"pumping":1,"suffering":1,"cybertruck":1,"adin":2,"ross":2,"platforming":1,"supremacists":1,"fec":1,"sycophantic":1,"waits":2,"martyrs":1,"vowed":5,"israelis":4,"wanting":1,"carolina":3,"ellis":4,"cooperate":3,"arizona":5,"charges":3,"overturn":1,"aerospace":1,"lauds":1,"smallsat":4,"innovation":4,"risk-taking":1,"satellites":4,"swarms":1,"autonomy":1,"collaboration":1,"networking":1,"isakowitz":1,"duty":1,"punish":1,"tehran":6,"ambassadors":2,"moral":1,"adventurism":1,"law-breaking":1,"assassinating":1,"irania":1,"evs":2,"endorsement":1,"ex-president":1,"denigrated":1,"suitable":1,"slice":1,"populationdonald":1,"arguing":1,"rot":1,"hell":1,"assisting":1,"nascent":1,"lunacy":1,"shifted":1,"npr-topics-politics":8,"admitted":1,"dumping":2,"cub":2,"bicyclist":1,"npr-topics-business":4,"economist":2,"disproportionate":1,"ailsa":1,"chang":1,"gregory":1,"daco":1,"ernst":1,"rssopinion":8,"cellphone":1,"tosses":1,"universal":1,"delegated":1,"glory":2,"cycling":2,"trio":1,"goldclarke":1,"woods":1,"collect":2,"canoe":1,"slalom":1,"medalskeely":1,"punched":1,"poster":1,"athletics":2,"gb":2,"velodrome":1,"kicked":1,"alrea":1,"nyt-science":1,"tsung-dao":1,"colleague":1,"prize":1,"physics":2,"discovering":1,"subatomic":1,"contrary":1,"symmetrical":1,"chappell":1,"roan":1,"midwest":1,"spotify":1,"streams":1,"doubled":2,"most-streamed":1,"album":3,"beating":2,"billie":1,"eilish":1,"business-latest":3,"wired-com":10,"closure":1,"jerome":1,"powell":1,"wishing":1,"relocate":1,"relocates":1,"salt":1,"lake":1,"chair":2,"pat":2,"patterson":1,"yaccarino":1,"bay":2,"relocated":1,"silicon":2,"valley":1,"internal":3,"emailx":1,"stated":1,"wou":1,"debate":5,"demurral":1,"negotiating":1,"tactic":2,"peace":1,"compelling":1,"palestinians":1,"lohar":1,"finale":3,"eccentric":1,"bawdy":1,"admiral":1,"abigail":1,"thorn":1,"nicole":1,"narea":1,"michael":1,"santiago":1,"faltering":1,"wer":1,"gym":1,"squat":1,"rack":1,"vacations":1,"gifts":2,"tall":1,"flexible":2,"wsj-com-wsjd":4,"wire":1,"racing":1,"neuralink":2,"implant":1,"cursor":1,"videogames":1,"lindsey":1,"graham":1,"impose":1,"tariffs":1,"sanctions":3,"lines":1,"pipeline":1,"rein":1,"ripples":1,"reservation":1,"friends":2,"tyson":1,"sacrificed":1,"farms":2,"chicken":1,"closing":3,"allege":1,"jeopardy":1,"egyptians":1,"hydraulic":2,"lifts":1,"pyramid":2,"djoser":2,"pictorial":1,"textual":1,"references":2,"device":2,"convince":1,"skeptics":1,"refugee":2,"investigation":4,"refugees":2,"buca":1,"di":1,"beppo":1,"remaining":1,"restaurant":1,"pose":1,"law-and-order":1,"mostly":4,"spared":1,"conservatives":1,"challenges":2,"disclose":2,"senate":4,"wydenthe":1,"conservative":3,"rightwing":1,"mega-donor":1,"swirling":1,"demands":1,"judiciary":1,"refo":1,"pig":1,"butchering":1,"scammers":1,"tidy":1,"scams":1,"reckoning":1,"arrives":2,"reprice":1,"cheap-money":1,"experiment":2,"npr-topics-national":4,"anti-trust":1,"abused":3,"ensure":1,"dominated":3,"scotusblog":2,"scotusblog-com":2,"block":1,"gag":2,"plea":2,"criminal":3,"proceedings":3,"six-week":1,"convicted":1,"news-and-politics-slate-magazine":3,"slate-com":7,"rebuked":1,"dobbs":1,"sort":2,"hobson":1,"viasat":1,"automated":1,"independently":1,"congested":1,"orbit":1,"retire":2,"filmmaker":2,"risky":1,"covid-":4,"bug":1,"rational":1,"exuberance":1,"abc":2,"escalate":2,"whither":1,"avant-garde":1,"racket":1,"berkshires":1,"collective":1,"bang":1,"adams":1,"adventurous":1,"merry-making":1,"kicker":1,"harrison":1,"butker":1,"offseason":1,"highest-paid":1,"nflkicker":1,"commencement":1,"speechharrison":1,"signed":2,"four-year":1,"negotiated":1,"steeling":1,"controversy":3,"deepens":3,"guaranteed":1,"fallout":1,"russian-led":1,"association":4,"disqualified":1,"briefing":3,"lebron":1,"compressed":1,"timeline":1,"benefit":2,"trials":3,"litigaaaaaaaate":1,"devin":1,"booker":1,"facepalm":1,"emoji":1,"congratulating":1,"basketball":1,"watched":2,"sprinter":1,"nba":1,"agrees":3,"cooperation":1,"fake":4,"elector":2,"onetime":1,"official":1,"electors":2,"takeaways":1,"active":1,"unreported":1,"freed":1,"jail":3,"dissident":1,"yashin":1,"expulsion":1,"damages":2,"ability":4,"heard":3,"diagnosed":1,"unable":1,"ex-trump":1,"sit":1,"returnjenna":1,"kris":1,"mayes":1,"world-nation":8,"nail-biting":1,"worrisome":1,"panicky":1,"acted":1,"alter":1,"imminent":1,"counterstrikes":1,"cabinet":1,"anticipated":2,"pitting":1,"bon":1,"iver":1,"perform":1,"hometown":1,"eau":1,"claire":1,"wis":1,"folk":1,"yet-to-be-named":1,"barnstorm":1,"dolphins":1,"thames":1,"dolphin":1,"harbour":1,"pier":1,"riverbank":1,"greenwichtwo":1,"spotted":1,"appearing":3,"tide":1,"tempers":1,"bombastic":1,"gpt-":1,"-less":1,"devday":1,"splashy":1,"bevy":1,"ill-fated":1,"store-like":1,"gpt":1,"quieter":1,"affair":2,"tentpole":1,"indices":1,"scaled":1,"highswall":1,"nasdaq":3,"composite":1,"tumbled":1,"records":1,"hawaii":1,"palantir":1,"boosting":1,"forecast":2,"jumped":2,"keeping":1,"immunity":1,"tanya":1,"chutkan":1,"reopening":1,"smith":1,"brian":1,"jordan":2,"alvarez":1,"angle":1,"homework":1,"sharp":2,"silly":1,"microcosm":1,"stupid":1,"arguments":2,"exact":1,"happiness":2,"litigation":1,"flowing":2,"boston-patch":2,"patch-com":2,"wreaks":1,"penalized":1,"implicate":1,"fred":1,"places":3,"halt":2,"hush":3,"argued":1,"proceeding":1,"spies":1,"undercover":1,"planted":1,"sleeper":1,"slovenia":1,"posed":1,"argentine":1,"entrepreneur":1,"december":1,"long-shot":1,"sought":1,"jurisdiction":1,"suits":2,"earth-news-earth-science-news-earth-science-climate-change":13,"overlooked":1,"side-effect":1,"putting":4,"californians":1,"increased":8,"uc":1,"santa":1,"foundation":4,"highly-anticipated":1,"urban":2,"wildlands":1,"severe":1,"yo":1,"gabba":1,"gabbaland":1,"revives":4,"reboot":1,"characters":1,"emphasizes":1,"dance":4,"actual":3,"declines":1,"hush-money":1,"infringes":1,"rightsthe":1,"rejected":2,"devise":1,"measure":1,"flows":2,"engineers":1,"geological":3,"usgs":1,"collaborated":1,"piloted":1,"drone":2,"equipped":1,"specialized":1,"payload":1,"maps":1,"rivers":2,"creatures":1,"electricity":1,"pictures":1,"golds":1,"all-around":1,"individual":1,"finished":2,"science-news-mathematics-economics-archaeology-fossils":16,"examines":1,"disclosure":1,"affects":2,"pharmaceuticals":1,"long-term":1,"muon":1,"closes":2,"scale":1,"all-in-one":1,"tranche":2,"space-as-a-service":1,"policy-ars-technica":3,"deals":2,"maintained":2,"monopolies":1,"tab":1,"budget-friendly":1,"treated":1,"terrorism":2,"neil":3,"basu":1,"counter-terrorism":1,"condemned":1,"rampaging":1,"bullies":1,"cowards":1,"warnings":1,"migration":1,"lawyers":3,"viol":1,"economy-the-conversation":2,"theconversation-com":8,"jittery":1,"panicking":1,"soft":2,"decker":1,"economics":2,"nebraska":1,"omaha":1,"skies":1,"tomohiro":1,"ohsumi":1,"imageswhat":1,"difference":3,"mainly":1,"weaker-than-expected":1,"released":3,"johnny":1,"wactor":1,"slaying":1,"tied":2,"catalytic":1,"converter":1,"thefts":1,"downtown":1,"focusing":1,"sources":1,"familiar":1,"ed":1,"ludlow":1,"covers":1,"valuation":3,"branding":1,"strategies":2,"marketing":2,"sponsored":1,"competitive":1,"trustworthy":1,"visual":1,"state-owned":1,"petrol":1,"stations":1,"bids":1,"miles":2,"votes":1,"electionfollow":1,"podcasta":1,"re-elected":1,"cap":1,"ov":1,"environment-energy-the-conversation":2,"poppy":1,"seeds":1,"willow":1,"wood":2,"greenland":2,"ice":2,"sheet":2,"warmer":1,"paul":2,"bierman":1,"gund":1,"resources":2,"microscope":1,"elongate":1,"spikemoss":1,"megaspores":1,"fungus":1,"spheres":1,"halley":1,"mastro":1,"vermon":1,"stuns":1,"confirms":1,"melted":1,"keeps":1,"greener":1,"scarier":1,"now-ice-covered":1,"tundra":1,"landscape":2,"explores":1,"geo":1,"resilient":1,"communications":2,"agile":1,"cost-effective":1,"zooming":1,"class":4,"mgk":1,"sobriety":1,"rehab":1,"tightrope":1,"anybody":1,"remand":1,"offender":1,"institution":1,"repurposed":1,"abandoned":1,"cells":3,"continuesministers":1,"preparing":2,"cope":1,"influx":1,"ministry":2,"newly":1,"gamer":1,"illegitimate":1,"criticisms":1,"blocks":1,"neutrality":1,"isps":1,"merits":1,"arson":1,"danger":2,"low-tech":1,"transit":1,"torch":1,"flames":2,"eve":1,"ceremony":1,"disrupted":1,"high-speed":1,"rail":1,"monopolized":1,"handing":1,"prequel":1,"wrapping":1,"retaliate":2,"embassy":1,"unserious":1,"heated":1,"delta":2,"struggled":1,"rebound":2,"disruptions":1,"watermark":1,"certainty":2,"addison":1,"rae":1,"pop":3,"single":2,"pepsi":1,"musician":1,"solo":2,"interstellar":1,"contributing":2,"concessions":1,"indefinite":1,"electronics":1,"comprised":1,"sliver":1,"culture-slate-magazine":3,"millennial":1,"bros":1,"reliving":1,"boys":1,"nostalgic":1,"extravaganza":1,"holds":1,"venezuela":3,"stuck":3,"capsule":1,"butch":1,"wilmore":1,"suni":1,"williams":1,"pair":1,"station":4,"malfunctioning":1,"thrusters":1,"helium":2,"leak":1,"propulsion":1,"syste":1,"announcing":1,"dedicated":1,"cloud":1,"saas":1,"industry-focused":1,"roof":1,"couldn":2,"host":2,"dive":1,"nanotechnology-news-nanoscience-nanotechnolgy-nanotech-news":2,"molecules":1,"metallic":1,"nanotubes":1,"livermore":1,"laboratory":1,"llnl":1,"pure":1,"transporting":1,"trotted":1,"usual":1,"grievances":1,"yeah":1,"wick":1,"adventures":2,"iconic":1,"oldest":1,"pyramids":1,"open-access":1,"plos":1,"xavier":1,"landreau":1,"cea":1,"paleotechnic":1,"colleagues":1,"fanned":1,"disinformation":1,"altman":4,"fool":1,"void":1,"lawsites":4,"lawnext-com":4,"assistant":4,"lawy":1,"verification":1,"installment":1,"grand":2,"canyon":1,"yavapai":1,"rim":1,"parachute":1,"deployed":1,"feet":1,"biglaw":1,"paralegal":1,"commitment":2,"polo":1,"referees":1,"billing":1,"hours-plus":1,"balancing":1,"fairness":1,"welfare":1,"face":7,"uncertainty":1,"miami":1,"stormwater":1,"inject":1,"occurrences":1,"distraction":2,"banish":1,"ups":2,"ipados":1,"macos":1,"sequoia":1,"prevalence":1,"sexually":1,"childhood":1,"andrew":1,"prokop":1,"greets":1,"crowd":1,"atlanta":1,"kyle":1,"mazza":1,"anadolu":1,"underdog":1,"accusing":1,"bright":3,"scraping":1,"petitioners":1,"class-action":1,"data-collection":1,"pulled":1,"hacker-news-best":4,"ycombinator-com":1,"hn":2,"airhart":1,"aeronautics":1,"yc":1,"hey":2,"hacker":1,"nikita":1,"airhartaero":1,"fly":3,"airplanes":1,"hardware":1,"youtu":1,"pg":1,"placer":1,"boosts":2,"quietly":1,"location":2,"philadelphia":3,"interviewed":2,"governors":1,"shapiro":1,"crunch":1,"decisionwho":1,"removes":1,"distracting":1,"websites":1,"newest":1,"elements":2,"website":3,"arc":1,"browser":1,"similarly":1,"customize":1,"developer":1,"betas":1,"myanmar":1,"lashio":1,"seizure":1,"northeastern":1,"command":2,"airport":1,"corridor":1,"catastrophic":1,"drenches":1,"swept":1,"threatening":1,"record-breaking":1,"regimes":1,"evolves":1,"ambitions":1,"blunt":1,"co-ordinate":1,"squandering":1,"concludes":1,"co-led":1,"ucl":1,"academic":2,"trump-supporting":1,"minds":1,"npr-topics-science":4,"surgeon":1,"operating":1,"mindful":1,"meditation":1,"theodore":1,"schwartz":1,"treating":1,"neurological":1,"illnesses":1,"requires":1,"steady":1,"hands":2,"bladder":1,"gray":1,"matters":2,"chemistry-news-biochemistry-polymers-materials-science":4,"whammy":1,"harder":1,"antibiotics":1,"silent":1,"chemical":1,"warfare":1,"soils":1,"resistant":1,"shakespeare":1,"neither":1,"words":1,"bedrock":1,"comfortably":1,"perched":1,"importantly":1,"comprehension":1,"dell":1,"reorganization":1,"ai-focused":1,"microplastics":1,"harming":1,"tissues":1,"liver":1,"kidneys":1,"testicles":1,"reinvention":1,"weaker":1,"nea":1,"lockout":1,"stall":1,"multimillion-dollar":1,"get-out-the-vote":1,"identify":2,"hotspots":1,"dirty":1,"dubai":1,"focal":1,"sussex":1,"large-scale":1,"terming":1,"dubai-kong":1,"axis":1,"hotspot":1,"illicit":1,"iffs":1,"corruption":1,"organized":1,"evasion":1,"meghan":1,"markle":1,"older":1,"wiser":1,"archewell":1,"peer-support":1,"harms":2,"queen":3,"cameos":1,"luscious":1,"locks":1,"haircare":1,"luxurious":1,"mane":1,"ladypool":1,"long-awaited":2,"brown":2,"available":2,"bullying":1,"manifestation":1,"globalization":1,"classroom":1,"diversity":2,"ethnic":2,"background":1,"cultural":3,"identity":3,"taunts":1,"slurs":1,"insulting":1,"culturally":1,"specific":2,"customs":2,"knife":1,"horrified":1,"girls":3,"ast":1,"spacemobile":1,"bluebird":1,"direct-to-smartphone":1,"conditional":1,"approval":2,"operational":2,"slated":1,"nod":1,"urgency":1,"roster":1,"essentially":1,"baseball":2,"darwinism":1,"bloated":1,"trimmed":1,"extremism":1,"sahel":1,"soured":1,"coup":1,"scrambling":1,"partners":2,"physics-news-physics-news-material-sciences-science-news-physics":8,"higgs":1,"universe":1,"stable":1,"existed":1,"whopping":1,"walking":2,"cliff":1,"instability":1,"fundamental":1,"boson":1,"nils":1,"pratley":1,"complacency":1,"gentle-ish":1,"cardschoose":1,"culprit":1,"sudden":1,"theme":1,"stands":1,"asleep":1,"refutes":1,"theory":2,"continents":1,"thrive":2,"masses":1,"processes":2,"ultrafast":1,"electron":1,"microscopy":1,"advances":1,"brain-like":1,"supercomputers":1,"consume":1,"vast":1,"equivalent":1,"usage":1,"energy-efficient":1,"supercomputing":1,"leverages":1,"networks":1,"outperforming":1,"tasks":1,"artificial-intelligence":1,"start-up":1,"comment":1,"doubles":1,"dogging":1,"leaderswomen":1,"offended":1,"contention":1,"realise":1,"merely":1,"broadcast":3,"knee":1,"rams":4,"puka":1,"nacua":1,"receiver":1,"chargers":3,"coffee":1,"week-long":1,"iltacon":1,"spills":1,"beans":1,"consumed":2,"convene":1,"nashville":1,"organizers":1,"gallons":1,"caffeinated":1,"brew":1,"attendance":1,"youtuber":1,"scrape":1,"collecting":1,"profited":1,"mad":1,"pluralistic-daily-links-from-cory-doctorow":1,"pluralistic-net":1,"pluralistic":1,"leveraged":1,"buyouts":1,"mortgages":1,"conspiring":1,"delights":1,"delectate":1,"appearances":1,"readin":1,"em":1,"writin":1,"upco":1,"doles":1,"extremely":3,"diss":1,"aura":1,"showcases":2,"cringe":1,"space-news-space-astronomy-space-exploration":5,"knocks":1,"rockets":1,"pads":1,"gave":2,"grounded":2,"ok":1,"lotus":1,"teasers":1,"premiere":1,"selfishness":1,"obstacles":1,"taiwanese":1,"taiwan":1,"reignited":1,"self-determination":1,"harvey":1,"barnes":1,"eddie":1,"howe":1,"furnish":1,"parenting":1,"challenging":2,"ambitionsthis":1,"anxious":1,"father-to-be":1,"pitch":2,"scouring":1,"rightmove":1,"north-east":2,"twelve":1,"newcastl":1,"propagandists":1,"audiences":1,"clashing":1,"rioting":2,"propaganda":1,"encourages":1,"misogyny":1,"solestial":1,"meyer":1,"burger":1,"forge":1,"cell":2,"dramatically":1,"tempe":1,"arizona-based":1,"radiation-resistant":1,"minute":1,"third-quarter":2,"year-over-year":1,"reason":3,"versions":2,"ftse":1,"updatesshares":1,"triggered":1,"tech-focused":1,"dropped":3,"clearly":1,"purely":1,"iris":1,"murdoch":1,"angst":1,"hardest":1,"clock":1,"lurch":1,"loving":1,"intentional":1,"deception":1,"surprise":1,"kaitlyn":1,"dever":1,"mazino":1,"bleak":1,"breakout":2,"darker":1,"optimization":1,"inverse":1,"computer-generated":1,"holography":1,"cgh":1,"digitally":1,"modulate":1,"wavefront":1,"partly":1,"inherited":1,"optical":2,"progress":3,"focus":1,"academia":1,"gifted":1,"education":3,"learners":1,"exhibit":1,"exceptional":2,"versatility":1,"creativity":2,"explore":1,"develop":2,"unconventional":1,"michelle":1,"recalls":1,"mika":1,"distraught":1,"clutching":1,"imaginative":1,"intricately":1,"colored":1,"pencil":1,"drawing":2,"alien-inspired":1,"botanical":1,"rather":2,"transparency":2,"businesses":2,"one-time":1,"relevant":1,"repeat":1,"customers":3,"buyer":1,"seller":2,"alleging":1,"deceit":1,"shakespearean":1,"proportions":1,"co-founding":1,"companyelon":1,"suing":1,"resurrecting":1,"af":1,"method":4,"combine":1,"conventional":3,"photonics":1,"leibniz":1,"hannover":1,"transmitter-receiver":1,"concept":1,"transmitting":1,"entangled":2,"photons":2,"fiber":1,"enable":1,"telecommunications":1,"routed":1,"fibers":1,"laser":1,"avocado":1,"interior":1,"checking":1,"require":1,"recognizing":1,"behave":2,"intensive":1,"hidden":2,"homeip-net":1,"andy":1,"warhol":1,"amiga":1,"url":2,"dfarq":1,"homeip":1,"andy-warhols-lost-amiga-art-found":1,"ycombinator":2,"id":2,"algorithm":1,"sample":2,"robotic":1,"rover":1,"lands":2,"troves":1,"explorable":1,"material":1,"durations":1,"engagement":1,"lifestyles":1,"engaged":2,"advocacy":1,"gbh-news":2,"radio":2,"gbh":2,"studio":3,"copley":2,"branch":2,"boylston":2,"rsvp":2,"channel":2,"tues":1,"nyt-style":2,"cristeta":1,"comerford":1,"chef":2,"presidents":1,"retires":1,"cheffie":1,"color":2,"skirmishes":1,"israeliran":1,"missions":2,"ali":1,"bagheri":1,"kani":1,"reiterate":1,"reuters":2,"jos":1,"manuel":1,"albare":1,"naked":1,"mole":1,"rat":1,"termites":1,"endlessly":2,"pregnant":1,"xenophobic":1,"rodent":1,"readingget":1,"emailto":1,"tunnelling":1,"creature":1,"thinks":3,"phishing":1,"priority":1,"educators":1,"forcing":1,"bible":1,"lesson":1,"districts":1,"curricula":1,"superintendent":1,"orderas":1,"looms":1,"incorporate":1,"walters":1,"ord":1,"throwing":1,"meatfluencer":1,"strange":1,"stranger":1,"latesti":1,"spooky":1,"looked":1,"describe":2,"circumstances":1,"boot":1,"weekday":2,"articles":1,"commentary":1,"noteworthy":1,"gorsuch":2,"warns":2,"careful":1,"alexandra":1,"marquez":1,"stock-trade":1,"loophole":1,"pringles":1,"maker":3,"kellanova":2,"cereal":1,"snacks":1,"kellogg":1,"jumps":2,"family-owned":1,"bullingham":1,"backingfa":1,"replace":2,"southgatethe":1,"formal":1,"gareth":1,"southgate":1,"backi":1,"roy":1,"cooper":1,"extremist":2,"lieutenant":1,"tried":1,"absenceharris":1,"reportthe":1,"consideration":1,"extre":1,"patriots":1,"preseason":1,"nfl":1,"taste":1,"panthers":1,"grad":1,"proof":2,"emerges":1,"spooked":1,"deep-rooted":1,"boiling":1,"taps":1,"genuine":1,"frustration":1,"safer":1,"tolerant":1,"guidance":1,"enabling":1,"artemis":1,"thick":1,"plenty":1,"solved":1,"permanent":1,"established":1,"idea":3,"honeybee":1,"robotics":1,"raw":1,"milk":1,"cheese":2,"telling":1,"alex":2,"erupted":1,"murders":1,"quicktake":1,"northwest":1,"morphing":1,"underscores":1,"back-to-back":1,"conferences":1,"attended":1,"implementing":1,"practical":1,"decade-old":1,"roadkill":1,"waylaid":1,"falconry":1,"steak":1,"dinner":2,"tiktoker":1,"trans":1,"coined":1,"asserts":1,"naturally":2,"inherently":1,"attracted":1,"transgender":1,"straights":1,"transphobic":1,"enacting":1,"transphobia":1,"blames":1,"conflictmiddle":1,"updatesas":1,"powers":1,"overnight":1,"yoav":1,"gallant":1,"defence":1,"briefed":1,"flipkart":1,"blitzes":1,"-minute":1,"commerce":1,"deep-pocketed":1,"entrant":1,"walmart-owned":1,"e-commerce":1,"bengaluru":1,"smartphones":1,"planting":2,"tree":2,"worsen":1,"longstanding":1,"initiatives":1,"tens":1,"trees":1,"shade":1,"releasing":2,"moisture":1,"absorb":1,"airborne":1,"soot":1,"floating":1,"pollutants":2,"wildlife":1,"habitat":1,"plain":1,"beauty":1,"avenues":1,"empowerment":1,"maasai":1,"opportunities":2,"globalism":1,"traditionally":1,"pastoralists":1,"historically":1,"patriarchal":1,"measured":1,"livestock":1,"owns":1,"self-powered":1,"pump":1,"uses":1,"dartmouth":1,"oliver":1,"disastrous":1,"multiracial":1,"front":2,"audience":1,"speak":1,"elevated":1,"lady":1,"indian":2,"cheating":2,"quickest":1,"clowns":1,"startups":2,"unicorns":1,"xai":1,"valued":1,"staggering":1,"passed":2,"cer":1,"forecasting":2,"equips":1,"accuracy":1,"predictions":2,"minimal":1,"claps":1,"misleading":1,"intuitive":1,"machines":2,"seops":1,"rideshare":1,"partnering":1,"cross-community":1,"fringe":2,"epfl":1,"non-members":1,"mainstream":1,"attracts":1,"suggested":1,"curtail":1,"science-latest":3,"bikers":1,"rewilding":1,"nature-restoration":1,"wales":1,"funded":1,"thrill-seeking":1,"downhill":1,"lovers":1,"unresolvable":1,"disjointed":1,"jersey":1,"seeding":1,"crops":1,"perennials":1,"mascot":1,"anxieties":1,"eighty":1,"inception":1,"smokey":1,"evoke":1,"prevention":1,"introduced":2,"jpmorgan":1,"desk":1,"buy-the-dip":1,"intensified":1,"rotation":1,"tactical":1,"emits":1,"communication":1,"completely":2,"impervious":1,"incredible":1,"harnesses":1,"cambria":1,"godfather":1,"epiq":1,"advisory":1,"trailblazing":1,"coo":1,"fortune":2,"archer":1,"daniels":1,"midland":1,"invisibility":1,"regression":1,"representation":1,"backsliding":1,"usc":2,"annenberg":1,"inclusion":1,"initiative":1,"pop-ups":1,"inspiring":2,"givenchy":1,"swag":1,"compton":1,"cowboys":1,"hopefuls":2,"strugglers":1,"mk":1,"dons":1,"bradford":1,"placed":1,"morecambe":1,"upheavalin":1,"seasons":3,"standout":1,"sights":2,"automatic":1,"varied":1,"crawley":1,"playoffs":1,"sorry":1,"empathy":1,"grand-prize":1,"laurence":1,"pevsner":1,"sick":1,"apologizing":1,"apology":1,"forgiveness":1,"grace":1,"atms":1,"weren":1,"letting":1,"zoom":1,"ai-driven":1,"docs":1,"video-conferencing":1,"crowded":1,"polluters":1,"satirical":1,"billboards":1,"gas":3,"display":1,"documentation":1,"aws":1,"mithra":1,"mitigate":2,"malicious":1,"domains":1,"defending":1,"monster":1,"monitoring":1,"old-fashioned":1,"reduce":1,"reggae":1,"ruin":1,"vocals":1,"shockwaves":1,"montego":1,"clash":1,"futurefour":1,"booms":2,"speakers":1,"jamaica":1,"assassin":1,"bo":1,"preliminary":1,"antiproton":1,"biennial":1,"ichep":1,"amber":1,"data-taking":1,"plots":1,"cross":2,"section":1,"probability":1,"antiprotons":1,"protons":1,"interacts":1,"persian":1,"mercenaries":1,"turkey":1,"archaeologist":1,"hoard":1,"mercenary":1,"buried":1,"notion":1,"environment-the-guardian":4,"carmakers":1,"downgrades":1,"battery":1,"earlierthe":1,"downgraded":1,"pessimism":1,"shifting":2,"fuels":2,"sold":1,"bridges":1,"buckling":1,"wreaking":1,"suyun":1,"associate":4,"buckle":1,"damage":1,"quickly":1,"tying":1,"ap":2,"goldmansummer":1,"transportation":1,"rails":1,"avenue":1,"brid":1,"holes":1,"detect":3,"astrophysicists":1,"participation":1,"zurich":1,"pairs":1,"centers":4,"galaxies":1,"analyzing":1,"gravitational":1,"generated":1,"binaries":1,"nearby":2,"astronomy":1,"defenses":1,"withstand":1,"proxies":1,"prides":1,"billion-dollar":1,"braced":1,"aerial":1,"militant":1,"iran-supp":1,"science-tech-the-conversation":2,"disabilities":1,"arcade":1,"matt":1,"knutson":1,"esports":1,"disabled":1,"rocky":1,"rockynohands":1,"stoutenburgh":1,"mouth":1,"controllers":1,"gaming":1,"cc":1,"by-saif":1,"migraines":1,"mice":1,"hormone":1,"progesterone":1,"suchitra":1,"joshi":1,"neurology":1,"virginia":1,"receptors":1,"migraine":1,"digitalvision":1,"imagesmigraines":1,"throbbing":1,"headaches":1,"accompanied":1,"nausea":1,"touch":2,"milli":1,"health-the-conversation":1,"negar":1,"fani":1,"psychiatry":1,"neuroscience":1,"emory":1,"microaggressions":1,"slights":1,"overt":1,"toll":1,"leopatrizi":1,"imagesracism":1,"steals":1,"occupies":1,"politics-society-the-conversation":1,"undemocratic":1,"distrusting":1,"klinghard":1,"holy":1,"endorsed":1,"brandoncould":1,"weakened":1,"researched":1,"themes":1,"tortured":1,"poets":1,"angeline":1,"scheinbaum":1,"clemson":1,"edited":1,"fan":1,"listened":1,"parallels":1,"mit-technology-review":4,"technologyreview-com":4,"crafting":1,"giddy":1,"onset":1,"automation":2,"frequent":1,"pwc":1,"example":1,"predicts":1,"gross":1,"gdp":1,"generating":1,"percent":1,"cracks":1,"economybusiness":1,"updatesdonald":1,"supported":1,"trum":1,"download":1,"hydrogen":3,"bikes":2,"limitations":2,"dose":1,"mahari":1,"jd-phd":1,"mit":1,"lab":1,"harvard":2,"pataranutaporn":1,"undone":1,"drifted":1,"edinburgh":1,"editions":1,"reindeer":1,"fleabag":1,"blasts":1,"cygnus":2,"freighter":1,"blasted":1,"two-week":1,"neutrinos":1,"entanglement":1,"flavor":1,"ghost":1,"weakly":1,"ordinary":1,"interesting":1,"identities":1,"flavors":1,"gear-latest":3,"gamuts":1,"tvs":1,"monitors":1,"jargon":1,"gamut":1,"innovative":1,"synthesizing":1,"plastics":1,"remote":1,"discharge":1,"tsukuba":1,"polymers":1,"polystyrene":1,"radical":1,"polymerization":1,"coil":1,"high-voltage":1,"high-frequency":1,"generator":2,"reaction":1,"proceed":1,"catalysts":1,"initiators":1,"nanomaterials":1,"considered":1,"nanotechnology":1,"transform":2,"nanoscale":1,"covalent":1,"frameworks":1,"nano-cofs":1,"enhancing":1,"photocatalytic":1,"plummet":1,"slump":2,"electric-vehicle":2,"slumped":2,"extending":1,"broad":1,"undermining":1,"automakers":1,"anyway":2,"dominant":1,"chiles":1,"honor":2,"medalist":1,"storied":1,"earned":1,"bronze":1,"eu":1,"commits":1,"dsa":1,"accepting":2,"commitments":1,"withdraw":1,"task":1,"reward":1,"earn":1,"patent":1,"application":1,"car-to-car":1,"ford":1,"speeds":1,"authority":1,"slashdot":1,"thread":1,"philippines":1,"heartfelt":1,"carlos":1,"yulo":1,"pesos":1,"pasta":2,"caloy":1,"artistic":1,"gymnasticsthe":1,"filipino":1,"celebrated":1,"showering":1,"halts":1,"abruptly":1,"sinks":1,"risk-averse":1,"features-ars-technica":1,"precision":1,"bedside":1,"scientist":1,"dining":1,"tissue-agnostic":1,"combo":1,"zuckerberg":1,"laughing":1,"zuck":1,"memes":2,"comfortable":1,"reliance":1,"cisco":2,"invested":1,"hardwick":1,"bowl":2,"volunteered":1,"jim":1,"harbaugh":1,"hired":1,"deeply":1,"shirt":1,"sponsor":1,"snapdragon":1,"technologyit":1,"timemanchester":1,"buying":2,"constructed":1,"survive":1,"wages":1,"breaks":2,"suffer":1,"conditionsas":1,"grapple":1,"semiconductor":1,"factories":1,"kyoto":1,"nations":3,"goodall":1,"famed":1,"primatologist":1,"crises":1,"biodiversity":1,"poverty":2,"umair":1,"irfan":1,"crews":1,"chico":1,"discordant":1,"shrill":1,"noise":1,"pops":1,"bag":1,"blackrock":1,"neuberger":1,"berman":1,"ventures":1,"kddi":1,"catalyst":1,"participated":1,"asbestos-related":1,"nurse":1,"believes":1,"contracted":1,"mesothelioma":1,"security-latest":1,"nonsensical":1,"aligns":1,"weaken":1,"integrity":1,"practically":1,"impossible":1,"ethically":1,"sigal":1,"samuel":1,"supposed":1,"chatgpt":3,"founders":1,"differences":1,"spin":1,"leah":1,"stokes":1,"signature":1,"ittwo":1,"tie-breaking":1,"inaction":1,"str":1,"biontech":1,"foresaw":1,"aeon-a-world-of-ideas":1,"aeon-co":1,"crayons":1,"experimenting":1,"surplus":1,"cultivate":1,"relationship":1,"forests":1,"aeon":1,"letters":4,"editor":5,"ignore":1,"fade":1,"existing":1,"empathetic":2,"perfectly":1,"plastic":1,"bags":1,"single-use":1,"inadvertently":1,"supposedly":1,"reusable":1,"recyclable":1,"thicker":1,"thinner":1,"ingredients":1,"buttered":1,"hint":1,"dried":1,"shrimp":1,"diep":1,"tran":1,"last-minute":1,"stocking":1,"pantry":1,"gilmore":1,"reinvented":1,"mattress":1,"sherman-palladino":1,"reviving":1,"musical":1,"fairy":1,"rewriting":1,"naive":1,"theater":1,"feels":2,"flop":1,"glaring":1,"franchises":1,"humor":1,"deniers":1,"denialists":1,"outlier":1,"internationallyus":1,"bastion":1,"dismissing":1,"alarm":2,"foun":1,"ascending":1,"node":1,"mission-visualization":1,"spaceline":1,"web-based":1,"suite":1,"visualization":1,"monoxide":1,"poisonings":1,"beryl":1,"lexi":1,"churchill":1,"decides":1,"gun":2,"marin":1,"cogan":1,"attends":1,"mike":1,"concealed":1,"emblematic":1,"diverse":1,"purchased":1,"ow":1,"generations":1,"spacewalk":1,"blood":1,"featured":1,"lynker":1,"capability":1,"mitigating":1,"numerous":1,"likes":1,"makeup":1,"smells":1,"grandma":1,"hunger":1,"perfect":1,"producer":1,"bottoms":1,"facials":1,"lipstick":1,"thriller":1,"skincare":1,"suspended":1,"apparent":1,"bombing":2,"acf":1,"saysfollow":1,"sa":1,"counterpane":1,"wits":1,"slate":1,"quiz":1,"technology-slate-magazine":1,"truly":1,"inexplicable":1,"green-energy":1,"flops":1,"revive":1,"shell":1,"bp":1,"sticking":1,"clean-energy":1,"heels":1,"optimism":2,"broader":2,"dud":1,"rug":1,"cropping":1,"produce":1,"creation":1,"rarely":1,"outsize":1,"ranging":1,"pizza":1,"campana":1,"jalap":1,"humberto":1,"furniture":1,"grass":1,"harvest":1,"choreographer":1,"beyond":2,"rachid":1,"ouramdane":1,"directs":1,"tre":2,"chaillot":1,"makers":1,"automaker":1,"surpassed":1,"beneath":1,"goat":1,"snorkeling":1,"npr-topics-health":3,"sleep":2,"magnesium":2,"supplements":2,"melatonin":1,"traction":1,"bike":1,"water-bottle-size":1,"hydrogen-powered":1,"severely":1,"highway":1,"angel":1,"frances":1,"brissey":1,"saved":1,"passing":1,"tight":1,"paths":1,"toss-ups":1,"retains":1,"narrow":1,"sun":3,"belt":2,"shapes":1,"overemphasize":1,"subversion":1,"seduction":1,"worries":1,"doomsday":1,"scenarios":1,"escape":1,"nightmares":1,"nearer-term":1,"seriously":1,"jeopardize":1,"discourse":1,"cement":1,"biases":1,"decisions":1,"judging":1,"hiring":1,"massachusetts":1,"expands":1,"tuition-free":1,"masseducate":1,"broadest":1,"colleges":1,"cambodia":1,"mekong":1,"canal":1,"hun":1,"manet":1,"link":1,"strengthened":1,"bore":1,"gulf":1,"prompting":1,"artificial-lawyer":2,"artificiallawyer-com":2,"stanford":1,"codex":1,"flatiron":1,"genai":2,"simulator":1,"tencent":1,"financing":1,"unicorn":1,"contributed":1,"moonshot":1,"emulating":1,"arch-rival":1,"alibaba":1,"fostering":1,"swim":1,"conserve":1,"martinez":1,"enterprise":1,"adam":1,"slumps":1,"depression":1,"risen":1,"psychological":1,"encore":1,"michaeleen":1,"doucleff":1,"melodic":1,"immersed":1,"breihan":1,"magic":2,"tunes":1,"distilledtom":1,"stereogum":1,"author":2,"onespop":1,"advent":1,"tends":1,"sh":1,"npr-topics-pop-culture":1,"colman":1,"domingo":1,"sing":1,"tight-knit":1,"ensemble":1,"notorious":1,"maximum-security":1,"prisons":1,"alumni":1,"filmmaking":1,"downs":1,"overly":1,"pinsent":1,"masons":1,"london-based":1,"labs":1,"science-the-guardian":4,"smarter":1,"acquaint":1,"mathematicalupdate":1,"herewith":1,"apologies":1,"gilbert":1,"sullivan":1,"maths":1,"orlin":1,"demographic":2,"squares":1,"z":2,"folder":1,"minor":1,"lighter":1,"iterative":1,"pricesamsung":1,"hi-tech":1,"folding":1,"oneplus":1,"frame":1,"infineon":1,"ag":1,"jochen":1,"hanebeck":1,"full-scale":1,"changer":1,"identifies":1,"peso":1,"slips":1,"emerging-market":1,"sank":1,"slowdown":1,"yen-funded":1,"carry-trade":1,"positions":1,"rattled":1,"latin":1,"currencies":1,"attempting":1,"assassinations":2,"tensionsmiddle":1,"livejoe":1,"fighter":2,"jets":2,"warships":1,"shortages":1,"rationing":1,"pills":1,"cystic":1,"fibrosis":1,"shortage":2,"boats":1,"crushes":1,"dinghies":1,"ngos":1,"crushing":1,"suffocation":1,"ever-growing":1,"vessels":1,"crammed":1,"beaches":1,"ever-increasing":1,"seven-year-old":1,"gir":1,"starwatch":1,"perseids":1,"dazzling":1,"mid-month":1,"meteors":1,"emanate":1,"directions":1,"radiant":1,"perseus":1,"constellationit":1,"watchers":1,"chart":1,"midn":1,"spying":1,"allegations":1,"mogul":1,"nyt-science-space-cosmos":1,"engle":1,"trailblazer":1,"astronaut":2,"later":1,"x-":1,"shuttle":1,"disappointment":1,"queens":1,"rhaenyra":1,"sings":1,"murderers":1,"sung":1,"propose":1,"barring":1,"samira":1,"shackle":1,"goodell":1,"dangers":1,"resulting":1,"themdavid":1,"azevedo":1,"worker":2,"heatwave":1,"cheez-it":1,"eggo":1,"imminently":1,"info":1,"urging":1,"implement":1,"roaring":1,"crackdown":2,"seemed":1,"bangladeshis":1,"angrier":1,"broadened":1,"nicol":2,"maduro":2,"pulverise":1,"revolution":1,"oppositionthe":1,"venezuelan":1,"follo":1,"feasible":1,"detrow":1,"gabriel":1,"zucman":1,"blueprint":1,"dubious":1,"firmly":1,"betray":1,"meets":1,"mates":2,"seven-state":1,"business-the-guardian":2,"vineyards":1,"flood":1,"investorsthe":1,"revenues":1,"vines":1,"languishes":1,"wine-producing":1,"nat":1,"github-io":1,"e-book":1,"webgpu":1,"programming":1,"graphics":1,"spare":1,"various":1,"facilitate":1,"publishing":1,"playground":1,"static":1,"reference":1,"feeling":1,"burnt":1,"fi":1,"depleted":1,"offense":1,"matthew":1,"stafford":1,"el":1,"segundo":1,"bullpen":1,"shines":1,"oakland":2,"rubber":1,"one-run":1,"implanted":1,"procedure":1,"paralyzed":1,"alone":1,"patients":2,"glitches":1,"northrop":1,"grumman":1,"cargo":1,"maneuvers":1,"battered":1,"blows":1,"short-term":1,"setback":1,"prevent":1,"re-emerging":1,"intact":1,"radicalized":1,"whacked":1,"forthcoming":1,"argues":1,"infringe":1,"liberties":1,"patriotism":1,"cynical":2,"skeptical":1,"brace":1,"escalated":1,"unfolding":1,"hunting":1,"experiences":1,"outdoor":1,"shelter":1,"kills":1,"airstrike":1,"outlets":1,"prizes":1,"finishers":1,"arkansas":1,"barn":1,"crouser":1,"juggernaut":1,"solemn":1,"groundbreaker":1,"f-":2,"zelensky":1,"volodymyr":1,"flown":1,"trained":1,"pilots":1,"constrain":1,"immediate":1,"smugglers":1,"microchips":1,"advance":1,"evaluations":1,"accountability":1,"tests":1,"benchmarks":1,"analyze":1,"videos":2,"tendency":1,"generally":1,"unpredictably":1,"organiz":1,"manfred":1,"kirchheimer":1,"indispensable":1,"meticulously":1,"crafted":1,"films":2,"documentaries":1,"obscurity":1,"enjoyed":1,"burst":1,"acclaim":1,"deliberate":1,"cheat":1,"write":1,"assignments":1,"debating":1,"statement":2,"provided":1,"researching":1,"watermarking":1,"brags":1,"maga":1,"pit":1,"honesty":1,"lived":1,"shocks":1,"terror":1,"stagnant":1,"commander":1,"patience":1,"mazzetti":1,"friendship":1,"gates":1,"reached":1,"billionaires":1,"stylistic":1,"roiled":1,"philanthropy":1,"reshapes":1,"organizational":1,"closely":1,"spearheaded":1,"saltzman":1,"aim":2,"amplify":1,"voices":1,"roku":1,"post-lunch":1,"cartoons":1,"easy-to-navigate":1,"interface":1,"swing-state":1,"biden-harris":1,"casual":1,"moviegoer":1,"avid":1,"buff":1,"reviewers":1,"screened":1,"wyoming":1,"teton":1,"developers":1,"parcel":1,"pristine":1,"bargaining":1,"cleo-abram":1,"cleo":1,"abram":1,"emu":1,"extravehicular":1,"units":1,"mo":1,"big-time":1,"flashback":1,"lucia":3,"julien":2,"alfred":2,"sha":2,"carri":2,"richardson":2,"-hundredths":1,"ts":1,"bears":1,"bands":1,"soggy":1,"mess":1,"dumpster":1,"diving":1,"taboo":1,"trendy":1,"treasure":1,"hunt":1,"trash":1,"answerswhen":1,"annemarie":1,"cox":1,"drives":1,"diego":1,"scans":1,"ignores":1,"dumpsters":1,"quirky":1,"secondhand":1,"clothes":1,"collectible":1,"antiques":1,"investing":1,"predictive":1,"npr-topics-race":2,"gap":2,"narrowed":1,"ayesha":1,"rascoe":1,"raj":1,"chetty":1,"grew":1,"craze":1,"dominica":1,"territories":1,"iphone":1,"tackling":1,"exemptions":1,"reconsidering":1,"adapt":1,"hotter":1,"acclimatizing":1,"cue":1,"medical":1,"tolerance":1,"chevrolet":1,"dealership":1,"office-inspired":1,"viral":1,"employee":1,"skits":1,"ducks":1,"businessa":1,"mysterious":1,"miniature":1,"eats":1,"potluck":1,"lunch":1,"contribution":1,"throwback":1,"paperwork":1,"davious":1,"remodeled":1,"secondary":1,"cornerback":1,"mcvay":1,"cam":1,"akers":1,"gem":1,"creates":1,"riemann":1,"hypothesis":1,"advocate":1,"keating":1,"miliband":1,"polarization":1,"resource":1,"stress":1,"anna":1,"sandberg":1,"foundations":1,"new-look":1,"harleen":1,"uppal":1,"full-back":1,"intent":1,"wsl":1,"fluxanna":1,"bk":1,"cken":1,"fee":1,"demonstrates":1,"strengthening":1,"plaschke":1,"lincoln":1,"riley":1,"imitating":1,"clay":1,"helton":1,"morph":1,"carroll":1,"seine":1,"pollution":1,"triathletes":1,"swam":1,"mixed-race":1,"fastest-growing":1,"rural":1,"visiting":1,"stretches":1,"climate-environment":1,"ash":1,"borel":1,"destruction":1,"havilah":1,"raining":1,"resident":1,"rush":1,"obliterated":1,"pro-family":1,"legislation":1,"stopped":1,"exhausting":1,"seniors":1,"clunky":1,"lax-it":1,"taxi":1,"ride-share":1,"lax":1,"whole":1,"battlegrounds":1,"lean":1,"stranded":1,"comms":1,"imminentit":1,"triumph":1,"safely":1,"reset":1,"electoral":1,"map":1,"rebounded":1,"mileage":1,"activists":1,"tel":1,"aviv":1,"separate":1,"attacker":1,"mired":1,"essential":1,"out-memeing":1,"medicines":1,"sub-par":1,"extent":1,"sub-saharan":1,"regiona":1,"substandard":1,"countless":1,"bahir":1,"dar":1,"snowballed":1,"giveaways":1,"lulu":1,"ramadan":1,"sydney":1,"brownstone":1,"seattle":1,"karen":1,"ducey":1,"fo":1,"flaherty":1,"desperately":1,"convinced":1,"target-date":1,"default":1,"retirement":1,"savers":1,"automatically":1,"enrolled":1,"carlini-com":1,"nicholas":1,"carlini":1,"how-i-use-ai":1,"html":1,"marjorie":1,"greene":1,"brad":1,"raffensperger":1,"bock":1,"clark":1,"spotlights":1,"wrongdoing":1,"ar":1,"cal":1,"lutheran":1,"woodland":1,"eventually":1,"shuffle":1,"lacking":1,"tense":1,"rivalries":1,"johnson":1,"pushes":1,"televised":1,"hosting":1,"scholars":1,"divide":1,"conquer":1,"conspiracy":1,"conducts":1,"airstrikes":1,"wing":1,"occupied":1,"once-rare":1,"densely":1,"populated":1,"upsets":1,"saint":1,"dash":1,"competitors":1,"abundance":1,"nyt-michelle-goldberg":1,"childbirth":1,"nyt-david-brooks":1,"outweigh":1,"terrorist":1,"mogadishu":1,"beach":1,"suicide":1,"bomber":1,"gunmen":1,"busy":1,"beachfront":1,"somali":1,"capitalat":1,"lido":1,"typically":1,"the-gradient":1,"thegradient-pub":1,"visions":1,"wellbeing":1,"introductionimagine":1,"conversing":1,"encyclopedic":1,"crafts":1,"debates":1,"philosophy":1,"certainly":1,"ucla":1,"berg":1,"slapping":1,"bruins":1,"discipline":1,"experimental":1,"-nation":1,"iter":1,"limitless":1,"cost-inflated":1,"atomic":1,"driv":1},"n_docs":1002}
}

if (!localStorage.getItem("votelib")) {
    localStorage.setItem("votelib","default_feeds");
}

if (!localStorage.getItem("cooldown")) {
    localStorage.setItem("cooldown",0.5);
}

if (!localStorage.getItem("lookback")) {
    localStorage.setItem("lookback",7);
}

if (!localStorage.getItem("cardcutoff")) {
    localStorage.setItem("cardcutoff",30);
}

if (!localStorage.getItem("backstop")) {
    localStorage.setItem("regex_always", "");
    localStorage.setItem("regex_always_op", "i");
}

if (!localStorage.getItem("backstop")) {
    localStorage.setItem("regex_never", "");
    localStorage.setItem("regex_never_op", "i");
}

var article_test;
var upTFIDF_tmp;
var dfreq_tmp = {};

