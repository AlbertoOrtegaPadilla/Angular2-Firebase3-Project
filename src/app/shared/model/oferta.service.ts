import {Injectable, Inject} from '@angular/core';
import {AngularFireDatabase, FirebaseRef} from "angularfire2";
import {Observable, Subject} from "rxjs/Rx";
import {Oferta} from "./oferta";
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";
import {firebaseConfig} from "../../../environments/firebase.config";
import {Http} from "@angular/http";

@Injectable()
export class OfertaService {

    sdkDb:any;

    constructor(private db:AngularFireDatabase, @Inject(FirebaseRef) fb, private http:Http) {

        this.sdkDb = fb.database().ref();
    }
    
    findAllOfertasFromRestauranteId(restauranteId : string): Observable<Oferta[]>{
        const ofert$ = this.db.list('ofertas', { query: 
            { orderByChild: "restauranteId", equalTo: restauranteId }});
        ofert$.subscribe();
        return ofert$;    
    }

    findLessonByUrl(url:string):Observable<Oferta> {
        return this.db.list('ofertas', {
            query: {
                orderByChild: 'codigo',
                equalTo: url
            }
        })
        .filter(results => results && results.length > 0)
        .map(results => Oferta.fromJson(results[0]))
        .do(console.log);
    }

    createNewOferta(restauranteId:string, oferta:any): Observable<any> {

        const OfertaToSave = Object.assign({}, oferta, {restauranteId});

        const newOfertaKey = this.sdkDb.child('ofertas').push().key;

        let dataToSave = {};

        dataToSave["ofertas/" + newOfertaKey] = OfertaToSave;
        dataToSave[`ofertasPerRestaurante/${restauranteId}/${newOfertaKey}`] = true;

        return this.firebaseUpdate(dataToSave);
    }

    deleteOferta(key:string): Observable<any> {

        const url = firebaseConfig.databaseURL + '/ofertas/' + key + '.json';

        return this.http.delete(url);
    }

    saveOferta(ofertaId:string, oferta): Observable<any> {

        const ofertaToSave = Object.assign({}, oferta);
        delete(ofertaToSave.$key);

        let dataToSave = {};
        dataToSave[`ofertas/${ofertaId}`] = ofertaToSave;

        return this.firebaseUpdate(dataToSave);


    }

    firebaseUpdate(dataToSave) {
        const subject = new Subject();

        this.sdkDb.update(dataToSave)
            .then(
                val => {
                    subject.next(val);
                    subject.complete();

                },
                err => {
                    subject.error(err);
                    subject.complete();
                }
            );

        return subject.asObservable();
    }
    
    findOferta(id): Observable<Oferta>{
        return this.db.object('ofertas/' + id);
    }

    
    updateOferta(i, n, c, u){

        this.db.list('ofertas').update(i, {codigo:n, descripcion: c, precio: u })
        .then(
            ()=>console.log("Oferta no actualizada."),
            console.error
        );
    }
}