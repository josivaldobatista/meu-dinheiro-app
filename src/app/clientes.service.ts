import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_URL: string = environment.API_URL_BASE + '/api/clientes';

  constructor(private http: HttpClient) { }

  insert(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API_URL, cliente);
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`${this.API_URL}/${cliente.id}`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API_URL);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${cliente.id}`)
  }

}
