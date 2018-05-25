

var express = require('express');
var router = require("./src/routes/routes")
var app = express();


app.use("/", router);
app.use(express.static(__dirname + "/public"));


app.set('views', './src/views');
app.set('view engine', 'pug');

app.listen(3000, function () {
    console.log("Express Listening on Port 3000");
});