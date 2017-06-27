const contentNode = document.getElementById("content");
class InitialOutput extends React.Component {
  render() {
    return (
      <div className="user-data">
        <div>user bmi #</div>
        <div>user body fat %</div>
        <div>user bmr #</div>
        <div>user calories a day #</div>
      </div>
    );
  }
}
class History extends React.Component {
  render() {
    return (
      <div>
        <div>This is a placeholder for the history section.</div>
        <div>CURRENT WEEK DISPLAY</div>
        <div>DATE / CALORIES EATEN # / ITEMS (EX. STEAK - 679)</div>
      </div>
    );
  }
}
class UserGoals extends React.Component {
  render() {
    return (
      <div className="goals">

        <div className="current-goals">

          <div className="holder">
            <div className="goal">Gain 10 pounds of muscle</div>
            <div className="c-date">6 / 24 / 17</div>
            <div className="status">
              <div className="bar-outer">
                <div className="bar-inner bar-5" />
              </div>
            </div>
          </div>

        </div>

        <div className="achieved-goals">
          <div className="holder">
            <div className="goal">Lose 10 pounds</div>
            <div className="c-date">1 / 1 / 17</div>
          </div>
        </div>

      </div>
    );
  }
}
class FoodModal extends React.Component {
  render() {
    const modalStyle = {
      display: "block"
    };

    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" style={modalStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                onClick={this.props.onClose}
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title">Food Search</h4>
            </div>
            <div className="modal-body">
              {this.props.children}
              <table className="table table-striped table-hover ">
                <thead>
                  <tr>

                    <th>Item Name</th>
                    <th>Brand Name</th>
                    <th>Calories</th>
                    <th>Serving Size Quantity</th>
                    <th>Serving Size Unit</th>
                    <th />
                  </tr>
                </thead>
                <tbody id="foodSearchBody">
                  <tr>
                    {/*
                    <td id="modalItemName">{this.foodItem}</td>
                    <td id="modalBrandName">Column content</td>
                    <td id="modalCalories">Column content</td>
                    <td id="modalServingSizeQ">Column content</td>
                    <td id="modalServingSizeU">Column content</td>
                 */}
                  </tr>
                </tbody>
              </table>

            </div>

            <div className="modal-footer">
              <button
                onClick={this.props.onClose}
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
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
      id: "savefood"
    };
    {
      /*this.state = { isOpen: false }; */
    }
    this.toggleFoodModal = this.toggleFoodModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  toggleFoodModal() {
    this.foodSearch();
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }
  
 handleClick(event){
   console.log("I'm here");
   this.setState({id: event.target.id});
  
   console.log(this.state.id);
   $("#calorieTrackerBody").append("#foodSearchBody");
 }
  
  foodSearch() {
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
    axios
      .get(
        `https://api.nutritionix.com/v1_1/search/${foodItem}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=72f3ed22&appKey=37030fdbef37ca11eaa7f4f557ccf345`
      )
      .then(function(response) {
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

            console.log(
              "Brand Name: " + response.data.hits[i].fields.brand_name
            );
            console.log(
              "Food Search Calories = " +
                response.data.hits[i].fields.nf_calories
            );
            console.log(
              "Serving Size Quantity = " +
                response.data.hits[i].fields.nf_serving_size_qty
            );
            console.log(
              "Serving Size Unit = " +
                response.data.hits[i].fields.nf_serving_size_unit +
                " \n "
            );

            var rowHtml = $("<tr>");
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
          }
        }
        if (response) {
          return response.data.hits[0].fields.item_name;
        }
        // If we don't get any results, return an empty string
        return "";
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {" "}<h2>You can look up the calories for any food here.</h2>
        <br />
        <div className="form-group has-warning ">

          <label className="control-label" htmlFor="inputWarning">
            Food Search:{" "}
          </label>

          <input
            size="100"
            className=""
            name="foodname"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <a>
            <i
              className="fa fa-search"
              aria-hidden="true"
              type="button"
              onClick={this.toggleFoodModal}
            />
          </a>
          <FoodModal show={this.state.isOpen} onClose={this.toggleFoodModal}>
            {/*Here's some content for the modal*/}
          </FoodModal>
        </div>
      </div>
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

    axios
      .get(
        `https://api.nutritionix.com/v1_1/search/${upcItem}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=72f3ed22&appKey=37030fdbef37ca11eaa7f4f557ccf345`
      )
      .then(function(response) {
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

            console.log(
              "Brand Name: " + response.data.hits[i].fields.brand_name
            );
            console.log(
              "Food Search Calories = " +
                response.data.hits[i].fields.nf_calories
            );
            console.log(
              "Serving Size Quantity = " +
                response.data.hits[i].fields.nf_serving_size_qty
            );
            console.log(
              "Serving Size Unit = " +
                response.data.hits[i].fields.nf_serving_size_unit +
                " \n "
            );

            var rowHtml = $("<tr>");
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
              '<td><i id="savefood" type="button" class="fa fa-plus-square" aria-hidden="true" onClick={this.moveToCalorieTracker}></i></td>'
            );

            $("#foodSearchBody").append(rowHtml);
          }
        }
        if (response) {
          return response.data.hits[0].fields.item_name;
        }
        // If we don't get any results, return an empty string
        return "";
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="form-group has-warning ">
        <h2>You can also search by UPC Code.</h2>
        <br />
        {/*
        <div>You can look up the calories for any food here.</div>
        <div>CURRENT DATE DISPLAY</div>
        <div>
          DATE / CALORIES LEFT # / + (ADD FOOR OR DRINK) / ALREADY ADDED ITEMS
          (EX. STEAK - 679)
        </div>
        {" "}
        
    */}
        <label className="control-label" htmlFor="inputWarning">
          UPC Search: &nbsp;
        </label>
        {/*<input type="text" className="form-control " id="inputWarning"  ></input>*/}
        <input
          size="100"
          className=""
          value={this.state.upc}
          onChange={this.handleChange7}
        />
        <a>
          <i
            className="fa fa-search"
            aria-hidden="true"
            type="button"
            onClick={this.toggleFoodModal}
          />
        </a>
        <FoodModal show={this.state.isOpen} onClose={this.toggleFoodModal}>
          {/*Here's some content for the modal*/}
        </FoodModal>

