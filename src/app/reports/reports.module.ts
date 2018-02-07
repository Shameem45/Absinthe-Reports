import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap'; 

@NgModule({
  imports: [
    CommonModule,
   Ng2TableModule,
   PaginationModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
