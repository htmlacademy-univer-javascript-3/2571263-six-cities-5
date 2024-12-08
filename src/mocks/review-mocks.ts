import {Review} from '../model/review.ts';

import {UserMocks} from './user-mocks.ts';

export const MockReviews: Review[] = [
  {
    id: '1',
    date: '2020-06-27',
    user: UserMocks[0],
    text: 'A nice and good place overall! Had a good time staying in.',
    rating: 5
  },
  {
    id: '2',
    date: '2022-06-27',
    user: UserMocks[0],
    text: 'Its sad to see the place degrade. My second stay was less enjoyable than the first.',
    rating: 3
  }
];
