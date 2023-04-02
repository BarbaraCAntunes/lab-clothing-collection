import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  forgotForm!: FormGroup;
  emailNotFound: boolean = false;
  emailSent: boolean = false;
  email: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  sendRecovery() {
    if (this.forgotForm.invalid) {
      return;
    }

    this.email = this.forgotForm.get('email')?.value;

    this.authService
      .isEmailRegistered(this.email)
      .subscribe((isEmailRegistered) => {
        if (isEmailRegistered) {
          this.emailSent = true;
          this.emailNotFound = false;
        } else {
          this.emailNotFound = true;
          this.emailSent = false;
        }
      });
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
