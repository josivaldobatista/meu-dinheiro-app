import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  BASE_URL = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  insert(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.BASE_URL, cliente);
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`${this.BASE_URL}/${cliente.id}`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.BASE_URL);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<any>(`${this.BASE_URL}/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/${cliente.id}`)
  }

}
