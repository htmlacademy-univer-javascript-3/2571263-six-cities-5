import {updateStore} from './reducer.ts';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({ reducer: updateStore });
