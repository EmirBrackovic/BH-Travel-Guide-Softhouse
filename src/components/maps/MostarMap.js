import React from 'react';
import { Component } from 'react';
import {Map,GoogleApiWrapper} from 'google-maps-react';
import './Maps.css';



export class MostarMap extends Component {
    
    render() {
      return (
          
          <Map
          google={this.props.google}
          
          initialCenter={{
            lat: 43.3412952,
            lng: 17.8067244
          }}
          zoom={15}
          onClick={this.onMapClicked}
        ></Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyBe42i1ULb4HL-i7liZuOAtd30J6GzMLDo")
  })(MostarMap)