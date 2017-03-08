import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OfertaService} from "../shared/model/oferta.service";

@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.component.html',
  styleUrls: ['./nueva-oferta.component.css']
})
export class NuevaOfertaComponent implements OnInit {
  
  restauranteId:string;

  constructor(private route:ActivatedRoute, private ofertaService: OfertaService) {}

  ngOnInit() {

      this.restauranteId = this.route.snapshot.queryParams['restauranteId'];
      //console.log(this.ofertaId);
  }

  save(form) {
        this.restauranteId = this.route.snapshot.queryParams['restauranteId'];
        this.ofertaService.createNewOferta(this.restauranteId, form.value)
            .subscribe(
                () => {
                    alert("Nueva oferta Creada.");
                    form.reset();
                },
                err => alert(`error creando la nueva oferta: ${err}`)
            );
  }

}
