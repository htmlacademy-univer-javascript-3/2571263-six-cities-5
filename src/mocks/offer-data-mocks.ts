import {OfferData} from '../model/offer-data.ts';
import {UserMocks} from './user-mocks.ts';
import {MockReviews} from './review-mocks.ts';

export const OfferDataMocks: OfferData[] = [
  {
    id: '1',
    title: 'Cozy apartment in the city center',
    residencyType: 'apartment',
    price: 120,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      name: 'Amsterdam',
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    description: ['A lovely apartment with a great view of the city.'],
    bedroomCount: 2,
    features: ['Wi-Fi', 'Kitchen', 'TV'],
    host: UserMocks[0],
    images: ['https://14.design.htmlacademy.pro/static/hotel/4.jpg', 'https://14.design.htmlacademy.pro/static/hotel/5.jpg'],
    preview: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    maxAdults: 4,
    reviews: MockReviews
  },
  {
    id: '2',
    title: 'Cozy house in the city center',
    residencyType: 'House',
    price: 240,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      name: 'Amsterdam',
      zoom: 12
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    description: ['A lovely house with a great view of the city.'],
    bedroomCount: 2,
    features: ['Wi-Fi', 'Kitchen', 'TV', 'Kamer-diner'],
    host: UserMocks[0],
    images: ['https://14.design.htmlacademy.pro/static/hotel/1.jpg', 'https://14.design.htmlacademy.pro/static/hotel/7.jpg'],
    preview: 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    maxAdults: 4,
    reviews: [ MockReviews[1] ]
  },
  {
    id: '3',
    title: 'Cozy villa in the city center',
    residencyType: 'villa',
    price: 360,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      name: 'Amsterdam',
      zoom: 12
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    description: ['A lovely villa in the center of the city.'],
    bedroomCount: 2,
    features: ['Wi-Fi', 'Kitchen', 'TV', 'Washing machine'],
    host: UserMocks[0],
    images: ['https://14.design.htmlacademy.pro/static/hotel/2.jpg', 'https://14.design.htmlacademy.pro/static/hotel/8.jpg'],
    preview: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    maxAdults: 4,
    reviews: MockReviews
  },
  {
    id: '4',
    title: 'Cozy mansion in the city center',
    residencyType: 'mansion',
    price: 480,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      name: 'Amsterdam',
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    description: ['A huge mansion just in front of the government plaza.'],
    bedroomCount: 2,
    features: ['Wi-Fi', 'Kitchen', 'TV', 'Mini bar'],
    host: UserMocks[0],
    images: ['https://14.design.htmlacademy.pro/static/hotel/5.jpg', 'https://14.design.htmlacademy.pro/static/hotel/6.jpg'],
    preview: 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    maxAdults: 4,
    reviews: [ MockReviews[0] ]
  },
];
