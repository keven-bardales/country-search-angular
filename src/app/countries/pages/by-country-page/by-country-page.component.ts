import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountrieInterface } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {


  constructor(private countriesService: CountriesService){

  }

  countries: CountrieInterface[] = []
  initialSearchBoxValue!: string

  ngOnInit(): void {
    this.initialSearchBoxValue = this.countriesService.cacheStore.byCountries.lastSearch
    this.countries = this.countriesService.cacheStore.byCountries.countries
  }

  searchByName(search: string){
    this.countriesService.searchByName(search).subscribe((countries) => {
      this.countries = countries
    })
  }



}
