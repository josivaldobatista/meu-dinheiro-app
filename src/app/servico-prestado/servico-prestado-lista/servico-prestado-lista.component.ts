import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoBusca } from './ServicoPrestadoBusca';
import { ServicoPrestadoService } from '../../servico-prestado.service'

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  listaServicoPrestado: ServicoPrestadoBusca // ++

  constructor(private service: ServicoPrestadoService) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }

  ngOnInit(): void {
  }

  buscar() {
    console.log('Nome: ', this.nome);
    console.log('Mes: ', this.mes);

    this.service.buscar(this.nome, this.mes)
      .subscribe(response => this.listaServicoPrestado = response); // ++ Obs.: Verificar essa linha depois.

  }

}
