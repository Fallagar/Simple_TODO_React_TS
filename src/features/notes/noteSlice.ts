import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

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
    changeStatus: (state, action: PayloadAction<string>) => {
      const item = state.find((element) => element.id === action.payload)
      if (item) {
        item.status = item.status === "live" ? "archive" : "live"
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      console.log(action.payload)      
      return state.filter((element) => element.id !== action.payload)
    },
    addItem: (state, action: PayloadAction<Item>) => {
      console.log("here")
      return [...state,  action.payload ]
    },
    editNote: (state, action: PayloadAction<Edit>) => {
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

// Action creators are generated for each case reducer function
export const {changeStatus, removeItem, addItem, editNote} = noteSlice.actions

export default noteSlice.reducer