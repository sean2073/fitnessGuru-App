import React from "react";
import { Link } from "react-router";

import NumInput from "./NumInput.jsx";
import DateInput from "./DateInput.jsx";




class Goals extends React.Component {
  constructor(props) {
    super(props);
    //this.gender = this.gender.bind(this);
    console.log(props.params)
    this.state = {
      newGoal: {
        _id: '',
        goal: "",
        goalAmount: null
      },
      invalidFields: {}
    };
    console.log(this.state);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.loadData();
    }
  }
  onChange(event, convertedValue) {
    const newGoal = Object.assign({}, this.state.newGoal);
    const value =
      convertedValue !== undefined ? convertedValue : event.target.value;
    newGoal[event.target.name] = value;
    this.setState({ newGoal });
  }
  onValidityChange(event, valid) {
    const invalidFields = Object.assign({}, this.state.invalidFields);
    if (!valid) {
      invalidFields[event.target.name] = true;
    } else {
      delete invalidFields[event.target.name];
    }
    this.setState({ invalidFields });
  }
  onSubmit(event) {
    event.preventDefault();
    if (Object.keys(this.state.invalidFields).length !== 0) {
      return;
    }
    console.log(this.state.newGoal)
    fetch(`/goals/${this.props.params.id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.newGoal)
    })
      .then(response => {
        if (response.ok) {
          response.json().then(updatedGoal => {
            console.log(updatedGoal[0])
            this.setState({newGoal: updatedGoal[0]});
            alert("Updated goals successfully. ");
          });
        } else {
          response.json().then(error => {
            alert(`Failed to update goals: ${error.message}`);
          });
        }
      })
      .catch(err => {
        alert(`Error in sending data to server: ${err.message}`);
      });
  }
  loadData() {
    fetch(`/goals/${this.props.params.id}`)
      .then(response => {
        if (response.ok) {
          response.json().then(newGoal => {
            console.log(newGoal[0])
            this.setState({newGoal: newGoal[0]});
          });
        } else {
          response.json().then(error => {
            alert(`Failed to fetch goal: ${error.message}`);
          });
        }
      })
      .catch(err => {
        alert(`Error in fetching data from server: ${err.message}`);
      });
  }

  render() {
    console.log(this.state)
    const newGoal = this.state.newGoal;
    // const validationMessage = Object.keys(this.state.invalidFields).length === 0 ? null
    //   : (<div className="error">Please correct invalid fields before submitting.</div>);
    return (
      <div className="standalone opened">
        <h1 className="step-2" />
        <p>
          This form helps users to specify what they would like to achieve through our application.
        </p>
        <form className="goal-creator" onSubmit={this.onSubmit}>
          <h2>
            ID: {newGoal._id}
          </h2>
          <div>
            <label htmlFor="goal">Goal:</label>
            <select
              name="goal"
              value={newGoal.goal}
              onChange={this.onChange}
            >
              <option value="empty-placeholder" />
              <option value="loseWeight">Lose Weight</option>
              <option value="gainWeight">Gain Weight</option>
            </select>
          </div>

          <div>
            <label htmlFor="goalAmt">How Much?</label>
            <NumInput
              type="number"
              name="goalAmount"
              min="0"
              max="100"
              value={newGoal.goalAmount}
              onChange={this.onChange}
            />
          </div>

            {/*{validationMessage}*/}
          

          <div>
            <input type="submit" value="Save Your Goals" />
          </div>
        </form>
      </div>
    );
  }
}

Goals.propTypes = {
  params: React.PropTypes.object.isRequired
};

// Export the component back for use in other files
module.exports = Goals;
