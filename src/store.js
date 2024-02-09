import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
// import thunk from "redux-thunk";

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer);

export default store;
