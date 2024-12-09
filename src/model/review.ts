import {UserData} from './user.ts';

export type Review = {
  id: string;
  date: string;
  user: UserData;
  comment: string;
  rating: number;
}
