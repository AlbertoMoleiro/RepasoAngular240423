import { Component } from '@angular/core';
import {Estaciones} from '../models/Estaciones';
@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  //ngIF
mostrar:boolean=true;

//ngFor
estaciones:string[]=Object.values(Estaciones);

//ngSwitch
color:string="rojo";

}
