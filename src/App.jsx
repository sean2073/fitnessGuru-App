const contentNode = document.getElementById('content');

class InitialOutput extends React.Component {
  render() {
    return (
      <div> This is a placeholder for the initial output section.</div>
    )
  }
}class History extends React.Component {
  render() {
    return (
      <div> This is a placeholder for the history section.</div>
    )
  }
}
class UserGoals extends React.Component {
  render() {
    return (
      <div> This is a placeholder for the goals section.</div>
    )
  }
}
class CalorieTracker extends React.Component {
  render() {
    return (
      <div> Keep track of your caloric intake here!
        <div class="addNewFood">        
          <a href="#" class="btn btn-primary btn-sm">Small button</a>
          </div>
        <span><i class="fa fa-search" aria-hidden="true">search</i></span>
      </div>
    )
  }
}
class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
   	 	<div className="row">
   	 		<div className="jumbotron">
   	 			<div className="welcome" id="welcome">
   	 				<h1 className="welcome">Welcome George</h1>
   	 			</div>
   	 		</div>
   	 	</div>
   		<div className="row">
   			<div className="col-md-4">
   				<div className="panel panel-default">
     					<div className="panel-heading">
   							<h2>Initial Output</h2>
   						</div>
     					<div className="panel-body">
       					<div className="InitialOutput">
       									Panel content
   											<InitialOutput />
       					</div>
     						</div>
             </div>
   			</div>
   			<div className="col-md-8">
   				<div className="panel panel-default">
     				<div className="panel-heading">
   							<h2>George's Goals</h2>
   					</div>
     			<div className="panel-body">
   					<div className="userGoals">
   								Panel content
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
   							<h2>History</h2>
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
   							<h2>Calorie Tracker</h2>
   					</div>
     			<div className="panel-body">
   					<div className="calorieTracker">
   								Panel content
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
