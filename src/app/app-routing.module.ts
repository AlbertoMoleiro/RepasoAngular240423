import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OneWayDataBindingComponent } from './one-way-data-binding/one-way-data-binding.component';
import { EventDataBindingComponent } from './event-data-binding/event-data-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { MostrarServicioComponent } from './mostrar-servicio/mostrar-servicio.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { OrigenParametroComponent } from './origen-parametro/origen-parametro.component';
import { OrigenQueryParamComponent } from './origen-query-param/origen-query-param.component';
import { DestinoParametroComponent } from './destino-parametro/destino-parametro.component';
import { DestinoQueryParamComponent } from './destino-query-param/destino-query-param.component';
import { PadreInputComponent } from './padre-input/padre-input.component';
import { PadreOutputComponent } from './padre-output/padre-output.component';

const routes: Routes = [
  { path: '', component:InterpolationComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'one-way-data-binding', component: OneWayDataBindingComponent },
  { path: 'event-data-binding', component: EventDataBindingComponent },
  { path: 'two-way-data-binding', component: TwoWayDataBindingComponent },
  { path: 'mostrar-servicio', component: MostrarServicioComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'origen-parametro', component: OrigenParametroComponent },
  { path: 'origen-query-param', component: OrigenQueryParamComponent },
  { path: 'destino-parametro/:id', component: DestinoParametroComponent },
  { path: 'destino-query-param', component: DestinoQueryParamComponent },
  { path: 'padre-input', component: PadreInputComponent },
  { path: 'padre-output', component: PadreOutputComponent },
  { path: '**', component:InterpolationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
