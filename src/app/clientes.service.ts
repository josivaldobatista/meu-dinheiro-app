import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  insert(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

}
