describe('[end-to-end] CustomerLifecycle', function () {

    beforeEach(() => Meteor.call('test_customerLifecycleBookings'));
    afterEach(() => Meteor.call('test_destroyDB'));


    it('CustomerLifecycle.getNewCustomerIds should give correct Ids for now', () => {

        // GIVEN
        var now = new Date().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getNewCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(2);
        expect(_.contains(customerIds, 'new1')).to.be.ok;
        expect(_.contains(customerIds, 'new2')).to.be.ok;
    });

    it('CustomerLifecycle.getNewCustomerIds should give correct Ids for 35 months ago', () => {

        // GIVEN
        var now = moment().subtract(35, 'months').toDate().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getNewCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(2);
        expect(_.contains(customerIds, 'activeBooking2')).to.be.ok;
        expect(_.contains(customerIds, 'activeBooking3')).to.be.ok;

    });

    it('CustomerLifecycle.getLapsedCustomerIds should give correct Ids for now', () => {

        // GIVEN
        var now = new Date().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getLapsedCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(2);
        expect(_.contains(customerIds, 'lapsed1')).to.be.ok;
        expect(_.contains(customerIds, 'lapsed2')).to.be.ok;
    });

    it('CustomerLifecycle.getLapsedCustomerIds should give a correct Ids in 16 months', () => {

        // GIVEN
        var now = moment().add(16, 'months').toDate().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getLapsedCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(2);
        expect(_.contains(customerIds, 'activeBooking2')).to.be.ok;
        expect(_.contains(customerIds, 'activeBooking3')).to.be.ok;
    });

    it('CustomerLifecycle.getBookedDormantCustomerIds should give a correct Ids now', () => {

        // GIVEN
        var now = new Date().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getBookedDormantCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(2);
        expect(_.contains(customerIds, 'hasBookedDormant1')).to.be.ok;
        expect(_.contains(customerIds, 'hasBookedDormant2')).to.be.ok;

    });

    it('CustomerLifecycle.getBookedDormantCustomerIds should give a correct Ids in 36 months', () => {

        // GIVEN
        var now = moment().add(36, 'months').toDate().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getBookedDormantCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(7);
        expect(_.contains(customerIds, 'activeBooking1')).to.be.ok;
        expect(_.contains(customerIds, 'activeBooking2')).to.be.ok;
        expect(_.contains(customerIds, 'activeBooking3')).to.be.ok;
        expect(_.contains(customerIds, 'lapsed1')).to.be.ok;
        expect(_.contains(customerIds, 'lapsed2')).to.be.ok;
        expect(_.contains(customerIds, 'hasBookedDormant1')).to.be.ok;
        expect(_.contains(customerIds, 'hasBookedDormant2')).to.be.ok;

    });

    it('CustomerLifecycle.getNeverBookedDormantCustomerIds should give a correct Ids now', () => {

        // GIVEN
        var now = new Date().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getNeverBookedDormantCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(2);
        expect(_.contains(customerIds, 'neverBookedDormant1')).to.be.ok;
        expect(_.contains(customerIds, 'neverBookedDormant2')).to.be.ok;

    });

    it('CustomerLifecycle.getNeverBookedDormantCustomerIds should give a correct Ids in 36 months', () => {

        // GIVEN
        var now = moment().add(36, 'months').toDate().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getNeverBookedDormantCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(6);
        expect(_.contains(customerIds, 'neverBookedDormant1')).to.be.ok;
        expect(_.contains(customerIds, 'neverBookedDormant2')).to.be.ok;
        expect(_.contains(customerIds, 'new1')).to.be.ok;
        expect(_.contains(customerIds, 'new2')).to.be.ok;
        expect(_.contains(customerIds, 'activeNoBooking1')).to.be.ok;
        expect(_.contains(customerIds, 'activeNoBooking2')).to.be.ok;

    });

    it('CustomerLifecycle.getActiveBookedCustomerIds should give a correct Ids now', () => {

        // GIVEN
        var now = new Date().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getActiveBookedCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(3);
        expect(_.contains(customerIds, 'activeBooking1')).to.be.ok;
        expect(_.contains(customerIds, 'activeBooking2')).to.be.ok;
        expect(_.contains(customerIds, 'activeBooking3')).to.be.ok;

    });

    it('CustomerLifecycle.getActiveBookedCustomerIds should give a no Ids in 36 months', () => {

        // GIVEN
        var now = moment().add(36, 'months').toDate().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getActiveBookedCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(0);

    });

    it('CustomerLifecycle.getActiveNotBookedCustomerIds should give a correct Ids now', () => {

        // GIVEN
        var now = new Date().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getActiveNotBookedCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(2);
        expect(_.contains(customerIds, 'activeNoBooking1')).to.be.ok;
        expect(_.contains(customerIds, 'activeNoBooking2')).to.be.ok;

    });

    it('CustomerLifecycle.getActiveNotBookedCustomerIds should give a no Ids in 36 months', () => {

        // GIVEN
        var now = moment().add(36, 'months').toDate().getTime();

        // WHEN
        var customerIds = new CustomerLifecycle().getActiveNotBookedCustomerIds(now);

        // THEN
        expect(customerIds.length).to.be.equal(0);

    });

    it('CustomerLifecycle.getAllCustomerIds should give correct Ids now', () => {

        // GIVEN
        var now = new Date().getTime();

        // WHEN
        var allCustomerIds = new CustomerLifecycle().getAllCustomerIds(now);

        // THEN
        expect(allCustomerIds.activeNotBookedCustomerIds).to.be.ok;
        expect(allCustomerIds.activeNotBookedCustomerIds.length).to.be.equal(2);
        expect(_.contains(allCustomerIds.activeNotBookedCustomerIds, 'activeNoBooking1')).to.be.ok;
        expect(_.contains(allCustomerIds.activeNotBookedCustomerIds, 'activeNoBooking2')).to.be.ok;

        expect(allCustomerIds.activeBookedCustomerIds).to.be.ok;
        expect(allCustomerIds.activeBookedCustomerIds.length).to.be.equal(3);
        expect(_.contains(allCustomerIds.activeBookedCustomerIds, 'activeBooking1')).to.be.ok;
        expect(_.contains(allCustomerIds.activeBookedCustomerIds, 'activeBooking2')).to.be.ok;
        expect(_.contains(allCustomerIds.activeBookedCustomerIds, 'activeBooking3')).to.be.ok;

        expect(allCustomerIds.neverBookedDormantCustomerIds).to.be.ok;
        expect(allCustomerIds.neverBookedDormantCustomerIds.length).to.be.equal(2);
        expect(_.contains(allCustomerIds.neverBookedDormantCustomerIds, 'neverBookedDormant1')).to.be.ok;
        expect(_.contains(allCustomerIds.neverBookedDormantCustomerIds, 'neverBookedDormant2')).to.be.ok;

        expect(allCustomerIds.bookedDormantCustomerIds).to.be.ok;
        expect(allCustomerIds.bookedDormantCustomerIds.length).to.be.equal(2);
        expect(_.contains(allCustomerIds.bookedDormantCustomerIds, 'hasBookedDormant1')).to.be.ok;
        expect(_.contains(allCustomerIds.bookedDormantCustomerIds, 'hasBookedDormant2')).to.be.ok;

        expect(allCustomerIds.lapsedCustomerIds).to.be.ok;
        expect(allCustomerIds.lapsedCustomerIds.length).to.be.equal(2);
        expect(_.contains(allCustomerIds.lapsedCustomerIds, 'lapsed1')).to.be.ok;
        expect(_.contains(allCustomerIds.lapsedCustomerIds, 'lapsed1')).to.be.ok;

        expect(allCustomerIds.newCustomerIds).to.be.ok;
        expect(allCustomerIds.newCustomerIds.length).to.be.equal(2);
        expect(_.contains(allCustomerIds.newCustomerIds, 'new1')).to.be.ok;
        expect(_.contains(allCustomerIds.newCustomerIds, 'new1')).to.be.ok;

    });

});