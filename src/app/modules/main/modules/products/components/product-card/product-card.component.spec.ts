import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProductCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('addToCart()', () => {
    it(`should add item to cart`, () => {
      component.productQuantity = 2;
      component.addToCart();
      expect(component.productQuantity).toEqual(3);
    });
  });

  describe('removeFromCart()', () => {
    it(`should add item to cart`, () => {
      component.productQuantity = 2;
      component.removeFromCart();
      expect(component.productQuantity).toEqual(1);
    });
  });

  describe('changeStock()', () => {
    it(`should emit value when change stock value`, () => {
      spyOn(component.quantityChanged, 'emit');
      let event = new Event('input');
      component.changeStock(event);
      expect(component.quantityChanged.emit).toHaveBeenCalled();
    });
  });
});
