import { Component, OnInit } from '@angular/core';
import {RestauranteService} from "../shared/model/restaurante.service";
import {Restaurante} from "../shared/model/restaurante";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  allRestaurantes: Restaurante[];
  filtered:Restaurante[];

  constructor(private restaurantesService: RestauranteService) { }

  ngOnInit() {

    this.restaurantesService.findAllRestaurantes()
      .do(console.log)
        .subscribe(restaurantes => this.allRestaurantes = this.filtered = restaurantes);
  }

  search(search:string) {

        this.filtered = this.allRestaurantes.filter(restaurante => restaurante.nombre.includes(search) );

    }
}
