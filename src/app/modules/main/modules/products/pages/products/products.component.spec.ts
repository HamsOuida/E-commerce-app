import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productsList: IProduct[] = [];

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
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('getAllProducts()', () => {
    it('should return all products list ', async(() => {
      component.getAllProducts();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        productsList = component.products;
        expect(component.products.length).toBeGreaterThan(0);
      });
    }));
  });

  describe('onChangeQuantity()', () => {
    it('should change product quantity ', async(() => {
      const product = { product: { ProductId: 123 }, quantity: 25 };
      component.onChangeQuantity(product);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(productsList[0].AvailablePieces).toEqual(product.quantity);
      });
    }));
  });

  describe('productById()', () => {
    it('should track array products and return identifier index of element ', () => {
      component.ngOnInit();
      const mock = component.productById(123);
      expect(mock).toEqual(123);
    });
  });
});
