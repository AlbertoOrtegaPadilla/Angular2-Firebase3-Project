import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {RestauranteService} from "../shared/model/restaurante.service";
import {Observable} from "rxjs/Rx";
import {Restaurante} from "../shared/model/restaurante";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  @Input()
  restaurantes: Restaurante[];

  @Output('restaurante')
  restauranteEmitter = new EventEmitter<Restaurante>();

  constructor(private restaurantesService: RestauranteService) { }

  ngOnInit() {

  }

  selectRestaurante(restaurante:Restaurante) {
        this.restauranteEmitter.emit(restaurante);
    }

}
