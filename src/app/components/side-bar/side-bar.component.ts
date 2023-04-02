import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  getButtonClass(route: string) {
    return {
      selected: this.currentRoute === route,
    };
  }

  obterAjuda() {
    alert('Essa seção ainda está em construção!');
  }
  comentarios() {
    alert('Essa seção ainda está em construção!');
  }
}
