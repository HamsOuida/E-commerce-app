import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { IProduct } from '../interfaces/product.interface';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProductsService],
    }).compileComponents();
  });

  beforeEach(() => {
    http = TestBed.inject(HttpClient);
    service = new ProductsService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllProducts()', () => {
    it('should return all products list ', (done: DoneFn) => {
      service.getAllProducts().subscribe((value) => {
        expect(value.length).toEqual(20);
        done();
      });
    });
  });

  describe('editProductQuantity()', () => {
    it('should change product quantity ', (done: DoneFn) => {
      const product = { ProductId: 123, quantity: 100 };
      service
        .editProductQuantity(product.ProductId, product.quantity)
        .subscribe((res) => {
          expect(product.quantity).toEqual(res);
          done();
        });
    });
  });
});
