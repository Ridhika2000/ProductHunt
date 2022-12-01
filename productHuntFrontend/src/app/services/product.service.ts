import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  public products() {
    return this._http.get(`${baseUrl}/product/`);
  }

  //add product
  public addProduct(product: any) {
    return this._http.post(`${baseUrl}/product/`, product);
  }

  //delete product
  public deleteProduct(pId: any) {
    return this._http.delete(`${baseUrl}/product/${pId}`);
  }

  //get the single product
  public getProduct(pId: any) {
    return this._http.get(`${baseUrl}/product/${pId}`);
  }

  //update product
  public updateProduct(product: any) {
    return this._http.put(`${baseUrl}/product/`, product);
  }

  //search product
  searchProduct(query: string) {
    return this._http.get(`${baseUrl}/product/search?query=${query}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //get products of brand
  public getProductsOfBrand(bid: any) {
    return this._http.get(`${baseUrl}/product/brand/${bid}`);
  }

  //get active products
  public getActiveProducts() {
    return this._http.get(`${baseUrl}/product/active`);
  }

  //get active products of brand
  public getActiveProductsOfBrand(bid: any) {
    return this._http.get(`${baseUrl}/product/brand/active/${bid}`);
  }

  //total products
  public countOfProducts(): Observable<any> {
    return this._http.get(`${baseUrl}/product/count`);
  }
}
