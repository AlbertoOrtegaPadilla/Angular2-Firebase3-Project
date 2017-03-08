import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Restaurante} from "./restaurante";
import {Oferta} from "./oferta";
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";

@Injectable()
export class RestauranteService {


    constructor(private db:AngularFireDatabase) {
    }

    findAllRestaurantes():Observable<Restaurante[]> {
        return this.db.list('restaurantes').map(Restaurante.fromJsonArray);
    }
}