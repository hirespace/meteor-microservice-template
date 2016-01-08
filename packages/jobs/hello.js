console.log("Hello, you can call scheduled jobs manually from here");
_.each(jobsConfig, function (job) {
    console.log("***************************************");
    console.log("***********  Scheduled Job  ***********");
    console.log("***************************************");
    console.log(job.name);
    console.log("Runs " + job.schedule);
    var method = "Meteor.call('" + job.method;
    if (job.params.length) {
        _.each(params, function (param) {
            method += ", ";
            method += param;
        });
    }
    method += "')";
    console.log(method);
    console.log("-");
    console.log("-");
});