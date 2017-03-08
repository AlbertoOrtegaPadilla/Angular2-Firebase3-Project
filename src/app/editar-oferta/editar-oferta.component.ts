import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {OfertaService} from "../shared/model/oferta.service";
import {Oferta} from "../shared/model/oferta";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-oferta',
  templateUrl: './editar-oferta.component.html',
  styleUrls: ['./editar-oferta.component.css']
})
export class EditarOfertaComponent implements OnInit {

    id: string;
    codigo: string;
    descripcion: string;
    precio:string;

  constructor(private router: Router, private route:ActivatedRoute,
                                        private ofertaService:OfertaService) { 
    route.params.subscribe(params =>{
        this.id = params['id'];
    });
  }

  ngOnInit(){
      this.ofertaService.findOferta(this.id)
      .subscribe(response => this.codigo = response.codigo);

      this.ofertaService.findOferta(this.id)
      .subscribe(response => this.descripcion = response.descripcion);

      this.ofertaService.findOferta(this.id)
      .subscribe(response => this.precio = response.precio);
  }

  modificarOferta(i:string, n:string, c:string, u:string){
      this.ofertaService.updateOferta(i, n, c, u);
      alert("oferta Actualizada.");
  }
}
