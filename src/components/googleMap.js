import React from 'react';
import {} from 'react-google-maps';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import demoFancyMapStyles from "./demoFancyMapStyles.json";

class GoogleMap extends React.Component{
    render(){
        return(
            <div>
  <GoogleMap
  defaultCenter={{ lat: -34.397, lng: 150.644 }}
  zoom={props.zoom}
  ref={props.onMapMounted}
  onZoomChanged={props.onZoomChanged}
>
  <Marker
    position={{ lat: -34.397, lng: 150.644 }}
    onClick={props.onToggleOpen}
  >
    <InfoWindow onCloseClick={props.onToggleOpen}>
      <div>
        <FaAnchor />
        {" "}
        Controlled zoom: {props.zoom}
      </div>
    </InfoWindow>
  </Marker>
</GoogleMap></div>
        )
    }
}

export default withGoogleMap(GoogleMap)