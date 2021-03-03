import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" >
      <div className="card-body ">
        <h5 className="card-title">{props.title}</h5>
        <img className="card-img-top" src={props.img} alt="Project Screenshot"></img>
        <p className="card-text">{props.description}</p>
        <a href="https://fierce-forest-22712.herokuapp.com/" className="card-link">Deployed Link</a>
        <a href="https://github.com/rmmngtn/13_Burger_NodeExpressHandlebars" className="card-link">Github</a>
      </div>
    </div>
  )
}




export default Card;



