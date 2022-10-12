import { GoogleMap as GoogleMapInc, Marker } from '@react-google-maps/api';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { locationSet } from '../../features/location/locationSlice';

const GoogleMap = ({ width }) => {
  const { lat, lng } = useSelector((state) => state.location);

  const dispatch = useDispatch();

  const containerStyle = {
    width: `${width}px`,
    height: '300px',
  };

  const center = {
    lat: 22.3419,
    lng: 91.815536,
  };

  const position = {
    lat,
    lng,
  };
  const onLoad = (marker) => {};

  return (
    <GoogleMapInc
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onClick={(e) => {
        const latlng = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        };
        dispatch(locationSet(latlng));
      }}
    >
      <>
        <Marker onLoad={onLoad} position={position} />
      </>
    </GoogleMapInc>
  );
};

export default GoogleMap;
