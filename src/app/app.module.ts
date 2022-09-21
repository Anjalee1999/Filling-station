import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineComponent } from './machine/machine.component';
import { CompanyComponent } from './company/company.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReportComponent } from './report/report.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    CompanyComponent,
    InvoiceComponent,
    ReportComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
