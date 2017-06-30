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
    render(){
        return (
            <div className="standalone opened">
		<h1 className="step-2"></h1>
		<p>This form will allow users to fill in data pertaining to their health, which we will use in the app... all the time.</p>
		<form className="profile-creator">
			<h2></h2>
			<div>
			 	<label for="gender">Gender:</label>
				<select name="gender">
					<option value="empty-placeholder"></option>
					<option value="male">male</option>
					<option value="female">female</option>
				</select>
			</div>

			<div>
			 	<label for="age">Age:</label>
			 	<input type="number" name="age" min="0" max="100"></input>
		 	</div>

			<div>
		 		<label for="weight">Weight:</label>
				<input type="number" name="weight" min="0" max="600"></input>
			</div>
		 	
		 	<div>
			 	<label for="height-ft">Height:</label>
			 	<input type="number" name="height-ft" min="0" max="7"></input>
				<input type="number" name="height-in" min="0" max="12"></input>
			</div>

			<div>
			 	<label for="waist">Waist Circumference:</label>
			 	<input type="number" name="weight" min="0" max="100"></input>
			</div>

			<div>
		 		<label for="hip">Hip Circumference:</label>
		 		<input type="number" name="hip" min="0" max="100"></input>
		 	</div>

			<div>
		 		<label for="activity">Activity:</label>
			 	<select name="activity">
					<option value="empty-placeholder"></option>
					<option value="option1">option1</option>
					<option value="option2">option2</option>
				</select>
			</div>

			<div>
			 	<label for="exercise">Current Exercise Routine:</label>
			 	<select name="exercise">
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
