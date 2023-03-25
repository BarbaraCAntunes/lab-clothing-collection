import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email : string = ""
  emailNotFound: boolean = false;
  emailSent: boolean = false;
  redefineForm : FormGroup;
  
  constructor(
    private router: Router, 
    private formBuilder: FormBuilder) {
      this.redefineForm = this.formBuilder.group({
        email: ['', Validators.required],
      });}
      
      sendRecovery() {
        this.email = this.redefineForm.get('email')?.value;
        if (this.email === "barbaracantunes@gmail.com"){
        this.emailSent = true;
        this.emailNotFound = false;
  } else {
      this.emailNotFound = true;
  }}

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
