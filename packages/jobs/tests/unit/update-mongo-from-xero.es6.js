describe('[unit] updateMongoFromXero', () => {

    let mongoApiCall,
        getTime;

    beforeEach(() => {

        getTime = sinon.stub(Utils, 'getTime');
        getTime.returns(0);

        mongoApiCall = sinon.stub(mongoApi, 'call');

        mongoApiCall
            .withArgs('xeroSynchCall', 'GET', '/Invoices?order=UpdatedDateUTC&page=1', undefined, {'If-Modified-Since': 'Wed, 31 Dec 1969 23:55:00 GMT'})
            .returns(recentlyEditedXeroInvoicesResultHundred);

        mongoApiCall
            .withArgs('xeroSynchCall', 'GET', '/Invoices?order=UpdatedDateUTC&page=2', undefined, {'If-Modified-Since': 'Wed, 31 Dec 1969 23:55:00 GMT'})
            .returns(recentlyEditedXeroInvoicesResultOne);

        mongoApiCall
            .withArgs('xeroSynchCall', 'GET', '/Invoices?order=UpdatedDateUTC&page=2', undefined, {'If-Modified-Since': 'Wed, 31 Dec 1969 23:55:00 GMT'})
            .returns(recentlyEditedXeroInvoicesResultNone);

        mongoApiCall
            .returns(updateMongoFromXeroResult);

    });

    afterEach(() => {

        mongoApiCall.restore();
        getTime.restore();

    });

    it('It should update 101 invoices with correct behaviour', () => {

        // GIVEN

        // WHEN
        var updateMongoFromXeroFullResult = Meteor.call('updateMongoFromXero');

        // THEN
        expect(mongoApiCall).to.have.callCount(154);
        expect(updateMongoFromXeroFullResult.length).to.be.deep.equal(152);
        expect(updateMongoFromXeroFullResult[0]).to.be.deep.equal(updateMongoFromXeroResult);

    });

});