//import {Lesson} from "./lesson";
import {Observable} from "rxjs/Rx";

export class Restaurante {

    constructor(
        public $key:string,
        public nombre:string,
        public descripcion:string,
        public direccion: string,
        public precio: string) {

    }

    static fromJson({$key, nombre, descripcion, direccion, precio}) {
        return new Restaurante($key, nombre, descripcion, direccion, precio);
    }

    static fromJsonArray(json : any[]) : Restaurante[] {
        return json.map(Restaurante.fromJson);
    }

}