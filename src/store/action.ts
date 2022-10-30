import {createAction} from '@reduxjs/toolkit';
import {LinkData} from '../types/types';

export const setLinks = createAction<LinkData>('links/setLinks');
