import React from "react";
import AboutUserClass from "./AboutUserClass";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "api not fetched",
        location: "api not fetched",
        avatar_url: "avatar_url"
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mahadev909");
    const json = await data.json();
    this.setState({
      user: json,
    });
    console.log("mahi", json);
  }
  render() {
    const {name , location, avatar_url} = this.state.user;
    return (
      <div className="about">
        <h2>About page</h2>
        <h5>This is Namaste react series</h5>
        <AboutUserClass name={name} location={location} avatar_url={avatar_url} />
      </div>
    );
  }
}

export default About;
