import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-login-pages',
  templateUrl: './post-login-pages.component.html',
  styleUrls: ['./post-login-pages.component.css'],
})
export class PostLoginPagesComponent implements OnInit {
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
