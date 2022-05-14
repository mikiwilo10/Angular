import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './paginas/ticket/ticket.component';
import { ListarTicketComponent } from './paginas/listar-ticket/listar-ticket.component';

const routes: Routes = [
  { path: 'ticket', component: TicketComponent },
  { path: 'listarTicket', component: ListarTicketComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
