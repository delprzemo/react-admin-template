import { createStore, applyMiddleware, Store  } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./reducers/root.reducer";


const store: Store = createStore(rootReducers, applyMiddleware(
    thunkMiddleware
));

console.log(store.getState());

store.subscribe(() => console.log(store.getState()));
export default store;