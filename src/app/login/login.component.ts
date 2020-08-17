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
  loginError: boolean;
  cadastrando: boolean;
  mensagemSucesso: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit() {
    this.router.navigate(['/home'])
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
          this.loginError = false;
        }, error => {
          this.loginError = true;
          this.mensagemSucesso = null;
        })
  }
}
