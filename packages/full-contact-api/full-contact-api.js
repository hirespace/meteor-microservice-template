var fullContactApi = {
    person: 'https://api.fullcontact.com/v2/person.json',
    company: 'https://api.fullcontact.com/v2/company/lookup.json'
};

FullContact = {
    /**
     * Acquires information about a person given their email
     * @param email - f.e. hirespace.com
     */
    getProfile: function (email) {

        var time = new Date().getTime();

        var encodedEmail = encodeURI(email),
            url = fullContactApi.person + '?email=' + encodedEmail + '&apiKey=' + key;

        try {

            if (process.env.TEST_ENV === 'TEST') {
                HTTP.get = function () {
                    throw new Meteor.Error('HTTP.get is mocked');
                }
            }

            var resp = HTTP.get(url);

            console.log('FullContact.getProfile consumed time# ' + new Date().getTime() - time);
            return resp;

        } catch (e) {
            // TODO: why it takes 2 sec to fail with 404?!
            log.error(fullContactApi.person + '?email=' + encodedEmail + '&apiKey=xxx', {e: e, time: new Date().getTime() - time});
        }
    },

    /**
     * Acquires information about company based on given domain.
     * @param domain - f.e. hirespace.com
     */
    getCompany: function (domain) {

        log.debug('FullContact.getCompany', {domain: domain});

        var url = fullContactApi.company + '?domain=' + domain + '&apiKey=' + key;

        try {

            if (process.env.TEST_ENV === 'TEST') {
                HTTP.get = function () {
                    throw new Meteor.Error('HTTP.get is mocked');
                }
            }

            return HTTP.get(url).data;
        } catch (e) {

            log.error(fullContactApi.company + '?domain=' + domain + '&apiKey=xxx', {e: e});
        }
    }
};