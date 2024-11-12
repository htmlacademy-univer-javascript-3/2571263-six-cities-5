import {Icon} from 'leaflet';

interface IconCollection {
  [key: string]: Icon;
}

export const CustomIcons: IconCollection = {
  default: new Icon({
    iconUrl:
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  }),
  current: new Icon({
    iconUrl:
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  })
};
