import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { IOrder } from '../interfaces/order.interface';
import { IUser } from '../interfaces/user.interface';

import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OrdersService],
    }).compileComponents();
  });

  beforeEach(() => {
    http = TestBed.inject(HttpClient);
    service = new OrdersService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getOrders()', () => {
    it('should return all orders list ', (done: DoneFn) => {
      service.getOrders().subscribe((value) => {
        expect(value.length).toBeGreaterThan(0);
        done();
      });
    });
  });
  describe('getUsers()', () => {
    it('should return all users list ', (done: DoneFn) => {
      service.getUsers().subscribe((value) => {
        expect(value.length).toBeGreaterThan(0);
        done();
      });
    });
  });

  describe('getUserById()', () => {
    it('should return user by id ', (done: DoneFn) => {
      let userId = '1231-1244-1233';
      service.getUserById(userId).subscribe((value: any) => {
        expect(value?.Name).toEqual('Mohamed Ashraf');
        done();
      });
    });
  });

  describe('getOrderById()', () => {
    it('should return order by id ', (done: DoneFn) => {
      let orderId = 1413;
      service.getOrderById(orderId).subscribe((value: any) => {
        expect(value?.UserId).toEqual('9179-2312-3421');
        done();
      });
    });
  });
});
