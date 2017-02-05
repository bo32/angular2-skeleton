import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getCountryInfo(countryCode) {
    return this.http.get('http://services.groupkt.com/country/get/iso2code/' + countryCode)
      .map((response: Response) => response.json());
  }

  getAllCountries() {
    return this.http.get('http://services.groupkt.com/country/get/all')
      .map((response: Response) => response.json());
  }

}
