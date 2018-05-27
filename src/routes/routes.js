
var express = require('express');
var fs = require('fs');
var mongodb = require('mongodb')

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017";
var databaseName = "PugWebsite";

var router = express.Router();

// var jsonOB = JSON.parse(fs.readFileSync("./src/data/data.json", "utf8"));

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
router.route("/roster").get(
    function (req, res) {
        // var jsonOB = JSON.parse(fs.readFileSync("./src/data/data.json", "utf8"));
        (async function mongo() {
            try {
                var client = await mongoClient.connect(url);

                var db = client.db(databaseName);

                var members = await db.collection("roster").find().toArray();

                var model = {
                    title: "Roster",
                    h1Text: "Roster",
                    members: members
                };
                res.render("roster", model);
            } catch (err) {
                res.send(err);
            } finally {
                client.close();
            }
        }());
        
    }
);
// console.log(jsonOB.roster);
// response.render('roster', data);

router.route("/records").get(
    function (req, res) {
        // var jsonOB = JSON.parse(fs.readFileSync("./src/data/data.json", "utf8"));
        (async function mongo() {
            try {
                var client = await mongoClient.connect(url);

                var db = client.db(databaseName);

                var records = await db.collection("records").find().toArray();

                var model = {
                    title: "Roster",
                    h1Text: "Roster",
                    records: records
                };
                res.render("records", model);
            } catch (err) {
                res.send(err);
            } finally {
                client.close();
            }
        }());
        
    }
);
router.route("/orders").get(
    function (req, res) {
        // var jsonOB = JSON.parse(fs.readFileSync("./src/data/data.json", "utf8"));
        (async function mongo() {
            try {
                var client = await mongoClient.connect(url);

                var db = client.db(databaseName);

                var items = await db.collection("items").find().toArray();

                var model = {
                    title: "Roster",
                    h1Text: "Roster",
                    items: items
                };
                res.render("orders", model);
            } catch (err) {
                res.send(err);
            } finally {
                client.close();
            }
        }());
        
    }
);
router.route("/contactUs").get(
    function (req, res) {
        (async function mongo() {
            try {
                var client = await mongoClient.connect(url);

                var db = client.db(databaseName);

                var contactData = await db.collection("contactData").find().toArray();

                var model = {
                    title: "Roster",
                    h1Text: "Roster",
                    contactData: contactData
                };
                res.render("contactUs", model);
            } catch (err) {
                res.send(err);
            } finally {
                client.close();
            }
        }());
        
    }
);

module.exports = router;