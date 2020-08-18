import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './login/Usuario';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = environment.API_URL_BASE + '/api/usuarios'
  tokenURL: string = environment.API_URL_BASE + environment.obterTokenUrl
  clientID: string = environment.clienteId
  clientSECRET: string = environment.clienteSecret

  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.API_URL, usuario);
  }

  tentarLogar(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSECRET}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return this.http.post(this.tokenURL, params.toString(), { headers })
  }
}
