import React from "react";
import img from "./assets/images/me.jpg";
import "./assets/sass/App.scss";

function App() {
  let links = require("./assets/data/links.json");
  return (
    <div className="container">
      <div className="header">
        <img className="me" src={img} alt="Tim Green" />
        <h2 className="title">Tim Green</h2>
      </div>
      <div className="treen-group">
        <div className="link-container">
          {links.map((link, i) => {
            return (
              <a className="link" href={link.url} key={i}>
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
