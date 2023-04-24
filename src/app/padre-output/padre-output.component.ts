import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-output',
  templateUrl: './padre-output.component.html',
  styleUrls: ['./padre-output.component.css']
})
export class PadreOutputComponent {
  message: string = "";
  receiveMessage($event: any) {
    this.message = $event;
  }


}
