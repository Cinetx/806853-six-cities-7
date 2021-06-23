import React, {useEffect, useRef, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {filterOffers} from '../../utils/filter';
import PropTypes from 'prop-types';
import offerPropsType from '../../prop-types/offer';
import cityPropsType from '../../prop-types/city';

function Map(props) {
  const {city, offers} = props;
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const cityMap = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }).addTo(cityMap);

      const icon = leaflet.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [27, 39],
        iconAnchor: [13, 39],
      });

      filterOffers(city.name, offers).forEach((offer) => {
        const locationLat = offer.location.lat;
        const locationLng = offer.location.lng;

        leaflet
          .marker(
            {
              lat: locationLat,
              lng: locationLng,
            },
            {
              icon: icon,
            },
          ).addTo(cityMap);
      });

      setMap(cityMap);
    }
  }, [mapRef, map, city]);

  return (
    <section className="cities__map map">
      <div ref={mapRef} id="map" style={{height: '100%'}}></div>
    </section>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
  city: cityPropsType,
};

export default Map;
