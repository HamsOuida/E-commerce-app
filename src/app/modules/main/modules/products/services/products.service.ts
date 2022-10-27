import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
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
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('assets/data/products.json');
  }

  /**
   * this simple function created for editing quantity of product
   * @params productId, new quantity
   * @returns product quantity updated
   */
  editProductQuantity(productId: number, quantity: number): Observable<any> {
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
