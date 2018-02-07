import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { TaskdataService } from './services/taskdata.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BarchartComponent } from './barchart/barchart.component';
// import { PaginationModule } from "ng2-bootstrap/pagination";
import { Ng2TableModule } from "ng2-table/ng2-table";

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    // PaginationModule.forRoot(),
    Ng2TableModule
  ],
  providers: [
    TaskdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
