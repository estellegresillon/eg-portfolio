import React from "react";
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  //Marker,
} from "react-google-maps";

import "./Map.scss";
import { SKIN } from "./skin";

const MapContainer = () => (
  <div className="google-map">
    <MapView
      googleMapURL={process.env.REACT_APP_GOOGLE_API_KEY}
      loadingElement={<div style={{ height: `10px` }} />}
      containerElement={<div style={{ height: `40vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
);

const MapView = compose(
  withScriptjs,
  withGoogleMap
)(() => {
  return (
    <GoogleMap
      defaultZoom={13}
      defaultOptions={{ styles: SKIN }}
      center={{ lat: 48.855, lng: 2.35 }}
    >
      {/* <Marker position={{ lat: 51.52, lng: -0.128 }} /> */}
    </GoogleMap>
  );
});

export default MapContainer;
