import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(`child constructor ${this.props.no}`);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  componentDidMount() {
    console.log(`Child ${this.props.no} componentDidMount`);
    this.timer = setInterval(() => {
      console.log("react is op");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("updated");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component will unmount");
  }
  render() {
    console.log(`child render ${this.props.no}`);
    return (
      <>
        <h1>{this.props.name}</h1>
        <h2>no = {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          button
        </button>
        <h2>no = {this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count2: 4,
            });
          }}
        >
          button
        </button>
      </>
    );
  }
}
export default Profile;
