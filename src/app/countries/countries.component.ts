import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'rest-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [HttpService]
})
export class CountriesComponent {

  constructor(private httpService: HttpService) { }

  errorMessage: String;
  country = {
    code: '',
    name: ''
  }; 
  items: any[] = [];

  onSubmit(countryForm: NgForm) {
    // console.log(countryForm);
    // console.log(this.country);
    this.httpService.getCountryInfo(this.country.code)
      .subscribe(
        data => {
          // console.log(data);
          this.country.code = data.RestResponse.result.alpha2_code;
          this.country.name = data.RestResponse.result.name;
        }
      );
  }

  onGetAllCountries() {
    this.httpService.getAllCountries().subscribe(
      data => {
        const tmp = [];
        console.log(data);
        console.log(data.RestResponse.result);
        for (let key in data.RestResponse.result) {
          // console.log(data[key]);
          tmp.push(data.RestResponse.result[key]);
        }
        this.items = tmp;
      },
      error => this.errorMessage = error.error
    );
}

}
