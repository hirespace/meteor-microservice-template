describe('[unit] CustomerLifecycle', () => {

    it('CustomerLifecycle should exist', () => {

        expect(CustomerLifecycle).to.be.ok

    });

    it('bookingAggregationHelpers should exist', () => {

        expect(bookingAggregationHelpers).to.be.ok

    });

    describe('bookingAggregationHelpers', () => {

        it('bookingAggregationHelpers.isClosedFilter should be a function', () => {

            expect(bookingAggregationHelpers.isClosedFilter).to.be.a('function');

        });

        it('bookingAggregationHelpers.isPendingFilter should be a function', () => {

            expect(bookingAggregationHelpers.isNewPendingFilter).to.be.a('function');

        });

        it('bookingAggregationHelpers.isWonFilter should be a function', () => {

            expect(bookingAggregationHelpers.isWonFilter).to.be.a('function');

        });

        it('bookingAggregationHelpers.isBeforeFilter should be a function', () => {

            expect(bookingAggregationHelpers.isBeforeFilter).to.be.a('function');

        });

        it('bookingAggregationHelpers.isBetweenFilter should be a function', () => {

            expect(bookingAggregationHelpers.isBetweenFilter).to.be.a('function');

        });

        it('bookingAggregationHelpers.isAfterFilter should be a function', () => {

            expect(bookingAggregationHelpers.isAfterFilter).to.be.a('function');

        });

    });

    describe('getCustomerIds', () => {

        it('getNewCustomerIds should be a function', () => {

            expect(new CustomerLifecycle().getNewCustomerIds).to.be.a('function');

        });

        it('getLapsedCustomerIds should be a function', () => {

            expect(new CustomerLifecycle().getLapsedCustomerIds).to.be.a('function');

        });

        it('getBookedDormantCustomerIds should be a function', () => {

            expect(new CustomerLifecycle().getBookedDormantCustomerIds).to.be.a('function');

        });

        it('getNeverBookedDormantCustomerIds should be a function', () => {

            expect(new CustomerLifecycle().getNeverBookedDormantCustomerIds).to.be.a('function');

        });

        it('getActiveBooked should be a function', () => {

            expect(new CustomerLifecycle().getActiveBookedCustomerIds).to.be.a('function');

        });

        it('getActiveNotBooked should be a function', () => {

            expect(new CustomerLifecycle().getActiveNotBookedCustomerIds).to.be.a('function');

        });

        it('notActiveCustomerIdGroups should be a function', () => {

            expect(new CustomerLifecycle().notActiveCustomerIdGroups).to.be.a('function');

        });

        it('getNotActiveCustomerIdsFromGroups should be a function', () => {

            expect(new CustomerLifecycle().getNotActiveCustomerIdsFromGroups).to.be.a('function');

        });

        it('getNotActiveCustomerIdsFromGroups should return the right array', () => {

            // GIVEN
            var notActiveCustomerIdGroups = {
                neverBookedDormantCustomerIds: ['customerId1'],
                bookedDormantCustomerIds: ['customerId2'],
                lapsedCustomerIds: ['customerId3'],
                newCustomerIds: ['customerId4']
            };

            // WHEN
            var notActiveCustomerIdsFromGroups = new CustomerLifecycle().getNotActiveCustomerIdsFromGroups(notActiveCustomerIdGroups);


            // THEN
            expect(notActiveCustomerIdsFromGroups).to.be.deep.equal(['customerId1','customerId2','customerId3','customerId4']);

        });

        it('getAllCustomerIds should be a function', () => {

            expect(new CustomerLifecycle().getAllCustomerIds).to.be.a('function');

        });

    });

});