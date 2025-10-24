import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TeamComponent } from './team/team.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { PaymentsComponent } from './payments/payments.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: PagesComponent }
]

@NgModule({
  declarations: [
    DashboardComponent,
    OrdersComponent,
    ClientsComponent,
    ServicesComponent,
    ProposalsComponent,
    InvoicesComponent,
    TicketsComponent,
    TeamComponent,
    IntegrationsComponent,
    PagesComponent,
    PaymentsComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbTooltipModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
