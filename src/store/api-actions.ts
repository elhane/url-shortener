import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {setLinks} from './action';
import {store} from './';
import {Link} from '../types/types';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

type asyncThunkConfigType = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchShortLinks = createAsyncThunk<void, Link, asyncThunkConfigType>(
  'links/fetchShortLinks',
  async (link, {dispatch, extra: api}) => {
    const { data } = await api.post(`/${JSON.stringify(link)}`);
    dispatch(setLinks(data));
    console.debug('data',data);
    // try {
    //
    // } catch {
    //   console.debug('error');
    // }
  }
);
