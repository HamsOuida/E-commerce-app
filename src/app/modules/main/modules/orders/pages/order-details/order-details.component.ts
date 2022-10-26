import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../products/interfaces/product.interface';
import { ProductsService } from '../../../products/services/products.service';
import { IOrder } from '../../interfaces/order.interface';
import { IUser } from '../../interfaces/user.interface';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-details-component',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  /**
   * order item
   */
  order!: IOrder;

  /**
   * product list
   */
  products: IProduct[] = [];

  /**
   * order products list
   */
  orderProducts: IProduct[] = [];

  /**
   * user item
   */
  user!: IUser;

  constructor(
    private activateRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    if (this.getID) this.getOrder(this.getID);
    this.getAllProducts();
  }

  get getID() {
    return this.activateRoute.snapshot.params['id'];
  }

  getOrder(orderId: number) {
    this.ordersService.getOrderById(orderId).subscribe((res: any) => {
      this.order = res;
      this.getUser(this.order.UserId);
    });
  }

  /**
   * this simple function created for getting all products
   * @returns products list
   */
  getAllProducts() {
    this.productsService.getProducts().subscribe((res) => {
      this.products = res;
      this.getOrderProducts();
    });
  }

  /**
   * this simple function created for get all items of order
   * @returns order items
   */
  getOrderProducts() {
    this.orderProducts = this.products.filter((elem) =>
      this.order.Products.find(({ ProductId }) => elem.ProductId === ProductId)
    );
    this.orderProducts.map((product: any) => {
      product.Quantity = this.order.Products.find(
        ({ ProductId }) => product.ProductId === ProductId
      )?.Quantity;
    });
  }

  /**
   * this simple function created for get total price of order
   * @returns total price of the order
   */
  getPrice() {
    let price = 0;
    const filteredProducts = this.products.filter((elem) =>
      this.order?.Products.find(({ ProductId }) => elem.ProductId === ProductId)
    );
    filteredProducts.map((product: IProduct) => {
      this.order.Products.forEach((ele: any) => {
        if (ele.ProductId == product.ProductId) {
          price += product.ProductPrice * ele.Quantity;
        }
      });
    });
    return Math.ceil(price * 100) / 100;
  }

  /**
   * this simple function created for get user who created the order
   * @params userId which the belongs to user
   * @returns user name
   */
  getUser(userId: string) {
    this.ordersService.getUserById(userId).subscribe((res: any) => {
      this.user = res;
    });
  }
}
