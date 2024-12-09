import {useEffect, useState, useRef, MutableRefObject} from 'react';
import {Location} from '../model/location.ts';
import leaflet from 'leaflet';

export default function useMap(mapRef: MutableRefObject<null>, location: Location) {
  const [map, setMap] = useState<leaflet.Map>();
  const isRenderedRef = useRef(false);
  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    } else {
      map?.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, mapRef, location]);

  return map;
}
