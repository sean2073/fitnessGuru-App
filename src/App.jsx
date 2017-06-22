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
      <div> You can look up the calories for any food here.
        <br />
      </div>
    )
  }
}
class UpcSearch extends React.Component {
  render() {
    return (
      <div> <br />
      You can also search by UPC Code.
        <br />
      </div>
    )
  }
}
class Modal extends React.Component{
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" onClick={this.props.onClose} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 className="modal-title">Modal title</h4>
      </div>
      <div className="modal-body">
        <p>One fine body…</p>
        {this.props.children}
      </div>
      <div className="modal-footer">
        <button onClick={this.props.onClose} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
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

};
render() {
    return (
      <div>
        <FoodSearch />
        <br />

        <div className="form-group has-warning ">

          <label className="control-label" for="inputWarning">Food Search:   </label>
          {/*<input type="text" className="form-control " id="inputWarning"  ></input>*/}
          <input size="100" className=""></input><a>
            <i className="fa fa-search" aria-hidden="true" type="button"></i></a>
            <div>
              <UpcSearch />
              <br />
            <label className="control-label" for="inputWarning">UPC Search:  &nbsp;</label>
            {/*<input type="text" className="form-control " id="inputWarning"  ></input>*/}
            <input size="100" className=""></input><a>
              <i className="fa fa-search" aria-hidden="true" type="button"></i></a>









      <div>
        <br />
        Keep track of your caloric intake here!
        <div className="CalorieTracker">
          <button type="submit" onClick={this.toggleModal} href="#" className="btn btn-primary btn-sm">add food</button>
          <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
          </div>
      </div>
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
