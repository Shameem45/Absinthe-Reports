import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { TaskdataService } from './services/taskdata.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BarchartComponent } from './barchart/barchart.component';

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
    FormsModule
  ],
  providers: [
    TaskdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
