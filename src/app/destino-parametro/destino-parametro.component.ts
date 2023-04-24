import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destino-parametro',
  templateUrl: './destino-parametro.component.html',
  styleUrls: ['./destino-parametro.component.css']
})
export class DestinoParametroComponent {
destinoParametro:number;
constructor(private activatedRoute:ActivatedRoute) {
  this.destinoParametro = this.activatedRoute.snapshot.params['id'];
}
}
