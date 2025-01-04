﻿import {useEffect, useRef} from 'react';
import leaflet, {layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/use-map.ts';
import {Location} from '../model/location.ts';
import {CustomIcons} from '../constants/custom-icons.ts';

type MapProps = {
  location: Location;
  points: Location[];
  currentPoint?: Location;
}

export default function Map({ location, points, currentPoint }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: point.latitude === currentPoint?.latitude && point.longitude === currentPoint?.longitude
              ? CustomIcons.Current
              : CustomIcons.Default,
          })
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, currentPoint]);

  return (
    <div
      style={{height: '100%', width: '100%'}}
      ref={mapRef}
    />
  );
}
