import React from 'react';
import { Component } from 'react';
import {Map,  GoogleApiWrapper} from 'google-maps-react';
import './Maps.css';



export class JajceMap extends Component {
    
    render() {
      return (
          
          <Map
          google={this.props.google}
          
          initialCenter={{
            lat: 44.3379888,
            lng: 17.2551312
          }}
          zoom={15}
          onClick={this.onMapClicked}
        ></Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyBe42i1ULb4HL-i7liZuOAtd30J6GzMLDo")
  })(JajceMap)