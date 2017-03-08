//import {Lesson} from "./lesson";
import {Observable} from "rxjs/Rx";

export class Oferta {

    constructor(
        public $key:string,
        public codigo:string,
        public descripcion:string,
        public precio: string,
        public restauranteId: string) {

    }

    static fromJson({$key, codigo, descripcion, precio, restauranteId}) {
        return new Oferta($key, codigo, descripcion, precio, restauranteId);
    }

    static fromJsonArray(json : any[]) : Oferta[] {
        return json.map(Oferta.fromJson);
    }

}