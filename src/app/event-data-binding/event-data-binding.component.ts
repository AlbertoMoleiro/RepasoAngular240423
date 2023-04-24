import { Component } from '@angular/core';

@Component({
  selector: 'app-event-data-binding',
  templateUrl: './event-data-binding.component.html',
  styleUrls: ['./event-data-binding.component.css']
})
export class EventDataBindingComponent {
  numero: number = 0;

  randomNumber() {
    this.numero = Math.floor(Math.random() * 101);
  }
}
