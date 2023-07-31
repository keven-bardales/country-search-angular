import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountrieInterface } from '../../interfaces/countries.interface';
import { Region } from '../../interfaces/region.type';




@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})

export class ByRegionPageComponent implements OnInit {



  constructor(private countriesService : CountriesService) {

  }
  public regions : Region[] = ['Africa' , 'Americas' , 'Asia' ,'Europe' , 'Oceania']
  public selectedRegion? : Region
  countries: CountrieInterface[] = []


  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.lastSearch
    this.countries = this.countriesService.cacheStore.byRegion.countries
  }


  changeSelectedRegion(region: Region) {
    this.selectedRegion = region
  }

  searchByRegion(search:Region) {
    this.changeSelectedRegion(search)
    this.countriesService.searchByRegion(search).subscribe((countries) => {
      this.countries = countries
    })
  }
} 
