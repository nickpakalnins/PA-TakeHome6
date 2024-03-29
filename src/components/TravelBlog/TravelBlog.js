import React from "react";
import "./TravelBlog.css";

function TravelBlog(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>{props.head}</h3>
        </div>
        <div className="card-images">
          <img src={props.imgOne} alt="Location 1 Photo" />
          <img src={props.imgTwo} alt="Location 2 Photo" />
          <img src={props.imgThree} alt="Location 3 Photo" />
        </div>
        <div className="card-desc">{props.desc}</div>
      </div>
    </>
  );
}

export default TravelBlog;
