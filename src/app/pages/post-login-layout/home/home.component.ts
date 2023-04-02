import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  totalCollections: number = 0;
  totalClothingModels: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.fetchCollections();
    this.fetchClothingModels();
  }

  fetchCollections() {
    this.http.get<any[]>('http://localhost:3000/colecoes').subscribe((data) => {
      this.totalCollections = data.length;
    });
  }

  fetchClothingModels() {
    this.http.get<any[]>('http://localhost:3000/modelos').subscribe((data) => {
      this.totalClothingModels = data.length;
    });
  }
}
