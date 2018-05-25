
var express = require('express');
var fs = require('fs');

var router = express.Router();

var jsonOB = JSON.parse(fs.readFileSync("./src/data/data.json", "utf8"));

router.route("/").get(function (request, response) {
    // response.sendFile(__dirname + "/views/index.html");
    var data = {
        title: "Index Page",
        h1Text: "Neumont Kangaroos Kickball Team",
        contactus: "Contact Us"
    };
    response.render('index', data);

}
);
router.route("/roster").get(function (request, response) {
    // var jsonOB = JSON.parse(fs.readFileSync("./src/data/data.json", "utf8"));
    var data = {
        title: "Team Roster",
        h1Text: "Roster",
        members: jsonOB.roster
    };
    console.log(jsonOB.roster);
    response.render('roster', data);

}
);
router.route("/records").get(function (request, response) {
    // var jsonOB = JSON.parse(fs.readFileSync("./src/data/data.json", "utf8"));
    var data = {
        title: "Team Records",
        h1Text: "Previous Seasons",
        records: jsonOB.records
    };
    response.render('records', data);

}
);
router.route("/orders").get(function (request, response) {
    // var jsonOB = JSON.parse(fs.readFileSync("./src/data/data.json", "utf8"));
    var data = {
        title: "Orders Page",
        h1Text: "Team Orders Page",
        items: jsonOB.items
    };
    response.render('orders', data);

}
);
router.route("/contactUs").get(
    function (request, response) {
        //var data = repo.getContactUsData();

        var model = {
            title: "Contact Us Page",
            h1Text: "Contact Us Here!",
            contactData: jsonOB.contactData

        };
        response.render("contactUs", model);
    }
);


module.exports = router;