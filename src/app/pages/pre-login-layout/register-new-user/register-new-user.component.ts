import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user-service.service';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css'],
  providers: [UserService],
})
export class RegisterNewUserComponent implements OnInit {
  nameError: string = '';
  companyError: string = '';
  cnpjError: string = '';
  emailError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';
  errorRequired: boolean = false;

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      company: ['', [Validators.required, Validators.minLength(2)]],
      cnpj: ['', [Validators.required, Validators.pattern('[0-9]{14}')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  registerNewUser() {
    this.nameError = '';
    this.companyError = '';
    this.cnpjError = '';
    this.emailError = '';
    this.passwordError = '';
    this.confirmPasswordError = '';

    let isValidForm = true;

    const nameParts = this.registerForm.value.name.trim().split(' ');
    if (nameParts.length < 2) {
      this.nameError = '❌ O nome deve ter pelo menos duas palavras';
      isValidForm = false;
    }

    const companyParts = this.registerForm.value.company.trim().split(' ');
    if (companyParts.length < 2) {
      this.companyError =
        '❌ O nome da empresa deve ter pelo menos duas palavras';
      isValidForm = false;
    }

    if (!this.isValidCNPJ(this.registerForm.value.cnpj)) {
      this.cnpjError = '❌ O CNPJ informado é inválido';
      isValidForm = false;
    }

    if (!this.isValidEmail(this.registerForm.value.email)) {
      this.emailError = '❌ O e-mail informado é inválido';
      isValidForm = false;
    }

    if (!this.isValidPassword(this.registerForm.value.password)) {
      this.passwordError = '❌ A senha deve ter pelo menos 8 caracteres';
      isValidForm = false;
    }

    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    ) {
      this.confirmPasswordError = '❌ As senhas não conferem';
      isValidForm = false;
    }

    if (isValidForm) {
      const newUser: User = {
        id: 0,
        nome: this.registerForm.value.name,
        empresa: this.registerForm.value.company,
        cnpj: this.registerForm.value.cnpj,
        email: this.registerForm.value.email,
        senha: this.registerForm.value.password,
      };

      this.userService.addUser(newUser).subscribe({
        next: () => {
          alert('Usuário registrado com sucesso!');
          this.router.navigate(['/login']);
        },
      });
    }
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  isValidPassword(password: string): boolean {
    return password.length >= 8;
  }

  isValidCNPJ(cnpj: string): boolean {
    if (cnpj.length == 14) {
      return true;
    } else {
      return false;
    }
  }
}
