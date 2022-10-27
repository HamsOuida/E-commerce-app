import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../products/interfaces/product.interface';
import { ProductsService } from '../../../products/services/products.service';
import { IOrder } from '../../interfaces/order.interface';
import { IUser } from '../../interfaces/user.interface';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-component',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  /**
   * orders list
   */
  orders: IOrder[] = [];

  /**
   * user list
   */
  users: IUser[] = [];

  /**
   * product list
   */
  products: IProduct[] = [];

  /**
   * table rows count
   */
  rows = 10;
  constructor(
    private ordersService: OrdersService,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllOrders();
    this.getAllUsers();
    this.getAllProducts();
  }

  /**
   * this simple function created for getting all orders
   * @returns orders list
   */
  getAllOrders(): IOrder[] {
    this.ordersService.getOrders().subscribe((res) => {
      this.orders = res;
    });
    return this.orders;
  }

  /**
   * this simple function created for getting all users
   * @returns users list
   */
  getAllUsers(): IUser[] {
    this.ordersService.getUsers().subscribe((res) => {
      this.users = res;
    });
    return this.users;
  }

  /**
   * this simple function created for getting all products
   * @returns products list
   */
  getAllProducts(): IProduct[] {
    this.productsService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
    return this.products;
  }

  /**
   * this simple function created for get user who created the order
   * @params userId which the belongs to user
   * @returns user name
   */
  getUserName(userId: string): string {
    let user = this.users.find((user) => user.Id == userId);
    return user?.Name!;
  }

  /**
   * this simple function created for get total price of order
   * @params orderProducts, the products which user ordered
   * @returns total price of the order
   */
  getPrice(orderProducts: IProduct[]): number {
    let price = 0;

    const filteredProducts = this.products.filter((elem) =>
      orderProducts.find(({ ProductId }) => elem.ProductId === ProductId)
    );

    filteredProducts.map((product: IProduct) => {
      orderProducts.forEach((ele: any) => {
        if (ele.ProductId == product.ProductId) {
          price += product.ProductPrice * ele.Quantity;
        }
      });
    });
    return Math.ceil(price * 100) / 100;
  }

  /**
   * this simple function created for viewing order details
   * @params order, the order which will be displayed
   * @returns total price of the order
   */
  viewOrder(order: IOrder): void {
    this.router.navigate([order.OrderId], {
      relativeTo: this.route.parent,
    });
  }
}
