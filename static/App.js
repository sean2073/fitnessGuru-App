"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById("content");

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
        { className: "user-data" },
        React.createElement(
          "div",
          null,
          "user bmi #"
        ),
        React.createElement(
          "div",
          null,
          "user body fat %"
        ),
        React.createElement(
          "div",
          null,
          "user bmr #"
        ),
        React.createElement(
          "div",
          null,
          "user calories a day #"
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
        { className: "goals" },
        React.createElement(
          "div",
          { className: "current-goals" },
          React.createElement(
            "div",
            { className: "holder" },
            React.createElement(
              "div",
              { className: "goal" },
              "Gain 10 pounds of muscle"
            ),
            React.createElement(
              "div",
              { className: "c-date" },
              "6 / 24 / 17"
            ),
            React.createElement(
              "div",
              { className: "status" },
              React.createElement(
                "div",
                { className: "bar-outer" },
                React.createElement("div", { className: "bar-inner bar-5" })
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "achieved-goals" },
          React.createElement(
            "div",
            { className: "holder" },
            React.createElement(
              "div",
              { className: "goal" },
              "Lose 10 pounds"
            ),
            React.createElement(
              "div",
              { className: "c-date" },
              "1 / 1 / 17"
            )
          )
        )
      );
    }
  }]);

  return UserGoals;
}(React.Component);

var FoodTableRow = function (_React$Component4) {
  _inherits(FoodTableRow, _React$Component4);

  function FoodTableRow() {
    _classCallCheck(this, FoodTableRow);

    return _possibleConstructorReturn(this, (FoodTableRow.__proto__ || Object.getPrototypeOf(FoodTableRow)).apply(this, arguments));
  }

  _createClass(FoodTableRow, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      // let foodNode = this.props.foodSearchResponse.data.hits.map(food => {
      //   console.log("food ", food);
      //   return (
      //      <td id="modalItemName">{this.foodItem}</td>
      //                 <td id="modalBrandName">Column content</td>
      //                 <td id="modalCalories">Column content</td>
      //                 <td id="modalServingSizeQ">Column content</td>
      //                 <td id="modalServingSizeU">Column content</td>
      //   )
      // });
    }
  }]);

  return FoodTableRow;
}(React.Component);

