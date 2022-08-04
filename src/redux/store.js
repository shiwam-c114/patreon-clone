import {applyMiddleware,compose, combineReducers, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/authReducer"

const rootReducer=combineReducers({
    auth:authReducer
})

export const store=createStore(rootReducer,compose(applyMiddleware(thunk)))