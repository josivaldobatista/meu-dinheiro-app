import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';
 
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