var FoodModal = function (_React$Component5) {
  _inherits(FoodModal, _React$Component5);

  function FoodModal(props) {
    _classCallCheck(this, FoodModal);

    var _this5 = _possibleConstructorReturn(this, (FoodModal.__proto__ || Object.getPrototypeOf(FoodModal)).call(this, props));

    console.log("PROPS");
    console.log(_this5.props);

    _this5.newCalorieRow = _this5.newCalorieRow.bind(_this5);
    _this5.handleClick = _this5.handleClick.bind(_this5);
    return _this5;
  }

  _createClass(FoodModal, [{
    key: "newCalorieRow",
    value: function newCalorieRow(foodItemName) {

      React.createElement(
        "tr",
        null,
        "//  ",
        React.createElement("td", { id: "contentItemName" }),
        "// ",
        React.createElement(
          "td",
          { id: "contentBrandName" },
          this.props.foodBrandName
        ),
        "//  ",
        React.createElement(
          "td",
          { id: "contentCalories" },
          this.props.foodCalories
        ),
        "//  ",
        React.createElement(
          "td",
          { id: "contentServingSizeQ" },
          this.props.foodServingSizeQ
        ),
        "//  ",
        React.createElement(
          "td",
          { id: "contentServingSizeU" },
          this.props.foodServingSzieU
        ),
        "//  ",
        React.createElement(
          "td",
          null,
          React.createElement("i", { id: "deleteFood", "class": "fa fa-minus-circle", "aria-hidden": "true" })
        ),
        "'"
      );
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      console.log("I'm here");
      //console.log("food Item: ",foodItemName);
      // this.newCalorieRow(foodItemName);
      /* <td id="modalItemName">{food.fields.item_name}</td>
             <td id="modalBrandName">{food.fields.brand_name}</td>
             <td id="modalCalories">{food.fields.nf_calories}</td>
             <td id="modalServingSizeQ">{food.fields.nf_serving_size_qty}</td>
             <td id="modalServingSizeU">{food.fields.nf_serving_size_unit}</td>
       */
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          { id: "contentItemName" },
          " foodItemName"
        )
      );
      /*
                      //<td id="contentBrandName">Column content</td>
                      //<td id="contentCalories">Column content</td>
                      //<td id="contentServingSizeQ">Column content</td>
                      //<td id="contentServingSizeU">Column content</td>
      /*
      < NewCalorieRow foodItemName="{this.food.fields.item_name}"
        foodBrandName="{this.food.fields.brand_name}"
        foodCalories="{this.food.fields.nf_calories}"
        foodServingSizeQ="{this.food.fields.nf_serving_size_qty}"
        foodServingSzieU="{this.food.fields.nf_serving_size_unit}" />
       */
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var modalStyle = {
        display: "block"
      };
      // Render nothing if the "show" prop is false
      if (!this.props.show) {
        return null;
      }
      console.log("FoodModal Props: ");
      console.log(this.props);
      // const indexNum = [{"num1": 0, "num2": 1, "num3": 2, "num4": 3, "num5": 4, "num6": 5, "num7": 6, "num8": 7, "num9": 8, "num10": 9}];
      //const hitNum = indexNum.map((hit) =>
      //<li key={hit.num1} />);

      // console.log("the index should be: " , hitNum);
      //console.log(this.props.foodSearchResponse.hits[0]);


      //var foodNodes = this.props.foodSearchResponse.hits[hitNum].map(food => {
      console.log("Food Search Response Hits: " + this.props.foodSearchResponse.hits);
      var rowHits = this.props.foodSearchResponse.hits;

      if (!rowHits) {
        rowHits = [];
      }

      var foodNodes = rowHits.map(function (food, index) {

        //   console.log("food Item: ",foodItemName);
        console.log("food ", food);
        console.log("rowhits = ", foodNodes);
        console.log("test if right " + food.fields.brand_name);
        return React.createElement(
          "tr",
          { key: index, className: "{index}" },
          React.createElement(
            "td",
            { id: "modalItemName" },
            food.fields.item_name
          ),
          React.createElement(
            "td",
            { id: "modalBrandName" },
            food.fields.brand_name
          ),
          React.createElement(
            "td",
            { id: "modalCalories" },
            food.fields.nf_calories
          ),
          React.createElement(
            "td",
            { id: "modalServingSizeQ" },
            food.fields.nf_serving_size_qty
          ),
          React.createElement(
            "td",
            { id: "modalServingSizeU" },
            food.fields.nf_serving_size_unit
          ),
          React.createElement(
            "td",
            null,
            React.createElement("i", {
              id: "savefood",
              type: "button",
              className: "fa fa-plus-square",
              "aria-hidden": "true",
              onClick: _this6.handleClick
            })
          )
        );
      });
      //const {foodItemName} = this.props.food.fields.brand_name;

      return React.createElement(
        "div",
        { className: "modal", style: modalStyle },
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
                {
                  type: "button",
                  onClick: this.props.onClose,
                  className: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true"
                },
                "\xD7"
              ),
              React.createElement(
                "h4",
                { className: "modal-title" },
                "Food Search"
              ),
              React.createElement(
                "div",
                { className: "modal-body" },
                this.props.children,
                React.createElement(
                  "table",
                  { className: "table table-striped table-hover " },
                  React.createElement(
                    "thead",
                    null,
                    React.createElement(
                      "tr",
                      { className: "calorieTrackerRow" },
                      React.createElement(
                        "th",
                        null,
                        "Item Name"
                      ),
                      React.createElement(
                        "th",
                        null,
                        "Brand Name"
                      ),
                      React.createElement(
                        "th",
                        null,
                        "Calories"
                      ),
                      React.createElement(
                        "th",
                        null,
                        "Serving Size Quantity"
                      ),
                      React.createElement(
                        "th",
                        null,
                        "Serving Size Unit"
                      ),
                      React.createElement("th", null)
                    )
                  ),
                  React.createElement(
                    "tbody",
                    { id: "foodSearchBody" },
                    foodNodes
                  )
                ),
                React.createElement(
                  "div",
                  { className: "modal-footer" },
                  React.createElement(
                    "button",
                    {
                      onClick: this.props.onClose,
                      type: "button",
                      className: "btn btn-default",
                      "data-dismiss": "modal"
                    },
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
          )
        )
      );
    }
  }]);

  return FoodModal;
}(React.Component);

