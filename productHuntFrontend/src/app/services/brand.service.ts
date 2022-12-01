import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private _http: HttpClient) {}

  //load all the brands

  public brands() {
    return this._http.get(`${baseUrl}/brand/`);
  }

  //add new brand
  public addBrand(brand: any) {
    return this._http.post(`${baseUrl}/brand/`, brand);
  }

  //delete brand
  public deleteBrand(bId: any) {
    return this._http.delete(`${baseUrl}/brand/${bId}`);
  }

  //get the single brand
  public getBrand(bId: any) {
    return this._http.get(`${baseUrl}/brand/${bId}`);
  }

  //update brand
  public updateBrand(brand: any) {
    return this._http.put(`${baseUrl}/brand/`, brand);
  }

  //total brands
  public countOfBrands(): Observable<any> {
    return this._http.get(`${baseUrl}/brand/count`);
  }
}
