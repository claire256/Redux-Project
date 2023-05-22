//  import {legacy_createStore} from 'redux';
 import {configureStore} from '@reduxjs/toolkit'
 import counterReducer from './counter';
 import authReducer from './auth';

 const store = configureStore({
     reducer: {counter: counterReducer.reducer, auth: authReducer.reducer}
 })

 export default store;