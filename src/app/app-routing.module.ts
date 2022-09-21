import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineComponent } from '../app/machine/machine.component';
import { CompanyComponent } from '../app/company/company.component';
import { InvoiceComponent } from '../app/invoice/invoice.component';
import { ReportComponent } from '../app/report/report.component';
import { AccountComponent } from '../app/account/account.component';

const routes: Routes = [
  {
    path: 'machine',
    component: MachineComponent,
  },
  {
    path: 'company',
    component: CompanyComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
