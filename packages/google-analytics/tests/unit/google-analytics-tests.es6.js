describe('[unit] GoogleAnalytics', function () {

    it('GoogleAnalytics should exist', function () {

        expect(GoogleAnalytics).to.be.ok

    });

    describe('constructor()', () => {

        it('should have getter setter usageVenueMap', () => {

            // GIVEN
            const TEST_MAP = new Map();
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.usageVenueMap = TEST_MAP;

            // THEN
            expect(testGoogleAnalytics.usageVenueMap).to.be.equal(TEST_MAP);

        });

        it('should have getter setter pageViewData', () => {

            // GIVEN
            const TEST_MAP = new Map();
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.pageViewData = TEST_MAP;

            // THEN
            expect(testGoogleAnalytics.pageViewData).to.be.equal(TEST_MAP);

        });

        it('should have getter setter startDate', () => {

            // GIVEN
            const TEST_DATE = new Date();
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.startDate = TEST_DATE;

            // THEN
            expect(testGoogleAnalytics.startDate).to.be.equal(TEST_DATE);

        });

        it('should have getter setter endDate', () => {

            // GIVEN
            const TEST_DATE = new Date();
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.endDate = TEST_DATE;

            // THEN
            expect(testGoogleAnalytics.endDate).to.be.equal(TEST_DATE);

        });

        it('should have getter setter metrics', () => {

            // GIVEN
            const TEST_METRICS = ["metric"];
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.metrics = TEST_METRICS;

            // THEN
            expect(testGoogleAnalytics.metrics).to.be.equal(TEST_METRICS);

        });

        it('should have setter setMetricsByType', () => {

            // GIVEN
            const TEST_METRIC_TYPE = "bookings",
                TEST_METRICS = ["pageviews"];
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.setMetricsByType = TEST_METRIC_TYPE;

            // THEN
            expect(testGoogleAnalytics.metrics).to.be.deep.equal(TEST_METRICS);

        });

        it('should have getter setter dimensions', () => {

            // GIVEN
            const TEST_DIMENSIONS = ["dimension"];
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.dimensions = TEST_DIMENSIONS;

            // THEN
            expect(testGoogleAnalytics.dimensions).to.be.equal(TEST_DIMENSIONS);

        });

        it('should have setter setDimensionsByType', () => {

            // GIVEN
            const TEST_DIMENSION_TYPE = "acquisition",
                TEST_DIMENSIONS = ["campaign", "sourceMedium", "keyword", "channelGrouping"];
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.setDimensionsByType = TEST_DIMENSION_TYPE;

            // THEN
            expect(testGoogleAnalytics.dimensions).to.be.deep.equal(TEST_DIMENSIONS);

        });

        it('should have getter setter filters', () => {

            // GIVEN
            const TEST_FILTERS = ["filter"];
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.filters = TEST_FILTERS;

            // THEN
            expect(testGoogleAnalytics.filters).to.be.equal(TEST_FILTERS);

        });

        it('should have setter setFiltersByType', () => {

            // GIVEN
            const TEST_FILTER_TYPE = "bookings",
                TEST_FILTERS = [{dimension: "dimension1", value: 123}];
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.setFiltersByType = TEST_FILTER_TYPE;
            let filter = testGoogleAnalytics.filters[0];

            // THEN
            expect(filter.dimension).to.be.deep.equal(TEST_FILTERS[0].dimension);
            expect(filter.value).to.be.deep.equal(TEST_FILTERS[0].value);

        });

        it('should have getter setter sorts', () => {

            // GIVEN
            const TEST_SORTS = ["sort"];
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.sorts = TEST_SORTS;

            // THEN
            expect(testGoogleAnalytics.sorts).to.be.equal(TEST_SORTS);

        });

        it('should have setter setSortsByType', () => {

            // GIVEN
            const TEST_SORT_TYPE = "profileviews",
                TEST_SORTS = [{sort: "pageviews", direction: "desc"}];
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.setSortsByType = TEST_SORT_TYPE;
            let sort = testGoogleAnalytics.sorts[0];

            // THEN
            expect(sort.sort).to.be.deep.equal(TEST_SORTS[0].sort);
            expect(sort.direction).to.be.deep.equal(TEST_SORTS[0].direction);

        });

        it('should have getter setter viewId', () => {

            // GIVEN
            const TEST_VIEW_ID = 123;
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.viewId = TEST_VIEW_ID;

            // THEN
            expect(testGoogleAnalytics.viewId).to.be.equal(TEST_VIEW_ID);

        });

        it('should have method clearBookingData', () => {

            // GIVEN
            let testGoogleAnalytics = new GoogleAnalytics().clearBookingData;

            // THEN
            expect(testGoogleAnalytics).to.be.a('function');
        });

        it('should have method addYesterdaysBooking', () => {

            // GIVEN
            let testGoogleAnalytics = new GoogleAnalytics();

            // THEN
            expect(testGoogleAnalytics.addYesterdaysBooking).to.be.a('function');
        });

        it('should have method getReportData', () => {

            // GIVEN
            let testGoogleAnalytics = new GoogleAnalytics();

            // THEN
            expect(testGoogleAnalytics.getReportData).to.be.a('function');
        });

        it('should have method processReportData', () => {

            // GIVEN
            let testGoogleAnalytics = new GoogleAnalytics();

            // THEN
            expect(testGoogleAnalytics.getPageViewData).to.be.a('function');
        });

        it('should have method processPageViewReportData', () => {

            // GIVEN
            let testGoogleAnalytics = new GoogleAnalytics();

            // THEN
            expect(testGoogleAnalytics.processPageViewReportData).to.be.a('function');
        });

        it('should have method getPageViewData', () => {

            // GIVEN
            let testGoogleAnalytics = new GoogleAnalytics();

            // THEN
            expect(testGoogleAnalytics.getPageViewData).to.be.a('function');
        });

        it('should have method _getVenueId', () => {

            // GIVEN
            let testGoogleAnalytics = new GoogleAnalytics();

            // THEN
            expect(testGoogleAnalytics._getVenueId).to.be.a('function');
        });

    });

    describe('processReportData()', () => {

        it('should have processed data correctly', () => {

            // GIVEN
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            let processedData = testGoogleAnalytics.processReportData(GOOGLE_ANALYTICS_RESPONSE);

            // THEN
            expect(processedData.source).to.be.deep.equal(PROCESSED_DATA.source);
            expect(processedData.medium).to.be.deep.equal(PROCESSED_DATA.medium);
            expect(processedData.channelGrouping).to.be.deep.equal(PROCESSED_DATA.channelGrouping);
        });

    });

    describe('processPageViewReportData()', () => {

        it('should have processed data correctly', () => {

            // GIVEN
            let testGoogleAnalytics = new GoogleAnalytics(),
                usageVenueMap = new Map();

            // WHEN
            _.each(PAGEVIEW_USAGE_VENUE_MAP, function (venueId, usageIdString) {
                usageVenueMap.set(parseInt(usageIdString), venueId);
            });
            testGoogleAnalytics.usageVenueMap = usageVenueMap;

            let processedData = testGoogleAnalytics.processPageViewReportData(GOOGLE_ANALYTICS_PAGEVIEW_RESPONSE);

            var processedDataOpject = {};

            processedData.forEach(function (gaData, venueId) {
                processedDataOpject[venueId] = gaData;
            });

            // THEN
            expect(processedDataOpject).to.be.deep.equal(PAGEVIEW_PROCESSED_DATA);
        });

    });

    describe('_getVenueId()', () => {

        it('should get the venue Id from a short venue path', () => {

            // GIVEN
            const VENUE_PATH = "/venues/london/10388";
            const VENUE_ID = 10388;
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            let venueId = testGoogleAnalytics._getVenueId(VENUE_PATH);

            // THEN
            expect(venueId).to.be.deep.equal(VENUE_ID);
        });

        it('should get the venue Id from a long venue path', () => {

            // GIVEN
            const VENUE_PATH = "/venues/london/10388/sdfsdf-sdfdsf-sdfsf";
            const VENUE_ID = 10388;
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            let venueId = testGoogleAnalytics._getVenueId(VENUE_PATH);

            // THEN
            expect(venueId).to.be.deep.equal(VENUE_ID);
        });

        it('should get the usage Id from a short usage path', () => {

            // GIVEN
            const USAGE_PATH = "/spaces/london/123";
            const VENUE_ID = 10388;
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.usageVenueMap = new Map();
            testGoogleAnalytics.usageVenueMap.set(123, 10388);
            let venueId = testGoogleAnalytics._getVenueId(USAGE_PATH);

            // THEN
            expect(venueId).to.be.deep.equal(VENUE_ID);
        });

        it('should get the usage Id from a long usage path', () => {

            // GIVEN
            const USAGE_PATH = "/spaces/london/123/sdfsdf-sdfdsf-sdfsf";
            const VENUE_ID = 10388;
            let testGoogleAnalytics = new GoogleAnalytics();

            // WHEN
            testGoogleAnalytics.usageVenueMap = new Map();
            testGoogleAnalytics.usageVenueMap.set(123, 10388);
            let venueId = testGoogleAnalytics._getVenueId(USAGE_PATH);

            // THEN
            expect(venueId).to.be.deep.equal(VENUE_ID);
        });

    });

    describe('addYesterdaysBooking()', () => {

        var testGoogleAnalytics = new GoogleAnalytics(),
            mockGetReportData;

        beforeEach(function () {
            mockGetReportData = sinon.stub(testGoogleAnalytics, "getReportData").returns(GOOGLE_ANALYTICS_RESPONSE);
        });

        afterEach(function () {
            mockGetReportData.restore();
        });

        it('should add GA data for yesterdays booking to the bookingData map', () => {

            // WHEN
            testGoogleAnalytics.addYesterdaysBooking(TEST_BOOKING, DIMENSION_TYPE);
            let processedData = testGoogleAnalytics.bookingData.get(TEST_BOOKING._id)

            // THEN
            expect(processedData.source).to.be.deep.equal(PROCESSED_DATA.source);
            expect(processedData.medium).to.be.deep.equal(PROCESSED_DATA.medium);
            expect(processedData.channelGrouping).to.be.deep.equal(PROCESSED_DATA.channelGrouping);
        });

    });

});