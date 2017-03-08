import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    /*restaurantes$:FirebaseListObservable<any>;
    firstRestaurante:any;

    constructor(private af: AngularFire){

      this.restaurantes$ = af.database.list('restaurantes');
      this.restaurantes$.subscribe(console.log);
      //con esto asignamos a la variable firstcourse al primero de la lista
      this.restaurantes$.map(restaurantes => restaurantes[3])
        .subscribe(
          restaurante => this.firstRestaurante = restaurante
    );
  }*/
}
