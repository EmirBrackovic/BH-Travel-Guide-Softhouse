import React from "react";
import { Link } from "react-router-dom";
import PlaceCard from "./PlaceCard";

const PlaceList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getPlaceId(id);
  };

  const renderPlaceList = props.places.map((place) => {
    return (
      <PlaceCard
        place={place}
        clickHander={deleteConactHandler}
        key={place.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Here you can find recommended places by our users !
        <Link to="/places/add">
          <button >Add Place</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderPlaceList}</div>
    </div>
  );
};

export default PlaceList;
