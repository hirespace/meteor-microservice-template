VIEW_ID = '53317360';
STORED_DIMENSIONS = {
    acquisition: ["campaign", "sourceMedium", "keyword", "channelGrouping"],
    adwordsOptions: ["adMatchType", "adKeywordMatchType", "adMatchedQuery", "adFormat", "adTargetingType", "adDisplayUrl", "adDestinationUrl"],
    adwordsTracking: ["adGroup", "adSlot", "adwordsCustomerID", "adwordsCampaignID", "adwordsAdGroupID", "adwordsCreativeID", "adwordsCriteriaID"],
    system: ["browser", "browserVersion", "deviceCategory", "screenResolution"],
    mobile: ["mobileDeviceBranding", "mobileDeviceModel", "mobileDeviceInfo"],
    journey: ["sessionDurationBucket", "landingPagePath", "secondPagePath", "exitPagePath", "pageDepth"],
    profileviews: ["pagePath"]
};
STORED_METRICS = {
    bookings: ["pageviews"],
    profileviews: ["pageviews", "uniquePageviews", "timeOnPage"]
};
STORED_SORTS = {
    profileviews: [{sort: "pageviews", direction: "desc"}]
};
STORED_FILTERS = {
};

DIMENSION_TYPES = _.map(STORED_DIMENSIONS, (dimensions, dimensiontype) => {return dimensiontype});
METRIC_TYPES = _.map(STORED_METRICS, (metrics, metrictype) => {return metrictype});
SORT_TYPES = _.map(STORED_SORTS, (sorts, sorttype) => {return sorttype});
FILTER_TYPES = _.map(STORED_FILTERS, (filters, filtertype) => {return filtertype});

PRIVATE_KEY = String(Assets.getText('private/service-account-private-key.txt'));
SERVICE_ACCOUNT_EMAIL = String(Assets.getText('private/service-account-email.txt'));
SERVICE_ACCOUNT_PERMISSIONS = ['https://www.googleapis.com/auth/analytics.readonly'];
DEFAULT_METRIC = "ga:pageviews";
DEFAULT_LIMIT = 100;
DEFAULT_START_INDEX = 1;