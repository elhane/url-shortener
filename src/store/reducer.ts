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
      //TODO too expensive, change to push() and fix array sort
      state.links.unshift(action.payload);
    });
});

export {reducer};
