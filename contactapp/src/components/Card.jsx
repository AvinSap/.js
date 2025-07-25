import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.key}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.born} />
        <Details detailInfo={props.phone} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
