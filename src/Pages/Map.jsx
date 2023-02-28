import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import markerMap from '../img/Map-Marker-PNG-File.png';
import { useMap } from 'react-leaflet';
export default function Map() {
  const [croods, setCroods] = React.useState([]);

  function LocationMarker() {
    const [position, setPosition] = React.useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={defaulIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCroods([latitude, longitude]);
      }
    );
  }, []);

  return (
    <MapContainer center={[35.698, 51.4115]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LeafletGeocode /> */}
      <LeafletMachine />
    </MapContainer>
  );
}

const defaulIcon = new L.Icon({
  iconUrl: require('../img/Map-Marker-PNG-File.png'),
  iconSize: [35, 45],
});

L.Marker.prototype.options.icon = defaulIcon;

const LeafletGeocode = () => {
  const map = useMap();
  React.useEffect(() => {
    L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on('markgeocode', function (e) {
        const latlng = e.geocode.center;
        L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []);
  return null;
};

const LeafletMachine = () => {
  const map = useMap();
  React.useEffect(() => {
    L.Routing.control({
      waypoints: [L.latLng, L.latLng],
      lineOptions: {
        styles: [
          {
            color: 'blue',
            weight: 4,
            opacity: 0.7,
          },
        ],
      },
      routeWhileDragging: false,
      geocoder: L.Control.Geocoder.nominatim(),
    }).addTo(map);
  }, []);
  return null;
};
