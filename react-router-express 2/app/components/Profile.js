import React from "react";
import { Link } from "react-router";

import NumInput from "./NumInput.jsx";
import DateInput from "./DateInput.jsx";



class Profile extends React.Component {
  render() {
    return (
      <div>
        <NewProfile params={{id: "595b7252946c508fa1a5ad3a"}} />
      </div>
    );
  }
}
Profile.propTypes = {
  params: React.PropTypes.object.isRequired,
};
class NewProfile extends React.Component {
  constructor(props) {
    super(props);
    //this.gender = this.gender.bind(this);
    console.log(props.params)
    this.state = {
      newProfile: {
        _id: '',
        gender: "",
        age: null,
        weight: null,
        height_ft: null,
        height_inch: null,
        waist: null,
        hip: null,
        wrist: null,
        forearm: null,
        activity: "",
        excercise: ""
      },
      invalidFields: {}
    };
    console.log(this.state);

    this.handleGender = this.handleGender.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleHeightFt = this.handleHeightFt.bind(this);
    this.handleHeightIn = this.handleHeightIn.bind(this);
    this.handleWaist = this.handleWaist.bind(this);
    this.handleHip = this.handleHip.bind(this);
    this.handleWrist = this.handleWrist.bind(this);
    this.handleForearm = this.handleForearm.bind(this);
    this.handleActivity = this.handleActivity.bind(this);
    this.handleExercise = this.handleExercise.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
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
    const newProfile = Object.assign({}, this.state.newProfile);
    const value =
      convertedValue !== undefined ? convertedValue : event.target.value;
    newProfile[event.target.name] = value;
    this.setState({ newProfile });
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
    console.log(this.state.newProfile)
    fetch(`/profile/${this.props.params.id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.newProfile)
    })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            console.log('data returned:', data);
          });
        } else {
          response.json().then(error => {
            alert(`Failed to update profile: ${error.message}`);
          });
        }
      })
      .catch(err => {
        alert(`Error in sending data to server: ${err.message}`);
      });
  }
  loadData() {
    fetch(`/profile/${this.props.params.id}`)
      .then(response => {
        if (response.ok) {
          response.json().then(newProfile => {
            console.log(newProfile[0])
            this.setState({newProfile: newProfile[0]});
          });
        } else {
          response.json().then(error => {
            alert(`Failed to fetch new profile: ${error.message}`);
          });
        }
      })
      .catch(err => {
        alert(`Error in fetching data from server: ${err.message}`);
      });
  }

  handleGender(event) {
    this.setState({
      gender: event.target.value
    });
    console.log(this.state.gender);
  }

  handleAge(event) {
    this.setState({
      age: event.target.value
    });
    console.log(this.state.age);
  }
  handleWeight(event) {
    this.setState({
      weight: event.target.value
    });
    console.log(this.state.weight);
  }
  handleHeightFt(event) {
    this.setState({
      height_ft: event.target.value
    });
    console.log(this.state.height_ft);
  }
  handleHeightIn(event) {
    this.setState({
      height_inch: event.target.value
    });
    console.log(this.state.height_inch);
  }
  handleWaist(event) {
    this.setState({
      waist: event.target.value
    });
    console.log(this.state.waist);
  }
  handleHip(event) {
    this.setState({
      hip: event.target.value
    });
    console.log(this.state.hip);
  }
  handleWrist(event) {
    this.setState({
      wrist: event.target.value
    });
    console.log(this.state.wrist);
  }
  handleForearm(event) {
    this.setState({
      forearm: event.target.value
    });
    console.log(this.state.forearm);
  }
  handleActivity(event) {
    this.setState({
      activity: event.target.value
    });
    console.log(this.state.activity);
  }
  handleExercise(event) {
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

  render() {
    console.log(this.state)
    const newProfile = this.state.newProfile;
    // const validationMessage = Object.keys(this.state.invalidFields).length === 0 ? null
    //   : (<div className="error">Please correct invalid fields before submitting.</div>);
    return (
      <div className="standalone opened">
        <h1 className="step-2" />
        <p>
          This form will allow users to fill in data pertaining to their health,
          which we will use in the app... all the time.
        </p>
        <form className="profile-creator" onSubmit={this.onSubmit}>
          <h2>
            ID: {newProfile._id}
          </h2>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              value={newProfile.gender}
              onChange={this.onChange}
            >
              <option value="empty-placeholder" />
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <NumInput
              type="number"
              name="age"
              min="0"
              max="100"
              value={newProfile.age}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label htmlFor="weight">Weight:</label>
            <NumInput
              type="number"
              name="weight"
              min="0"
              max="600"
              value={newProfile.weight}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label htmlFor="height_ft">Height:</label>
            <NumInput
              type="number"
              name="height_ft"
              min="0"
              max="7"
              value={newProfile.height_ft}
              onChange={this.onChange}
            />
            <NumInput
              type="number"
              name="height_inch"
              min="0"
              max="12"
              value={newProfile.height_inch}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label htmlFor="waist">Waist Circumference:</label>
            <NumInput
              type="number"
              name="waist"
              min="0"
              max="100"
              value={newProfile.waist}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label htmlFor="hip">Hip Circumference:</label>
            <NumInput
              type="number"
              name="hip"
              min="0"
              max="100"
              value={newProfile.hip}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label htmlFor="hip">Wrist:</label>
            <NumInput
              type="number"
              name="wrist"
              min="0"
              max="100"
              value={newProfile.wrist}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label htmlFor="hip">Forearm:</label>
            <NumInput
              type="number"
              name="forearm"
              min="0"
              max="100"
              value={newProfile.forearm}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label htmlFor="activity">Activity:</label>
            <select
              name="activity"
              value={newProfile.activity}
              onChange={this.onChange}
            >
              <option value="empty-placeholder" />
              <option value="option1">option1</option>
              <option value="option2">option2</option>
            </select>
          </div>

          <div>
            <label htmlFor="exercise">Current Exercise Routine:</label>
            <select
              name="exercise"
              value={newProfile.exercise}
              onChange={this.onChange}
            >
              <option value="empty-placeholder" />
              <option value="option1">option1</option>
              <option value="option2">option2</option>
            </select>
            <br /> 
            {/*{validationMessage}*/}
          </div>

          <div>
            <input type="submit" value="Save Your Profile" />
          </div>
          <div>
            <button  className="search btn btn-warning"><Link to="/goals">Submish</Link></button>
            </div>
        </form>
      </div>
    );
  }
}

NewProfile.propTypes = {
  params: React.PropTypes.object.isRequired
};

// Export the component back for use in other files
module.exports = Profile;
