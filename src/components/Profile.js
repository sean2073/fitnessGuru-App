// "use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _NumInput = require("./NumInput.jsx");

var _NumInput2 = _interopRequireDefault(_NumInput);

var _DateInput = require("./DateInput.jsx");

var _DateInput2 = _interopRequireDefault(_DateInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(NewProfile, null)
      );
    }
  }]);

  return Profile;
}(_react2.default.Component);

var NewProfile = function (_React$Component2) {
  _inherits(NewProfile, _React$Component2);

  function NewProfile(props) {
    _classCallCheck(this, NewProfile);

    //this.gender = this.gender.bind(this);
    var _this2 = _possibleConstructorReturn(this, (NewProfile.__proto__ || Object.getPrototypeOf(NewProfile)).call(this, props));

    _this2.state = {
      newProfile: {
        gender: "",
        age: "",
        weight: "",
        height_ft: "",
        height_inch: "",
        waist: "",
        hip: "",
        wrist: "",
        forearm: "",
        activity: "",
        excercise: ""
      }
    };
    console.log(_this2.state);

    _this2.handleGender = _this2.handleGender.bind(_this2);
    _this2.handleAge = _this2.handleAge.bind(_this2);
    _this2.handleWeight = _this2.handleWeight.bind(_this2);
    _this2.handleHeightFt = _this2.handleHeightFt.bind(_this2);
    _this2.handleHeightIn = _this2.handleHeightIn.bind(_this2);
    _this2.handleWaist = _this2.handleWaist.bind(_this2);
    _this2.handleHip = _this2.handleHip.bind(_this2);
    _this2.handleWrist = _this2.handleWrist.bind(_this2);
    _this2.handleForearm = _this2.handleForearm.bind(_this2);
    _this2.handleActivity = _this2.handleActivity.bind(_this2);
    _this2.handleExercise = _this2.handleExercise.bind(_this2);
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    _this2.onSubmit = _this2.onSubmit.bind(_this2);
    return _this2;
  }

  _createClass(NewProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.params.id !== this.props.params.id) {
        this.loadData();
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event, convertedValue) {
      var newProfile = Object.assign({}, this.state.newProfile);
      var value = convertedValue !== undefined ? convertedValue : event.target.value;
      newProfile[event.target.name] = value;
      this.setState({ newProfile: newProfile });
    }
  }, {
    key: "onValidityChange",
    value: function onValidityChange(event, valid) {
      var invalidFields = Object.assign({}, this.state.invalidFields);
      if (!valid) {
        invalidFields[event.target.name] = true;
      } else {
        delete invalidFields[event.target.name];
      }
      this.setState({ invalidFields: invalidFields });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      var _this3 = this;

      event.preventDefault();
      if (Object.keys(this.state.invalidFields).length !== 0) {
        return;
      }
      fetch("/profile/" + this.props.params.id, {
        method: "PUT",
        body: JSON.stringify(this.state.newProfile)
      }).then(function (response) {
        if (response.ok) {
          response.json().then(function (updatedProfile) {
            _this3.setState({ newProfile: updatedProfile });
            alert("Updated profile successfully. ");
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to update profile: " + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in sending data to server: " + err.message);
      });
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this4 = this;

      fetch("/profile/" + this.props.params.id).then(function (response) {
        if (response.ok) {
          response.json().then(function (newProfile) {
            _this4.setState({ newProfile: newProfile });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch issue: " + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server: " + err.message);
      });
    }
  }, {
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
    key: "handleWrist",
    value: function handleWrist(event) {
      this.setState({
        wrist: event.target.value
      });
      console.log(this.state.wrist);
    }
  }, {
    key: "handleForearm",
    value: function handleForearm(event) {
      this.setState({
        forearm: event.target.value
      });
      console.log(this.state.forearm);
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
    /*
      handleSubmit(e) {
          e.preventDefault();
          console.log("the state of gender is" + this.state.gender);
          var gender = this.state.gender;
          var age = this.state.age;
          var weight = this.state.weight;
          var height_ft = this.state.height_ft;
          var height_inch = this.state.height_inch;
          var hip = this.state.hip;
          var wrist = this.state.wrist;
          var forearm = this.state.forearm;
          var activity = this.state.activity;
          var exercise = this.state.exercise;
          console.log("Gender is ", gender);
          this.props.onProfileSubmit({gender: gender, age: age, weight: weight, height_ft: height_ft, height_inch: height_inch, hip: hip, activity: activity, exercise: exercise});
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
      setValue(field, event){
          var object = {};
          object[field] = event.target.value;
          this.setState(object);
      }
      */

  }, {
    key: "render",
    value: function render() {
      var newProfile = this.state.newProfile;
      var validationMessage = Object.keys(this.state.invalidFields).length === 0 ? null : _react2.default.createElement(
        "div",
        { className: "error" },
        "Please correct invalid fields before submitting."
      );
      return _react2.default.createElement(
        "div",
        { className: "standalone opened" },
        _react2.default.createElement("h1", { className: "step-2" }),
        _react2.default.createElement(
          "p",
          null,
          "This form will allow users to fill in data pertaining to their health, which we will use in the app... all the time."
        ),
        _react2.default.createElement(
          "form",
          { className: "profile-creator", onSubmit: this.onSubmit },
          _react2.default.createElement(
            "h2",
            null,
            "ID: ",
            newProfile._id
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "gender" },
              "Gender:"
            ),
            _react2.default.createElement(
              "select",
              {
                name: "gender",
                value: newProfile.gender,
                onChange: this.onChange
              },
              _react2.default.createElement("option", { value: "empty-placeholder" }),
              _react2.default.createElement(
                "option",
                { value: "male" },
                "male"
              ),
              _react2.default.createElement(
                "option",
                { value: "female" },
                "female"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "age" },
              "Age:"
            ),
            _react2.default.createElement(_NumInput2.default, {
              type: "number",
              name: "age",
              min: "0",
              max: "100",
              value: newProfile.age,
              onChange: this.onChange
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "weight" },
              "Weight:"
            ),
            _react2.default.createElement(_NumInput2.default, {
              type: "number",
              name: "weight",
              min: "0",
              max: "600",
              value: newProfile.weight,
              onChange: this.onChange
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "height_ft" },
              "Height:"
            ),
            _react2.default.createElement(_NumInput2.default, {
              type: "number",
              name: "height_ft",
              min: "0",
              max: "7",
              value: newProfile.height_ft,
              onChange: this.onChange
            }),
            _react2.default.createElement(_NumInput2.default, {
              type: "number",
              name: "height_inch",
              min: "0",
              max: "12",
              value: newProfile.height_inch,
              onChange: this.onChange
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "waist" },
              "Waist Circumference:"
            ),
            _react2.default.createElement(_NumInput2.default, {
              type: "number",
              name: "waist",
              min: "0",
              max: "100",
              value: newProfile.waist,
              onChange: this.onChange
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "hip" },
              "Hip Circumference:"
            ),
            _react2.default.createElement(_NumInput2.default, {
              type: "number",
              name: "hip",
              min: "0",
              max: "100",
              value: newProfile.hip,
              onChange: this.onChange
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "hip" },
              "Wrist:"
            ),
            _react2.default.createElement(_NumInput2.default, {
              type: "number",
              name: "wrist",
              min: "0",
              max: "100",
              value: newProfile.wrist,
              onChange: this.onChange
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "hip" },
              "Forearm:"
            ),
            _react2.default.createElement(_NumInput2.default, {
              type: "number",
              name: "forearm",
              min: "0",
              max: "100",
              value: newProfile.forearm,
              onChange: this.onChange
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "activity" },
              "Activity:"
            ),
            _react2.default.createElement(
              "select",
              {
                name: "activity",
                value: newProfile.activity,
                onChange: this.onChange
              },
              _react2.default.createElement("option", { value: "empty-placeholder" }),
              _react2.default.createElement(
                "option",
                { value: "option1" },
                "option1"
              ),
              _react2.default.createElement(
                "option",
                { value: "option2" },
                "option2"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "label",
              { htmlFor: "exercise" },
              "Current Exercise Routine:"
            ),
            _react2.default.createElement(
              "select",
              {
                name: "exercise",
                value: newProfile.exercise,
                onChange: this.onChange
              },
              _react2.default.createElement("option", { value: "empty-placeholder" }),
              _react2.default.createElement(
                "option",
                { value: "option1" },
                "option1"
              ),
              _react2.default.createElement(
                "option",
                { value: "option2" },
                "option2"
              )
            ),
            _react2.default.createElement("br", null),
            validationMessage
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("input", { type: "submit", value: "Save Your Profile" })
          )
        )
      );
    }
  }]);

  return NewProfile;
}(_react2.default.Component);

ReactDOM.render(_react2.default.createElement(Profile, null), contentNode); // Render the component inside the content Node