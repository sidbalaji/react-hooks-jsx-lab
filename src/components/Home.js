import React from "react";
import { name, city } from "../data/data.js";

const h1Color = {
  color:'firebrick'
}

function Home() {
  // update the JSX being returned!
  return (
    <div id = 'home'>Home
      <h1 style={h1Color}>{name} is a Web Developer from {city}</h1>
    </div>);
}

export default Home;
