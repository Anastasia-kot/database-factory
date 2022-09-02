import {combineReducers, createStore } from "redux";
import appReducer from "./app-reducer.ts";


let rootReducer = combineReducers({appPage: appReducer});

export type RootReducerType = typeof rootReducer;


export type InferActionsTypes<T extends {[key:string]:(...args:any[])=>any}> = ReturnType<ProptiesTypes<T>>
type ProptiesTypes<T> = T extends { [key: string] : infer U} ? U : never

export let store = createStore(rootReducer);


// window.store = store;