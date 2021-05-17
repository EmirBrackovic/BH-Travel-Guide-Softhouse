import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../../api/Places";
import "./PlaceApp.css";
import Header from "./Header";
import AddPlace from "./AddPlace";
import PlaceList from "./PlaceList";
import PlaceDetail from "./PlaceDetail";
import EditPlace from "./EditPlace";

function PlaceApp() {
  // eslint-disable-next-line
  const LOCAL_STORAGE_KEY = "places";
  const [places, setPlaces] = useState([]);

  //RetrievePlaces
  const retrievePlaces = async () => {
    const response = await api.get("/places");
    return response.data;
  };

  const addPlaceHandler = async (place) => {
    console.log(place);
    const request = {
      id: uuid(),
      ...place,
    };

    const response = await api.post("/places", request);
    console.log(response);
    setPlaces([...places, response.data]);
  };

  const updatePlaceHandler = async (place) => {
    const response = await api.put(`/places/${place.id}`, place);
    // eslint-disable-next-line
    const { id, name, description } = response.data;
    setPlaces(
      places.map((place) => {
        return place.id === id ? { ...response.data } : place;
      })
    );
  };

  const removePlaceHandler = async (id) => {
    await api.delete(`/places/${id}`);
    const newPlaceList = places.filter((place) => {
      return place.id !== id;
    });

    setPlaces(newPlaceList);
  };

  useEffect(() => {
    // const retrivePlaces = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrivePlaces) setPlaces(retrivePlaces);
    const getAllCOntacts = async () => {
      const allPlaces = await retrievePlaces();
      if (allPlaces) setPlaces(allPlaces);
    };

    getAllCOntacts();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(places));
  }, [places]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/places"
            exact
            render={(props) => (
              <PlaceList
                {...props}
                places={places}
                getPlaceId={removePlaceHandler}
              />
            )}
          />
          <Route
            path="/places/add"
            render={(props) => (
              <AddPlace {...props} addPlaceHandler={addPlaceHandler} />
            )}
          />

          <Route
            path="/places/edit"
            render={(props) => (
              <EditPlace
                {...props}
                updatePlaceHandler={updatePlaceHandler}
              />
            )}
          />

          <Route path="/places/place/:id" component={PlaceDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default PlaceApp;
