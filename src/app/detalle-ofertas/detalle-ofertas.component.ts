import { Component, OnInit } from '@angular/core';
import {OfertaService} from "../shared/model/oferta.service";
import {Oferta} from "../shared/model/oferta";
import {Restaurante} from "../shared/model/restaurante";
import {Observable} from "rxjs/Rx";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detalle-ofertas',
  templateUrl: './detalle-ofertas.component.html',
  styleUrls: ['./detalle-ofertas.component.css']
})
export class DetalleOfertasComponent implements OnInit {

  ofertas$: Observable<Oferta[]>;
  ofertasRestaurantes: Oferta[];

  restauranteId:string;

  constructor(private router: Router, private route:ActivatedRoute,
                                        private ofertaService:OfertaService) {}

  ngOnInit() {

        this.restauranteId = this.route.snapshot.params['id'];
        console.log(this.restauranteId);
        this.ofertas$ = this.ofertaService
                .findAllOfertasFromRestauranteId(this.restauranteId);
  }

  delete(key) {
        this.ofertaService.deleteOferta(key)
            .subscribe(
                () => alert('Oferta borrada.'),
                console.error
            );
    }
 
}
