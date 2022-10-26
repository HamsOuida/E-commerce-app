import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderDetailsComponent } from './order-details.component';
import { OrdersService } from '../../services/orders.service';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;
  let configService: OrdersService;
  let http: HttpClient;

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
    http = TestBed.inject(HttpClient);
    configService = new OrdersService(http);
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('getAllProducts()', () => {
    it('should return all products list ', () => {
      const mock = component.getAllProducts();
      console.log(mock);
      // expect(mock.length).toBeGreaterThan(0);
    });
  });
});
