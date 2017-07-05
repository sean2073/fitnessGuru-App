

// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require History Schema
var User = require("./models/User");
import Profile from './src/components/utility/validateForm.js';


// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
app.use(express.static('static'));

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)

//mongoose.connect("mongodb://localhost/fitnessguru");
mongoose.connect("mongodb://Patrick316:marvingaye316@ds127802.mlab.com:27802/fitnessguru");

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


//--------------------------------------------------
/*
mongoose.connect("mongodb://Patrick316:marvingaye316@ds127802.mlab.com:27802/fitnessguru", function(err,db) {
  db.users.find().toArray(function(err, docs) {
    console.log('Result of find: ', docs);
    db.close();
  });

});
*/
// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/static/index.html");
});
app.get("/users", function(req, res) {
  // Find all users in the users collection with our User model
  User.find({}, function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to the browser
    else {
      res.send(doc);
    }
  });
});
app.put("/profile/:id", function(req, res) {
  let userId;
  try {
    userId = new ObjectId(req.params.id);
    console.log("userid = " , userId);
  } catch (error) {
    res.status(422).json({message: `Invalid user ID format: $(error} `});
    return;
  }

  const newProfile = req.body;
  /*
  newProfile.gender = "female";
  newProfile.age = 42;
  newProfile.hip = 54;
  newProfile.waist = 49;
  newProfile.heightFt = 6;
  newProfile.heightIn = 11;
  newProfile.weight = 195;
  activity = "none";
  exercise = "none";
  */
  const err = Profile.validateProfile(newProfile)
  if (err) {
    res.status(422).json({message: `Invalid Request: $(err)`});
    return;
  }
  db.collection('User').update({_id: userId, gender: gender, age: age, weight: weight, height_ft: height_ft, height_inch: height_inch, waist: waist, hip: hip, wrist: wrist, forearm: forearm, activity: activity, exercise: excercise },
  //convertProfile(newProfile)).then(() =>
  db.collection('User').find({_id: userId }).limit(1)
  .next()
  ).then(savedProfile => {
    res.json(savedProfile);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({message: `Internal Server Error: ${error}` });

  });
});
  
// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  /*History.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

*/

});

app.listen(8081, function() {
  console.log('App started on port 8081');
});