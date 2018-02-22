import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
// import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SearchFilterPipe } from '../search-filter.pipe';
import {SelectFilterPipe} from '../select-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    Ng2TableModule
  //  PaginationModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
