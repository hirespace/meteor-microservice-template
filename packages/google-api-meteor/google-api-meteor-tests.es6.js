describe('[unit] GoogleApiAuth', () => {

    it('GoogleApiAuth should exist', () => {

        expect(GoogleApiAuth).to.be.ok;

    });

    describe('constructor()', () => {

        it('should have getter publicOauth2Client', () => {

            // GIVEN
            let testPublicOauth2Client = new GoogleApiAuth().publicOauth2Client;

            // THEN
            expect(testPublicOauth2Client).to.be.ok;
        });

        it('should have method api', () => {

            // GIVEN
            let testApi = new GoogleApiAuth().api;

            // THEN
            expect(testApi).to.be.a('function');
        });

        it('should have method refresh', () => {

            // GIVEN
            let testRefresh = new GoogleApiAuth().api;

            // THEN
            expect(testRefresh).to.be.a('function');
        });

        it('should have method configureServiceAccount', () => {

            // GIVEN
            let testConfigureServiceAccount = new GoogleApiAuth().api;

            // THEN
            expect(testConfigureServiceAccount).to.be.a('function');
        });

    });

});