FoodModal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node
};

var FoodSearch = function (_React$Component6) {
  _inherits(FoodSearch, _React$Component6);

  function FoodSearch(props) {
    _classCallCheck(this, FoodSearch);

    var _this7 = _possibleConstructorReturn(this, (FoodSearch.__proto__ || Object.getPrototypeOf(FoodSearch)).call(this, props));

    _this7.state = {
      foods: [],
      isOpen: false,
      value: "",
      id: "savefood",
      searchResults: {}
    };
    {
      /*this.state = { isOpen: false }; */
    }
    _this7.toggleFoodModal = _this7.toggleFoodModal.bind(_this7);
    _this7.handleChange = _this7.handleChange.bind(_this7);

    _this7.foodSearch = _this7.foodSearch.bind(_this7);
    return _this7;
  }

  _createClass(FoodSearch, [{
    key: "toggleFoodModal",
    value: function toggleFoodModal() {
      this.foodSearch();
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
      console.log(this.state.value);
    }
  }, {
    key: "foodSearch",
    value: function foodSearch() {
      var _this8 = this;

      var searchResThing;
      {
        /*
        var foodItem = "T Bone Steak";
        */
      }
      console.log(this.state.value);
      var foodItem = this.state.value;
      {
        /* Sean's Key
        `https://api.nutritionix.com/v1_1/search/${foodItem}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=ab42c57c&appKey=a47f6ab0f0fc20d89c26c58fb6db580d`
        Pat's Key
        https://api.nutritionix.com/v1_1/search/${foodItem}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=44c1633e&appKey=93531e417a6ec2b7669086a543d4624c`
        Brian's Key
        `https://api.nutritionix.com/v1_1/search/${foodItem}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=72f3ed22&appKey=37030fdbef37ca11eaa7f4f557ccf345`
        */
      }

      axios.get("https://api.nutritionix.com/v1_1/search/" + foodItem + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=72f3ed22&appKey=37030fdbef37ca11eaa7f4f557ccf345").then(function (response) {
        _this8.setState({ searchResults: response.data });

        {
          console.log(response);
          // console.log(response.data.hits["0"].fields.item_name);
          for (var i = 0; i < 10; i++) {
            console.log("Item Name: " + response.data.hits[i].fields.item_name);
            {
              /*
              modalItemName = response.data.hits[i].fields.item_name;
              */
            }

            console.log("Brand Name: " + response.data.hits[i].fields.brand_name);
            console.log("Food Search Calories = " + response.data.hits[i].fields.nf_calories);
            console.log("Serving Size Quantity = " + response.data.hits[i].fields.nf_serving_size_qty);
            console.log("Serving Size Unit = " + response.data.hits[i].fields.nf_serving_size_unit + " \n ");

            /*var rowHtml = $("<tr>");
            rowHtml.append(
              `<td>${response.data.hits[i].fields.item_name}</td>`
            );
            rowHtml.append(
              `<td>${response.data.hits[i].fields.brand_name}</td>`
            );
            rowHtml.append(
              `<td>${response.data.hits[i].fields.nf_calories}</td>`
            );
            rowHtml.append(
              `<td>${response.data.hits[i].fields.nf_serving_size_qty}</td>`
            );
            rowHtml.append(
              `<td>${response.data.hits[i].fields.nf_serving_size_unit}</td>`
            );
            rowHtml.append(
              '<td><i id="savefood" type="button" class="fa fa-plus-square" aria-hidden="true" onClick={this.handleClick}></i></td>'
            );
             $("#foodSearchBody").append(rowHtml);
            */
          }
        }
        if (response) {
          return response.data.hits[0].fields.item_name;
        }
        // If we don't get any results, return an empty string
        return "";
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        " ",
        React.createElement(
          "h2",
          null,
          "You can look up the calories for any food here."
        ),
        React.createElement("br", null),
        React.createElement(
          "div",
          { className: "form-group has-warning " },
          React.createElement(
            "label",
            { className: "control-label", htmlFor: "inputWarning" },
            "Food Search:",
            " "
          ),
          React.createElement("input", {
            size: "100",
            className: "",
            name: "foodname",
            value: this.state.value,
            onChange: this.handleChange
          }),
          React.createElement(
            "a",
            null,
            React.createElement("i", {
              className: "fa fa-search",
              "aria-hidden": "true",
              type: "button",
              onClick: this.toggleFoodModal
            })
          ),
          React.createElement(FoodModal, {
            foodSearchResponse: this.state.searchResults,
            show: this.state.isOpen,
            onClose: this.toggleFoodModal
          })
        )
      );
    }
  }]);

  return FoodSearch;
}(React.Component);

