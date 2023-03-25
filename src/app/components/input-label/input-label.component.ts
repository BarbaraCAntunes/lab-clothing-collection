import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.css']
})
export class InputLabelComponent {
    @Input() type: string = "";
    @Input() id: string = "";
    @Input() placeholder: string = "";
    @Input() formControl: FormControl = new FormControl(); 
    @Input() formControlName: string = "";
}
