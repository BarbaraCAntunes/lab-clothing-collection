import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    if (this.email?.errors?.['required']) {
      this.emailErrorMessage = '❌ Por favor, preencha o campo de e-mail.';
    } else if (this.email?.errors?.['email']) {
      this.emailErrorMessage = '❌ Por favor, insira um e-mail válido.';
    } else {
      this.emailErrorMessage = '';

      if (this.password?.errors?.['required']) {
        this.passwordErrorMessage = '❌ Por favor, preencha o campo de senha.';
      } else if (this.password?.errors?.['minlength']) {
        this.passwordErrorMessage = '❌ A senha deve ter 8 caracteres.';
      } else {
        this.passwordErrorMessage = '';

        this.authService
          .authenticateUser(email, password)
          .then((isAuthenticated) => {
            if (isAuthenticated) {
              this.router.navigate(['/home']);
            } else {
              this.emailErrorMessage = '❌ E-mail ou senha inválidos.';
            }
          });
      }
    }
  }
}
