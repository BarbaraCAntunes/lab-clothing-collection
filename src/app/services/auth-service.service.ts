import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private tokenKey = 'auth_token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private registeredEmails = ['barbaracantunes@gmail.com', 'prof_yan@audaces.com.br'];
  isEmailRegistered(email: string): boolean {
    return this.registeredEmails.includes(email);
  }

  private registeredPasswords = ['12345678', '12345678'];
  isPasswordRegistered(password: string): boolean {
    return this.registeredPasswords.includes(password);
  }

  constructor() { 
    this.isAuthenticatedSubject.next(this.isLoggedIn());
  }

  authenticateUser(email: string, password: string): Promise<boolean> {
    if (this.isEmailRegistered(email) && this.isPasswordRegistered(password)) {
      localStorage.setItem(this.tokenKey, 'my_auth_token');
      this.isAuthenticatedSubject.next(true);
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
  }
}
