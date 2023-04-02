import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-dashbord',
  templateUrl: './cards-dashbord.component.html',
  styleUrls: ['./cards-dashbord.component.css'],
})
export class CardsDashbordComponent implements OnInit {
  @Input() title: string = '';
  @Input() number: number = 0;


  constructor() {}

  ngOnInit(): void {}
}
