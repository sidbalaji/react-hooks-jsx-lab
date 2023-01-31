import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id='about'>About
      <h2>About Me</h2>
      <p> There is extra content here about me!</p>
      <img src = {image} alt = "I made this"></img>
    </div>);
}

export default About;
