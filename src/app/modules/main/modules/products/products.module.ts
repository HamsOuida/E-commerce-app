import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './pages';
import { ProductsRoutingModule } from './products-routing.module';
import { CardModule } from 'primeng/card';
import { ProductCardComponent } from './components';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CardModule,
    FormsModule,
    ButtonModule,
    InputNumberModule,
  ],
  exports: [ProductsComponent],
})
export class ProductsModule {}
