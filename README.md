#README

##Table of contents

* [How to run an app](#how-to-run-an-app)


##How to use this micro-service template

To init app:
 - install npm package "Meteor git packages" npm install -g mgp
 - clone me to your computer
 - run mgp in the root of this project
 - all the shared packges will download/refresh
 - write code for your new microservice!
 - push to a new repo

 N.B. Users collection has been removed from common. This is because accounts-core package is required for some authentication behaviour and results in users/insert being defined twice. This means that the package does not match common in th git repo!!

 N.B. It uses practicalmeteor:mocha rather than mike:mocha because mike mocha just hung up (boooo) and also you can use practicalmeteor from the commandlien for ci tests using ```spacejam test-packages --driver-package=practicalmeteor:mocha-console-reporter```