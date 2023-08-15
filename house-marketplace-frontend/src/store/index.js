import { configureStore } from "@reduxjs/toolkit";
import housereducer from "./houses";
import credentialreducer from "./credential";
export const store = configureStore({
    reducer:{houses: housereducer,credential: credentialreducer}
})