import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

// const About2 = () => {
//   return (
//     <>
//       <h1>this is about page</h1>
//       {/* <Outlet /> */}
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <h1>Hi from about class based component</h1>
        <Profile name={"first child"} no={1} />
        {/* <Profile name={"second child"} no={2} /> */}
      </>
    );
  }
}

export default About;
