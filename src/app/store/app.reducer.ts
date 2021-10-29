import { combineReducers } from "@ngrx/store";
import { CountriesState, countryReducer } from "./countries.reducer";

export interface AppState {
    countries: CountriesState
}

export const appReducer = combineReducers({
    countries: countryReducer,
});