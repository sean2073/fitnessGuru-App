var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"
    ]
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
        },
        "Password should be longer."
         ]
  },
  dateCreated: { 
    type: Date, 
    default: Date.now 
  },
  profile: {
      gender: {
        type: String

      },
      age: {
        type: Number

      },
      weight: {

      },
      height: {

      },
      waist: {

      },
      hip: {

      },
      activity: {
        type: String

      },
      goals: {

      }
  },
  userData: {
    bmi: {

    },
    caloriesDaily: {
      
    },
    bodyFat: {

    },
    bmr: {

    }
  },
  goals: [{

  }]
});

var User = mongoose.model("User", UserSchema);
module.exports = User;