import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-input',
  templateUrl: './padre-input.component.html',
  styleUrls: ['./padre-input.component.css']
})
export class PadreInputComponent {
  message: string = "Mensaje del padre renderizado en el hijo";

}
