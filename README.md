#README

##Table of contents

* [Update yesterdays bookings with GA data](#update-yesterdays-bookings-with-ga-data)
* [Update venues with GA data](#update-venues-with-with-ga-data)

##Update yesterdays bookings with GA data

###The problem

 - Our marketing department have a requirement to see acquisition data for our customers relating to our booking data so they know what acquisition spends results in the best quality bookings.
 - This information is available via Google Analytics
 - Google Analytics only exposes the clientId to the client, not all the rich information it holds about the client.
 - This information is only available via a call to the Google Analytics Core Reporting Api v3, and only c.3hrs later.

###The solution

 - We save the clientId against each booking as ```googleAnalytics.userCookieIdentifier```
 - Every day at 4.10am, we get all the bookings from the previous day 12am-12am
 - We get the acquisition data (and loooads of other data) from Google Analytics Core Reporting Api v3, and calculate some pseudo data for those that don't have ```googleAnalytics.userCookieIdentifier```.

###When this job runs

 - Every day at 4.10am

 ##Update venues with GA data

 ###The problem

  - We use basic google analytics data on hirespace.com for search and on the front of the site to display trending venues.
  - This data is in google analytics and we need it in our own database.

 ###The solution

  - We get a report of all the pageviews, uniquepageview and timeonpage for the last 90 days for all the paths.
  - We extra the usage and venue ids from the urls, group by venue and then save in mongo db against the venue.

 ###When this job runs

  - Every day at 2.30am