import {OfferData} from '../model/offer-data.ts';
import {UserMocks} from './user-mocks.ts';

export const OfferDataMocks: OfferData[] = [
  {
    id: '1',
    title: 'Cozy apartment in the city center',
    residencyType: 'apartment',
    price: 120,
    location: {
      longitude: 0,
      latitude: 0,
      name: 'Amsterdam'
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: ['A lovely apartment with a great view of the city.'],
    bedroomCount: 2,
    features: ['Wi-Fi', 'Kitchen', 'TV'],
    host: UserMocks[0],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/7.jpg'],
    preview: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    maxAdults: 4
  },
  {
    id: '1',
    title: 'Cozy house in the city center',
    residencyType: 'House',
    price: 240,
    location: {
      longitude: 0,
      latitude: 0,
      name: 'Amsterdam'
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: ['A lovely apartment with a great view of the city.'],
    bedroomCount: 2,
    features: ['Wi-Fi', 'Kitchen', 'TV'],
    host: UserMocks[0],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/7.jpg'],
    preview: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    maxAdults: 4
  },
  {
    id: '1',
    title: 'Cozy villa in the city center',
    residencyType: 'villa',
    price: 360,
    location: {
      longitude: 0,
      latitude: 0,
      name: 'Amsterdam'
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: ['A lovely apartment with a great view of the city.'],
    bedroomCount: 2,
    features: ['Wi-Fi', 'Kitchen', 'TV'],
    host: UserMocks[0],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/7.jpg'],
    preview: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    maxAdults: 4
  },
  {
    id: '1',
    title: 'Cozy mansion in the city center',
    residencyType: 'mansion',
    price: 480,
    location: {
      longitude: 0,
      latitude: 0,
      name: 'Amsterdam'
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: ['A lovely apartment with a great view of the city.'],
    bedroomCount: 2,
    features: ['Wi-Fi', 'Kitchen', 'TV'],
    host: UserMocks[0],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/7.jpg'],
    preview: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    maxAdults: 4
  },
];
