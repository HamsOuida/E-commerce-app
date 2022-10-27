import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  /**
   * products list
   */
  products: IProduct[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  /**
   * this simple function created for getting all products
   * @returns void
   */
  getAllProducts(): IProduct[] {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
    return this.products;
  }

  /**
   * this simple function created for track product by id
   * @params index, product
   * @returns product id
   */
  productById(index: number): number {
    return index;
  }

  /**
   * this simple function created for updating quantity of the product
   * @params data value
   * @returns void
   */
  onChangeQuantity(data: any): void {
    this.productService
      .editProductQuantity(data.product.ProductId, data.quantity)
      .subscribe((res) => {
        let index = this.products.indexOf(data.product);
        if (index != -1) this.products[index].AvailablePieces = res;
      });
  }
}
