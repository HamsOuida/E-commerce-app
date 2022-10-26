import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../interfaces/order.interface';
import { map } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  /**
   * this simple function created for getting all orders from json file
   * @returns void
   */
  getOrders() {
    return this.http.get<[]>('assets/data/orders.json');
  }

  /**
   * this simple function created for getting order by id
   * @params orderId: the id of the order
   * @returns order object
   */
  getOrderById(orderId: number) {
    return this.http
      .get<[]>('assets/data/orders.json')
      .pipe(
        map((response) =>
          response.find((order: IOrder) => order.OrderId == orderId)
        )
      );
  }

  /**
   * this simple function created for getting all users from json file
   * @returns void
   */
  getUsers() {
    return this.http.get<[]>('assets/data/users.json');
  }

  /**
   * this simple function created for getting user by id
   * @params userId: the id of the user
   * @returns user
   */
  getUserById(userId: string) {
    return this.http
      .get<[]>('assets/data/users.json')
      .pipe(
        map((response) => response.find((user: IUser) => user.Id == userId))
      );
  }
}
