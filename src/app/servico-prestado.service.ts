import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServicoPrestado } from './servico-prestado/ServicoPrestado';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/ServicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  API_URL: string = environment.API_URL_BASE + '/api/servicos-prestados';

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(this.API_URL, servicoPrestado);
  }

  buscar(nome: string, mes: number): Observable<ServicoPrestadoBusca[]> {

    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes", mes ? mes.toString() : ' ');
    
    const url = this.API_URL + "?" + httpParams.toString();
    console.log(url);
    
    return this.http.get<any>(url);
  }
}
