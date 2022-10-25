import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './pages';
import { ProductsRoutingModule } from './products-routing.module';
import { CardModule } from 'primeng/card';
import { ProductCardComponent } from './components';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [CommonModule, ProductsRoutingModule, CardModule, ButtonModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
