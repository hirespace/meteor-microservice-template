GoogleApiAuth = class GoogleApiAuth {

    constructor() {

        log.info('new GoogleAnalytics().constructor.start');

        this.googleapis = Npm.require('googleapis');
        this.googleAuth = Npm.require('google-auth-library');
        this.auth = new this.googleAuth();
        this.oauth2Client = new this.auth.OAuth2();

        log.info('new GoogleAnalytics().constructor.finish');

    }

    get publicOauth2Client() {
        return this.oauth2Client;
    }

    /**
     *
     * api
     *
     * Exposes googleapis object, authenticated with the user Id or with a service account if no service account given.
     *
     * @param userId
     *
     */

    api(userId) {

        log.debug("this.jwtClient.authorize start");

        var self = this;
        var Future = Npm.require('fibers/future');
        var fut = new Future();

        if (userId) {
            //Authenticate as the user if a userId is provided

            var user = Meteor.users.findOne(userId);

            if (user && user.services && user.services.google) {

                self.oauth2Client.setCredentials({
                    access_token: user.services.google.accessToken
                });

                log.debug("this.oauth2Client.authorize finish", {accessToken: user.services.google.accessToken});

                fut.return(self.googleapis);

            }
            else {

                throw new Meteor.Error("Invalid user Id",
                    "You must provide a valid user id of a user who has signed in with their Google account.");

            }


        }
        else {
            //Use a service account if userId is not provided

            if (self.jwtClient) {

                self.jwtClient.authorize(function (err, result) {

                    log.debug('result.access_token', result.access_token);

                    self.oauth2Client.setCredentials({
                        access_token: result.access_token
                    });

                    log.debug("this.jwtClient.authorize finish", {accessToken: result.access_token});

                    fut.return(self.googleapis);

                });

            }
            else {

                throw new Meteor.Error("Service Account not configured",
                    "You must configure the service account before you can use it. Call GoogleApiAuth.configureServiceAccount(serviceAccountEmail, privateEmail, serviceAccountPermissions)");

            }

        }

        return fut.wait();

    }

    /**
     *
     * refresh
     *
     * A function that refreshes the access token of a given user.
     *
     * @param userId
     * @param callback
     */

    refresh(userId, callback) {

        var user;
        if (userId) {
            user = Meteor.users.findOne({_id: userId});
        } else {
            user = Meteor.user();
        }

        log.info('exchangeRefreshToken.user', user);

        var config = Accounts.loginServiceConfiguration.findOne({service: "google"});
        if (!config)
            throw new Meteor.Error(500, "Google service not configured.");

        log.info('exchangeRefreshToken.config', config);

        if (!user.services || !user.services.google || !user.services.google.refreshToken)
            throw new Meteor.Error(500, "Refresh token not found.");

        log.info('exchangeRefreshToken.user.services.google.refreshToken', user.services.google.refreshToken);

        try {
            var result = HTTP.call("POST",
                "https://accounts.google.com/o/oauth2/token",
                {
                    params: {
                        'client_id': config.clientId,
                        'client_secret': config.secret,
                        'refresh_token': user.services.google.refreshToken,
                        'grant_type': 'refresh_token'
                    }
                });
        } catch (e) {
            var code = e.response ? e.response.statusCode : 500;
            throw new Meteor.Error(code, 'Unable to exchange google refresh token.', e.response)
        }

        if (result.statusCode === 200) {

            Meteor.users.update(user._id, {
                '$set': {
                    'services.google.accessToken': result.data.access_token,
                    'services.google.expiresAt': (+new Date) + (1000 * result.data.expires_in),
                }
            });

            callback(undefined, result.data.access_token);
        } else {
            throw new Meteor.Error(result.statusCode, 'Unable to exchange google refresh token.', result);
        }

    }

    /**
     *
     * configureServiceAccount
     *
     * A function that allows authentication via a service account, mainly for server processes.
     *
     * @param serviceAccountEmail
     * @param serviceAccountPrivateKey
     * @param serviceAccountPermissions
     */

    configureServiceAccount(serviceAccountEmail, serviceAccountPrivateKey, serviceAccountPermissions) {

        log.info("configureServiceAccount", serviceAccountEmail);

        this.jwtClient = new this.googleapis.auth.JWT(
            serviceAccountEmail,
            null,
            serviceAccountPrivateKey,
            serviceAccountPermissions
        );

    }

};