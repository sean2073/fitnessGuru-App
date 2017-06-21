var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var app = express();
var PORT = process.env.PORT || 3004;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// mongoose connection
var mongodbUri = 'mongodb://sean2073:sb012073@ds127802.mlab.com:27802/fitnessguru';

var options = {};
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;


// home page route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/client/build/index.html");
});

// sign up route
app.get("/create", function(req, res) {
     res.render("create");

});
router.post('/create', function(req, res) {


    var id = Math.floor(Math.random() * 90000) + 10000;
    routeid = id;
    var createPwd = req.body.user_pwd;
    var createUser = req.body.user_name;
    var createEmail = req.body.user_email;
    users.create({
            id: id,
            name: createUser,
            email: createEmail,
            password: createPwd
        })
        .then(function(newData) {
            console.log(newData.id);
            res.redirect('/success');
        })
});
// success
router.get('/success', function(req, res) {

    res.render("success");

});

// login
router.get('/login', function(req, res) {
    res.render("login");
});

router.post('/login', function(req, res) {

    var requestedPwd = req.body.user_pwd;
    var requestedEmail = req.body.user_email;

    users.findAll({
            raw: true
        })
        .then(function(crud_data) {

            crud_data.forEach(function(index) {

                if (index.email === index.email && index.password === requestedPwd) {
                    res.redirect('/personal');
                }
            });


        })
});

//personal
router.get('/personal', function(req, res) {


    res.render("personal");

});

router.post('/personal', function(req, res) {

});

// main
router.get('/main', function(req, res) {


    res.render("main");

});

router.post('/main', function(req, res) {

});

// Export routes for server.js to use.
module.exports = router;
