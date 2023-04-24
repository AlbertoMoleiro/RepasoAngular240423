import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-hijo-input',
  templateUrl: './hijo-input.component.html',
  styleUrls: ['./hijo-input.component.css']
})
export class HijoInputComponent {

  @Input() message: string="";

}
