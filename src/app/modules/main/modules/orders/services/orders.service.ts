import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
   * this simple function created for getting all users from json file
   * @returns void
   */
  getUsers() {
    return this.http.get<[]>('assets/data/users.json');
  }
}
