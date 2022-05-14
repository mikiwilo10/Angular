import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenRecuperacion';

  templateMenu: any[] = [
    {
      texto: 'Crear Ticket',
      ruta: '/ticket'
    },
    {
      texto: 'listar Ticket',
      ruta: '/listarTicket'
    },
   
  ];
}

