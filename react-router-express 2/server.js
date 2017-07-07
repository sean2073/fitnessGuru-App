
//Include React
var React = require("react");
// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require User Schema
var User = require("./models/User");
//var Profile = require("./src/components/utility/validateForm.js");
// Require our Formulas that determine the "userdata" portion of our application
var formulas = require("./public/fg.brian.formulas.js");
// Require the file which validates the input fields from our profile form
var validations = require("./app/config/utility/validateForm.js");
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
app.get("/profile/:id", function(req, res) {
  try {
    console.log(req.params.id)
    // userId = new mongoose.Types.ObjectId(req.params.id);
    // console.log("userid = " , userId);
  } catch (error) {
    console.log(error)
    res.status(422).json({message: `Invalid user ID format: $(error} `});
    return;
  }
  User.find({_id: req.params.id }).limit(1)
  .then(savedProfile => {
    res.json(savedProfile);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({message: `Internal Server Error: ${error}` });
  });
});

app.put("/profile/:id", function(req, res) {
  const newProfile = JSON.parse(req.body);
  console.log("New Profile: ", newProfile);
  User.findById(newProfile._id, (err, user) => {
    if (err) res.send(err);
    console.log('HERE\'S OUR USER:\t', user);
    
    // iterate over all properties and update as necessary
    for (let key in user._doc) {
        user._doc[key] = newProfile[key];
    }
    
    user.save(err => {
      if (err) {
        res.send(err); 
      }
      else {
        res.json({ message: 'User updated successfully.' });
      }
    });
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({message: `Internal Server Error: ${error}` });
    });
});

app.get("/goals/:id", function(req, res) {
  try {
    console.log(req.params.id)
   
  } catch (error) {
    console.log(error)
    res.status(422).json({message: `Invalid user ID format: $(error} `});
    return;
  }
  User.findOne({_id: req.params.id })
  .then((savedGoal) => {
    console.log("weight is ", savedGoal.toObject().weight);
    res.json(savedGoal);
    var newData = {};
    newData =
    savedGoal;
    console.log("New Data ", newData.weight);
    //var BMI = formulas.guru("BMI", { weight: 101, height_ft: 2, height_in: 4 });
    var bodyObject_BMI = { weight: savedGoal.toObject().weight, height_ft: savedGoal.toObject().ft, height_in: savedGoal.toObject().inch };
    var guru_Get_BMI = formulas.bmiCalc("guru", bodyObject_BMI);
    bodyObject_BMR = { gender: savedGoal.toObject().gender, age: savedGoal.toObject().age, weight: savedGoal.toObject().weight, height_ft: savedGoal.toObject().ft, height_in: savedGoal.toObject().inch};
    var BMR = formulas.bmrCalc("guru", bodyObject_BMR);
    var bodyObject_BodyFat = { gender: savedGoal.toObject().gender, weight: savedGoal.toObject().weight, waist: savedGoal.toObject().waist, wrist: savedGoal.toObject().wrist, hip: savedGoal.toObject().hip, forearm: savedGoal.toObject().forearm};
    var bodyFat = formulas.bodyFatCalc("guru", bodyObject_BodyFat);
    console.log("Your BMI is ", guru_Get_BMI);
    console.log("Your BMR is ", BMR);
    console.log("Your Body Fat % is ", bodyFat);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({message: `Internal Server Error: ${error}` });
  });
  


//var BMI = guru("BMI", { weight: req.params.weight, height_ft: req.params.ft, height_in: req.params.inch });
//console.log("Your BMI is ", BMI);
/*
  try {
    console.log(req.params.id)
    userId = new mongoose.Types.ObjectId(req.params.id);
  } catch (error) {
    console.log(error)
    res.status(422).json({message: `Invalid user ID format: $(error} `});
    return;
  }
  User.find({_id: req.params.id }).limit(1)
  .then(savedGoal => {
    res.json(savedGoal);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({message: `Internal Server Error: ${error}` });
  });
  */


app.put("/goals/:id", function(req, res) {
  let userId;
  try {
    userId = new mongoose.Types.ObjectId(req.params.id);
    console.log("userid = " , userId);
  } catch (error) {
    res.status(422).json({message: `Invalid user ID format: $(error} `});
    return;
  }

  const newGoal = req.body;


  User.update({_id: userId}, {_id: userId, goals: newGoal.goal, amount: newGoal.goalAmount }).then(  User.find({_id: userId }).limit(1)
  .then(savedGoal => {
    res.json(savedGoal);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({message: `Internal Server Error: ${error}` });

  }));
});

app.get("/dashboard/:id", function(req, res) {
  let userId;
  try {
    console.log(req.params.id)
    userId = new mongoose.Types.ObjectId(req.params.id);
    // console.log("userid = " , userId);
  } catch (error) {
    console.log(error)
    res.status(422).json({message: `Invalid user ID format: $(error} `});
    return;
  }
  User.find({_id: req.params.id }).limit(1)
  .then(savedDash => {
    res.json(savedDash);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({message: `Internal Server Error: ${error}` });

  });
  
});
});

app.listen(8081, function() {
  console.log('App started on port 8081');
});