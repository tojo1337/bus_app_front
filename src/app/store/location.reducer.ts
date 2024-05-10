import { createReducer,on } from "@ngrx/store";
import { Location } from "../interfaces/location";
import { setLocation } from "./location.actions";

export const initialState: Location[] = [];

export const locationReducer = createReducer(
    initialState,
    on(setLocation, (state, {areas})=>(state = areas))
);