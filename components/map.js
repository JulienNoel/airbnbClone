import Map, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

function MapScreen({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [showPopup, setShowPopup] = useState(false);


  const coordinates = searchResults.map((obj) => {
    return { latitude: obj.lat, longitude: obj.long };
  });

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 12,
  });



  return (
    <Map
      {...viewState}
      mapStyle="mapbox://styles/julien-noel/cl9ody9tp004x16nulnx69yja"
      mapboxAccessToken={process.env.mapbox_key}
      style={{ width: "100%", height: "100%" }}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <p
              onClick={() => setSelectedLocation(result)}
              className="text-2xl cursor-pointer animate-bounce"
            >
              📍
            </p>
          </Marker>
          {selectedLocation?.long === result.long ? (
            <Popup
              longitude={result.long}
              latitude={result.lat}
              closeOnClick={false}
              anchor='bottom'
              onClose={() => setSelectedLocation({})}              
            >
              {result.title}
            </Popup>
          ) : false}
        </div>
      ))}
    </Map>
  );
}

export default MapScreen;
