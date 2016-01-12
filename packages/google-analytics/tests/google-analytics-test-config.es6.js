VIEW_ID = '123';
STORED_DIMENSIONS = {
    acquisition: ["campaign", "sourceMedium", "keyword", "channelGrouping"],
    journey: [ "landingPagePath", "exitPagePath"]
};
STORED_METRICS = {
    bookings: ["pageviews"]
};
STORED_SORTS = {
    profileviews: [{sort: "pageviews", direction: "desc"}]
};
STORED_FILTERS = {
    bookings: [{dimension: "dimension1", value: 123}]
};
DIMENSION_TYPES = [];
_.each(STORED_DIMENSIONS, function (e, i) {
    DIMENSION_TYPES.push(i);
});
METRIC_TYPES = [];
_.each(STORED_METRICS, function (e, i) {
    METRIC_TYPES.push(i);
});
SORT_TYPES = [];
_.each(STORED_SORTS, function (e, i) {
    SORT_TYPES.push(i);
});
FILTER_TYPES = [];
_.each(STORED_FILTERS, function (e, i) {
    FILTER_TYPES.push(i);
});
PRIVATE_KEY = "123_PRIVATE_KEY";
SERVICE_ACCOUNT_EMAIL = "service_account@hirespace.google.com";
SERVICE_ACCOUNT_PERMISSIONS = ['https://www.googleapis.com/auth/analytics.readonly'];
DEFAULT_METRIC = "ga:pageviews";
DEFAULT_LIMIT = 100;
DEFAULT_START_INDEX = 1;
TEST_BOOKING = {_id: "228TpYxFn5kjDR5xb", googleAnalytics: {userCookieIdentifier: "388061754"}, source: "site"};
DIMENSION_TYPE = "acquisition";

GOOGLE_ANALYTICS_RESPONSE = {"kind":"analytics#gaData","id":"https://www.googleapis.com/analytics/v3/data/ga?ids=ga:53317360&dimensions=ga:campaign,ga:sourceMedium,ga:keyword,ga:channelGrouping&metrics=ga:pageviews&filters=ga:dimension1%3D%3D388061754&start-date=2015-12-26&end-date=2015-12-26&start-index=1&max-results=20","query":{"start-date":"2015-12-26","end-date":"2015-12-26","ids":"ga:53317360","dimensions":"ga:campaign,ga:sourceMedium,ga:keyword,ga:channelGrouping","metrics":["ga:pageviews"],"filters":"ga:dimension1==388061754","start-index":1,"max-results":20},"itemsPerPage":20,"totalResults":2,"selfLink":"https://www.googleapis.com/analytics/v3/data/ga?ids=ga:53317360&dimensions=ga:campaign,ga:sourceMedium,ga:keyword,ga:channelGrouping&metrics=ga:pageviews&filters=ga:dimension1%3D%3D388061754&start-date=2015-12-26&end-date=2015-12-26&start-index=1&max-results=20","profileInfo":{"profileId":"53317360","accountId":"27328950","webPropertyId":"UA-27328950-1","internalWebPropertyId":"52542318","profileName":"Hire Space full domain - Null with no filters","tableId":"ga:53317360"},"containsSampledData":false,"columnHeaders":[{"name":"ga:campaign","columnType":"DIMENSION","dataType":"STRING"},{"name":"ga:sourceMedium","columnType":"DIMENSION","dataType":"STRING"},{"name":"ga:keyword","columnType":"DIMENSION","dataType":"STRING"},{"name":"ga:channelGrouping","columnType":"DIMENSION","dataType":"STRING"},{"name":"ga:pageviews","columnType":"METRIC","dataType":"INTEGER"}],"totalsForAllResults":{"ga:pageviews":"23"},"rows":[["(not set)","google / organic","(not provided)","Organic Search","19"],["(not set)","londonreview.hirespace.com / referral","(not set)","Referral","4"]]};
PROCESSED_DATA = {campaign: "(not set)", source: "google", medium: "organic", channelGrouping: "Organic Search"};

