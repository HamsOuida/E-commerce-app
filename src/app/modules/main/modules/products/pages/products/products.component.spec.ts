import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from '../../services/products.service';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let configService: ProductsService;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ProductsComponent],
      providers: [ProductsService, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.inject(HttpClient);
    configService = new ProductsService(http);
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(ProductsComponent);
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
