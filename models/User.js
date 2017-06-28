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
        type: Number
      },
      height: {
        type: Number
      },
      waist: {
        type: Number

      },
      hip: {
        type: Number
      },
      activity: {
        type: String

      },
      goals: [{
        description: {type:String},
        dateBegin: {type: Date},
        dateEnd: {type: Date}

  }]
  },
  userData: {
    bmi: {
      type: Number
    },
    caloriesDaily: {
      type: Number
    },
    bodyFat: {

    },
    bmr: {
      type: Number
    }
    
  }
  
});


var User = mongoose.model("User", UserSchema);
module.exports = User;