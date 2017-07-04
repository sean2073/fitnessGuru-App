/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const contentNode = document.getElementById("content");
class InitialOutput extends React.Component {
  render() {
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
}
class History extends React.Component {
  render() {
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
}
class UserGoals extends React.Component {
  render() {
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
}
class FoodTableRow extends React.Component {
  render() {
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
}

class FoodModal extends React.Component {
  constructor(props) {
    super(props);
    console.log("PROPS");
    console.log(this.props);

    this.newCalorieRow = this.newCalorieRow.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  newCalorieRow(foodItemName) {

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
  handleClick(event) {
    console.log("I'm here");
    //console.log("food Item: ",foodItemName);
    //<<<<<<< HEAD
    //<<<<<<< HEAD
    // this.newCalorieRow(foodItemName);
    //=======
    // this.newCalorieRow(foodItemName);
    //>>>>>>> 42ca6ba731d384aff67e6f94c52894678e81b6d2
    //=======
    // <<<<<<< HEAD
    // this.newCalorieRow(foodItemName);
    // =======
    // this.newCalorieRow(foodItemName);
    // >>>>>>> 42ca6ba731d384aff67e6f94c52894678e81b6d2
    //>>>>>>> 6c10ddb4b6de0f08549a1aae101ab4122bde17bd
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

  render() {

    const modalStyle = {
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
    console.log(`Food Search Response Hits: ${this.props.foodSearchResponse.hits}`);
    let rowHits = this.props.foodSearchResponse.hits;

    if (!rowHits) {
      rowHits = [];
    }

    const foodNodes = rowHits.map((food, index) => {

      //<<<<<<< HEAD
      //<<<<<<< HEAD
      //   console.log("food Item: ",foodItemName);
      //
      // console.log("food Item: ",foodItemName);
      //>>>>>>> 42ca6ba731d384aff67e6f94c52894678e81b6d2
      //=======
      // <<<<<<< HEAD
      //   console.log("food Item: ",foodItemName);
      // =======
      // console.log("food Item: ",foodItemName);
      // >>>>>>> 42ca6ba731d384aff67e6f94c52894678e81b6d2
      //>>>>>>> 6c10ddb4b6de0f08549a1aae101ab4122bde17bd
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
            onClick: this.handleClick
          })
        )
      );
    });
    //<<<<<<< HEAD
    //<<<<<<< HEAD
    //const {foodItemName} = this.props.food.fields.brand_name;
    //=======
    // const {foodItemName} = this.props.food.fields.brand_name;
    //>>>>>>> 42ca6ba731d384aff67e6f94c52894678e81b6d2
    //=======
    // <<<<<<< HEAD
    //const {foodItemName} = this.props.food.fields.brand_name;
    // =======
    // const {foodItemName} = this.props.food.fields.brand_name;
    // >>>>>>> 42ca6ba731d384aff67e6f94c52894678e81b6d2
    //>>>>>>> 6c10ddb4b6de0f08549a1aae101ab4122bde17bd

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
            )
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
                  )
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
              )
            )
          )
        )
      )
    );
  }
}
FoodModal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node
};

class FoodSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      isOpen: false,
      value: "",
      id: "savefood",
      searchResults: {}
    };
    {
      /*this.state = { isOpen: false }; */
    }
    this.toggleFoodModal = this.toggleFoodModal.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.foodSearch = this.foodSearch.bind(this);
  }
  toggleFoodModal() {
    this.foodSearch();
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  foodSearch() {
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

    axios.get(`https://api.nutritionix.com/v1_1/search/${foodItem}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=72f3ed22&appKey=37030fdbef37ca11eaa7f4f557ccf345`).then(response => {
      this.setState({ searchResults: response.data });

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
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "label",
        { className: "control-label", htmlFor: "inputWarning" },
        "Food Search",
        " "
      ),
      " ",
      React.createElement(
        "h2",
        null,
        "You can look up the calories for any food here."
      ),
      React.createElement("br", null),
      React.createElement(
        "div",
        { className: "search-group" },
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
            className: "fa fa-search fa-3x",
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
}
class UpcSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      isOpen: false,
      upc: ""
    };
    {
      /*this.state = { isOpen: false }; */
    }
    this.toggleFoodModal = this.toggleFoodModal.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);
  }
  toggleFoodModal() {
    this.upcSearch();
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleChange7(event) {
    this.setState({ upc: event.target.value });
    console.log(this.state.upc);
  }
  upcSearch() {
    console.log(this.state.value);
    var upcItem = this.state.value;

    axios.get(`https://api.nutritionix.com/v1_1/search/${upcItem}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=72f3ed22&appKey=37030fdbef37ca11eaa7f4f557ccf345`).then(function (response) {
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
          rowHtml.append(`<td>${response.data.hits[i].fields.item_name}</td>`);
          rowHtml.append(`<td>${response.data.hits[i].fields.brand_name}</td>`);
          rowHtml.append(`<td>${response.data.hits[i].fields.nf_calories}</td>`);
          rowHtml.append(`<td>${response.data.hits[i].fields.nf_serving_size_qty}</td>`);
          rowHtml.append(`<td>${response.data.hits[i].fields.nf_serving_size_unit}</td>`);
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
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "label",
        { className: "control-label", htmlFor: "inputWarning" },
        "UPC Search \xA0"
      ),
      React.createElement(
        "h2",
        null,
        "You can also search by UPC Code."
      ),
      React.createElement(
        "div",
        { className: "search-group" },
        React.createElement("br", null),
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
            className: "fa fa-search fa-3x",
            "aria-hidden": "true",
            type: "button",
            onClick: this.toggleFoodModal
          })
        ),
        React.createElement(FoodModal, { show: this.state.isOpen, onClose: this.toggleFoodModal })
      )
    );
  }
}
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      brand: "",
      calory: "",
      serving1: "",
      serving2: ""
    };
    console.log(this.state);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
  }
  handleChange2(event) {
    this.setState({
      name: event.target.value
    });
    console.log(this.state.name);
  }
  handleChange3(event) {
    this.setState({ brand: event.target.value });
    console.log(this.state.brand);
  }
  handleChange4(event) {
    this.setState({ calory: event.target.value });
    console.log(this.state.calory);
  }
  handleChange5(event) {
    this.setState({ serving1: event.target.value });
    console.log(this.state.serving1);
  }
  handleChange6(event) {
    this.setState({ serving2: event.target.value });
    console.log(this.state.serving2);
  }
  addToCalorieTracker() {

    var foodName = $("#inputItemName").val().trim();
    var brandName = $("#inputBrandName").val().trim();
    var calories = $("#inputCalories").val().trim();
    var servingSizeQ = $("#inputServingSizeQuantity").val().trim();
    var servingSizeU = $("#inputServingSizeUnit").val().trim();
    console.log("The food name is " + foodName);

    var rowHtml = $("<tr>");
    rowHtml.append(`<td>${foodName}</td>`);
    rowHtml.append(`<td>${brandName}</td>`);
    rowHtml.append(`<td>${calories}</td>`);
    rowHtml.append(`<td>${servingSizeQ}</td>`);
    rowHtml.append(`<td>${servingSizeU}</td>`);
    rowHtml.append('<td><i id="deleteFood" class="fa fa-minus-circle" aria-hidden="true"></i></td>');

    $("#calorieTrackerBody").append(rowHtml);
  }

  render() {
    const modalStyle = {
      display: "block"

    };
    const modalStyle2 = {
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
}
Modal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node
};
class CalorieTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          "Keep track of your caloric intake here!"
        ),
        React.createElement(
          "div",
          { className: "calorieDiv" },
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
                )
              )
            ),
            React.createElement("tbody", { id: "calorieTrackerBody" })
          )
        )
      ),
      React.createElement(
        "div",
        { className: "calorieDiv" },
        React.createElement(FoodSearch, null)
      ),
      React.createElement(
        "div",
        { className: "calorieDiv" },
        React.createElement(UpcSearch, null)
      )
    );
  }
}
class Dashboard extends React.Component {
  render() {
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
}
ReactDOM.render(React.createElement(Dashboard, null), contentNode); // Render the component inside the content Node

/***/ })
/******/ ]);