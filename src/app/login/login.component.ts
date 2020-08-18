import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './Usuario';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: string[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.authService
        .tentarLogar(this.username, this.password)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(['/home'])
        }, errorResponse => {
          this.errors = ['Usuário e/ou senha incorreto(s).']
        })
  }

  preparaCadastro(event) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastro() {
    this.cadastrando = false;
  }

  cadastrar() {
    const usuario: Usuario = new Usuario();
    usuario.usuario = this.username;
    usuario.senha = this.password;
    this.authService.salvar(usuario)
        .subscribe(response => {
          this.mensagemSucesso = 'Cadastro realizado com sucesso!'
          this.cadastrando = false;
          this.username = '';
          this.password = '';
          this.errors = [];
        }, errorResponse => {
          this.mensagemSucesso = null;
          this.errors = errorResponse.error.errors
        })
  }
}
