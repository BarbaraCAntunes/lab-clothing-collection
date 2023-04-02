import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pre-login-pages',
  templateUrl: './pre-login-pages.component.html',
  styleUrls: ['./pre-login-pages.component.css'],
})
export class PreLoginPagesComponent implements OnInit {
  path: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.path = '';
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      this.path = url[0]?.path || '';
    });
  }
}
