import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-left',
  templateUrl: './arrow-left.component.html',
  styleUrls: ['./arrow-left.component.css'],
})
export class ArrowLeftComponent {
  @Input() link: string = '';
}
