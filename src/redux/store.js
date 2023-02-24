import { createStore, applyMiddleware } from "redux";
import tourReducer from "./tourReducer";
import { MESSAGE } from "./actionTypes";

const myLogger = (store) => (next) => (action) => {
    const upcomingState = [action].reduce(tourReducer, store.getState());
    if (upcomingState.guestList.length <= 3) {
        return next(action);
    }
}

const store = createStore(tourReducer, applyMiddleware(myLogger));

export default store;