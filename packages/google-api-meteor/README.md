```
    exampleApi: function (limit, skip) {

        var Future = Npm.require('fibers/future');
        var fut = new Future();
        var ga = new GoogleApiAuth();

        ga.configureServiceAccount(
            SERVICE_ACCOUNT_EMAIL,
            PRIVATE_KEY,
            ['https://www.googleapis.com/auth/analytics.readonly']
        );

        var arguments = {
            "auth": ga.publicOauth2Client,
            "ids": "ga:" + this.reportingViewId,
            "start-date": moment(this.reportingStartDate).format("YYYY-MM-DD"),
            "end-date": moment(this.reportingEndDate).format("YYYY-MM-DD"),
            "metrics": this.reportingMetrics,
            "dimensions": this.reportingDimensions,
            "max-results": limit || DEFAULT_LIMIT,
            "start-index": skip || DEFAULT_START_INDEX
        };

        ga.api().analytics('v3').data.ga.get(arguments, Meteor.bindEnvironment(function (err, res) {

            if (err) {
                if (err.code === 401) {
                    log.info("GoogleApiAuth attempting access token refresh");
                    ga.refresh(userId, Meteor.bindEnvironment(function (error, new_access_token) {
                        if (error) {
                            throw new Meteor.Error(error.code, 'GoogleApiAuth failed refreshing user access token.');
                        }
                        ga.api().analytics('v3').data.ga.get(arguments, Meteor.bindEnvironment(function (e, r) {
                            if (e) {
                                throw new Meteor.Error(e.code, 'GoogleApiAuth refreshed access token failed.');
                            }
                            else {
                                log.debug(JSON.stringify(r));
                                return fut.return(JSON.stringify(r));
                            }
                        }));
                    }));
                }
                else {
                    throw new Meteor.Error(err.code, 'GoogleApiAuth failed.');
                }
            }
            else {
                log.debug(JSON.stringify(res));
                return fut.return(res);
            }

        }));
        return fut.wait();
    }
```