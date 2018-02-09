// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules/components inside project
import { ReportsComponent } from './reports.component';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';
import { OrderByStatusandDatePipe } from '../pipes/order-by-statusand-date.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ReportsComponent, SearchFilterPipe, OrderByStatusandDatePipe]
})
export class ReportsModule { }
