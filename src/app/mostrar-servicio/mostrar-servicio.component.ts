import { Component } from '@angular/core';
import { HelloWorldService } from '../services/hello-world.service';

@Component({
  selector: 'app-mostrar-servicio',
  templateUrl: './mostrar-servicio.component.html',
  styleUrls: ['./mostrar-servicio.component.css']
})
export class MostrarServicioComponent {
  message:string;

  constructor(private helloWorldService:HelloWorldService) {
    this.message = helloWorldService.getHelloWorld();
   }
}
