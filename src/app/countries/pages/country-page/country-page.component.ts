import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { CountrieInterface } from '../../interfaces/countries.interface';
import {tap, switchMap} from 'rxjs'

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
    ){

  }

 public country?: CountrieInterface


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchById(id) )
    )
    .subscribe((country) => {
      if(!country) {
        return this.router.navigateByUrl('')
      }
      this.country = country
      return
  // this.searchCountry(id)
    })
  }

  searchCountry(id: string){
    this.countriesService.searchById(id).subscribe(country => {
      console.log(country)
      if(!country) {
        return this.router.navigateByUrl('')
      }
      this.country = country
      return
    })
  }

  
}