var UpcSearch = function (_React$Component7) {
  _inherits(UpcSearch, _React$Component7);

  function UpcSearch(props) {
    _classCallCheck(this, UpcSearch);

    var _this9 = _possibleConstructorReturn(this, (UpcSearch.__proto__ || Object.getPrototypeOf(UpcSearch)).call(this, props));

    _this9.state = {
      foods: [],
      isOpen: false,
      upc: ""
    };
    {
      /*this.state = { isOpen: false }; */
    }
    _this9.toggleFoodModal = _this9.toggleFoodModal.bind(_this9);
    _this9.handleChange7 = _this9.handleChange7.bind(_this9);
    return _this9;
  }

  _createClass(UpcSearch, [{
    key: "toggleFoodModal",
    value: function toggleFoodModal() {
      this.upcSearch();
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: "handleChange7",
    value: function handleChange7(event) {
      this.setState({ upc: event.target.value });
      console.log(this.state.upc);
    }
  }, {
    key: "upcSearch",
    value: function upcSearch() {
      console.log(this.state.value);
      var upcItem = this.state.value;

      axios.get("https://api.nutritionix.com/v1_1/search/" + upcItem + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=72f3ed22&appKey=37030fdbef37ca11eaa7f4f557ccf345").then(function (response) {
        {
          console.log(response);
          console.log(response.data.hits["0"].fields.item_name);
          for (var i = 0; i < 10; i++) {
            console.log("Item Name: " + response.data.hits[i].fields.item_name);
            {
              /*
              modalItemName = response.data.hits[i].fields.item_name;
              */
            }

            console.log("Brand Name: " + response.data.hits[i].fields.brand_name);
            console.log("Food Search Calories = " + response.data.hits[i].fields.nf_calories);
            console.log("Serving Size Quantity = " + response.data.hits[i].fields.nf_serving_size_qty);
            console.log("Serving Size Unit = " + response.data.hits[i].fields.nf_serving_size_unit + " \n ");

            var rowHtml = $("<tr>");
            rowHtml.append("<td>" + response.data.hits[i].fields.item_name + "</td>");
            rowHtml.append("<td>" + response.data.hits[i].fields.brand_name + "</td>");
            rowHtml.append("<td>" + response.data.hits[i].fields.nf_calories + "</td>");
            rowHtml.append("<td>" + response.data.hits[i].fields.nf_serving_size_qty + "</td>");
            rowHtml.append("<td>" + response.data.hits[i].fields.nf_serving_size_unit + "</td>");
            rowHtml.append('<td><i id="savefood" type="button" class="fa fa-plus-square" aria-hidden="true" onClick={this.moveToCalorieTracker}></i></td>');

            $("#foodSearchBody").append(rowHtml);
          }
        }
        if (response) {
          return response.data.hits[0].fields.item_name;
        }
        // If we don't get any results, return an empty string
        return "";
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "form-group has-warning " },
        React.createElement(
          "h2",
          null,
          "You can also search by UPC Code."
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          { className: "control-label", htmlFor: "inputWarning" },
          "UPC Search: \xA0"
        ),
        React.createElement("input", {
          size: "100",
          className: "",
          value: this.state.upc,
          onChange: this.handleChange7
        }),
        React.createElement(
          "a",
          null,
          React.createElement("i", {
            className: "fa fa-search",
            "aria-hidden": "true",
            type: "button",
            onClick: this.toggleFoodModal
          })
        ),
        React.createElement(FoodModal, { show: this.state.isOpen, onClose: this.toggleFoodModal })
      );
    }
  }]);

  return UpcSearch;
}(React.Component);

