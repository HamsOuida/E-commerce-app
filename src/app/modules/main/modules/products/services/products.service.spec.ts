import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
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

  describe('getProducts()', () => {
    it('should return all products list ', () => {
      let mock: IProduct[] = [];
      service.getProducts().subscribe((res) => {
        mock = res;
        expect(mock.length).toBeGreaterThan(0);
      });
    });
  });
});
