import {UserData} from './user.ts';

export type Review = {
  id: string;
  date: string;
  user: UserData;
  text: string;
  rating: number;
}
