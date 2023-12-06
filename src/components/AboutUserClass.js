import React from "react";
class AboutUserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location, avatar_url } = this.props;
    return (
      <div className="about-user">
        <img className="avatar_img" alt="avatar_img" src={avatar_url}/>
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
        <h4>PinCode: 560082</h4>
      </div>
    );
  }
}

export default AboutUserClass;
