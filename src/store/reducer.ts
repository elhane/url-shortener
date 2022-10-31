import {createReducer} from '@reduxjs/toolkit';
import {setLinks} from './action';
import {LinkData} from '../types/types';

type InitialStateType = {
  links: LinkData[]
}

const initialState:InitialStateType = {
  links: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLinks, (state, action) => {
      console.debug('action.payload', action.payload)
      state.links.push(action.payload)
    });
});

export {reducer};
