import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export const formSlice = createSlice({
  name: 'formStatus',
    initialState: {
        openForm: false,
        dataId: "-1"
  },
  reducers: {    
    toggleForm: (state, action: PayloadAction<boolean>) => {
      state.openForm = action.payload
      },
    setEditDataID:  (state, action: PayloadAction<string>) => {
      state.dataId = action.payload
      }
  },
})

export const {toggleForm, setEditDataID} = formSlice.actions

export default formSlice.reducer