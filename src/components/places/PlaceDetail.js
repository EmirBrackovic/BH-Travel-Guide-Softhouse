import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.jpg";

const PlaceDetail = (props) => {
  const { name, description } = props.location.state.place;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{description}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/places">
          <button >
            Back to list
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlaceDetail;
