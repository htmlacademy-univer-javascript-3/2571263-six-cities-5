import {UserData} from './user.ts';
import {Location} from './location.ts';
import {Review} from './review.ts';

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
  location: Location;
  bedroomCount: number;
  maxAdults: number;
  features: string[];
  host: UserData;
  description: string[];
  reviews: Review[];
}

