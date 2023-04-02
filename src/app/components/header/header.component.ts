import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {} // Injete AuthService e Router

  logoutButton(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  notificacao() {
    alert('Você não possui novas notificações!');
  }
}
