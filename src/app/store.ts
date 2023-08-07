import { configureStore } from '@reduxjs/toolkit'
import noteReducer from "../features/notes/noteSlice"
import formReducer from "../features/form/formSlice"

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    formStatus: formReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch