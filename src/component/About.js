import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import userContext from "../utils/userContext";

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
        {/* //to use usecontext in class based component //we have to use
        userContext as component //inside consumer it takes a jsx which is a
        function */}
        <h1 className="text-2xl">About us</h1>
        <userContext.Consumer>
          {(value) => <h1 className="text-green-600">{value.user.name}</h1>}
        </userContext.Consumer>
        <h1>Hi from about class based component</h1>
        <Profile name={"first child"} no={1} />
        {/* <Profile name={"second child"} no={2} /> */}
      </>
    );
  }
}

export default About;
