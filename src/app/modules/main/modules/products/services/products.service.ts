import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

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

  /**
   * this simple function created for editing quantity of product
   * @returns void
   */
  editProductQuantity(productId: number, quantity: number) {
    return this.http.get<[]>('assets/data/products.json').pipe(
      map((response) => {
        let selectedProduct = response.find(
          (product: IProduct) => product.ProductId == productId
        );
        return ((selectedProduct as any)!.AvailablePieces = quantity);
      })
    );
  }
}
