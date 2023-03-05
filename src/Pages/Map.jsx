import React, { useEffect, useLayoutEffect, useState } from 'react';
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
  const mapPoint = [
    { name: 'digiKala', position: [31.458, 51.0015] },
    { name: 'IraCode', position: [31.008, 51.8415] },
    { name: 'Dubai', position: [30.008, 45.8725] },
  ];
  const [croods, setCroods] = React.useState([35.698, 51.4115]);

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    // const x = true;
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
      <>
        <Marker position={position} icon={defaulIcon}>
          <Popup>You are here</Popup>
        </Marker>
      </>
    );
  }

  const handelLocationsUser = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCroods([latitude, longitude]);
        console.log(croods);
      }
    );
  };

  const handelRouteDestenitions = (e) => {
    console.log('hey i am ok');
  };

  return (
    <>
      <MapContainer center={croods} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapPoint.map((e) => {
          return (
            <Marker
              position={e.position}
              className=""
              icon={defaulIcon}
            ></Marker>
          );
        })}
        ]
        <LeafletMachine />
      </MapContainer>
      <button onClick={LocationMarker}>I AM HERE</button>
    </>
  );
}

const defaulIcon = new L.Icon({
  iconUrl: require('../img/Map-Marker-PNG-File.png'),
  iconSize: [35, 45],
});

L.Marker.prototype.options.icon = defaulIcon;

const LeafletGeocode = () => {
  const map = useMap();
  useEffect(() => {
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
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        let croods = [latitude, longitude];
        console.log(croods);
        map.on('click', (e) => {
          L.Routing.control({
            waypoints: [
              L.latLng(croods[0], croods[1]),
              L.latLng(e.latlng.lat, e.latlng.lng),
            ],
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
        });
      }
    );
  }, []);

  return null;
};
