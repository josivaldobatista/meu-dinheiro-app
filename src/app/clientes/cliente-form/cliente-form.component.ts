import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: string[]

  constructor(
    private service: ClientesService,
    private router: Router
    ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes-list'])
  }

  onSubmit() {
    this.service.insert(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.cliente = response;
        
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
      );
  }

}
