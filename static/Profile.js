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

	function NewProfile() {
		_classCallCheck(this, NewProfile);

		return _possibleConstructorReturn(this, (NewProfile.__proto__ || Object.getPrototypeOf(NewProfile)).apply(this, arguments));
	}

	_createClass(NewProfile, [{
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
					{ className: "profile-creator" },
					React.createElement("h2", null),
					React.createElement(
						"div",
						null,
						React.createElement(
							"label",
							{ "for": "gender" },
							"Gender:"
						),
						React.createElement(
							"select",
							{ name: "gender" },
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
							{ "for": "age" },
							"Age:"
						),
						React.createElement("input", { type: "number", name: "age", min: "0", max: "100" })
					),
					React.createElement(
						"div",
						null,
						React.createElement(
							"label",
							{ "for": "weight" },
							"Weight:"
						),
						React.createElement("input", { type: "number", name: "weight", min: "0", max: "600" })
					),
					React.createElement(
						"div",
						null,
						React.createElement(
							"label",
							{ "for": "height-ft" },
							"Height:"
						),
						React.createElement("input", { type: "number", name: "height-ft", min: "0", max: "7" }),
						React.createElement("input", { type: "number", name: "height-in", min: "0", max: "12" })
					),
					React.createElement(
						"div",
						null,
						React.createElement(
							"label",
							{ "for": "waist" },
							"Waist Circumference:"
						),
						React.createElement("input", { type: "number", name: "weight", min: "0", max: "100" })
					),
					React.createElement(
						"div",
						null,
						React.createElement(
							"label",
							{ "for": "hip" },
							"Hip Circumference:"
						),
						React.createElement("input", { type: "number", name: "hip", min: "0", max: "100" })
					),
					React.createElement(
						"div",
						null,
						React.createElement(
							"label",
							{ "for": "activity" },
							"Activity:"
						),
						React.createElement(
							"select",
							{ name: "activity" },
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
							{ "for": "exercise" },
							"Current Exercise Routine:"
						),
						React.createElement(
							"select",
							{ name: "exercise" },
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