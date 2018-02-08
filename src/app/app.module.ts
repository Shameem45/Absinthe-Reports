// Angular Modules  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule } from '@angular/common/http';

// Modules/components inside project
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { TaskdataService } from './services/taskdata.service';
import { FormsModule } from '@angular/forms';
import { BarchartComponent } from './barchart/barchart.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { OrderByStatusandDatePipe } from './pipes/order-by-statusand-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    BarchartComponent,
    SearchFilterPipe,
    OrderByStatusandDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
  ],
  providers: [
    TaskdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
