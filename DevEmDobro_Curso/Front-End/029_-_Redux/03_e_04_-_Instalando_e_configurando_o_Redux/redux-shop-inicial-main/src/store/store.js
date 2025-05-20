import { createStore, legacy_createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cart.js';

//Tem uma chamado do combineReducers, que é uma função que combina vários reducers em um só.
//O combineReducers é uma função que combina vários reducers em um só, e o resultado é um novo 
//reducer que pode ser passado para a função createStore.
const rootReducer = combineReducers({
    cartProducts: cartReducer,
});

const store = legacy_createStore(rootReducer);

export default store;