import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  productAdded: boolean = false;
  constructor() {}

  ngOnInit() {}

  addToCart() {
    this.productAdded = !this.productAdded;
    setTimeout(() => {
      this.productAdded = false;
    }, 2000);
  }
}
