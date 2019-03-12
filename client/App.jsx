import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map.jsx';
import apiKey from './secrets/api.js';

const App = () => (
  <>
    <div className="overlay">Bands Near You!</div>
    <Map
      className="map"
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%`, width: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'));
