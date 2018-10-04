import { Component, OnInit } from '@angular/core';
import { Country } from '../about/country';  
import { State } from '../about/state'; 
import { City } from '../about/city';
import { CountryService } from '../../shared/countryservice';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[ CountryService ],
})
export class AboutComponent implements OnInit {
  name:string='About Page';

  selectedCountry: Country = new Country(0, 'India');  
  selectedState: State = new State(0,23,'Andhra Pradesh');
  countries: Country[];  
  states: State[]; 
  cities: City[]; 
    
  constructor(private _countryService:CountryService) {
      this.countries=this._countryService.getCountries();
   }
   
   onSelectCountry(countryid) {
     debugger
    this.states = this._countryService.getStates().filter((item) => item.countryid == countryid);
  } 

  onSelectState(stateid) {
    this.states = this._countryService.getStates().filter((item) => item.countryid == stateid);
  } 

  ngOnInit() {
   
  }
}
