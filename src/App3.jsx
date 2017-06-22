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
class FoodSearch extends React.Component {
  render() {
    return (
      <div> You can look up the calories for any food here.</div>
    )
  }
}
class Modal extends React.Component{
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };
    return (
      <div className="backdrop" style={backdropStyle}>
          <div className="modal" style={modalStyle}>
            {this.props.children}

            <div className="footer">
              <button onClick={this.props.onClose}>
                Close
              </button>
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

};
render() {
    return (
      <div>Search for calories of your favorite foods here!
        <label>Food Search:</label>
        <input></input>
        <FoodSearch />

      <div> Keep track of your caloric intake here!
        <div className="CalorieTracker">
          <button type="submit" onClick={this.toggleModal} href="#" className="btn btn-primary btn-sm">add food</button>
          <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
          </div>
      </div>
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
