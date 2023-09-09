import { configureStore } from "@reduxjs/toolkit";
import { displayPortal, portalreducer } from "./slices/portalSlice";

const store = configureStore({
    reducer : {
        portal : portalreducer,

    }
})

export {store, displayPortal};