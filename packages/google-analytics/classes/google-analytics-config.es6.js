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
PRIVATE_KEY = String(Assets.getText('private/service-account-private-key.txt'));
SERVICE_ACCOUNT_EMAIL = String(Assets.getText('private/service-account-email.txt'));
SERVICE_ACCOUNT_PERMISSIONS = ['https://www.googleapis.com/auth/analytics.readonly'];
DEFAULT_METRIC = "ga:pageviews";
DEFAULT_LIMIT = 100;
DEFAULT_START_INDEX = 1;