import { createAction, props } from '@ngrx/store';
import { Country, Region } from '../ICountries';

export const setCountries = createAction('[Countries] Set Countries', props<{countries: Country[]}>());
export const setCountry = createAction('[Countries] Set Country', props<{country: Country}>());
export const setRegion = createAction('[Countries] Set Region', props<{region: Region}>());
