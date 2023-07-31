import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountrieInterface } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnInit {

  constructor(private countriesService: CountriesService){

  }

  initialSearchBoxValue!: string

  ngOnInit(): void {
    this.initialSearchBoxValue = this.countriesService.cacheStore.byCapital.lastSearch
    this.countries = this.countriesService.cacheStore.byCapital.countries
  }

  countries: CountrieInterface[] = []
  isLoading: boolean = false

  setLoadingTrue ():void {
    this.isLoading = true
  }

  setLoadingFalse () :void {
    this.isLoading = false
  }

  searchByCapital(search:string) {
    this.setLoadingTrue()
    this.countriesService.searchCapital(search).subscribe((countries) => {
      this.countries = countries
      this.setLoadingFalse()
    })
  }
}
