import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OneWayDataBindingComponent } from './one-way-data-binding/one-way-data-binding.component';
import { EventDataBindingComponent } from './event-data-binding/event-data-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { MostrarServicioComponent } from './mostrar-servicio/mostrar-servicio.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { OrigenParametroComponent } from './origen-parametro/origen-parametro.component';
import { DestinoParametroComponent } from './destino-parametro/destino-parametro.component';
import { OrigenQueryParamComponent } from './origen-query-param/origen-query-param.component';
import { DestinoQueryParamComponent } from './destino-query-param/destino-query-param.component';
import { FormsModule } from '@angular/forms';
import { HelloWorldService } from './services/hello-world.service';
import { HijoInputComponent } from './hijo-input/hijo-input.component';
import { PadreInputComponent } from './padre-input/padre-input.component';
import { PadreOutputComponent } from './padre-output/padre-output.component';
import { HijoOutputComponent } from './hijo-output/hijo-output.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    OneWayDataBindingComponent,
    EventDataBindingComponent,
    TwoWayDataBindingComponent,
    MostrarServicioComponent,
    DirectivasComponent,
    OrigenParametroComponent,
    DestinoParametroComponent,
    OrigenQueryParamComponent,
    DestinoQueryParamComponent,
    HijoInputComponent,
    PadreInputComponent,
    PadreOutputComponent,
    HijoOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HelloWorldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
