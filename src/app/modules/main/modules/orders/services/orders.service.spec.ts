import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { IOrder } from '../interfaces/order.interface';

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

  describe('getProducts()', () => {
    it('should return all products list ', () => {
      let mock: IOrder[] = [];
      service.getOrders().subscribe((res) => {
        mock = res;
        expect(mock.length).toBeGreaterThan(0);
      });
    });
  });
});
