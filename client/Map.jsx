import React, { useEffect, useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, OverlayView, Marker } from "react-google-maps"
import CustomMarker from './Marker.jsx';


const Map = withScriptjs(withGoogleMap((props) => {
  const [news, setNews] = useState([]);

  // const getMusic = () => {
  //   fetch('music')
  //     .then(response => response.json())
  //     .then(news => setNews(news));
  // }

  // useEffect(getMusic, []);

  return (
    <GoogleMap
      defaultZoom={18}
      center={{ lat: 30.269163, lng: -97.740323 }}
    >
      {news.map(story => {
        return <CustomMarker story={story} key={Math.random()} />;
      })}
    </GoogleMap>
  )
}))

export default Map;