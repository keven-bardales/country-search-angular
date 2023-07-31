import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs'
import { CountrieInterface } from '../interfaces/countries.interface';
import { CacheStoreInterface } from '../interfaces/cacheStore.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
    constructor(private http: HttpClient) { }

    public cacheStore: CacheStoreInterface = {
        byCapital: {
            lastSearch: '',
            countries: []
        },
        byCountries: {
            lastSearch: '',
            countries: []
        },
        byRegion: {
            lastSearch: undefined,
            countries: []
        }
    }

    private getCountryRequest(url: string): Observable<CountrieInterface[]> {
        return this.http.get<CountrieInterface[]>(url)
            .pipe(
                catchError((e: HttpErrorResponse) => { 
                    
                    return of([])} ),
                delay(1000)
            )
    }

    private baseUrl: string = 'https://restcountries.com/v3.1/'
    public countries: CountrieInterface[] = []

    searchCapital(searched: string) {
        const url = `${this.baseUrl}capital/${searched}`
        return this.getCountryRequest(url)
        .pipe(
            tap(countries => this.cacheStore.byCapital = { countries, lastSearch: searched})
        )
    }

    searchByName(searched: string) {
        const url = `${this.baseUrl}name/${searched}`
        return this.getCountryRequest(url)
        .pipe(
            tap(countries => this.cacheStore.byCountries = { countries, lastSearch: searched})
        )
    }

    searchByRegion(searched: Region) {
        const url = `${this.baseUrl}region/${searched}`
        return this.getCountryRequest(url)
        .pipe(
            tap(countries => this.cacheStore.byRegion = { countries, lastSearch: searched})
        )
    }

    searchById(id: string): Observable<CountrieInterface | null> {
        const url = `${this.baseUrl}alpha/${id}`
        return this.http.get<CountrieInterface[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError(() => {
                    return of(null)
                })
            )
    }
}