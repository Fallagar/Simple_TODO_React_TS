import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

//If dataId is "-1", form is opened to add new notes, if not "-1", then for editing, and data id points to target note

export const formSlice = createSlice({
  name: 'formStatus',
    initialState: {
        openForm: false,
        dataId: "-1"
  },
  reducers: {    
    TOGGLE_FORM: (state, action: PayloadAction<boolean>) => {
      state.openForm = action.payload
      },
    SET_EDIT_DATA_ID:  (state, action: PayloadAction<string>) => {
      state.dataId = action.payload
      }
  },
})

export const {TOGGLE_FORM, SET_EDIT_DATA_ID} = formSlice.actions

export default formSlice.reducer