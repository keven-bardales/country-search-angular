import { Component,Input } from '@angular/core';
import { CountrieInterface } from '../../interfaces/countries.interface';

@Component({
  selector: 'countriess-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent {

  @Input()
  public countries: CountrieInterface[] = []

}
