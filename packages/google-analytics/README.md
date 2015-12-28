#README

##Table of contents

* [The problem](#the-problem)
* [The solution](#the-solution)

##The problem

 - We require google analytics data for stuff such as analytics and search

##The solution

 - This package is used by jobs which import lots of ga data to mongo where we can use it.
 - It also contains methods which run those jobs.

 N.B.
  - There are no end to end tests as WS couldn't find a solution for mocking constructors
