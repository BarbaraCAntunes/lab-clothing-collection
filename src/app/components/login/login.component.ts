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
  errorMsg : string = "";

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.authenticateUser(email, password)
      .then(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigateByUrl('/home');
        } else {
          this.errorMsg = 'E-mail ou senha incorretos.';
          console.log("erro")
        }
      });
  }
}