var Modal = function (_React$Component8) {
  _inherits(Modal, _React$Component8);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this10 = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this10.state = {
      name: "",
      brand: "",
      calory: "",
      serving1: "",
      serving2: ""
    };
    console.log(_this10.state);
    _this10.handleChange2 = _this10.handleChange2.bind(_this10);
    _this10.handleChange3 = _this10.handleChange3.bind(_this10);
    _this10.handleChange4 = _this10.handleChange4.bind(_this10);
    _this10.handleChange5 = _this10.handleChange5.bind(_this10);
    _this10.handleChange6 = _this10.handleChange6.bind(_this10);
    return _this10;
  }

  _createClass(Modal, [{
    key: "handleChange2",
    value: function handleChange2(event) {
      this.setState({
        name: event.target.value
      });
      console.log(this.state.name);
    }
  }, {
    key: "handleChange3",
    value: function handleChange3(event) {
      this.setState({ brand: event.target.value });
      console.log(this.state.brand);
    }
  }, {
    key: "handleChange4",
    value: function handleChange4(event) {
      this.setState({ calory: event.target.value });
      console.log(this.state.calory);
    }
  }, {
    key: "handleChange5",
    value: function handleChange5(event) {
      this.setState({ serving1: event.target.value });
      console.log(this.state.serving1);
    }
  }, {
    key: "handleChange6",
    value: function handleChange6(event) {
      this.setState({ serving2: event.target.value });
      console.log(this.state.serving2);
    }
  }, {
    key: "addToCalorieTracker",
    value: function addToCalorieTracker() {
      var foodName = $("#inputItemName").val().trim();
      var brandName = $("#inputBrandName").val().trim();
      var calories = $("#inputCalories").val().trim();
      var servingSizeQ = $("#inputServingSizeQuantity").val().trim();
      var servingSizeU = $("#inputServingSizeUnit").val().trim();
      console.log("The food name is " + foodName);

      var rowHtml = $("<tr>");
      rowHtml.append("<td>" + foodName + "</td>");
      rowHtml.append("<td>" + brandName + "</td>");
      rowHtml.append("<td>" + calories + "</td>");
      rowHtml.append("<td>" + servingSizeQ + "</td>");
      rowHtml.append("<td>" + servingSizeU + "</td>");
      rowHtml.append('<td><i id="deleteFood" class="fa fa-minus-circle" aria-hidden="true"></i></td>');

      $("#calorieTrackerBody").append(rowHtml);
    }
  }, {
    key: "render",
    value: function render() {
      var modalStyle = {
        display: "block"

      };
      var modalStyle2 = {
        maxWidth: 900,
        minHeight: 700

      };

      // Render nothing if the "show" prop is false
      if (!this.props.show) {
        return null;
      }
      return React.createElement(
        "div",
        { className: "modal", style: modalStyle },
        React.createElement(
          "div",
          { className: "modal-dialog" },
          ">",
          React.createElement(
            "div",
            { className: "modal-content" },
            React.createElement(
              "div",
              { className: "modal-header" },
              React.createElement(
                "button",
                {
                  type: "button",
                  onClick: this.props.onClose,
                  className: "close",
                  "data-dismiss": "modal",
                  "aria-hidden": "true"
                },
                "\xD7"
              ),
              React.createElement(
                "h4",
                { className: "modal-title" },
                "Add Food to Calorie Tracker"
              )
            ),
            React.createElement(
              "div",
              { className: "modal-body" },
              this.props.children,
              React.createElement(
                "form",
                { name: "modalForm" },
                React.createElement(
                  "div",
                  { className: "form-group" },
                  React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                      "div",
                      { className: "col-lg-2" },
                      React.createElement(
                        "label",
                        { htmlFor: "inputItemName", className: "control-label" },
                        "Item Name"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-lg-10" },
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputItemName",
                        placeholder: "e.g. T Bone Steak",
                        value: this.state.name,
                        onChange: this.handleChange2
                      })
                    )
                  ),
                  React.createElement("br", null),
                  React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                      "div",
                      { className: "col-lg-2" },
                      React.createElement(
                        "label",
                        { htmlFor: "inputBrandName", className: "control-label" },
                        "Brand Name"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-lg-10" },
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputBrandName",
                        value: this.state.brand,
                        onChange: this.handleChange3,
                        placeholder: "e.g. Peter Leuger's Steak House"
                      })
                    )
                  ),
                  React.createElement("br", null),
                  React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                      "div",
                      { className: "col-lg-2" },
                      React.createElement(
                        "label",
                        { htmlFor: "inputCalories", className: "control-label" },
                        "Calories"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-lg-10" },
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputCalories",
                        placeholder: "e.g. 1050",
                        value: this.state.calory,
                        onChange: this.handleChange4
                      })
                    )
                  ),
                  React.createElement("br", null),
                  React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                      "div",
                      { className: "col-lg-2" },
                      React.createElement(
                        "label",
                        {
                          htmlFor: "inputServingSizeQuantity",
                          className: "control-label"
                        },
                        "Serving Size Quantity"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-lg-10" },
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputServingSizeQuantity",
                        value: this.state.serving1,
                        onChange: this.handleChange5,
                        placeholder: "e.g. 1"
                      })
                    )
                  ),
                  React.createElement("br", null),
                  React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                      "div",
                      { className: "col-lg-2" },
                      React.createElement(
                        "label",
                        {
                          htmlFor: "inputServingSizeUnit",
                          className: "control-label"
                        },
                        "Serving Size Unit"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-lg-10" },
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        id: "inputServingSizeUnit",
                        placeholder: "e.g. serving",
                        value: this.state.serving2,
                        onChange: this.handleChange6
                      })
                    )
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "modal-footer" },
              React.createElement(
                "button",
                {
                  onClick: this.props.onClose,
                  type: "button",
                  className: "btn btn-default",
                  "data-dismiss": "modal"
                },
                "Close"
              ),
              React.createElement(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: this.addToCalorieTracker
                },
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

