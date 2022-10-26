import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrdersComponent } from './orders.component';
import { OrdersService } from '../../services/orders.service';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let configService: OrdersService;
  let http: HttpClient;

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
    http = TestBed.inject(HttpClient);
    configService = new OrdersService(http);
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(OrdersComponent);
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
