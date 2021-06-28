import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {filterOffers} from '../../utils/filter';
import PropTypes from 'prop-types';
import offerPropsType from '../../prop-types/offer';
import cityPropsType from '../../prop-types/city';
import useMap from '../../mock/hooks/useMap/useMap';

function Map(props) {
  const {city, offers, offerActive} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  const iconActive = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    const markers = leaflet.layerGroup();
    if (map) {
      markers.addTo(map);
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
              icon: (offerActive === offer.id) ? iconActive : icon,
            },
          ).addTo(markers);
      });

      map.flyTo(
        [city.lat, city.lng],
        city.zoom,
      );

    }
    return () => {
      markers.clearLayers();
    };
  }, [map, city, offers, offerActive]);


  return (
    <div ref={mapRef} id="map" style={{height: '100%'}}></div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
  city: cityPropsType,
  offerActive: PropTypes.number,
};

export default Map;
