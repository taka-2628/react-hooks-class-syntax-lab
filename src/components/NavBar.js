import React from "react";
import { render } from "react-dom";

class NavBar extends React.Component {
  render(){
    return (
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>
    );
  }
}

export default NavBar;
