import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-output',
  templateUrl: './hijo-output.component.html',
  styleUrls: ['./hijo-output.component.css']
})
export class HijoOutputComponent {

  message: string = "Mensaje del hijo renderizado en el padre";
  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.sendMessage();
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

}
