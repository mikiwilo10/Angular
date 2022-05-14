import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listar-ticket',
  templateUrl: './listar-ticket.component.html',
  styleUrls: ['./listar-ticket.component.css']
})
export class ListarTicketComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  Ticket: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  Buscar(){
    const valor = this.txtSearch.nativeElement.value;
    console.log(valor);
    this.txtSearch.nativeElement.value = '';

    this.http.get<any>('').
    subscribe(
      data => {
        this.Ticket = data;
      });
  }
}
