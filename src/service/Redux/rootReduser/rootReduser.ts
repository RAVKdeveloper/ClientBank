import { combineReducers } from '@reduxjs/toolkit'

import { api } from '../../Api/api.instance' 

import { globalSlice } from '../slices/global/global.slice' 


export const rootReduser = combineReducers({
    [api.reducerPath]: api.reducer,
    globalSlice: globalSlice.reducer,
})