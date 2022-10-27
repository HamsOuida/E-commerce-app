import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderDetailsComponent } from './order-details.component';
import { OrdersService } from '../../services/orders.service';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [OrderDetailsComponent],
      providers: [OrdersService, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('getOrder()', () => {
    it('should return order by id ', (done: DoneFn) => {
      const orderId = 1234;
      component.getOrder(orderId);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.order?.Products.length).toBe(3);
      });
      done();
    });
  });

  describe('getAllProducts()', () => {
    it('should return all products list ', async(() => {
      component.getAllProducts();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.products?.length).toBeGreaterThan(0);
      });
    }));
  });

  describe('getOrderProducts()', () => {
    it('should return order items ', (done: DoneFn) => {
      component.getOrderProducts();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.orderProducts?.length).toBeGreaterThan(0);
      });
      done();
    });
  });

  describe('getUser()', () => {
    it('should return order user ', (done: DoneFn) => {
      const userId = '8573-2903-2344';
      component.getUser(userId);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.user?.Name).toEqual('Ahmed Hossam');
      });
      done();
    });
  });

  describe('getPrice()', () => {
    it('should return order price ', async(() => {
      component.getPrice();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        console.log(component.getPrice());

        // expect(component.getPrice()).toEqual(2271);
      });
    }));
  });
});
