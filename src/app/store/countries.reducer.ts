import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Country, Region } from '../ICountries';
import { setCountries, setCountry, setRegion } from './countries.actions';
 
export interface State {
    countries: Country[],
    country: Country,
    region: Region
}

export const initialState: State = {
    countries: [],
    country: null,
    region: null
};
 
const _countryReducer = createReducer(
  initialState,
  on(setCountries, (state: State, action) => ({ ...state, countries: action.countries} )),
  on(setCountry, (state: State, action) => ({ ...state, country: action.country })),
  on(setRegion, (state: State, action) => ({ ...state, region: action.region }))
);
 
export function countryReducer(state, action) {
  return _countryReducer(state, action);
}