import React from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 9.748917,
  lng: -83.753428,
};

export const MapSelector = ({ newAddress, setNewAddress }) => {
  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setNewAddress({ ...newAddress, coordenadas: { lat, lng } });
    console.log(`Punto seleccionado: lat=${lat}, lng=${lng}`);
  };

  return (
    <div className="mb-6">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
        onClick={handleMapClick}
      >
        {newAddress.coordenadas && (
          <MarkerF position={newAddress.coordenadas} />
        )}
      </GoogleMap>
    </div>
  );
};
