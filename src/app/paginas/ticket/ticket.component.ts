import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  
  ticketFormulario: FormGroup = this.fb.group({
    numero: ['',  ,],
    ingreso: ['', [Validators.required, ],],
    salida: ['', [Validators.required, ],],
    // cliente: ['', [Validators.required, ],],
    cedula: ['', [Validators.required, ],],
    nombres: ['', [Validators.required, ],],
    telefono:  ['', [Validators.required, ],],
    direccion:  ['', [Validators.required, ],],
    // vehiculo: ['', [Validators.required, ],],
    placa: ['', [Validators.required, ],],
    marca: ['', [Validators.required, ],],
    modelo:  ['', [Validators.required, ],],


  });



  ngOnInit(): void {
  }

  Guardar(){
    const { numero, ingreso, salida, vehiculo, cliente  } = this.ticketFormulario.value;
    const ticket: any = {
      numero: numero,
      ingreso: ingreso,
      salida: salida,
      vehiculo: vehiculo,
      cliente: cliente
    };
  }
}
