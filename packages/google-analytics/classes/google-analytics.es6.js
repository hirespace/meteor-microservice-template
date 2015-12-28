GoogleAnalytics = class GoogleAnalytics {

    constructor() {

        log.info('new GoogleAnalytics().constructor.start');

        this.googleapis = Npm.require('googleapis');
        this.googleAuth = Npm.require('google-auth-library');
        this.auth = new this.googleAuth();
        this.oauth2Client = new this.auth.OAuth2();
        this.jwtClient = new this.googleapis.auth.JWT(
            SERVICE_ACCOUNT_EMAIL,
            null,
            PRIVATE_KEY,
            ['https://www.googleapis.com/auth/analytics.readonly']
        );
        this.metricTypes = METRIC_TYPES;
        this.storedMetrics = STORED_METRICS;
        this.reportingMetrics = [];
        this.dimensionTypes = DIMENSION_TYPES;
        this.storedDimensions = STORED_DIMENSIONS;
        this.reportingDimensions = [];
        this.filterTypes = FILTER_TYPES;
        this.storedFilters = STORED_FILTERS;
        this.reportingFilters = [];
        this.sortTypes = SORT_TYPES;
        this.storedSorts = STORED_SORTS;
        this.reportingSorts = [];
        this.reportingViewId = VIEW_ID;
        this.reportingBookingData = new Map();

        this.reportingStartDate = new Date();
        this.reportingEndDate = new Date();

        this.pageViewUsageVenueMap = new Map();
        this.reportingPageViewData = new Map();

        log.info('new GoogleAnalytics().constructor.finish');

    }

    get pageViewData() {
        return this.reportingPageViewData;
    }

    set pageViewData(pageViewData) {
        check(pageViewData, Map);
        this.reportingPageViewData = pageViewData;
    }

    get usageVenueMap() {
        return this.pageViewUsageVenueMap;
    }

    set usageVenueMap(usageVenueMap) {
        check(usageVenueMap, Map);
        this.pageViewUsageVenueMap = usageVenueMap;
    }

    get startDate() {
        return this.reportingStartDate;
    }

    set startDate(startDate) {
        check(startDate, Date);
        this.reportingStartDate = startDate;
    }

    get endDate() {
        return this.reportingEndDate;
    }

    set endDate(endDate) {
        check(endDate, Date);
        this.reportingEndDate = endDate;
    }

    get metrics() {
        return this.reportingMetrics;
    }

    set metrics(metrics) {
        check(metrics, Array);
        this.reportingMetrics = metrics;
    }

    set setMetricsByType(metricType) {
        var self = this;
        check(metricType, Match.Where(function (type) {
            check(type, String);
            return _.contains(self.metricTypes, type);
        }));
        this.reportingMetrics = this.storedMetrics[metricType]
    }

    get dimensions() {
        return this.reportingDimensions;
    }

    set dimensions(dimensions) {
        check(dimensions, Array);
        this.reportingDimensions = dimensions;
    }

    set setDimensionsByType(dimensionType) {
        var self = this;
        check(dimensionType, Match.Where(function (type) {
            check(type, String);
            return _.contains(self.dimensionTypes, type);
        }));
        this.reportingDimensions = this.storedDimensions[dimensionType];
    }

    get sorts() {
        return this.reportingSorts;
    }

    set sorts(sorts) {
        check(sorts, Array);
        this.reportingSorts = sorts;
    }

    set setSortsByType(sortType) {
        var self = this;
        check(sortType, Match.Where(function (type) {
            check(type, String);
            return _.contains(self.sortTypes, type);
        }));
        this.reportingSorts = this.storedSorts[sortType];
    }

    get filters() {
        return this.reportingFilters;
    }

    set filters(filters) {
        check(filters, Array);
        this.reportingFilters = filters;
    }

    set setFiltersByType(filterType) {
        var self = this;
        check(filterType, Match.Where(function (type) {
            check(type, String);
            return _.contains(self.filterTypes, type);
        }));
        this.reportingFilters = this.storedFilters[filterType];
    }

    get bookingData() {
        return this.reportingBookingData;
    }

    clearBookingData () {
        this.reportingBookingData = new Map();
    }

    get viewId() {
        return this.reportingViewId;
    }

    set viewId(viewId) {
        check(viewId, Number);
        this.reportingViewId = viewId;
    }

    /**
     *
     * @param booking
     * @param booking._id
     * @param booking.googleAnalytics.userCookieIdentifier
     * @param booking.source
     * @param startDate
     * @param endDate
     * @param dimensionType
     */

    addYesterdaysBooking(booking, dimensionType) {

        var metricType = "bookings",
            gaData = {};

        log.info('GoogleAnalytics.addYesterdaysBooking', {booking: booking, dimensionType: dimensionType});

        check(booking, {
            _id: String,
            googleAnalytics: {
                userCookieIdentifier: Match.Optional(String)
            },
            source: String
        });
        check(dimensionType, Match.Optional(String));

        if (booking.googleAnalytics && booking.googleAnalytics.userCookieIdentifier) {
            this.setMetricsByType = metricType;
            log.info('GoogleAnalytics.setMetricsByType');
            this.setDimensionsByType = dimensionType;
            log.info('GoogleAnalytics.setDimensionsByType');
            this.startDate = moment().subtract(1,'days').toDate();
            log.info('GoogleAnalytics.startDate');
            this.endDate = moment().subtract(1,'days').toDate();
            log.info('GoogleAnalytics.endDate');
            this.filters = [{dimension: "dimension1", value: booking.googleAnalytics.userCookieIdentifier}];

            switch (booking.source) {
                case "site":
                    gaData = this.processReportData(this.getReportData());
                    break;
                case "viewing":
                    gaData = this.processReportData(this.getReportData());
                    break;
                case "rfp":
                    gaData = this.processReportData(this.getReportData());
                    break;
                case "contactForm":
                    gaData = this.processReportData(this.getReportData());
                    break;
                default:
            }


        }
        else {
            switch (booking.source) {
                case "site":
                    //Information missing !!
                    log.error('trying to get site booking GA data, but userCookieIdentifier is missing');
                    break;
                case "viewing":
                    log.error('trying to get viewing booking GA data, but userCookieIdentifier is missing');
                    //Information missing !!
                    break;
                case "rfp":
                    log.error('trying to get rfp booking GA data, but userCookieIdentifier is missing');
                    //Information missing !!
                    break;
                case "contactForm":
                    log.error('trying to get contactForm booking GA data, but userCookieIdentifier is missing');
                    //Information missing !!
                    break;
                case "venueAlerts":
                    gaData = {
                        medium: "email",
                        source: "venueAlerts"
                    };
                    break;
                case "email":
                    //No Information here :(
                    break;
                case "manual":
                    //No Information here :(
                    break;
                default:
            }
        }

        log.info(booking._id + ".gaData", gaData);

        if (gaData !== {}) this.bookingData.set(booking._id, gaData);
    }

    /**
     *
     * getPageViewData
     *
     * Get a longlist of the number of pageviews for each venue in the last X days.
     *
     * @param numberOfDays
     */

    getPageViewData (numberOfDays) {

        log.info('GoogleAnalytics.getPageViewData', {numberOfDays: numberOfDays});

        check(numberOfDays, Number);

        const TYPE = "profileviews";
        var self = this,
            processedPageViewData = new Map(),
            startIndex = 1;

        this.setMetricsByType = TYPE;
        this.setDimensionsByType = TYPE;
        this.setSortsByType = TYPE;
        this.startDate = moment().subtract(numberOfDays, 'days').toDate();
        this.endDate = moment().toDate();

        do {

            processedPageViewData = this.processPageViewReportData(this.getReportData(undefined, undefined, undefined, undefined, undefined, undefined, 100, startIndex));

            log.info('GoogleAnalytics.getPageViewData.processedPageViewData', {"processedPageViewData.size": processedPageViewData.size});

            processedPageViewData.forEach(function(gaData, venueId) {
                var previousData = self.reportingPageViewData.get(venueId);
                if (previousData) {
                    previousData.pv += gaData.pv;
                    previousData.upv += gaData.upv;
                    previousData.top += gaData.top;
                    self.reportingPageViewData.set(venueId, previousData);
                }
                else {
                    self.reportingPageViewData.set(venueId, gaData);
                }
            });

            log.info('GoogleAnalytics.reportingPageViewData', {"reportingPageViewData.size": self.reportingPageViewData.size});

            startIndex += 100;

        } while (processedPageViewData.size);

    }

    _formatMetricsOrDimensions (array) {
        return array.map(function (element) { return "ga:" + element;}).join(",");
    }

    _formatSort (array) {
        return array.map(function (element) { return (element.direction === "desc" && "-") + "ga:" + element.sort;}).join(",");
    }

    _formatFilters (array) {
        return array.map(function (element) { return "ga:" + element.dimension + "==" + element.value;}).join(",");
    }

    /**
     *
     * getReportData
     *
     * Get data based on the agrguments of the function or from this, using service account auth
     *
     * @param metrics
     * @param dimensions
     * @param filters
     * @param startDate
     * @param endDate
     * @param filters
     */

    getReportData(metrics, dimensions, sorts, filters, startDate, endDate, limit, skip) {

        log.info('GoogleAnalytics.getReportData', {
            metrics: metrics,
            dimensions: dimensions,
            filters: filters,
            startDate: startDate,
            endDate: endDate,
            limit: limit,
            skip: skip
        });

        check(metrics, Match.OneOf([String], undefined));
        check(dimensions, Match.OneOf([String], undefined));
        check(filters, Match.OneOf([{dimension: String, value: String}], undefined));
        check(startDate, Match.OneOf(Date, undefined));
        check(endDate, Match.OneOf(Date, undefined));
        check(limit, Match.OneOf(Number, undefined));
        check(skip, Match.OneOf(Number, undefined));

        var self = this;
        var Future = Npm.require('fibers/future');
        var fut = new Future();
        var gApi = new GoogleApiAuth();

        gApi.configureServiceAccount(
            SERVICE_ACCOUNT_EMAIL,
            PRIVATE_KEY,
            ['https://www.googleapis.com/auth/analytics.readonly']
        );

        var arguments = {
            "auth": gApi.publicOauth2Client,
            "ids": "ga:" + self.reportingViewId,
            "start-date": moment(startDate || self.reportingStartDate).format("YYYY-MM-DD"),
            "end-date": moment(endDate || self.reportingEndDate).format("YYYY-MM-DD"),
            "max-results": limit || DEFAULT_LIMIT,
            "start-index": skip || DEFAULT_START_INDEX
        };

        (metrics || self.reportingMetrics.length) ? arguments.metrics = self._formatMetricsOrDimensions(metrics || self.reportingMetrics) : arguments.metrics = DEFAULT_METRIC;
        (dimensions || self.reportingDimensions.length) && (arguments.dimensions = self._formatMetricsOrDimensions(dimensions || self.reportingDimensions));
        (sorts || self.reportingSorts.length) && (arguments.sort = self._formatSort(sorts || self.reportingSorts));
        (filters || self.reportingFilters.length) && (arguments.filters = self._formatFilters(filters || self.reportingFilters));

        log.debug(arguments);

        gApi.api().analytics('v3').data.ga.get(arguments, Meteor.bindEnvironment(function (err, res) {

            if (err) {
                if (err.code === 401 && userId) {
                    log.info("GoogleApiAuth attempting access token refresh");
                    gApi.refresh(userId, Meteor.bindEnvironment(function (error, new_access_token) {
                        if (error) {
                            log.debug('GoogleApiAuth failed refreshing user access token.', error);
                            throw new Meteor.Error(error.code, 'GoogleApiAuth failed refreshing user access token.', JSON.stringify(err));
                        }
                        gApi.api(userId).analytics('v3').data.ga.get(arguments, Meteor.bindEnvironment(function (e, r) {
                            if (e) {
                                log.debug('GoogleApiAuth refreshed access token failed.', e);
                                throw new Meteor.Error(e.code, 'GoogleApiAuth refreshed access token failed.', JSON.stringify(err));
                            }
                            else {
                                return fut.return(r);
                            }
                        }));
                    }));
                }
                else {
                    log.debug('GoogleApiAuth failed.', err);
                    throw new Meteor.Error(err.code, 'GoogleApiAuth failed.', JSON.stringify(err));
                }
            }
            else {
                return fut.return(res);
            }

        }));
        return fut.wait();

    }

    /**
     *
     * processPageViewReportData
     *
     * Processes the raw analytics data by grouping it by venueId
     *
     * @param reportData
     * @param reportData.rows Array
     * @param reportData.rows[0] String Page Path
     * @param reportData.rows[1] String Pageviews
     * @param reportData.rows[2] String Unique Pageviews
     * @param reportData.rows[3] String Time on Page
     */

    processPageViewReportData(reportData) {
        var self = this,
            processedResult = new Map();

        if (reportData.rows && reportData.rows.length) {
            reportData.rows.forEach(function (row, rowIndex) {

                var venueId = self._getVenueId(row[0]),
                    pv = parseInt(row[1]),
                    upv = parseInt(row[2]),
                    top = parseInt(row[3]);
                if (venueId) {
                    var previousData = processedResult.get(venueId);
                    if (previousData) {
                        (pv > 0) && (previousData.pv += pv);
                        (upv > 0) && (previousData.upv += upv);
                        (top > 0) && (previousData.top += top);
                        processedResult.set(venueId, previousData);
                    }
                    else {
                        processedResult.set(venueId, {
                            pv: ((pv > 0) ? pv : 0),
                            upv: ((upv > 0) ? upv : 0),
                            top: ((top > 0) ? top : 0)
                        });
                    }
                }

            });
        }

        return processedResult;

    }

    _getVenueId(pagePath) {
        var venueId,
            usageId,
            match,
            venueIdReg = /(\/venues\/)([a-zA-Z]+\/)(\d+)(\/|$)/i,
            usageIdReg = /(\/spaces\/)([a-zA-Z]+\/)(\d+)(\/|$)/i;
        try {
            if (venueIdReg.test(pagePath)) {
                match = pagePath.match(venueIdReg);
                if (match && match.length > 3) {
                    venueId = parseInt( match[3] );
                }
            }
            else if (usageIdReg.test(pagePath)) {
                match = pagePath.match(usageIdReg);
                if (match && match.length > 3) {
                    usageId = parseInt( match[3] );
                    venueId = this.pageViewUsageVenueMap.get(usageId);
                }
            }
        }
        catch (e) {
            log.debug(pagePath);
            throw new Meteor.Error("_getVenueId regexp error", "Malformed url from google analytics causing break in regexp");
        }
        return venueId;
    }

    /**
     *
     * processReportData
     *
     * Processes the raw analytics data so that it can be saved against a booking and bookingline
     *
     * @param reportData
     * @param reportData.columnHeaders Array
     * @param reportData.rows Array
     */

    processReportData(reportData) {
        var processedResult = {};

        if (reportData.rows && reportData.rows.length) {
            var sortedRows = _.sortBy(reportData.rows, function (row) {
                return -row[row.length - 1];
            });
            var firstRow = sortedRows[0];
            var lastColumnIndex = (firstRow.length - 1);
            firstRow.forEach(function (element, columnIndex) {
                if (element !== "(not set)" && columnIndex !== lastColumnIndex) {
                    var columnName = reportData.columnHeaders[columnIndex].name.split(":")[1];
                    if (columnName === "sourceMedium") {
                        var sourceMedium = element.split(" / ");
                        processedResult.source = sourceMedium[0];
                        processedResult.medium = sourceMedium[1];
                    }
                    if (_.contains(["sessionDurationBucket", "pageDepth"], columnName)) {
                        processedResult[columnName] = parseInt(element);
                    }
                    else {
                        processedResult[columnName] = element;
                    }
                }
            });
        }

        return processedResult;

    }
};