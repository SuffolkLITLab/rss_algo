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
    "https://www.wired.com/feed/tag/wired-guide/latest/rss",
    // Rollingstone
    "https://www.rollingstone.com/music/feed/",
    "https://www.rollingstone.com/politics/feed/",
    "https://www.rollingstone.com/tv-movies/feed/",
    "https://www.rollingstone.com/culture/feed/",
    "https://www.rollingstone.com/product-recommendations/feed/",
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
    // SSRN
    //"https://api.ssrn.com/content/v1/journals/956475/papers/rss",
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
    // One Usefulthing
    "https://www.oneusefulthing.org/feed",
    "https://www.ailawlibrarians.com/feed/",
    "https://www.scotusblog.com/feed/",
    "https://buttondown.email/LawyerExMachina/rss",
    "https://abovethelaw.com/feed/"
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
    "https://www.schneier.com/feed/"


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
    "feeds_long_list_": {"df_arr":{"gizmodo":5,"gizmodo-com":5,"home":3,"security":4,"giant":3,"adt":1,"admits":1,"hacked":2,"lot":2,"details":1,"aren":2,"clear":2,"yet":3,"company":28,"says":18,"hackers":2,"made":4,"customer":2,"information":6,"including":10,"addresses":1,"reactor":3,"reactormag-com":3,"new":30,"young":3,"adult":4,"sff":1,"books":3,"arriving":3,"august":7,"reapers":1,"princesses":1,"ghosts":1,"science":4,"experiments":1,"feature":2,"titles":2,"post":15,"appeared":14,"first":19,"one":19,"deadpool":1,"wolverine":1,"joke":1,"disney":1,"asked":3,"cut":2,"butt":1,"still":5,"got":2,"end":5,"could":21,"ve":4,"wade":2,"backside":1,"horrified":1,"biology-news-evolution-cell-theory-gene-theory-microbiology-biotechnology":3,"phys-org":21,"great":3,"koala":1,"count":1,"aussies":1,"urged":1,"track":2,"sightings":1,"iconic":1,"marsupials":1,"csiro":1,"australia":2,"national":6,"agency":3,"calling":2,"australians":1,"record":2,"spotter":1,"app":3,"help":9,"build":2,"accurate":2,"population":2,"date":1,"big":15,"bubble":1,"plasma":1,"space":6,"shoots":1,"fast":3,"radio":1,"burst":1,"toward":1,"earth":1,"findings":1,"clarify":1,"origins":1,"enigmatic":1,"brilliant":1,"emissions":2,"often":5,"come":7,"deep":3,"recesses":1,"perseids":2,"back":8,"watch":3,"best":5,"meteor":2,"showers":1,"year":17,"famous":2,"among":6,"spectacular":2,"hit":4,"peak":2,"night":1,"technology":14,"predict":1,"deformation":1,"dna":1,"origami":1,"structures":1,"induced":1,"dna-binding":1,"molecules":1,"research":7,"team":3,"developed":4,"quickly":1,"mechanochemical":1,"shape":1,"changes":5,"nanostructures":1,"includes":3,"professor":2,"do-nyun":1,"kim":1,"department":3,"mechanical":1,"engineering":2,"college":1,"seoul":1,"university":3,"latest-articles-smithsonianmag-com":2,"smithsonianmag-com":2,"olympic":7,"village":1,"evolved":1,"makeshift":1,"cabins":1,"city":6,"within":4,"athletes":3,"accommodations":1,"long":11,"way":8,"last":14,"years":10,"expanding":1,"modern":4,"global":10,"hubs":1,"south":4,"africa":3,"controversial":2,"lion":1,"farming":1,"industry":6,"fueling":1,"illegal":4,"international":9,"trade":2,"cat":2,"bones":1,"paper":2,"paw":1,"bone":1,"published":3,"nature":2,"conservation":2,"uncovered":1,"concerning":1,"activities":2,"captive":1,"shedding":1,"light":1,"urgent":1,"need":9,"comprehensive":1,"governmental":1,"action":5,"business":9,"economist-com":4,"china":7,"overhauling":1,"law":17,"leaders":5,"want":3,"make":12,"less":6,"volatile":1,"easier":2,"control":4,"world":7,"leader":5,"coffee":2,"shops":1,"average":1,"chinese":2,"person":1,"guzzles":1,"much":7,"typical":1,"american":7,"teen":1,"radicalized":1,"online":11,"allegedly":2,"planned":1,"terrorist":1,"attack":3,"taylor":2,"swift":1,"concert":1,"two":19,"european":2,"suspects":1,"apprehended":1,"week":11,"connection":1,"supposed":2,"techdirt":2,"techdirt-com":2,"crowdstrike":5,"dmca":1,"d":3,"parody":1,"site":4,"wake":1,"update":2,"outage":2,"doubt":1,"aware":1,"july":4,"cybersecurity":2,"oopsie":1,"pushed":3,"falcon":2,"sensor":1,"software":5,"took":2,"millions":2,"computers":2,"around":8,"result":2,"chaos":1,"everything":3,"hospitals":1,"airlines":3,"banks":2,"impacted":1,"servers":1,"went":3,"scientists":3,"enlist":1,"sea":1,"lions":1,"reveal":2,"unique":3,"view":2,"ocean":1,"floor":1,"australian":1,"researchers":8,"glued":1,"satellite-linked":1,"gps":1,"cameras":1,"animals":1,"backs":1,"capture":1,"footage":1,"vital":1,"marine":2,"efforts":2,"lifehacker":6,"lifehacker-com":6,"reddit":2,"soon":2,"try":3,"ai":43,"summaries":1,"maybe":3,"paywalls":1,"gone":1,"public":5,"thinking":2,"kinds":1,"ways":6,"turn":1,"profit":3,"washington-post":15,"washingtonpost-com":15,"elon":17,"musk":18,"x":13,"accused":4,"bias":1,"pro-harris":1,"accounts":1,"labeled":1,"spam":1,"three":3,"prominent":1,"raising":2,"questions":3,"whether":2,"platform":6,"intentionally":1,"limiting":1,"opposing":1,"trump":6,"design":2,"flaw":1,"allow":2,"roll":1,"microsoft":5,"windows":2,"updates":2,"working":1,"fixes":1,"presented":2,"annual":3,"black":4,"hat":1,"conference":5,"always":5,"gets":4,"dumber":1,"sues":7,"ad":2,"coalition":1,"rejoined":1,"thinks":2,"advertise":1,"extwitter":1,"remember":3,"told":3,"advertisers":1,"go":5,"fuck":1,"well":5,"suing":2,"companies":9,"serious":1,"crime":2,"claims":4,"might":3,"rico":1,"wanting":1,"oh":1,"even":21,"detailed":1,"fiction":1,"meet":2,"alien":1,"hive":1,"empire":2,"chief":7,"emotional":2,"manager":2,"daughter":1,"human":8,"genetically":1,"engineered":1,"posthuman":1,"sf":1,"mcsweeney-s":3,"mcsweeneys-net":3,"oral":1,"history":2,"aging":3,"body":3,"eyes":1,"brag":1,"required":3,"glasses":1,"contact":1,"lenses":1,"decades":3,"stomach":1,"said":20,"definitely":1,"mention":1,"worst":3,"guess":1,"started":4,"act":6,"time":8,"quite":2,"ears":1,"damaged":1,"early":4,"loud":2,"music":3,"didn":3,"bbc-news":17,"bbc-com":17,"cctv":1,"shows":3,"looting":1,"inside":4,"liverpool":1,"shop":1,"weekend":3,"unrest":4,"store":2,"left":2,"losses":4,"damage":1,"according":9,"owner":4,"platforms":4,"warned":2,"disorder":1,"violence":4,"risk":3,"open":5,"letter":5,"comes":7,"social":13,"media":13,"firms":5,"face":5,"increasing":3,"scrutiny":3,"role":2,"bloomberg-markets":4,"bloomberg-com":22,"el-erian":1,"boj":1,"meant":1,"press":2,"pause":1,"rewind":1,"mohamed":1,"bloomberg":2,"opinion":3,"contributor":1,"probably":4,"enormous":1,"external":1,"pressure":2,"bank":2,"japan":3,"send":3,"dovish":1,"signal":1,"speaks":1,"television":1,"government":9,"concerned":2,"immigration":1,"lawyer":3,"hitlist":1,"list":2,"shared":2,"lawyers":3,"say":7,"threat":1,"credible":1,"good":6,"morning":2,"britain":2,"show":6,"prompts":1,"complaints":1,"regulator":2,"ofcom":1,"assessing":1,"interviews":1,"monday":8,"episode":1,"itv":1,"game":3,"plan":5,"chosen":1,"opine":1,"uk":5,"isn":1,"driving":2,"bloomberg-politics":4,"malnutrition":1,"soars":1,"amid":3,"nigeria":2,"food":3,"cost":2,"spike":1,"aid":1,"group":5,"surging":1,"country":10,"grapples":1,"cost-of-living":1,"crisis":3,"nonprofit":2,"doctors":1,"without":7,"borders":1,"abn":1,"amro":1,"ceo":5,"grilled":1,"missing":1,"explanation":1,"departure":1,"nv":1,"executive":5,"officer":1,"robert":2,"swaak":1,"decision":1,"resign":1,"eclipsed":1,"positive":2,"earnings":2,"day":6,"dutch":1,"lender":1,"investors":3,"journalists":1,"peppered":1,"largely":1,"ducked":1,"storm":1,"debby":1,"deadly":3,"slow":4,"weather":4,"systems":4,"blocking":1,"allowing":1,"unleash":1,"heavy":1,"rain":2,"longer":1,"polish":1,"man":5,"jailed":1,"four":2,"months":2,"punching":1,"danish":1,"pm":2,"drunk":1,"incident":1,"deported":1,"banned":2,"denmark":1,"five":9,"scrub":1,"nude":1,"deepfakes":1,"google":12,"search":6,"updated":1,"tool":3,"taking":4,"ai-generated":1,"explicit":1,"images":3,"unilever":1,"mars":2,"boycott":1,"unfairly":1,"deprived":1,"billions":3,"dollars":2,"advertising":1,"revenue":1,"lyft":1,"shares":3,"tank":2,"bookings":1,"outlook":2,"miss":2,"estimates":1,"inc":4,"slid":1,"ride-hailing":1,"posted":1,"second-quarter":2,"issued":1,"fell":3,"short":4,"wall":5,"street":3,"expectations":2,"booming":1,"age":2,"scanners":1,"aimed":1,"children":9,"faces":2,"assurance":1,"checks":1,"increasingly":2,"popular":1,"lawmakers":3,"trying":4,"kids":4,"internet":4,"rely":1,"style":1,"surveillance":1,"ranges":1,"somewhat":2,"privacy":4,"violating":2,"authoritarian":2,"nightmare":2,"growth":3,"infrastructure":3,"fix":3,"urgently":1,"address":1,"crippling":1,"bottlenecks":1,"derailing":1,"budding":1,"economic":2,"recovery":2,"market":8,"intelligence":18,"suspected":1,"foreign":2,"agitators":1,"boost":2,"extremists":2,"inflame":1,"riots":4,"state-backed":1,"actors":2,"domestic":1,"coalesced":1,"stoke":1,"racism":1,"incite":1,"across":5,"advantage":1,"tiktok":5,"messaging":1,"service":2,"telegram":1,"watchdog":1,"fine":2,"nhs":2,"firm":4,"medical":1,"records":1,"hack":1,"breach":2,"included":1,"gaining":1,"entry":1,"homes":1,"people":18,"hits":3,"criticises":1,"civil":2,"war":3,"prime":4,"minister":6,"spokesperson":2,"previously":2,"justification":1,"comments":4,"healthcare":1,"risks":5,"generative":6,"transformative":1,"patient":2,"outcomes":1,"senior":2,"advisor":1,"carolyn":1,"hax":1,"partner":3,"six":1,"bothersome":1,"prior-life":1,"baggage":1,"writer":1,"frustrated":1,"husband":1,"weaknesses":1,"motorcycle":1,"sons":1,"prior":1,"marriage":1,"ohio":1,"judge":2,"upholds":1,"ban":1,"gender-affirming":1,"care":2,"minors":2,"upheld":1,"tuesday":3,"bans":2,"state":8,"muhammad":1,"yunus":1,"bangladesh":5,"transitional":1,"nobel":1,"laureate":1,"guide":3,"transitory":1,"period":1,"know":5,"politics":3,"latimes-com":16,"column":2,"finally":2,"tim":1,"walz":1,"puts":2,"teachers":2,"place":2,"spotlight":3,"may":6,"lionized":1,"hollywood":2,"practice":5,"re":10,"underpaid":1,"overworked":1,"disrespected":1,"kamala":7,"harris":7,"running":2,"mate":1,"minnesota":1,"governor":3,"change":4,"u":13,"k":4,"blame":2,"declared":1,"inevitable":1,"keir":3,"starmer":3,"called":4,"pretty":1,"deplorable":1,"order":1,"hindus":1,"targeted":4,"hindu":1,"properties":1,"shrines":1,"attacked":1,"ex-pm":1,"sheikh":2,"hasina":2,"fled":1,"fantasy":1,"assassins":1,"sorceresses":1,"deathspeakers":1,"month":2,"releases":1,"apple":7,"instructions":1,"directing":2,"peek":1,"behind":3,"curtain":1,"upcoming":2,"model":3,"history-lover":1,"panic":1,"past":3,"technologies":3,"offer":4,"clues":1,"next":4,"vanity-fair":3,"vanityfair-com":3,"duchess":1,"sophie":1,"moved":2,"tears":1,"paris":8,"olympics":10,"prince":2,"william":1,"kate":1,"middleton":1,"unlikely":1,"appearance":1,"despite":8,"close":4,"proximity":1,"princess":1,"anne":1,"already":6,"witnessed":1,"history-making":1,"moments":1,"antitrust":3,"ruling":3,"choose":3,"google-quality":1,"engine":1,"tailored":1,"news":4,"would":13,"android":2,"chrome":1,"split":1,"spendolini-sirieix":1,"misses":1,"medal":2,"quan":1,"wins":1,"gold":2,"dives":1,"hongchan":1,"andrea":1,"finishes":1,"sixth":1,"women":6,"final":4,"sports":6,"hern":1,"ndez":1,"october":1,"dodgers":1,"tested":1,"brutal":3,"schedule":1,"toughest":1,"four-week":1,"stretch":1,"season":1,"emerge":1,"relatively":1,"unscathed":1,"deadline":2,"extended":3,"hargreaves":1,"lansdown":1,"takeover":1,"talks":3,"employs":1,"work":9,"bristol":1,"tom":2,"girardi":1,"real":2,"housewives":1,"trial":2,"century":2,"personal":10,"injury":3,"erin":1,"brockovich":1,"infamous":1,"divorce":1,"played":2,"bravo":1,"federal":4,"fraud":1,"underway":2,"los":3,"angeles":3,"attorney":2,"blew":1,"whistle":1,"describes":1,"came":3,"see":8,"saga":1,"significantly":3,"worse":1,"bernie":1,"madoff":1,"smart":1,"thermostat":1,"yep":1,"guessed":1,"features":3,"nest":1,"learning":1,"use":12,"efficient":1,"heating":1,"cooling":1,"killing":1,"chromecast":1,"favor":1,"tv":1,"streamer":1,"ai-powered":1,"set":2,"top":1,"box":1,"seems":1,"like":1,"take":5,"wsj-com-world-news":5,"wsj-com":15,"dow":1,"futures":2,"edge":1,"higher":2,"markets":6,"steadied":1,"making":4,"muted":1,"gains":1,"nikkei":1,"clawing":1,"chunk":1,"previous":1,"session":1,"zalando":1,"finance":1,"steps":1,"management":3,"reshuffle":1,"fashion":1,"retailer":1,"cfo":1,"sandra":1,"dembeck":1,"decided":1,"renew":1,"contract":2,"announce":3,"replacement":1,"fastest":2,"climber":1,"alive":1,"trains":1,"playing":2,"chess":1,"sam":6,"watson":1,"speed":2,"climbing":1,"world-record":1,"holder":1,"hones":1,"pattern-recognition":1,"skills":1,"sitting":1,"board":2,"instead":1,"flying":3,"regain":1,"ground":2,"unusual":1,"sell-off":2,"rose":1,"possibly":3,"growing":3,"hopes":2,"reserve":1,"interest":1,"rates":1,"twice":1,"desirability":1,"schneier-on-security":1,"schneier-com":1,"cyber":1,"safety":8,"review":5,"airplane":2,"crashes":1,"impartial":1,"investigatory":1,"bodies":1,"leap":3,"empowered":1,"unearth":1,"happened":2,"investigate":2,"faulty":1,"recently":4,"unfolded":1,"ensnarling":1,"emergency":2,"services":2,"tune":1,"sunpower":1,"files":3,"bankruptcy":2,"sell":2,"assets":1,"complete":1,"solaria":1,"agreed":2,"associated":1,"blue":1,"raven":1,"solar":2,"new-homes":1,"non-installing":1,"dealer":2,"network":4,"million":5,"the-new-yorker":2,"newyorker-com":2,"makes":6,"ever":4,"challenged":2,"define":1,"valuable":2,"alphabet":2,"newcomer":1,"second-rate":1,"b":2,"j":1,"weirdo":1,"worth":1,"discussing":1,"choice":1,"shut":1,"san":6,"francisco":6,"office":5,"weeks":3,"multi-billionaire":1,"move":7,"rocket":2,"spacex":2,"texas":3,"nyt-business":18,"nytimes-com":56,"star":4,"power":3,"elevates":1,"pin":1,"trading":3,"unofficial":1,"sport":4,"celebrities":1,"chronicling":1,"chase":1,"prized":1,"conquests":1,"high":5,"demand":5,"designs":1,"snoop":1,"dogg":1,"simone":2,"biles":2,"spacenews":8,"spacenews-com":8,"benchmark":1,"adds":2,"starlight":1,"thruster":1,"logan":3,"utah":3,"announced":7,"strategic":2,"partnership":2,"aug":4,"startup":9,"engines":1,"agreement":1,"small":5,"satellite":3,"hybrid":1,"stock":4,"fall":3,"sharply":2,"fears":2,"slowing":3,"rout":1,"began":1,"asia":1,"continued":1,"europe":1,"stocks":4,"overdue":1,"pullback":2,"bloomberg-technology":13,"softbank":1,"log":1,"slim":1,"ahead":4,"masayoshi":1,"son":1,"bet":2,"corp":2,"likely":3,"report":6,"indication":1,"mistakes":2,"continue":2,"weigh":2,"billionaire":5,"founder":2,"prepares":1,"techcrunch":12,"techcrunch-com":12,"openai":13,"co-founder":1,"schulman":1,"leaves":2,"anthropic":2,"brockman":1,"takes":6,"leave":2,"john":1,"co-founders":1,"rival":1,"addition":1,"president":5,"greg":1,"nine":1,"relax":1,"recharge":1,"confirmed":3,"peter":1,"deng":1,"product":2,"rights":8,"reserved":8,"nyt-arts":10,"akili":1,"mcdowell":1,"david":4,"charged":2,"murder":2,"mr":1,"held":3,"bond":1,"shooting":2,"death":3,"parking":1,"houston":2,"apartment":1,"complex":2,"authorities":1,"monopoly":2,"court":4,"rules":2,"victory":1,"doj":3,"string":1,"lawsuits":1,"tech":14,"xiaomi-backed":1,"chipmaker":1,"sesame":1,"prices":1,"hong":1,"kong":1,"ipo":1,"bottom":2,"range":1,"holding":3,"ltd":1,"priced":1,"initial":1,"offering":1,"low":1,"marketed":1,"knowledge":2,"situation":1,"recent":4,"selloff":3,"piles":1,"extra":1,"share":1,"issues":4,"nyt-world-news":15,"resigns":1,"flees":1,"protests":2,"army":1,"interim":1,"formed":1,"demonstrators":1,"successfully":1,"harsh":1,"rule":1,"moves":2,"shrug":1,"offices":1,"complained":1,"progressive":1,"homelessness":1,"nvidia":5,"next-generation":1,"chip":6,"rollout":2,"slowed":1,"snags":1,"development":1,"advanced":4,"chips":3,"release":3,"products":5,"designed":1,"extend":1,"lead":3,"artificial":12,"computing":2,"biz-it-ars-technica":3,"arstechnica-com":11,"mac":1,"users":3,"infected":1,"delivered":1,"isp":1,"dns":1,"poisoning":1,"worked":2,"targets":1,"used":6,"cloudflare":1,"secretaries":3,"urge":2,"stop":4,"grok":3,"chatbot":3,"spreading":2,"election":6,"misinformation":5,"confused":1,"homophonic":1,"groq":4,"raised":5,"false":2,"vice":2,"formerly":3,"known":4,"twitter":3,"penned":1,"addressed":1,"tesla":4,"boxing":3,"officials":2,"little":6,"clarity":1,"eligibility":1,"dispute":3,"olympians":2,"whose":2,"compete":2,"games":3,"fight":1,"medals":3,"the-atlantic":4,"theatlantic-com":4,"iranian":1,"insiders":2,"warn":2,"attacking":1,"israel":3,"trap":1,"arash":1,"azizi":1,"iran":2,"lobbed":1,"hundreds":1,"missiles":1,"drones":1,"april":1,"hope":2,"changing":2,"engagement":1,"struck":2,"consulate":1,"damascus":1,"tehran":1,"sought":1,"deter":1,"direct":1,"actions":1,"interests":2,"shattered":1,"operation":1,"attributed":1,"ism":1,"lynch":1,"twin":1,"peaks":1,"emphysema":1,"director":2,"diagnosis":1,"revealing":1,"magazine":2,"interview":1,"limited":1,"remotely":1,"above-the-law":2,"abovethelaw-com":2,"accountable":4,"scotus":1,"angry":1,"also":5,"bill":3,"barr":1,"hates":1,"ethics":1,"bipartisan":1,"support":1,"cursed":1,"luxury":1,"poor":1,"memory":1,"turns":1,"thomas":2,"crow":1,"trips":1,"clients":1,"realize":1,"options":2,"midsized":1,"seeing":1,"uptick":1,"teach":1,"check":1,"ranking":1,"tries":1,"blow":2,"another":5,"statu":1,"world-news-the-guardian":2,"theguardian-com":9,"us":4,"supreme":2,"won":2,"sentencing":1,"going":4,"blog":1,"closed":1,"read":1,"latest":5,"coverage":1,"climate":4,"activist":1,"feminist":1,"screen":1,"legend":1,"jane":1,"fonda":1,"put":2,"video":3,"message":2,"endorsing":1,"win":3,"white":3,"house":3,"november":1,"today":3,"m":3,"proud":1,"endorse":1,"united":1,"states":2,"begins":1,"talking":1,"camera":1,"close-up":1,"reading":1,"shift":3,"poised":2,"soften":1,"defeat":1,"suit":2,"filed":2,"justice":3,"cast":1,"shadow":1,"generates":1,"roughly":1,"billion":10,"payments":1,"mexican":1,"reporter":1,"gunned":1,"detail":1,"side":1,"alejandro":1,"mart":1,"nez":1,"received":2,"many":10,"threats":2,"appointed":1,"protection":2,"sunday":2,"shot":1,"killed":3,"bodyguards":1,"wounded":1,"npr-topics-world":2,"npr-org":6,"detains":1,"binance":1,"crypto":1,"caught":3,"currency":1,"exchange":3,"effectively":1,"hostage":1,"lucid":1,"pumps":1,"saudi":1,"wealth":1,"fund":2,"relying":1,"bottomless":1,"dangerous":5,"arabia":1,"committing":1,"money":2,"motors":1,"ev":3,"struggles":2,"erase":1,"part":6,"affiliate":1,"sovereign":1,"half":1,"coming":3,"form":1,"private":4,"placement":1,"local-news":1,"wgbh-org":1,"england":4,"shine":1,"pommel":1,"horse":1,"guy":1,"rugby":1,"ilona":1,"maher":1,"stood":1,"pack":1,"virality":1,"science-ars-technica":3,"suffers":2,"heart":3,"problem":3,"rapid":1,"weight":4,"loss":1,"glp-":1,"cautionary":1,"tale":1,"atrial":1,"fibrillation":1,"hospitalization":1,"nyt-technology":2,"flagship":1,"clashed":1,"california":5,"headquarters":2,"nyt-opinion-sunday-opinion":2,"aleksei":1,"navalny":1,"restored":1,"evan":1,"gershkovich":1,"life":5,"freed":3,"journalist":1,"hatched":1,"arrested":1,"business-latest":1,"wired-com":6,"leaving":2,"closure":1,"marks":1,"era":2,"relocate":1,"workers":3,"ending":1,"presence":1,"founded":1,"smallsat":1,"relocates":1,"salt":1,"lake":1,"nearly":3,"moving":2,"chair":2,"pat":2,"patterson":1,"pbs-newshour":1,"youtube-com":1,"olympian":1,"allyson":1,"felix":1,"pbs":1,"newshour":1,"summer":3,"decorated":1,"athlete":1,"field":2,"gymnastics":2,"sure":1,"ended":2,"tall":1,"flexible":2,"wsj-com-wsjd":7,"wants":2,"wire":1,"brain":2,"rivals":3,"racing":1,"beat":1,"neuralink":1,"implant":1,"allowed":1,"cursor":1,"play":1,"videogames":1,"buca":1,"di":1,"beppo":1,"plans":3,"keep":4,"remaining":1,"locations":1,"days":5,"closing":1,"dozen":2,"restaurants":1,"italian":2,"restaurant":1,"chain":1,"chapter":1,"nyt-science":4,"study":5,"yearly":1,"price":2,"tag":1,"cancer":3,"screening":1,"estimate":1,"focused":3,"cancers":1,"medically":1,"recommended":1,"breast":1,"cervical":1,"colorectal":1,"lung":1,"prostate":1,"found":5,"colonoscopies":1,"accounted":1,"costs":1,"controversy":1,"deepens":3,"center":2,"imane":2,"khelif":2,"lin":1,"yu-ting":1,"guaranteed":1,"fallout":1,"continues":2,"drama":2,"russian-led":1,"association":2,"disqualified":1,"takeaways":1,"investigation":2,"times":2,"active":1,"restrictions":1,"unreported":1,"incidents":1,"defense":1,"russian":4,"jail":2,"wanted":1,"stay":1,"dissident":1,"ilya":1,"yashin":1,"calls":1,"prisoner":3,"swap":2,"expulsion":1,"russia":1,"damages":2,"ability":1,"heard":1,"music-rolling-stone":2,"rollingstone-com":3,"rivalry":1,"michael":1,"jackson":1,"helped":1,"inspire":1,"purple":2,"learned":2,"road":1,"thriller":1,"prodded":1,"movie":1,"secret":1,"influence":1,"quadrophenia":1,"tempers":1,"bombastic":1,"gpt-":1,"-less":1,"devday":1,"splashy":1,"event":4,"bevy":1,"tools":4,"ill-fated":1,"store-like":1,"gpt":1,"quieter":1,"affair":2,"however":1,"format":1,"tentpole":1,"palantir":1,"surges":1,"boosting":1,"forecast":2,"jumped":1,"citing":2,"continuing":2,"former":3,"jenna":1,"ellis":1,"agrees":1,"cooperate":1,"arizona":1,"elector":1,"case":3,"deal":5,"allows":2,"avoid":1,"potential":2,"provide":2,"prosecutors":1,"evidence":3,"implicate":1,"defendants":1,"spies":1,"undercover":1,"couple":1,"planted":1,"sleeper":1,"slovenia":1,"posed":1,"argentine":2,"art":3,"entrepreneur":1,"december":1,"sent":2,"moscow":1,"sweeping":2,"policy-ars-technica":4,"loses":1,"exclusive":2,"deals":3,"maintained":1,"monopolies":1,"ruled":1,"entertainment-arts":4,"johnny":1,"wactor":1,"slaying":1,"lapd":1,"focuses":2,"gang":1,"members":3,"tied":1,"catalytic":2,"converter":1,"thefts":1,"fatal":1,"general":2,"hospital":1,"actor":1,"downtown":1,"focusing":1,"enforcement":1,"sources":1,"familiar":1,"probe":1,"nasdaq":1,"drop":1,"since":3,"ed":1,"ludlow":1,"covers":1,"leads":1,"plus":1,"look":1,"berkshire":1,"cuts":2,"stake":1,"future":2,"valuation":3,"source":1,"powerful":2,"branding":1,"strategies":1,"marketing":1,"tips":1,"sponsored":1,"learn":2,"easy":3,"competitive":1,"trustworthy":1,"visual":1,"brand":1,"mgk":1,"celebrates":1,"sobriety":1,"rehab":1,"constant":1,"tightrope":1,"walk":1,"singer":1,"tell":2,"anybody":1,"heated":1,"spat":1,"delta":3,"airline":2,"struggled":2,"rebound":1,"caused":2,"disruptions":1,"worldwide":1,"watermark":1,"text":5,"certainty":2,"hurt":4,"line":1,"physics-news-physics-news-material-sciences-science-news-physics":2,"achieve":1,"super-bloch":1,"oscillations":1,"strong-driving":1,"regime":1,"full":5,"coherent":1,"wave":2,"transport":1,"localization":1,"long-sought":1,"goal":2,"physics":1,"encompasses":1,"different":6,"areas":2,"solid-state":1,"matter-wave":1,"photonics":1,"important":1,"fascinating":1,"effects":2,"bloch":1,"oscillation":1,"bo":2,"refers":1,"periodic":1,"oscillatory":1,"motion":1,"e":1,"announcing":1,"agenda":1,"stage":1,"disrupt":2,"excited":1,"added":1,"dedicated":1,"cloud":1,"joins":2,"fintech":1,"saas":1,"industry-focused":1,"stages":1,"roof":1,"couldn":1,"host":2,"huge":1,"dive":1,"things":3,"climate-environment":2,"triple-digit":1,"heat":1,"broil":1,"southern":3,"patterns":1,"slightly":1,"lower":1,"temperatures":1,"midweek":1,"nautilus":1,"nautil-us":1,"myths":1,"lore":1,"milky":1,"writing":3,"stories":1,"stars":4,"deeply":1,"altman":5,"fool":1,"asks":1,"void":1,"lawsites":4,"lawnext-com":4,"works":1,"demo":1,"legal":10,"assistant":3,"launch":6,"major":1,"built":2,"directly":1,"lawy":1,"backed":2,"verification":1,"installment":1,"series":2,"get":6,"earth-news-earth-science-news-earth-science-climate-change":4,"balancing":1,"fairness":1,"welfare":1,"uncertainty":1,"investigating":1,"miami":1,"stormwater":1,"improvement":1,"investment":1,"jobs":3,"enacted":1,"inject":1,"trillion":1,"cities":3,"protect":3,"prepare":3,"occurrences":1,"extreme":2,"almost":1,"hacker-news-best":2,"ycombinator-com":1,"hn":1,"airhart":1,"aeronautics":1,"yc":1,"hey":1,"hacker":1,"nikita":1,"www":1,"airhartaero":1,"com":2,"building":2,"fly":2,"airplanes":1,"car":2,"maintaining":1,"bar":1,"bit":1,"hardware":1,"youtu":1,"pg":1,"placer":1,"boosts":1,"quietly":1,"developing":3,"based":1,"location":1,"data":4,"air":3,"quality":2,"regimes":2,"catch":3,"evolves":1,"policy":1,"ambitions":1,"blunt":1,"failure":2,"co-ordinate":1,"scientific":1,"squandering":1,"opportunity":1,"improve":3,"concludes":1,"environmental":2,"co-led":1,"ucl":1,"academic":1,"chemistry-news-biochemistry-polymers-materials-science":4,"engineers":1,"develop":3,"high-speed":1,"understand":3,"reactions":1,"studying":1,"industrial":1,"production":2,"ammonia":1,"find":2,"low-yield":1,"low-efficiency":1,"process":1,"double":2,"whammy":1,"antibiotic":1,"resistance":1,"harder":1,"antibiotics":1,"natural":3,"bacteria":1,"microorganisms":1,"environment":2,"silent":1,"chemical":1,"warfare":1,"soils":1,"rivers":1,"seas":1,"right":1,"fact":2,"means":2,"discover":2,"resistant":1,"dell":1,"sales":2,"reorganization":1,"ai-focused":1,"unit":1,"cutting":1,"teams":2,"course":1,"shakespeare":1,"neither":1,"mastery":1,"words":1,"humanity":2,"bedrock":1,"upon":1,"foundation":1,"literature":1,"comfortably":1,"perched":1,"importantly":1,"something":4,"fully":1,"comprehend":1,"though":2,"explain":2,"comprehension":1,"particular":1,"join":1,"friend":2,"ll":1,"rssopinion":1,"nea":1,"boss":2,"strike":2,"lockout":1,"stall":1,"union":2,"multimillion-dollar":1,"get-out-the-vote":1,"machine":1,"npr-topics-race":2,"create":2,"emotions":1,"rebeca":1,"andrade":1,"jordan":1,"chiles":1,"mostly":1,"reasons":1,"prevailed":1,"science-news-mathematics-economics-archaeology-fossils":6,"abuse":1,"injustice":1,"breaking":3,"firestorm":1,"preliminary":1,"match":2,"algerian":1,"angela":1,"carini":1,"punch":1,"resulted":1,"withdrawing":1,"seconds":1,"worried":3,"collapse":2,"certain":1,"corners":1,"article":3,"faith":1,"training":5,"larger":1,"amounts":1,"better":5,"point":1,"outperforming":1,"humans":1,"tasks":1,"revives":2,"lawsuit":4,"alleged":2,"manipulated":2,"believing":1,"artificial-intelligence":1,"helping":2,"renewed":1,"start-up":1,"profits":1,"commercial":2,"knee":1,"rams":2,"puka":1,"nacua":1,"wide":1,"receiver":1,"joint":2,"chargers":1,"far":2,"return":2,"fuel":1,"week-long":1,"iltacon":1,"spills":1,"beans":1,"wonder":2,"consumed":1,"convene":1,"nashville":1,"organizers":1,"serve":1,"gallons":1,"caffeinated":1,"brew":1,"attendance":1,"youtuber":1,"class":2,"scrape":1,"creators":2,"transcripts":1,"collecting":2,"profited":1,"complaint":1,"alleges":2,"americans":1,"choosing":1,"selfishness":1,"experts":6,"adults":1,"number":4,"obstacles":1,"artist":2,"alone":1,"romantic":1,"notion":1,"solitary":1,"genius":1,"collaboration":1,"solestial":1,"meyer":1,"burger":1,"forge":1,"expand":1,"cell":1,"dramatically":2,"silicon":1,"tempe":1,"arizona-based":1,"radiation-resistant":1,"cells":1,"the-marginalian":1,"themarginalian-org":1,"clearly":1,"love":1,"purely":1,"iris":1,"murdoch":2,"angst":1,"knowing":1,"hardest":1,"clock":1,"break":2,"lurch":1,"loving":1,"understanding":2,"name":1,"intentional":1,"deception":1,"surprise":1,"shock":1,"optimization":1,"inverse":1,"solving":1,"computer-generated":1,"holography":1,"cgh":1,"provides":3,"approach":3,"digitally":1,"modulate":1,"given":2,"wavefront":1,"partly":1,"inherited":1,"optical":1,"progress":2,"become":3,"emerging":1,"focus":1,"academia":1,"gifted":1,"education":1,"learners":1,"exhibit":1,"exceptional":1,"versatility":1,"creativity":1,"using":5,"resources":1,"explore":1,"ideas":1,"unconventional":1,"michelle":1,"recalls":1,"students":3,"-year-old":1,"mika":1,"distraught":1,"clutching":1,"project":1,"beautifully":1,"imaginative":1,"intricately":1,"colored":1,"pencil":1,"drawing":1,"alien-inspired":1,"botanical":1,"garden":1,"nasa":4,"delay":2,"crew":2,"due":2,"starliner":2,"primary":1,"reason":2,"rather":2,"surprising":1,"transparency":1,"businesses":1,"dominated":1,"one-time":1,"transactions":1,"relevant":1,"question":1,"owners":2,"repeat":1,"customers":2,"estate":1,"agents":1,"transparent":1,"odds":2,"sale":1,"benefits":4,"buyer":1,"seller":1,"examines":1,"factors":1,"effective":1,"advocacy":1,"workplace":2,"fighting":2,"root":1,"evidenced":1,"pay":1,"equity":1,"diversity":1,"inclusion":1,"similar":1,"initiatives":1,"ensure":1,"advocating":1,"business-the-guardian":1,"alleging":3,"deceit":1,"shakespearean":2,"proportions":1,"partners":1,"co-founding":1,"companyelon":1,"resurrecting":1,"battle":2,"af":1,"police":1,"opening":1,"ceremony":2,"jolly":1,"barrage":1,"harassment":1,"interpreted":1,"section":1,"mocking":1,"biblical":1,"scene":3,"space-news-space-astronomy-space-exploration":2,"astronomers":1,"uncover":1,"planets":1,"discovered":1,"red":1,"dwarf":1,"produce":2,"stellar":2,"flares":1,"carry":1,"far-ultraviolet":1,"far-uv":1,"radiation":1,"levels":1,"believed":1,"absolutely":1,"extraordinary":1,"remembering":1,"robin":1,"williams":1,"-year":1,"anniversary":1,"untimely":1,"passing":1,"costars":1,"collaborators":1,"friends":1,"billy":1,"crystal":1,"matt":1,"damon":1,"ben":1,"stiller":1,"al":1,"pacino":1,"sally":1,"jeff":1,"bridges":1,"julianne":1,"moore":1,"favorite":1,"memories":2,"kind":2,"playful":1,"uniquely":1,"intelligent":1,"bitcoin":1,"cryptocurrencies":1,"plunge":1,"mirroring":1,"precipitous":1,"falls":1,"digital":2,"currencies":1,"remain":1,"vulnerable":1,"broader":2,"forces":1,"affect":1,"risky":1,"investments":2,"phishing":1,"emails":1,"priority":1,"messages":1,"tumble":1,"reports":1,"maker":3,"pared":1,"us-news-the-guardian":3,"roy":1,"cooper":1,"dropped":1,"vp":1,"bid":1,"extremist":2,"lieutenant":1,"quirk":1,"north":1,"carolina":1,"republican":2,"tried":1,"seize":1,"democratic":2,"absenceharris":1,"pick":1,"philadelphia":1,"rally":3,"reportthe":1,"withdrew":1,"consideration":1,"vice-presidential":1,"feared":1,"extre":1,"erupted":1,"girls":1,"murders":1,"quicktake":1,"suffered":4,"outbreak":1,"rioting":1,"decade":1,"sparked":2,"initially":1,"northwest":1,"morphing":1,"anti-immigrant":1,"racist":1,"towns":1,"rioters":1,"force":2,"underscores":1,"h":1,"back-to-back":1,"conferences":1,"ball":1,"forward":1,"chicago":1,"attended":1,"implementing":1,"practical":1,"applications":1,"needed":3,"startups":2,"unicorns":1,"xai":1,"valued":1,"staggering":1,"call":1,"falsely":1,"ballot":1,"passed":2,"several":3,"gave":2,"appearing":1,"cer":1,"forecasting":1,"equips":1,"east":1,"traditional":1,"methods":1,"accuracy":1,"predictions":1,"minimal":1,"claps":1,"rejected":1,"offers":3,"creating":2,"misleading":1,"narrative":2,"cross-community":1,"interactions":1,"fringe":1,"increase":1,"communities":2,"epfl":1,"non-members":1,"mainstream":1,"attracts":1,"groups":3,"suggested":1,"curtail":1,"cambria":1,"godfather":1,"operations":3,"epiq":1,"advisory":1,"names":2,"innovation":1,"hard":2,"think":1,"bigger":2,"described":1,"trailblazing":1,"coo":1,"head":1,"fortune":2,"archer":1,"daniels":1,"midland":1,"feed-artificial-intelligence-latest":1,"zoom":1,"ai-driven":1,"docs":1,"video-conferencing":1,"crowded":1,"sorry":1,"empathy":1,"contest":1,"grand-prize":1,"winner":2,"laurence":1,"pevsner":1,"investigates":1,"sick":1,"everyone":2,"apologizing":1,"apology":1,"room":2,"forgiveness":1,"grace":1,"culture":3,"atms":1,"weren":2,"letting":1,"de":1,"technology-the-guardian":3,"sound":1,"clashes":2,"thrilling":1,"reggae":1,"tradition":1,"ruin":1,"fake":3,"vocals":1,"donald":1,"sending":1,"shockwaves":1,"historic":2,"montego":1,"bay":1,"clash":1,"performers":1,"debate":3,"futurefour":1,"attempt":2,"voice":1,"booms":1,"speakers":1,"jamaica":1,"assassin":1,"holes":1,"detect":3,"astrophysicists":1,"participation":1,"zurich":1,"proposes":1,"novel":1,"method":2,"pairs":1,"biggest":2,"centers":2,"galaxies":1,"analyzing":1,"gravitational":1,"waves":1,"generated":1,"binaries":1,"nearby":1,"journal":3,"astronomy":1,"warning":1,"signs":2,"recession":1,"bad":2,"cracks":1,"labour":1,"biden":2,"disaster":1,"economybusiness":1,"live":1,"updatesdonald":1,"voters":2,"consistent":1,"seeks":1,"second":1,"term":1,"economy":1,"joe":1,"supported":1,"trum":1,"mit-technology-review":3,"technologyreview-com":3,"download":1,"addictive":2,"hydrogen":2,"bikes":2,"limitations":2,"edition":1,"weekday":1,"newsletter":1,"daily":1,"dose":1,"mahari":1,"jd-phd":1,"candidate":2,"mit":1,"lab":2,"harvard":1,"school":2,"computational":1,"pataranutaporn":1,"gatsby":2,"broadway":1,"turning":2,"influencers":2,"reach":2,"younger":1,"diverse":1,"audiences":1,"looking":3,"instagram":1,"innovative":1,"synthesizing":1,"common":3,"plastics":1,"remote":1,"spark":1,"discharge":1,"tsukuba":1,"technique":1,"commonly":1,"polymers":1,"polystyrene":1,"radical":1,"polymerization":1,"coil":1,"high-voltage":1,"high-frequency":1,"generator":2,"reaction":1,"proceed":1,"requiring":1,"conventional":2,"catalysts":1,"initiators":1,"electric":1,"plummet":1,"germany":1,"slump":1,"electric-vehicle":1,"slumped":1,"extending":1,"broad":1,"incentives":1,"late":2,"undermining":1,"automakers":1,"gear-latest":2,"dacia":1,"spring":1,"excellent":1,"value":2,"urban":1,"super-fun":1,"likable":1,"all-electric":1,"runabout":1,"packed":1,"rock-bottom":1,"aside":1,"amazing":1,"proves":1,"stateside":1,"makers":1,"pharmacists":1,"weight-loss":1,"jabs":1,"representing":1,"explosion":1,"unlicensed":1,"medication":1,"shortage":1,"ozempic":1,"halts":1,"abruptly":1,"sinks":1,"turned":1,"risk-averse":1,"drops":1,"features-ars-technica":1,"path":1,"precision":1,"drugs":1,"table":1,"trials":1,"bedside":1,"scientist":1,"dining":1,"tissue-agnostic":1,"combo":1,"mark":1,"zuckerberg":1,"laughing":1,"zuck":1,"memes":2,"meta":3,"comfortable":1,"reliance":1,"funding":2,"round":2,"cisco":2,"samsung":3,"invested":1,"lands":1,"challenge":1,"run":2,"models":2,"faster":2,"processors":1,"led":1,"blackrock":1,"neuberger":1,"berman":1,"type":1,"ventures":1,"kddi":1,"catalyst":1,"participated":1,"tranche":1,"brings":1,"total":1,"the-walrus":1,"thewalrus-ca":1,"interference":1,"hold":3,"ottawa":1,"looks":4,"away":3,"controlling":1,"canadians":1,"afar":1,"vox":1,"vox-com":1,"practically":1,"impossible":1,"ethically":1,"sigal":1,"samuel":1,"ethical":1,"safe":1,"chatgpt":3,"founders":2,"quit":1,"differences":1,"spin":2,"ingredients":1,"buttered":1,"pasta":1,"save":1,"dinner":1,"hint":1,"dried":1,"shrimp":1,"chef":1,"diep":1,"tran":1,"delicious":1,"last-minute":1,"stocking":1,"pantry":1,"sake":1,"difference":1,"environmentally":1,"irresponsible":2,"thirsty":1,"l":1,"lawn":1,"plastic":1,"banning":1,"covering":1,"expensive":1,"unhealthy":1,"terrible":1,"wsj-com-markets":2,"green-energy":1,"flops":1,"revive":1,"bets":2,"gas":1,"energy":2,"giants":2,"shell":1,"bp":1,"sticking":1,"core":1,"clean-energy":1,"america":2,"laws":2,"neil":1,"gorsuch":1,"nation":1,"changed":1,"contrary":1,"congress":3,"racked":1,"inability":1,"pass":1,"bills":1,"simply":1,"exploded":1,"ago":2,"statutes":1,"fit":1,"single":2,"volume":1,"thrive":1,"capital":1,"raises":1,"venture":1,"funds":1,"heels":1,"fundraising":1,"reflects":1,"optimism":1,"sector":2,"reimagining":1,"spirited":1,"puppets":1,"hayao":1,"miyazaki":1,"classic":2,"film":1,"onstage":1,"brought":1,"elements":3,"-foot-long":1,"dragon":1,"happen":1,"thing":1,"creation":1,"rarely":1,"solo":1,"outsize":1,"projects":1,"ranging":1,"performance":1,"piece":1,"pizza":1,"adventures":1,"beneath":1,"travel":1,"goat":1,"hikes":1,"snorkeling":1,"done":1,"concerns":2,"overemphasize":1,"harms":1,"arising":1,"subversion":1,"seduction":1,"worries":3,"imagine":1,"doomsday":1,"scenarios":1,"escape":1,"nightmares":1,"nearer-term":1,"seriously":2,"jeopardize":1,"discourse":1,"cement":1,"biases":1,"loan":1,"decisions":2,"judging":1,"hiring":1,"struggling":1,"gain":1,"traction":1,"ride":1,"bike":1,"water-bottle-size":1,"least":3,"hydrogen-powered":1,"residents":1,"artificial-lawyer":2,"artificiallawyer-com":2,"stanford":1,"codex":1,"flatiron":1,"genai":2,"simulator":1,"main":1,"supporting":1,"deb":1,"haaland":1,"push":1,"indigenous":1,"disappoints":1,"native":1,"member":1,"branch":1,"persistent":1,"violent":2,"cabinet":1,"secretary":2,"saying":3,"pinsent":1,"masons":1,"deploys":1,"deploy":1,"automation":1,"created":1,"london-based":1,"labs":1,"galaxy":1,"z":1,"fold":1,"folder":1,"minor":1,"upgrade":1,"lighter":1,"screens":1,"fancy":1,"welcome":1,"feel":2,"iterative":1,"pricesamsung":1,"hi-tech":1,"folding":1,"phone":1,"oneplus":1,"others":2,"frame":1,"available":1,"declaring":1,"korean":1,"managers":1,"influential":1,"work-life":1,"balance":1,"hours":1,"changer":1,"detects":1,"hidden":1,"pilot":1,"identifies":1,"dead":1,"grow":1,"curfew":1,"reinstated":1,"expanded":1,"student":1,"crackdown":2,"plunged":1,"particularly":2,"phase":1,"bloomberg-wealth":1,"spying":1,"allegations":1,"mogul":1,"lobbying":1,"landed":1,"middle":1,"dramatic":1,"tycoon":1,"buy":2,"cheez-it":1,"eggo":1,"kellanova":1,"largest":3,"together":1,"imminently":1,"info":1,"urging":1,"immediately":1,"implement":1,"spread":1,"roaring":1,"protesters":1,"ouster":1,"demonstrations":1,"seemed":1,"bangladeshis":1,"angrier":1,"broadened":1,"movement":2,"scope":1,"cygnus":1,"spacecraft":2,"glitches":1,"launched":3,"northrop":1,"grumman":1,"cargo":1,"station":2,"problems":1,"delayed":2,"maneuvers":1,"golf":1,"hunting":1,"crop":1,"experiences":1,"covid-":2,"outdoor":1,"consumers":1,"israeli":1,"gaza":1,"shelter":1,"kills":1,"airstrike":1,"palestinian":1,"local":1,"outlets":1,"hamas":1,"command":1,"smugglers":1,"front":1,"skirting":1,"getting":2,"microchips":1,"advance":1,"military":1,"arms":1,"race":3,"asking":2,"giving":1,"evaluations":1,"significant":1,"accountability":1,"tests":1,"benchmarks":1,"analyze":1,"output":1,"videos":1,"increased":1,"tendency":1,"generally":1,"behave":1,"unpredictably":1,"organiz":1,"netanyahu":1,"evil":1,"axis":1,"suspended":1,"flights":1,"pending":1,"expected":1,"retaliation":1,"lebanese":1,"proxy":1,"hezbollah":1,"cancelled":1,"rain-soaked":1,"grounds":2,"green":1,"rainy":1,"winter":1,"parts":1,"wreaking":1,"havoc":1,"sporting":1,"competitions":1,"mums":1,"frustrating":1,"matches":1,"sessions":1,"canceled":1,"waterlogged":1,"deliberate":1,"releasing":1,"potentially":1,"cheat":1,"write":1,"assignments":1,"debating":1,"actually":1,"statement":1,"provided":1,"researching":1,"watermarking":1,"friendship":1,"gates":1,"warren":1,"buffett":1,"reached":1,"tensions":1,"billionaires":1,"substantive":1,"stylistic":1,"roiled":1,"philanthropy":1,"reshapes":1,"competition":1,"organizational":1,"closely":1,"monitor":1,"spearheaded":1,"gen":1,"chance":1,"saltzman":1,"aim":1,"amplify":1,"voices":3,"briefing":1,"swing-state":1,"economies":1,"biden-harris":1,"administration":1,"cynical":1,"far-right":1,"stabbing":1,"northwestern":1,"array":1,"anti-muslim":1,"fascist":1,"stoked":1,"npr-topics-science":1,"wyoming":1,"land":1,"grand":1,"teton":1,"park":1,"developers":1,"kelly":1,"parcel":1,"pristine":1,"bargaining":1,"loyal":1,"guilty":1,"bmi":1,"cards":1,"idea":2,"amanda":1,"salazar":1,"originally":1,"undark":1,"lexie":1,"manion":1,"junior":1,"jersey":1,"experience":1,"regularly":1,"hassled":1,"nurse":1,"recalled":1,"file":1,"schools":1,"acros":1,"fast-food":1,"targeting":1,"thrifty":1,"low-price":1,"health":2,"plaschke":1,"lincoln":1,"riley":1,"coach":1,"usc":1,"needs":1,"answer":1,"seasons":1,"imitating":1,"clay":1,"helton":1,"morph":1,"closer":1,"pete":1,"carroll":1,"science-latest":2,"aquariids":1,"stunning":1,"shower":1,"northern":1,"hemisphere":1,"beautiful":1,"displays":1,"meteors":1,"enjoy":2,"cheating":1,"hasn":2,"released":1,"mired":1,"internal":1,"written":1,"nyt-style":2,"campaigns":1,"kill":2,"political":2,"novelty":1,"essential":1,"out-memeing":1,"opponent":1,"world-nation":1,"bought":1,"fishing":1,"march":1,"squid":1,"coast":2,"patagonia":1,"rusty":1,"vessel":1,"lu":1,"yan":1,"yuan":1,"yu":1,"illegally":2,"miles":1,"waters":2,"repeatedly":1,"attacks":1,"georgia":1,"gov":1,"kemp":1,"atlanta":1,"criticized":1,"declining":1,"overturn":1,"results":1,"lost":1,"carlini-com":1,"url":1,"nicholas":1,"carlini":1,"how-i-use-ai":1,"html":1,"ycombinator":1,"item":1,"id":1,"points":1,"cal":1,"lutheran":1,"woodland":1,"hills":1,"facility":1,"briefly":1,"eventually":1,"challenging":1,"shuffle":1,"men":2,"moment":2,"lacking":1,"tense":1,"rivalries":1,"anticipated":1,"-meter":1,"indian":1,"astronauts":1,"start":2,"iss":1,"mission":1,"johnson":1,"astronaut":1,"photo":1,"circle":1,"alan":1,"jack":1,"guez":1,"afp":1,"gettythe":1,"judo":1,"mixed-team":1,"france":1,"tie":1,"regulation":1,"bouts":1,"random":1,"wheel":1,"decide":1,"gender":1,"tie-breaker":1,"teddy":1,"riner":1,"faced":1,"tats":1,"johns":1,"forensics":1,"bound":1,"killer":1,"choreography":1,"prisoners":1,"robes":1,"slippers":1,"unaware":1,"fates":1,"forensic":1,"identifications":1,"jumps":1,"jump":1,"presents":1,"competitors":1,"abundance":1,"fill":1,"nyt-michelle-goldberg":1,"childbirth":1,"happiness":1,"crucial":1,"parents":2,"nyt-charles-m-blow":1,"queer":1,"born":1,"sexual":1,"orientation":1,"doesn":1,"genetics":1,"nyt-david-brooks":1,"outweigh":2,"machines":1,"elder":1,"stepfamily":1,"assist":1,"stepparent":1,"studies":1,"step":1,"gap":1,"spending":3,"surge":1,"amazon":2,"placing":1,"ever-bigger":1,"boom":2,"execs":1,"saturday":2,"citations":1,"warp":1,"drive":1,"disasters":1,"prospects":1,"generations":1,"large":1,"covid":1,"vaccination":1,"reported":1,"implications":2,"containment":1,"interested":1,"theoretical":1,"space-borne":1,"cardiovascular":1,"extremely":1,"thorough":1,"analysis":1,"basically":1,"entire":1,"societ":1,"evaluating":1,"boeing":1,"eight":1,"possible":2,"answers":1,"technical":1,"possibility":1,"lending":1,"hand":1,"quiet":1,"donors":1,"publicly":1,"pressured":1,"replace":2,"f":1,"c":1,"lina":1,"khan":1,"backfire":1,"memo":1,"clean":1,"pollutant":2,"digs":1,"congressional":1,"archives":1,"settle":1,"rs-recommends-rolling-stone":1,"pro":1,"football":1,"hall":1,"fame":1,"seven":2,"inducted":1,"stream":1,"cable":1,"gender-swapped":1,"revival":1,"dazzles":1,"capturing":1,"spirit":1,"sondheim":1,"marianne":1,"elliott":1,"tony-winning":1,"stephen":1,"george":1,"furth":1,"pantages":1,"letters":1,"editor":1,"ecologist":1,"deep-sea":1,"mining":2,"totally":1,"ecosystems":1,"shallower":1,"oceanic":1,"deeper":1,"mistake":1,"musicals":1,"poke":1,"seamy":1,"underbelly":1,"dream":1,"kristin":1,"chenoweth":1,"queen":1,"versailles":1,"boston":1,"musical":1,"cambridge":1,"myrtle":1,"rise":1,"extravagant":1,"pre-wedding":1,"events":1,"celebrations":1,"hosted":1,"ambani":1,"family":2,"thrusts":1,"trend":1,"wedding":1,"professionals":1,"couples":1,"kick":1,"nuptials":1,"meaningless":1,"npr-topics-health":1,"require":2,"limit":1,"exposure":1,"content":1,"legislated":1,"smartphones":1,"fomented":1,"tough":2,"doubts":1,"fallen":1,"breakthroughs":1,"reassure":1,"investorsit":1,"magnificent":1,"dominant":1,"buoyed":1,"investor":1,"excitement":1,"reporters":1,"jim":1,"rutenberg":1,"jonathan":1,"mahler":1,"reflect":1,"revelation":1,"clandestine":1,"dirty":1,"gospel":1,"spends":1,"sundays":1,"reverend":1,"vince":1,"anderson":1,"mainstay":1,"brooklyn":1,"fills":1,"worship":1,"languages":2,"mets":1,"hour":1,"watering":1,"houseplants":1,"venezuela":1,"blinken":1,"congratulates":1,"gonz":1,"lez":1,"winning":1,"countries":1,"maduro":1,"concern":1,"opposition":1,"venezuelan":1,"accuses":1,"washington":1,"leading":1,"coup":1,"antony":1,"congratulated":1,"edmundo":1,"receiving":1,"votes":3,"recognise":1,"aerosmith":1,"retires":1,"touring":1,"steven":1,"tyler":1,"vocal":1,"band":1,"frontman":1,"farewell":1,"tour":1,"postponed":1,"retirement":1,"friday":2,"judi":1,"dench":1,"awkwafina":1,"incorporate":1,"metaai":1,"effort":2,"awkward":1,"harold":1,"crayon":1,"toddler":1,"childlike":1,"directed":1,"carlos":1,"saldanha":1,"adaptation":1,"book":1,"odd":1,"hanks":1,"magic":1,"never":1,"materializes":1,"regulators":1,"impose":1,"pollution":1,"limits":1,"region":1,"rail":1,"yards":1,"district":1,"yard":1,"operators":1,"bnsf":1,"railway":1,"pacific":1,"railroad":1,"aggressively":1,"reduce":1,"lung-irritating":1,"nitrogen-oxide":1,"yvonne":1,"furneaux":1,"cosmopolitan":1,"actress":1,"la":1,"dolce":1,"vita":1,"dies":1,"oxford":1,"graduate":1,"spoke":1,"career":1,"siren":1,"finding":1,"critical":1,"acclaim":1,"masterworks":1,"federico":1,"fellini":1,"roman":1,"polanski":1,"keith":1,"warming":1,"geoengineering":1,"spray":1,"sky":1,"block":1,"sunlight":1,"danger":1,"retaining":1,"select":1,"artemis":1,"lunar":1,"rover":1,"reconsidering":1,"setback":1,"program":1,"procuring":1,"key":1,"exploration":1,"official":1,"rushing":1,"seabed":1,"regulating":1,"elected":2,"n":1,"too-close":1,"ties":1,"massive-scale":1,"invasions":1,"mode":1,"violates":1,"coppa":1,"saw":1,"insane":1,"democracy":1,"launches":1,"fifth":1,"synspective":1,"radar":1,"imaging":1,"japanese":1,"payoff":1,"violated":1,"child":2,"chinese-owned":1,"social-media":1,"escalating":1,"challenges":1,"self-healing":1,"pole":1,"vault":1,"vaulting":1,"poles":1,"drastically":1,"improved":1,"reliable":1,"healable":1,"surfing":1,"cycling":1,"improving":1,"flavors":1,"feline":1,"taste-testers":1,"cats":1,"notoriously":1,"picky":1,"eaters":1,"foods":1,"scientifically":1,"proven":1,"publishing":1,"acs":1,"agricultural":1,"chemistry":1,"panel":1,"identify":1,"favored":1,"flavor":1,"compounds":1,"chicken-liver-based":1,"sprays":1,"en":1,"dept":1,"permission":1,"news-and-politics-slate-magazine":1,"slate-com":2,"rest":1,"elections":1,"presidency":1,"two-year":1,"pulls":1,"olympic-themed":1,"failing":1,"stick":1,"landing":1,"misstep":1,"chevron":1,"snub":1,"oil":1,"extensive":1,"policies":1,"shady":1,"culture-slate-magazine":1,"really":1,"wearing":1,"cute":1,"french":1,"scarves":1,"neck":1,"headband":1,"adorning":1,"ponytail":1,"everywhere":1,"flux":1,"image":1,"eerily":1,"hands":1,"open-weights":1,"heir":1,"apparent":1,"stable":1,"diffusion":1},"n_docs":273}
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
    //localStorage.setItem("regex_always", "Techdirt|Policy – Ars Technica|lawnext.com|artificiallawye\\.com|sarahglassmeyer\\.com|sadlynothavocdinosaur\\.com|nonprofittechy\\.com|oneusefulthing\\.org|ailawlibrarians\\.com|ailawlibrarians\\.com");
    //localStorage.setItem("regex_always_op", "i");
}

if (!localStorage.getItem("backstop")) {
    //localStorage.setItem("regex_never", "Daily Deal:");
    //localStorage.setItem("regex_never_op", "i");
}

var article_test;
var upTFIDF_tmp;
var dfreq_tmp = {};

