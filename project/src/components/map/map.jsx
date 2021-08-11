import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import offerPropsType from '../../prop-types/offer';
import cityPropsType from '../../prop-types/city';
import useMap from '../../mock/hooks/useMap/useMap';
import ActivePin from './img/pin-active.svg'
import Pin from './img/pin.svg'

function Map(props) {
  const {city, offers, activeOffer} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const icon = leaflet.icon({
    iconUrl: Pin,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  const iconActive = leaflet.icon({
    iconUrl: ActivePin,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    const markers = leaflet.layerGroup();
    if (map) {
      markers.addTo(map);
      offers.forEach((offer) => {
        const locationLat = offer.location.lat;
        const locationLng = offer.location.lng;

        leaflet
          .marker(
            {
              lat: locationLat,
              lng: locationLng,
            },
            {
              icon: (activeOffer === offer.id) ? iconActive : icon,
            },
          ).addTo(markers);
      });

      map.flyTo(
        [city.location.lat, city.location.lng],
        city.location.zoom,
      );

    }
    return () => {
      markers.clearLayers();
    };
  }, [map, city, offers, activeOffer]);


  return (
    <div ref={mapRef} id="map" style={{height: '100%'}}></div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
  city: cityPropsType,
  activeOffer: PropTypes.number,
};

export default Map;
