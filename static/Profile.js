"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById("content");

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(NewProfile, null)
      );
    }
  }]);

  return Profile;
}(React.Component);

var NewProfile = function (_React$Component2) {
  _inherits(NewProfile, _React$Component2);

  function NewProfile(props) {
    _classCallCheck(this, NewProfile);

    //this.gender = this.gender.bind(this);
    var _this2 = _possibleConstructorReturn(this, (NewProfile.__proto__ || Object.getPrototypeOf(NewProfile)).call(this, props));

    _this2.state = {
      gender: "",
      age: "",
      weight: "",
      height_ft: "",
      height_inch: "",
      waist: "",
      hip: "",
      activity: "",
      excercise: ""

    };
    console.log(_this2.state);

    _this2.handleGender = _this2.handleGender.bind(_this2);
    _this2.handleAge = _this2.handleAge.bind(_this2);
    _this2.handleWeight = _this2.handleWeight.bind(_this2);
    _this2.handleHeightFt = _this2.handleHeightFt.bind(_this2);
    _this2.handleHeightIn = _this2.handleHeightIn.bind(_this2);
    _this2.handleWaist = _this2.handleWaist.bind(_this2);
    _this2.handleHip = _this2.handleHip.bind(_this2);
    _this2.handleActivity = _this2.handleActivity.bind(_this2);
    _this2.handleExercise = _this2.handleExercise.bind(_this2);
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);

    return _this2;
  }

  _createClass(NewProfile, [{
    key: "handleGender",
    value: function handleGender(event) {
      this.setState({
        gender: event.target.value
      });
      console.log(this.state.gender);
    }
  }, {
    key: "handleAge",
    value: function handleAge(event) {
      this.setState({
        age: event.target.value
      });
      console.log(this.state.age);
    }
  }, {
    key: "handleWeight",
    value: function handleWeight(event) {
      this.setState({
        weight: event.target.value
      });
      console.log(this.state.weight);
    }
  }, {
    key: "handleHeightFt",
    value: function handleHeightFt(event) {
      this.setState({
        height_ft: event.target.value
      });
      console.log(this.state.height_ft);
    }
  }, {
    key: "handleHeightIn",
    value: function handleHeightIn(event) {
      this.setState({
        height_inch: event.target.value
      });
      console.log(this.state.height_inch);
    }
  }, {
    key: "handleWaist",
    value: function handleWaist(event) {
      this.setState({
        waist: event.target.value
      });
      console.log(this.state.waist);
    }
  }, {
    key: "handleHip",
    value: function handleHip(event) {
      this.setState({
        hip: event.target.value
      });
      console.log(this.state.hip);
    }
  }, {
    key: "handleActivity",
    value: function handleActivity(event) {
      this.setState({
        activity: event.target.value
      });
      console.log(this.state.activity);
    }
  }, {
    key: "handleExercise",
    value: function handleExercise(event) {
      this.setState({
        exercise: event.target.value
      });
      console.log(this.state.excercise);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      console.log("the state of gender is" + this.state.gender);
      var gender = this.state.gender;
      var age = this.state.age;
      var weight = this.state.weight;
      var height_ft = this.state.height_ft;
      var height_inch = this.state.height_inch;
      var hip = this.state.hip;
      var activity = this.state.activity;
      var exercise = this.state.exercise;
      console.log("Gender is ", gender);
      this.props.onProfileSubmit({ gender: gender, age: age, weight: weight, height_ft: height_ft, height_inch: height_inch, hip: hip, activity: activity, exercise: exercise });
      this.setState({
        //gender: "",
        //age: "",
        //weight: "",
        //height: "",
        //hip: "",
        //activity: "",
        //excercise: ""

      });
    }
  }, {
    key: "setValue",
    value: function setValue(field, event) {
      var object = {};
      object[field] = event.target.value;
      this.setState(object);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "standalone opened" },
        React.createElement("h1", { className: "step-2" }),
        React.createElement(
          "p",
          null,
          "This form will allow users to fill in data pertaining to their health, which we will use in the app... all the time."
        ),
        React.createElement(
          "form",
          { className: "profile-creator", onSubmit: this.handleSubmit },
          React.createElement("h2", null),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "gender" },
              "Gender:"
            ),
            React.createElement(
              "select",
              { name: "gender", value: this.state.gender, onChange: this.handleGender },
              React.createElement("option", { value: "empty-placeholder" }),
              React.createElement(
                "option",
                { value: "male" },
                "male"
              ),
              React.createElement(
                "option",
                { value: "female" },
                "female"
              )
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "age" },
              "Age:"
            ),
            React.createElement("input", { type: "number", name: "age", min: "0", max: "100", value: this.state.age, onChange: this.handleAge })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "weight" },
              "Weight:"
            ),
            React.createElement("input", { type: "number", name: "weight", min: "0", max: "600", value: this.state.weight, onChange: this.handleWeight })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "height-ft" },
              "Height:"
            ),
            React.createElement("input", { type: "number", name: "height_ft", min: "0", max: "7", value: this.state.height_ft, onChange: this.handleHeightFt }),
            React.createElement("input", { type: "number", name: "height_inch", min: "0", max: "12", value: this.state.height_inch, onChange: this.handleHeightIn })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "waist" },
              "Waist Circumference:"
            ),
            React.createElement("input", { type: "number", name: "waist", min: "0", max: "100", value: this.state.waist, onChange: this.handleWaist })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "hip" },
              "Hip Circumference:"
            ),
            React.createElement("input", { type: "number", name: "hip", min: "0", max: "100", value: this.state.hip, onChange: this.handleHip })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "activity" },
              "Activity:"
            ),
            React.createElement(
              "select",
              { name: "activity", value: this.state.activity, onChange: this.handleActivity },
              React.createElement("option", { value: "empty-placeholder" }),
              React.createElement(
                "option",
                { value: "option1" },
                "option1"
              ),
              React.createElement(
                "option",
                { value: "option2" },
                "option2"
              )
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "exercise" },
              "Current Exercise Routine:"
            ),
            React.createElement(
              "select",
              { name: "exercise", value: this.state.exercise, onChange: this.handleExercise },
              React.createElement("option", { value: "empty-placeholder" }),
              React.createElement(
                "option",
                { value: "option1" },
                "option1"
              ),
              React.createElement(
                "option",
                { value: "option2" },
                "option2"
              )
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement("input", { type: "submit", value: "Save Your Profile" })
          )
        )
      );
    }
  }]);

  return NewProfile;
}(React.Component);

ReactDOM.render(React.createElement(Profile, null), contentNode); // Render the component inside the content Node