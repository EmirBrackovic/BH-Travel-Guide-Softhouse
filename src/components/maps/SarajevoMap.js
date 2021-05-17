import React from 'react';
import { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import './Maps.css';


export class SarajevoMap extends Component {
    
    render() {
      return (
          
          <Map
          google={this.props.google}
          
          initialCenter={{
            lat: 43.857376,
            lng: 18.398800
          }}
          zoom={15}
          onClick={this.onMapClicked}
        ></Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyBe42i1ULb4HL-i7liZuOAtd30J6GzMLDo")
  })(SarajevoMap)