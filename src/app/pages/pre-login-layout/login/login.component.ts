import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  emailErrorMessage = '';
  passwordErrorMessage = '';

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

    onInputChange() {
      this.emailErrorMessage = '';
      this.passwordErrorMessage = '';
    }

  onSubmit() {
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');
    
    if (!emailControl) {
      this.emailErrorMessage = 'Campo e-mail é obrigatório';
    } else {
      const email = emailControl.value;

      if (emailControl.invalid) {
        this.emailErrorMessage = 'Digite um e-mail válido';
      } else if (!this.authService.isEmailRegistered(email)) {
        this.emailErrorMessage = 'E-mail não cadastrado';
      }
    }

    if (!passwordControl?.value) {
      this.passwordErrorMessage = 'Campo senha é obrigatório';
    } else if (passwordControl?.invalid) {
      this.passwordErrorMessage = 'O campo senha deve ter pelo menos 8 caracteres';
    } else {
      const email = emailControl?.value ?? '';
      const password = passwordControl.value;

      this.authService.authenticateUser(email, password)
        .then(isAuthenticated => {
          if (isAuthenticated) {
            this.router.navigateByUrl('/home');
          } else {
            this.passwordErrorMessage = 'Senha incorreta';
          }
        });
    }
  }}
