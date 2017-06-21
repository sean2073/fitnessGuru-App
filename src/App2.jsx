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
      <div> This is a placeholder for the calorie tracker section.</div>
    )
  }
}
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome George!</h1>
        <InitialOutput  />
        <hr />
        <History  />
        <hr />
        <UserGoals  />
        <hr />
        <CalorieTracker />
      </div>
    );
  }
}
ReactDOM.render(<Dashboard />, contentNode); // Render the component inside the content Node
