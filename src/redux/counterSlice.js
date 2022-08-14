import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter = state.counter + 1
    },
    decrement(state, action) {
      state.counter = state.counter - 1
    },
    addBy(state, action) {
      state.counter = state.counter + 10
    },
  },
})

export default counterSlice

export const actions = counterSlice.actions
