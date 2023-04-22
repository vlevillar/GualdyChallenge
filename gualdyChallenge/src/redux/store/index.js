import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "@/redux/slices/characterSlice"
import filmSlice from "../slices/filmsSlice";

export const store = configureStore({
    reducer: {
        character: characterSlice,
        film: filmSlice
    },
});