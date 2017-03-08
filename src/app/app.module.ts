import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

//Agregar estas dos lineas para elangularfire
import {firebaseConfig} from '../environments/firebase.config';
import {AngularFireModule} from 'angularfire2/index';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { RestauranteService } from './shared/model/restaurante.service';
import {OfertaService} from "./shared/model/oferta.service";
import { BuscadorComponent } from './buscador/buscador.component';
import { DetalleOfertasComponent } from './detalle-ofertas/detalle-ofertas.component';
import {RouterModule} from "@angular/router";
import {routerConfig} from "./router.config";
import { NuevaOfertaComponent } from './nueva-oferta/nueva-oferta.component';
import { FormularioOfertaComponent } from './formulario-oferta/formulario-oferta.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditarOfertaComponent } from './editar-oferta/editar-oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    BuscadorComponent,
    DetalleOfertasComponent,
    NuevaOfertaComponent,
    FormularioOfertaComponent,
    EditarOfertaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Agregar esta linea para el angularfire
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule
  ],
  providers: [RestauranteService, OfertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
