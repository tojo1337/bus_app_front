import { createAction, props } from "@ngrx/store";
import { Location } from "../interfaces/location";

export const setLocation = createAction("[Location] setting the locations", props<{areas: Location[]}>());