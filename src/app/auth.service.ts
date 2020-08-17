import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './login/Usuario';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = environment.API_URL_BASE + '/api/usuarios'

  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.API_URL, usuario);
  }
}
