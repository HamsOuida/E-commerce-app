import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  /**
   * this simple function created for getting all products from json file
   * @returns void
   */
  getProducts() {
    return this.http.get<[]>('assets/data/products.json');
  }
}
