import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../store' 



interface IInitialState {
    language: string
}


const initialState: IInitialState = {
   language: 'ru',
}



export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload
        }
    }
})


export const globalSelector = (state: RootState) => state.globalSlice

export const { setLanguage } = globalSlice.actions

export default globalSlice.reducer