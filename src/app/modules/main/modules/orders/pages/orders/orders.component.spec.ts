import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrdersComponent } from './orders.component';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let router: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [OrdersComponent],
      providers: [OrdersService, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(OrdersComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('getAllProducts()', () => {
    it('should return all products list ', async(() => {
      component.getAllProducts();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.products.length).toBeGreaterThan(0);
      });
    }));
  });

  describe('getAllUsers()', () => {
    it('should return all users list ', async(() => {
      component.getAllUsers();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.users.length).toBe(9);
      });
    }));
  });

  describe('getAllOrders()', () => {
    it('should return all orders list ', async(() => {
      component.getAllOrders();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.orders.length).toBe(122);
      });
    }));
  });

  describe('getUserName()', () => {
    it('should return user name ', async(() => {
      const userId = '1231-1244-1233';
      component.getUserName(userId);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.getUserName(userId)).toEqual('Mohamed Ashraf');
      });
    }));
  });

  describe('getPrice()', () => {
    it('should return order price ', async(() => {
      const orderProducts: any[] = [
        {
          ProductId: 131,
          Quantity: 3,
        },
        {
          ProductId: 125,
          Quantity: 9,
        },
      ];
      component.getPrice(orderProducts);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.getPrice(orderProducts)).toEqual(2271);
      });
    }));
  });

  describe('viewOrder()', () => {
    it('should navigate to order details ', async(() => {
      const spy = spyOn(router, 'navigate');
      const order = {
        OrderId: 1233,
        OrderDate:
          'Wed Sep 18 2019  12:45:37 GMT+0200(Eastern European Standard Time)',
        UserId: '8475-2345-2312',
        Products: [
          {
            ProductId: 124,
            Quantity: 2,
          },
          {
            ProductId: 127,
            Quantity: 1,
          },
          {
            ProductId: 130,
            Quantity: 1,
          },
        ],
        PaymentType: 'online',
      };
      component.viewOrder(order);
      const url = spy.calls.first().args[0] as any;
      expect(url[0]).toBe(order.OrderId);
    }));
  });
});