var CalorieTracker = function (_React$Component9) {
  _inherits(CalorieTracker, _React$Component9);

  function CalorieTracker(props) {
    _classCallCheck(this, CalorieTracker);

    var _this11 = _possibleConstructorReturn(this, (CalorieTracker.__proto__ || Object.getPrototypeOf(CalorieTracker)).call(this, props));

    _this11.state = { isOpen: false };
    _this11.toggleModal = _this11.toggleModal.bind(_this11);
    return _this11;
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
          null,
          React.createElement(UpcSearch, null),
          React.createElement(
            "div",
            null,
            React.createElement("hr", null),
            React.createElement(
              "h1",
              null,
              React.createElement(
                "b",
                null,
                "Keep track of your caloric intake here!"
              )
            ),
            React.createElement(
              "div",
              { className: "CalorieTracker" },
              React.createElement(
                "button",
                {
                  type: "submit",
                  onClick: this.toggleModal,
                  href: "#",
                  className: "btn btn-primary btn-sm"
                },
                "add food"
              ),
              React.createElement(Modal, { show: this.state.isOpen, onClose: this.toggleModal }),
              React.createElement(
                "table",
                { className: "table table-striped table-hover " },
                React.createElement(
                  "thead",
                  null,
                  React.createElement(
                    "tr",
                    null,
                    React.createElement(
                      "th",
                      null,
                      "Item Name"
                    ),
                    React.createElement(
                      "th",
                      null,
                      "Brand Name"
                    ),
                    React.createElement(
                      "th",
                      null,
                      "Calories"
                    ),
                    React.createElement(
                      "th",
                      null,
                      "Serving Size Quantity"
                    ),
                    React.createElement(
                      "th",
                      null,
                      "Serving Size Unit"
                    ),
                    React.createElement("th", null)
                  )
                ),
                React.createElement(
                  "tbody",
                  { id: "calorieTrackerBody" },
                  React.createElement("tr", null)
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

var Dashboard = function (_React$Component10) {
  _inherits(Dashboard, _React$Component10);

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