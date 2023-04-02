import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface User {
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'auth_token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.isAuthenticatedSubject.next(this.isLoggedIn());
  }

  isEmailRegistered(email: string): Observable<boolean> {
    return this.http
      .get<User[]>(`${this.apiUrl}/usuarios`)
      .pipe(map((users) => users.some((user) => user.email === email)));
  }

  isPasswordRegistered(email: string, password: string): Observable<boolean> {
    return this.http
      .get<User[]>(`${this.apiUrl}/usuarios`)
      .pipe(
        map((users) =>
          users.some((user) => user.email === email && user.senha === password)
        )
      );
  }

  async authenticateUser(email: string, password: string): Promise<boolean> {
    const isRegistered = await this.isPasswordRegistered(
      email,
      password
    ).toPromise();
    if (isRegistered) {
      localStorage.setItem(this.tokenKey, 'my_auth_token');
      this.isAuthenticatedSubject.next(true);
      return true;
    } else {
      return false;
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
