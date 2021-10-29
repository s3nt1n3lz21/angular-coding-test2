import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-coding-test2';
  regions: any = [];
  // countries: any = ['country 1', 'country 2'];
  countries: any = [];

  constructor(
    private _apiService: ApiService,
  ) {}

  ngOnInit() {
    this._apiService.getCountries('europe').subscribe((response) => {
      this.regions = response;
      console.log('response: ', response);
    })
  }
}
