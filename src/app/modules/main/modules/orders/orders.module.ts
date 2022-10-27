import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './pages';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [OrdersComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TableModule,
    OverlayPanelModule,
    CardModule,
  ],
})
export class OrdersModule {}
