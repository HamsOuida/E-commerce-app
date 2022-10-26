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
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
    return this.products;
  }

  /**
   * this simple function created for track product by id
   * @params index, product
   * @returns void
   */
  productById(index: number, product: any): number {
    return product.ProductId;
  }

  onChangeQuantity(data: any) {
    this.productService
      .editProductQuantity(data.product.ProductId, data.quantity)
      .subscribe((res) => {
        let index = this.products.indexOf(data.product);
        if (index != -1) this.products[index].AvailablePieces = res;
      });
  }
}
