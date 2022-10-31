import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {setLinks} from './action';
import {store} from './';
import {Link, LinkData} from '../types/types';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

type asyncThunkConfigType = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchShortLink = createAsyncThunk<void, Link, asyncThunkConfigType>(
  'links/fetchShortLink',
  async ({input: link}, {dispatch, extra: api}) => {
    const { data } = await api.post<LinkData[]>('', {input: link});
    const [{code,long}] = data;
    dispatch(setLinks({code,long}));
  }
);
