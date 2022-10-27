import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Output() quantityChanged = new EventEmitter();
  /**
   * product item
   */
  @Input() product!: IProduct;

  /**
   * product quantity
   */
  productQuantity: number = 0;
  /**
   * productAdded boolean for adding item
   */
  productAdded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  /**
   * this simple function created for adding product to cart
   * @returns void
   */
  addToCart(): void {
    this.productQuantity = this.productQuantity + 1;
  }
  /**
   * this simple function created for removing product to cart
   * @returns void
   */
  removeFromCart(): void {
    this.productQuantity = this.productQuantity - 1;
  }

  /**
   * this simple function created for updating quantity of the product
   * @params quantity value
   * @returns void
   */
  changeStock(event: any): void {
    this.quantityChanged.emit({ product: this.product, quantity: event.value });
  }
}
