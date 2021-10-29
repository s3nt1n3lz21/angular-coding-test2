import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country, Region } from "./ICountries";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private _http: HttpClient,
    ) {}

    public getCountries(region: Region = 'europe'): Observable<Country[]> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
        });
        const _url = `https://restcountries.com/v3.1/region/` + region;
        return this._http.get<Country[]>(_url, { headers: headers });
    }
}