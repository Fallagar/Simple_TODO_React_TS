import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { mockData } from '../../app/mock'


const initialState = mockData()

interface Item {  
    name: string;
    category: string;
    content: string;
    status: string;
    id: string;
    dates: string[];
    created: string | Boolean;
}

interface Edit {
  name: string;
  category: string;
  content: string;
  dates: string[];
  id: string;
}


export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {    
    CHANGE_STATUS: (state, action: PayloadAction<string>) => {
      const item = state.find((element) => element.id === action.payload)
      if (item) {
        item.status = item.status === "live" ? "archive" : "live"
      }
    },
    REMOVE_ITEM: (state, action: PayloadAction<string>) => {          
      return state.filter((element) => element.id !== action.payload)
    },
    ADD_ITEM: (state, action: PayloadAction<Item>) => {      
      return [...state,  action.payload ]
    },
    EDIT_NOTE: (state, action: PayloadAction<Edit>) => {
      const itemIndex = state.findIndex((element) => element.id === action.payload.id)
      if (itemIndex !== -1) {
        state[itemIndex].name = action.payload.name;
        state[itemIndex].category = action.payload.category;
        state[itemIndex].content = action.payload.content;
        state[itemIndex].dates = action.payload.dates;        
      }
    }
  },
})


export const {CHANGE_STATUS, REMOVE_ITEM, ADD_ITEM, EDIT_NOTE} = noteSlice.actions

export default noteSlice.reducer