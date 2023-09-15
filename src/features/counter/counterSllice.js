import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data:[]
  },
  reducers: {
    adddata:(state, action)=>{
      state.data.push(action.payload)
    }
  },
})

export const { adddata } = counterSlice.actions
export default counterSlice.reducer
