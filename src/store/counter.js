import {createSlice} from '@reduxjs/toolkit'

const initialCounterState = {counter:0, show: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        login(){

        },
        increase(state){
            state.counter++;
        },
        decrease(state){
            state.counter--;
        },
        increament(state, action){
            state.counter = state.counter + action.payload
        },
        toggle(state){
            state.show = !state.show;
        }
        }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer