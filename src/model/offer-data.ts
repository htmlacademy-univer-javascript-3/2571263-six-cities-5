import {UserData} from './user.ts';

export type OfferData = {
  id: string;
  isPremium?: boolean;
  isFavorite?: boolean;
  price: number;
  rating: number;
  images: string[];
  preview: string;
  title: string;
  residencyType: string;
  location: {
    latitude: number;
    longitude: number;
    name: string;
  };
  bedroomCount: number;
  maxAdults: number;
  features: string[];
  host: UserData;
  description: string[];
}

