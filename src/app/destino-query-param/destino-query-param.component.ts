import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destino-query-param',
  templateUrl: './destino-query-param.component.html',
  styleUrls: ['./destino-query-param.component.css']
})
export class DestinoQueryParamComponent {
  accion:string;
  id:number;

  constructor(private activatedRoute:ActivatedRoute) {
    this.accion = this.activatedRoute.snapshot.queryParams['accion'];
    this.id = this.activatedRoute.snapshot.queryParams['id'];
  }

}
