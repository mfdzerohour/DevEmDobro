//Isto não se usa mais, mas é bom saber
//import { legacy_createStore as createStore, combineReducers } from "redux";

//Agora é isto que vale

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";

//Apagar porque foi colocado na parte de baixo que esta valendo (Funcional)
// const rootReducer = combineReducers({
//     cartProducts: cartReducer,
// });

//Isto não se usa mais, mas é bom saber
//const store = createStore(rootReducer);

//Agora é isto que vale
const store = configureStore({
    reducer: {
        cartProducts: cartReducer,
    },
});

export default store;
