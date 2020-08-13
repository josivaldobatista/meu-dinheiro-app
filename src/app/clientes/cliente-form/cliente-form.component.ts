import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: string[]
  id: number

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRouter.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getClienteById(this.id).subscribe(
          response => this.cliente = response, errorResponse => this.cliente = new Cliente());
      }
    })
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes-list'])
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o cliente: ', this.cliente.nome]
      })
    } else {
      this.service.insert(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.cliente = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })
    }
  }

}
