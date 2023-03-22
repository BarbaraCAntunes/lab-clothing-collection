import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() { 
    this.isAuthenticatedSubject.next(this.isLoggedIn());
  }

  authenticateUser(email: string, password: string): Promise<boolean> {
    if (email === 'barbaracantunes@gmail.com' && password === '1234') {
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