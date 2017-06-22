"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('content');

var InitialOutput = function (_React$Component) {
  _inherits(InitialOutput, _React$Component);

  function InitialOutput() {
    _classCallCheck(this, InitialOutput);

    return _possibleConstructorReturn(this, (InitialOutput.__proto__ || Object.getPrototypeOf(InitialOutput)).apply(this, arguments));
  }

  _createClass(InitialOutput, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "This is a placeholder for the initial output section."
        ),
        React.createElement(
          "div",
          null,
          "BMI"
        ),
        React.createElement(
          "div",
          null,
          "BODY FAT %"
        ),
        React.createElement(
          "div",
          null,
          "BMR"
        ),
        React.createElement(
          "div",
          null,
          "CALORIES A DAY"
        )
      );
    }
  }]);

  return InitialOutput;
}(React.Component);

var History = function (_React$Component2) {
  _inherits(History, _React$Component2);

  function History() {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).apply(this, arguments));
  }

  _createClass(History, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "This is a placeholder for the history section."
        ),
        React.createElement(
          "div",
          null,
          "CURRENT WEEK DISPLAY"
        ),
        React.createElement(
          "div",
          null,
          "DATE / CALORIES EATEN # / ITEMS (EX. STEAK - 679)"
        )
      );
    }
  }]);

  return History;
}(React.Component);

var UserGoals = function (_React$Component3) {
  _inherits(UserGoals, _React$Component3);

  function UserGoals() {
    _classCallCheck(this, UserGoals);

    return _possibleConstructorReturn(this, (UserGoals.__proto__ || Object.getPrototypeOf(UserGoals)).apply(this, arguments));
  }

  _createClass(UserGoals, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "This is a placeholder for the goals section."
        ),
        React.createElement(
          "div",
          null,
          "GOAL DISPLAY"
        ),
        React.createElement(
          "div",
          null,
          "USERS DISTANCE TO GOAL"
        )
      );
    }
  }]);

  return UserGoals;
}(React.Component);

var FoodSearch = function (_React$Component4) {
  _inherits(FoodSearch, _React$Component4);

  function FoodSearch() {
    _classCallCheck(this, FoodSearch);

    return _possibleConstructorReturn(this, (FoodSearch.__proto__ || Object.getPrototypeOf(FoodSearch)).apply(this, arguments));
  }

  _createClass(FoodSearch, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "You can look up the calories for any food here."
        ),
        React.createElement(
          "div",
          null,
          "CURRENT DATE DISPLAY"
        ),
        React.createElement(
          "div",
          null,
          "DATE / CALORIES LEFT # / + (ADD FOOR OR DRINK) / ALREADY ADDED ITEMS (EX. STEAK - 679)"
        )
      );
    }
  }]);

  return FoodSearch;
}(React.Component);

