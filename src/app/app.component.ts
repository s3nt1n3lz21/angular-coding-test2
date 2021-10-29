import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Country, Region } from './ICountries';
import { AppState } from './store/app.reducer';
import { setCountries } from './store/countries.actions';

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

  constructor(
    private _apiService: ApiService,
    private store: Store<{ state: AppState }>
  ) {
    this.state = store.select('state');
    this.state.subscribe(state => {
      this.regions = state.countries.regions
      // this.countries = state.countries.countries
    });
  }

  ngOnInit() {

  }

  regionChanged(region: Region) {
    console.log('region: ', region);
    this._apiService.getCountries(region).subscribe((response) => {
      this.countries = response;
      this.store.dispatch(setCountries({countries: response}));
      console.log('response: ', response);
    })
  }

  countriesChanged() {

  }

}
