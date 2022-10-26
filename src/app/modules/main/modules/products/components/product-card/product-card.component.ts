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
   * productAdded boolean for adding item
   */
  productAdded: boolean = false;

  constructor() {}

  ngOnInit() {}

  /**
   * this simple function created for adding product to cart
   * @returns void
   */
  addToCart() {
    this.productAdded = !this.productAdded;
    setTimeout(() => {
      this.productAdded = false;
    }, 3000);
  }

  changeStock(event: any) {
    this.quantityChanged.emit({ product: this.product, quantity: event.value });
  }
}
