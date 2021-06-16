import { Injectable } from '@angular/core';
 interface Country{
  name: string;
  value:number;
}
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  

  private data :Country[]= [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];

  get countryData(){
    return this.data;
  }
  randoData(){
    this.data=[
      {
        "name": "Germany",
        "value": Math.random()*1234567
      },
      {
        "name": "USA",
        "value":  Math.random()*1234567
      },
      {
        "name": "France",
        "value":  Math.random()*1234567
      },
        {
        "name": "UK",
        "value":  Math.random()*1234567
      }

    ]
  }
}
