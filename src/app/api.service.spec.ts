import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';


import { configureTestingModule, newTransaction, transaction } from 'src/app/testing-utils';
import { ApiService } from './api.service';

describe('ApiService', () => {
    let service: ApiService;

    beforeEach(waitForAsync(() => {
        configureTestingModule({
            providers: [ApiService]
        });

        service = TestBed.inject(ApiService);
    }));

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // it('should call the correct api for getting the countries', () => {
    //     const httpClient = TestBed.inject(HttpClient);
    //     const spy = spyOn(httpClient, 'get');

    //     service.getTransactions();

    //     expect(spy).toHaveBeenCalledWith('https://transactions-challenge.test.stockopedia.com//api/v1/transactions');
    // });
});