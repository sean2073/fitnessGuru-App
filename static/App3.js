'use strict';

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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        ' This is a placeholder for the initial output section.'
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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        ' This is a placeholder for the history section.'
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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        ' This is a placeholder for the goals section.'
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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        ' You can look up the calories for any food here.'
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
    key: 'render',
    value: function render() {
      // Render nothing if the "show" prop is false
      if (!this.props.show) {
        return null;
      }
      // The gray background
      var backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
      };

      // The modal "window"
      var modalStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 500,
        minHeight: 300,
        margin: '0 auto',
        padding: 30
      };
      return React.createElement(
        'div',
        { className: 'backdrop', style: backdropStyle },
        React.createElement(
          'div',
          { className: 'modal', style: modalStyle },
          this.props.children,
          React.createElement(
            'div',
            { className: 'footer' },
            React.createElement(
              'button',
              { onClick: this.props.onClose },
              'Close'
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
    key: 'toggleModal',
    value: function toggleModal() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'Search for calories of your favorite foods here!',
        React.createElement(
          'label',
          null,
          'Food Search:'
        ),
        React.createElement('input', null),
        React.createElement(FoodSearch, null),
        React.createElement(
          'div',
          null,
          ' Keep track of your caloric intake here!',
          React.createElement(
            'div',
            { className: 'CalorieTracker' },
            React.createElement(
              'button',
              { type: 'submit', onClick: this.toggleModal, href: '#', className: 'btn btn-primary btn-sm' },
              'add food'
            ),
            React.createElement(
              Modal,
              { show: this.state.isOpen,
                onClose: this.toggleModal },
              'Here\'s some content for the modal'
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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'jumbotron' },
            React.createElement(
              'div',
              { className: 'welcome', id: 'welcome' },
              React.createElement(
                'h1',
                { className: 'welcome' },
                'Welcome George'
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement(
              'div',
              { className: 'panel panel-default' },
              React.createElement(
                'div',
                { className: 'panel-heading' },
                React.createElement(
                  'h2',
                  null,
                  'Initial Output'
                )
              ),
              React.createElement(
                'div',
                { className: 'panel-body' },
                React.createElement(
                  'div',
                  { className: 'InitialOutput' },
                  'Panel content',
                  React.createElement(InitialOutput, null)
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-8' },
            React.createElement(
              'div',
              { className: 'panel panel-default' },
              React.createElement(
                'div',
                { className: 'panel-heading' },
                React.createElement(
                  'h2',
                  null,
                  'George\'s Goals'
                )
              ),
              React.createElement(
                'div',
                { className: 'panel-body' },
                React.createElement(
                  'div',
                  { className: 'userGoals' },
                  'Panel content',
                  React.createElement(UserGoals, null)
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement(
              'div',
              { className: 'panel panel-default' },
              React.createElement(
                'div',
                { className: 'panel-heading' },
                React.createElement(
                  'h2',
                  null,
                  'History'
                )
              ),
              React.createElement(
                'div',
                { className: 'panel-body' },
                React.createElement(
                  'div',
                  { className: 'history' },
                  'Panel content',
                  React.createElement(History, null)
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-8' },
            React.createElement(
              'div',
              { className: 'panel panel-default' },
              React.createElement(
                'div',
                { className: 'panel-heading' },
                React.createElement(
                  'h2',
                  null,
                  'Calorie Tracker'
                )
              ),
              React.createElement(
                'div',
                { className: 'panel-body' },
                React.createElement(
                  'div',
                  { className: 'calorieTracker' },
                  'Panel content',
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