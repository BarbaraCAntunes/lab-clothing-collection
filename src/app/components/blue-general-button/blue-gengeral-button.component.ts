import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue-general-button',
  templateUrl: './blue-general-button.component.html',
  styleUrls: ['./blue-general-button.component.css'],
})
export class BlueGeneralButtonComponent {
  @Input() title: string = '';
}
