const contentNode = document.getElementById("content");
class Profile extends React.Component {
    render(){
        return (
            <div>
                <NewProfile />
            </div>

        );

    }
}
class NewProfile extends React.Component {
    constructor(props) {
    super(props);
    //this.gender = this.gender.bind(this);
    this.state = {
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
    console.log(this.state);
    
    this.handleGender = this.handleGender.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleHeightFt = this.handleHeightFt.bind(this);
    this.handleHeightIn = this.handleHeightIn.bind(this);
    this.handleWaist = this.handleWaist.bind(this);
    this.handleHip = this.handleHip.bind(this);
    this.handleActivity = this.handleActivity.bind(this);
    this.handleExercise = this.handleExercise.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
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
    
    handleSubmit(e) {
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
        


    
    render(){
        return (
            <div className="standalone opened">
		<h1 className="step-2"></h1>
		<p>This form will allow users to fill in data pertaining to their health, which we will use in the app... all the time.</p>
		<form className="profile-creator" onSubmit={this.handleSubmit}>
			<h2></h2>
			<div>
			 	<label htmlFor="gender">Gender:</label>
				<select name="gender" value={this.state.gender} onChange={this.handleGender}>
					<option value="empty-placeholder"></option>
					<option value="male">male</option>
					<option value="female">female</option>
				</select>
			</div>

			<div>
			 	<label htmlFor="age">Age:</label>
			 	<input type="number" name="age" min="0" max="100" value={this.state.age} onChange={this.handleAge}></input>
		 	</div>

			<div>
		 		<label htmlFor="weight">Weight:</label>
				<input type="number" name="weight" min="0" max="600" value={this.state.weight} onChange={this.handleWeight}></input>
			</div>
		 	
		 	<div>
			 	<label htmlFor="height-ft">Height:</label>
			 	<input type="number" name="height_ft" min="0" max="7" value={this.state.height_ft} onChange={this.handleHeightFt}></input>
				<input type="number" name="height_inch" min="0" max="12" value={this.state.height_inch} onChange={this.handleHeightIn}></input>
			</div>

			<div>
			 	<label htmlFor="waist">Waist Circumference:</label>
			 	<input type="number" name="waist" min="0" max="100" value={this.state.waist} onChange={this.handleWaist}></input>
			</div>

			<div>
		 		<label htmlFor="hip">Hip Circumference:</label>
		 		<input type="number" name="hip" min="0" max="100" value={this.state.hip} onChange={this.handleHip}></input>
		 	</div>

			<div>
		 		<label htmlFor="activity">Activity:</label>
			 	<select name="activity" value={this.state.activity} onChange={this.handleActivity}>
					<option value="empty-placeholder"></option>
					<option value="option1">option1</option>
					<option value="option2">option2</option>
				</select>
			</div>

			<div>
			 	<label htmlFor="exercise">Current Exercise Routine:</label>
			 	<select name="exercise" value={this.state.exercise} onChange={this.handleExercise}>
					<option value="empty-placeholder"></option>
					<option value="option1">option1</option>
					<option value="option2">option2</option>
				</select>
			</div>

			<div>
				<input type="submit" value="Save Your Profile"></input>
			</div>
		</form>
	</div>

        );

    }
}
ReactDOM.render(<Profile />, contentNode); // Render the component inside the content Node
