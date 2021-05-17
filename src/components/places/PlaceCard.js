import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";

const PlaceCard = (props) => {
  const { id, name, description } = props.place;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/places/place/${id}`, state: { place: props.place } }}
        >
          <div className="header">{name}</div>
          <div>{description}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/places/edit`, state: { place: props.place } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default PlaceCard;
