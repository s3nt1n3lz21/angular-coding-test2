import { createReducer, on } from '@ngrx/store';
import { Country, Region } from '../ICountries';
import { setCountries, setCountry, setRegion } from './countries.actions';
 
export interface CountriesState {
    regions: Region[]
    countries: Country[],
    country: Country,
    region: Region
}

export const initialState: CountriesState = {
    regions: ['europe','asia'],
    countries: [],
    country: null,
    region: null
};
 
const _countryReducer = createReducer(
  initialState,
  on(setCountries, (state: CountriesState, action) => ({ ...state, countries: action.countries} )),
  on(setCountry, (state: CountriesState, action) => ({ ...state, country: action.country })),
  on(setRegion, (state: CountriesState, action) => ({ ...state, region: action.region }))
);
 
export function countryReducer(state, action) {
  return _countryReducer(state, action);
}