GOOGLE_ANALYTICS_PAGEVIEW_RESPONSE = {"kind":"analytics#gaData","id":"https://www.googleapis.com/analytics/v3/data/ga?ids=ga:53317360&dimensions=ga:pagePath&metrics=ga:pageviews,ga:uniquePageviews,ga:timeOnPage&sort=-ga:pageviews&start-date=2015-09-29&end-date=2015-12-28&start-index=1&max-results=100","query":{"start-date":"2015-09-29","end-date":"2015-12-28","ids":"ga:53317360","dimensions":"ga:pagePath","metrics":["ga:pageviews","ga:uniquePageviews","ga:timeOnPage"],"sort":["-ga:pageviews"],"start-index":1,"max-results":100},"itemsPerPage":100,"totalResults":52260,"selfLink":"https://www.googleapis.com/analytics/v3/data/ga?ids=ga:53317360&dimensions=ga:pagePath&metrics=ga:pageviews,ga:uniquePageviews,ga:timeOnPage&sort=-ga:pageviews&start-date=2015-09-29&end-date=2015-12-28&start-index=1&max-results=100","nextLink":"https://www.googleapis.com/analytics/v3/data/ga?ids=ga:53317360&dimensions=ga:pagePath&metrics=ga:pageviews,ga:uniquePageviews,ga:timeOnPage&sort=-ga:pageviews&start-date=2015-09-29&end-date=2015-12-28&start-index=101&max-results=100","profileInfo":{"profileId":"53317360","accountId":"27328950","webPropertyId":"UA-27328950-1","internalWebPropertyId":"52542318","profileName":"Hire Space full domain - Null with no filters","tableId":"ga:53317360"},"containsSampledData":false,"columnHeaders":[{"name":"ga:pagePath","columnType":"DIMENSION","dataType":"STRING"},{"name":"ga:pageviews","columnType":"METRIC","dataType":"INTEGER"},{"name":"ga:uniquePageviews","columnType":"METRIC","dataType":"INTEGER"},{"name":"ga:timeOnPage","columnType":"METRIC","dataType":"TIME"}],"totalsForAllResults":{"ga:pageviews":"1021364","ga:uniquePageviews":"775635","ga:timeOnPage":"6.4562748E7"},"rows":[["/","77254","51494","3262440.0"],["/Top/London/Unusual-Event-Venues-London","13216","9974","591118.0"],["/Top/London/Wedding-Reception-Venues-London","11356","7558","595844.0"],["/Top/London/london-party-venues","9227","6415","387343.0"],["/Enquiry","9085","4871","980903.0"],["/blog/13-irresistible-canapes/","8553","6780","234066.0"],["/Top/London/Affordable-Wedding-Venues-London","8539","5731","401162.0"],["/Top/London","8142","5200","191935.0"],["/Top/London/Meeting-Rooms-in-London","7426","5500","395715.0"],["/Top/London/Private-Dining-Rooms-London","7191","5606","249893.0"],["/Top/London/Community-Centres-London","6485","3896","348315.0"],["/Home/SearchMap?searchTerm=&city=1|51.5286416|-0.1015987","6190","4987","613907.0"],["/Top/London/Pubs-Bars","5341","3854","295101.0"],["/Top/Manchester","5024","3086","175623.0"],["/Home/SearchMap?SearchTerm=Party&City=1|51.5286416|-0.1015987","4857","2745","427538.0"],["/Top/Manchester/Party-Venues-in-Manchester","4666","3053","232099.0"],["/Home/SearchMap?SearchTerm=Unusual Event&City=1|51.5286416|-0.1015987","4627","2724","362566.0"],["/Enquiry/Confirm","4428","2736","276282.0"],["/Top/London/Conference-Venues-London","4352","3136","232246.0"],["/Top/London/London-Party-Venues","4217","3180","253268.0"],["/Top/London/Christmas-Party-Venues-London","4101","3198","159842.0"],["/Home/SearchMap?SearchTerm=Wedding Reception&City=1|51.5286416|-0.1015987","3610","1867","342141.0"],["/Top/London/Cinema-Hire-London","3524","2284","164325.0"],["/Top/Manchester/Unusual-Event-Venues-in-Manchester","3492","2208","180274.0"],["/blog/13-hanging-centrepieces/","3261","2983","35371.0"],["/Top/London/Venues-for-Hire-East-London","3213","2386","206753.0"],["/Account/Login?ReturnUrl=/","3175","2807","93022.0"],["/Top/London/Gallery-for-Hire-London","3100","1932","182297.0"],["/Top/London/Minimum-Spend-Venues","3046","2247","154171.0"],["/Top/London/Theatre-Hire-London","3021","1728","157947.0"],["/Top/Birmingham","2834","1721","78032.0"],["/Spaces/London/7190/Asylum/The-Chapel/Weddings","2809","2338","159806.0"],["/Jobs","2772","2086","119464.0"],["/Top/London/Dry-Hire-Venues-London","2752","2011","128357.0"],["/Top/London/Event-Venues-London","2590","1940","137046.0"],["/Home/SearchMap?city=1|51.5286416|-0.1015987&cityName=London","2541","1786","272124.0"],["/Top/London/Party-Venues-London","2504","1772","107635.0"],["/Why-List-Your-Venue","2476","1953","145414.0"],["/Top/London/Cheap-Meeting-Rooms-London","2336","1485","143903.0"],["/blog/where-to-propose-our-top-5-venues/","2308","1947","86257.0"],["/Home/SearchMap?SearchTerm=Affordable Wedding&City=1|51.5286416|-0.1015987","2306","1660","145227.0"],["/Spaces/London/9567/Studio-Spaces-E2/The-Loft/Events","2195","1821","170373.0"],["/Admin","2161","876","448009.0"],["/Top/London/Warehouse-Venues-London","2036","1453","126250.0"],["/Top/London/Club-Hire-London","2012","1171","110762.0"],["/Ask-An-Expert","1925","1472","51889.0"],["/Top/London/Pop-Up-Space-London","1922","1471","96193.0"],["/Account/Login","1812","1148","60844.0"],["/Top/London/Wedding-venues-in-North-London","1799","1056","93310.0"],["/Top/London/Rooftop-Bar-London","1744","1168","94462.0"],["/Top/Manchester/Pubs-Bars-in-Manchester","1707","1093","83739.0"],["/Top/London/Popular-30th-Birthday-Venues-in-London","1684","1518","34456.0"],["/Home/SearchMap?longtitude=&latitude=&radius=&cityLat=&cityLng=","1589","996","60688.0"],["/Account/List","1584","1211","137770.0"],["/Top/Birmingham/Unusual-Venues-in-Birmingham","1551","950","76671.0"],["/Top/London/Yoga-Studios-London","1526","994","80888.0"],["/Home/SearchMap?SearchTerm=Pubs & Bars=&City=1|51.5286416|-0.1015987","1477","930","111899.0"],["/Home/SearchMap?SearchTerm=Party in&City=2|53.483527|-2.241561","1464","776","121561.0"],["/Home/SearchMap?SearchTerm=Community Centres&City=1|51.5286416|-0.1015987","1436","1153","110504.0"],["/Spaces/London/910/The-Gallery-on-the-Corner/Main-Gallery/Events","1430","1213","101135.0"],["/Top/London/Function-Room-Hire-London","1415","1032","84028.0"],["/blog/7-bars-with-secret-entrances/","1367","1162","42894.0"],["/Top/Manchester/Christmas-Party-Venues-Manchester","1347","1081","42232.0"],["/Spaces/London/4092/Dirty-Martini-Hanover-Square/Martini-Lounge/Events","1343","1079","99763.0"],["/Top/London/Childrens-Party-Venues-London","1339","964","58594.0"],["/Top/London/Unusual-Christmas-Party-Venues","1334","1057","65119.0"],["/Top/Liverpool/Summer-Party-Venues-Liverpool","1324","799","59603.0"],["/Top/Manchester/Wedding-Venues-in-Manchester","1288","741","59487.0"],["/Top/London/Workshop-Spaces-London","1284","1004","59918.0"],["/Spaces/London/4624/Looking-Glass-Cocktail-Club/The-Secret-Bar-Through-The-Looking-Glass/Events","1256","1085","91446.0"],["/Home/SearchMap?SearchTerm=Meeting Rooms in&City=1|51.5286416|-0.1015987","1253","831","110791.0"],["/Spaces/London/3070/Grocers-Hall/The-Livery-Hall/Events","1248","1046","74804.0"],["/Spaces/London/6347/Beaufort-House-Chelsea/Penthouse-Champagne-Bar/Events","1244","1105","82061.0"],["/Top/London/Kitchens-for-Hire-London","1219","802","55614.0"],["/Spaces/London/6664/Royal-Over-Seas-League-ROSL/The-Princess-Alexandra-Hall/Events","1217","954","113153.0"],["/Top/London/Film-Photo","1207","910","73386.0"],["/Spaces/London/106801/Vauxhall-Arches/Lightbox/Events","1202","992","83103.0"],["/Spaces/London/12156/Lumiere/Whole-Venue/Events","1187","1047","70540.0"],["/Home/SearchMap?SearchTerm=Private Dining Rooms&City=1|51.5286416|-0.1015987","1183","816","94319.0"],["/Top/London/Engagement-Party-Venues-London","1162","853","51718.0"],["/Spaces/London/10030/Pulse-Bankside-Vaults/Whole-Venue/Events","1144","974","95379.0"],["/Spaces/London/7764/Borough-Market/Market-Hall/Events","1136","1016","59578.0"],["/Top/London/Novembers-Trending-Venues","1130","1061","14222.0"],["/Top/Birmingham/Party-Venues-in-Birmingham","1101","663","45738.0"],["/blog/","1087","750","51245.0"],["/Top/Birmingham/30th-Birthday-Party-Venues-Birmingham","1071","672","51023.0"],["/Spaces/London/6168/Shoreditch-Studios/Whole-Venue/Events","1066","933","87738.0"],["/Spaces/London/64866/The-May-Fair-London/The-Penthouse/Events","1064","957","68588.0"],["/Top/London/Dance-Studios-London","1054","687","55648.0"],["/Home/SearchMap?SearchTerm=Dry Hire&City=1|51.5286416|-0.1015987","1053","613","89138.0"],["/Top/London/Asian-Wedding-Venues-London","1052","666","58777.0"],["/Top/Manchester/Private-Dining-Rooms-Manchester","1051","647","49910.0"],["/Spaces/London/6910/The-Vaults/One-Tunnel/Events","1042","861","89217.0"],["/Spaces/London/7754/Hoxton-Basement/The-Main-Basement/Events","1038","876","81278.0"],["/Top/London/Outdoor-Wedding-Venues-London","1021","647","46342.0"],["/Spaces/London/11602/The-Waldorf-Hilton-Hotel/Palm-Court/Weddings","1014","834","86006.0"],["/Top/London/Photography-Studio-Hire-London","979","754","50890.0"],["/Top/London/Private-Bar-Hire-London","977","663","56697.0"],["/Top/Birmingham/Event-Venues-in-Birmingham","961","584","40938.0"],["/Top/London/Rehearsal-Space-London","961","649","58810.0"]]};
PAGEVIEW_USAGE_VENUE_MAP = {"910":359,"3070":828,"4092":943,"4624":1051,"6168":1148,"6347":410,"6664":1356,"6910":1441,"7190":1564,"7754":1512,"7764":1841,"9567":1236,"10030":2270,"11602":2570,"12156":2662,"64866":2176,"106801":43337};
PAGEVIEW_PROCESSED_DATA = {"359":{"pv":1430,"upv":1213,"top":101135},"410":{"pv":1244,"upv":1105,"top":82061},"828":{"pv":1248,"upv":1046,"top":74804},"943":{"pv":1343,"upv":1079,"top":99763},"1051":{"pv":1256,"upv":1085,"top":91446},"1148":{"pv":1066,"upv":933,"top":87738},"1236":{"pv":2195,"upv":1821,"top":170373},"1356":{"pv":1217,"upv":954,"top":113153},"1441":{"pv":1042,"upv":861,"top":89217},"1512":{"pv":1038,"upv":876,"top":81278},"1564":{"pv":2809,"upv":2338,"top":159806},"1841":{"pv":1136,"upv":1016,"top":59578},"2176":{"pv":1064,"upv":957,"top":68588},"2270":{"pv":1144,"upv":974,"top":95379},"2570":{"pv":1014,"upv":834,"top":86006},"2662":{"pv":1187,"upv":1047,"top":70540},"43337":{"pv":1202,"upv":992,"top":83103}};