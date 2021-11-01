import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Country, Region } from './ICountries';
import { AppState } from './store/app.reducer';
import { setCountries, setCountry, setRegion } from './store/countries.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-coding-test2';
  regions: Region[] = [];
  // countries: any = ['country 1', 'country 2'];
  countries: Country[] = [];
  state: Observable<AppState>;
  selectedCountry: Country = null;
  countryNames: string[] = [];
  regionNames: string[] = [];

  constructor(
    private _apiService: ApiService,
    private store: Store<{ state: AppState }>
  ) {
    this.state = store.select('state');
    this.state.subscribe(state => {
      this.regions = state.countries.regions
      this.regionNames = this.regions.map((region) => region[0].toUpperCase() + region.slice(1));
    });
  }

  ngOnInit() {

  }

  selectRegion(regionStr: string) {
    const region: Region = this.regions.filter((r) => r == regionStr.toLowerCase())[0];
    this._apiService.getCountries(region).subscribe((response) => {
      this.countries = response;
      this.countryNames = response.map((country) => country.name.common);
      this.store.dispatch(setCountries({countries: response}));
      this.reloadState();
      console.log('response: ', response);
    })
  }

  selectCountry(countryName: string) {
    console.log(countryName);
    this.selectedCountry = this.countries.filter((c) => c.name.common == countryName)[0];
    this.store.dispatch(setCountry({country: this.selectedCountry}));
    this.reloadState();
  }

  formatCurrency(currency: Object): string[] {
    let map = new Map(Object.entries(currency));
    const symbols: string[] = [];
    map.forEach((value, key) => {
      symbols.push(key);
    })
    return symbols;
  }

  clear() {
    this.store.dispatch(setCountry({country: null}));
    this.store.dispatch(setCountries({countries: null}));
    this.selectedCountry = null;
    this.reloadState();
  }

  reloadState() {
    this.state = this.store.select('state');
  }
}