var Modal = function (_React$Component5) {
  _inherits(Modal, _React$Component5);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      // Render nothing if the "show" prop is false
      if (!this.props.show) {
        return null;
      }
      return React.createElement(
        "div",
        { className: "modal" },
        React.createElement(
          "div",
          { className: "modal-dialog" },
          React.createElement(
            "div",
            { className: "modal-content" },
            React.createElement(
              "div",
              { className: "modal-header" },
              React.createElement(
                "button",
                { type: "button", onClick: this.props.onClose, className: "close", "data-dismiss": "modal", "aria-hidden": "true" },
                "\xD7"
              ),
              React.createElement(
                "h4",
                { className: "modal-title" },
                "Modal title"
              )
            ),
            React.createElement(
              "div",
              { className: "modal-body" },
              React.createElement(
                "p",
                null,
                "One fine body\u2026"
              ),
              this.props.children
            ),
            React.createElement(
              "div",
              { className: "modal-footer" },
              React.createElement(
                "button",
                { onClick: this.props.onClose, type: "button", className: "btn btn-default", "data-dismiss": "modal" },
                "Close"
              ),
              React.createElement(
                "button",
                { type: "button", className: "btn btn-primary" },
                "Save changes"
              )
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(React.Component);

Modal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node
};

var CalorieTracker = function (_React$Component6) {
  _inherits(CalorieTracker, _React$Component6);

  function CalorieTracker(props) {
    _classCallCheck(this, CalorieTracker);

    var _this6 = _possibleConstructorReturn(this, (CalorieTracker.__proto__ || Object.getPrototypeOf(CalorieTracker)).call(this, props));

    _this6.state = { isOpen: false };
    _this6.toggleModal = _this6.toggleModal.bind(_this6);
    return _this6;
  }

  _createClass(CalorieTracker, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(FoodSearch, null),
        React.createElement(
          "div",
          { className: "form-group has-warning " },
          React.createElement(
            "form",
            null,
            React.createElement(
              "span",
              null,
              React.createElement(
                "label",
                { className: "control-label", "for": "inputWarning" },
                "Food Search:   "
              ),
              React.createElement("input", { size: "100", className: "" }),
              React.createElement(
                "a",
                null,
                React.createElement("i", { className: "fa fa-search", "aria-hidden": "true", type: "button" })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "label",
              { className: "control-label", "for": "inputSmall" },
              "Small input"
            ),
            React.createElement("input", { className: "form-control input-sm", type: "text", id: "inputSmall" }),
            React.createElement(
              "div",
              null,
              " Keep track of your caloric intake here!",
              React.createElement(
                "div",
                { className: "CalorieTracker" },
                React.createElement(
                  "button",
                  { type: "submit", onClick: this.toggleModal, href: "#", className: "btn btn-primary btn-sm" },
                  "add food"
                ),
                React.createElement(
                  Modal,
                  { show: this.state.isOpen,
                    onClose: this.toggleModal },
                  "Here's some content for the modal"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CalorieTracker;
}(React.Component);

var Dashboard = function (_React$Component7) {
  _inherits(Dashboard, _React$Component7);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "jumbotron", id: "jumbo" },
            React.createElement(
              "div",
              { className: "welcome", id: "welcome" },
              React.createElement(
                "h1",
                { className: "welcome" },
                "George"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-4" },
            React.createElement(
              "div",
              { className: "panel panel-default" },
              React.createElement(
                "div",
                { className: "panel-heading" },
                React.createElement(
                  "h2",
                  { "data-background-icon": "\uF2C2" },
                  "User Data"
                )
              ),
              React.createElement(
                "div",
                { className: "panel-body" },
                React.createElement(
                  "div",
                  { className: "InitialOutput" },
                  "Panel content",
                  React.createElement(InitialOutput, null)
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-8" },
            React.createElement(
              "div",
              { className: "panel panel-default" },
              React.createElement(
                "div",
                { className: "panel-heading" },
                React.createElement(
                  "h2",
                  { "data-background-icon": "\uF140" },
                  "Goals"
                )
              ),
              React.createElement(
                "div",
                { className: "panel-body" },
                React.createElement(
                  "div",
                  { className: "userGoals" },
                  "Panel content",
                  React.createElement(UserGoals, null)
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-4" },
            React.createElement(
              "div",
              { className: "panel panel-default" },
              React.createElement(
                "div",
                { className: "panel-heading" },
                React.createElement(
                  "h2",
                  { "data-background-icon": "\uF1DA" },
                  "History"
                )
              ),
              React.createElement(
                "div",
                { className: "panel-body" },
                React.createElement(
                  "div",
                  { className: "history" },
                  "Panel content",
                  React.createElement(History, null)
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-8" },
            React.createElement(
              "div",
              { className: "panel panel-default" },
              React.createElement(
                "div",
                { className: "panel-heading" },
                React.createElement(
                  "h2",
                  { "data-background-icon": "\uF08D" },
                  "Calorie Tracker"
                )
              ),
              React.createElement(
                "div",
                { className: "panel-body" },
                React.createElement(
                  "div",
                  { className: "calorieTracker" },
                  React.createElement(CalorieTracker, null)
                )
              )
            )
          )
        )
      ) //<!-- close container -->
      ;
    }
  }]);

  return Dashboard;
}(React.Component);

ReactDOM.render(React.createElement(Dashboard, null), contentNode); // Render the component inside the content Node