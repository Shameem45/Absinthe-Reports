import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectOption } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgClass } from '@angular/common';

import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { TaskdataService } from './services/taskdata.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BarchartComponent } from './barchart/barchart.component';
// import { PaginationModule } from "ng2-bootstrap/pagination";
import { Ng2TableModule } from "ng2-table/ng2-table";
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { SelectFilterPipe } from './select-filter.pipe';
import { UniquePipe } from './unique.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    BarchartComponent,
    PieChartComponent,
    SearchFilterPipe,
    SelectFilterPipe,
    UniquePipe
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