      </div>
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
    rowHtml.append(
      '<td><i id="deleteFood" class="fa fa-minus-circle" aria-hidden="true"></i></td>'
    );

    $("#calorieTrackerBody").append(rowHtml);
  }

  render() {
    const modalStyle = {
      display: "block"
    };

    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" style={modalStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                onClick={this.props.onClose}
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title">Add Food to Calorie Tracker</h4>
            </div>
            <div className="modal-body">
              {this.props.children}

              {/*
              <p>One fine body…</p>
              <label>Item Name:</label><input></input><br />
              <label>Brand Name:</label><input></input><br />
              <label>Calories:</label><input></input><br />
              <label>Calorie Unit:</label><input></input>*/}
              <form name="modalForm">
                <div className="form-group">

                  <div className="row">
                    <div className="col-lg-2">
                      <label htmlFor="inputItemName" className="control-label">
                        Item Name
                      </label>
                    </div>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputItemName"
                        placeholder="e.g. T Bone Steak"
                        value={this.state.name}
                        onChange={this.handleChange2}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-2">
                      <label htmlFor="inputBrandName" className="control-label">
                        Brand Name
                      </label>
                    </div>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputBrandName"
                        value={this.state.brand}
                        onChange={this.handleChange3}
                        placeholder="e.g. Peter Leuger's Steak House"
                      />
                    </div>
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-lg-2">
                      <label htmlFor="inputCalories" className="control-label">
                        Calories
                      </label>
                    </div>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputCalories"
                        placeholder="e.g. 1050"
                        value={this.state.calory}
                        onChange={this.handleChange4}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-2">
                      <label
                        htmlFor="inputServingSizeQuantity"
                        className="control-label"
                      >
                        Serving Size Quantity
                      </label>
                    </div>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputServingSizeQuantity"
                        value={this.state.serving1}
                        onChange={this.handleChange5}
                        placeholder="e.g. 1"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-2">
                      <label
                        htmlFor="inputServingSizeUnit"
                        className="control-label"
                      >
                        Serving Size Unit
                      </label>
                    </div>
                    <div className="col-lg-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputServingSizeUnit"
                        placeholder="e.g. serving"
                        value={this.state.serving2}
                        onChange={this.handleChange6}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                onClick={this.props.onClose}
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.addToCalorieTracker}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
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
    return (
      <div>
        <FoodSearch />

        <div>
          <UpcSearch />

          <div>
            
            <hr />
            <h1><b>Keep track of your caloric intake here!</b></h1>
            <div className="CalorieTracker">
              <button
                type="submit"
                onClick={this.toggleModal}
                href="#"
                className="btn btn-primary btn-sm"
              >
                add food
              </button>
              <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                {/*Here's some content for the modal*/}
              </Modal>

              <table className="table table-striped table-hover ">
                <thead>
                  <tr>

                    <th>Item Name</th>
                    <th>Brand Name</th>
                    <th>Calories</th>
                    <th>Serving Size Quantity</th>
                    <th>Serving Size Unit</th>
                    <th />
                  </tr>
                </thead>
                <tbody id="calorieTrackerBody">
                  <tr>
                    {/*}
                    //<td id="contentItemName">Column content</td>
                    //<td id="contentBrandName">Column content</td>
                    //<td id="contentCalories">Column content</td>
                    //<td id="contentServingSizeQ">Column content</td>
                    //<td id="contentServingSizeU">Column content</td>
*/}
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron" id="jumbo">
            <div className="welcome" id="welcome">
              <h1 className="welcome">George</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 data-background-icon="&#xf2c2;">User Data</h2>
              </div>
              <div className="panel-body">
                <div className="InitialOutput">

                  <InitialOutput />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 data-background-icon="&#xf140;">Goals</h2>
              </div>
              <div className="panel-body">
                <div className="userGoals">

                  <UserGoals />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 data-background-icon="&#xf1da;">History</h2>
              </div>
              <div className="panel-body">
                <div className="history">
                  Panel content
                  <History />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 data-background-icon="&#xf08d;">Calorie Tracker</h2>
              </div>
              <div className="panel-body">
                <div className="calorieTracker">

                  <CalorieTracker />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> //<!-- close container -->
    );
  }
}
ReactDOM.render(<Dashboard />, contentNode); // Render the component inside the content Node
