import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {dbData} from "./db-data";

initializeApp(firebaseConfig);

const restaurantesRef = database().ref('restaurantes');
const ofertasRef = database().ref('ofertas');

dbData.restaurantes.forEach( restaurante => {

  console.log('añadiendo restaurante', restaurante.nombre);

  const restauranteRef = restaurantesRef.push({
      nombre: restaurante.nombre,
      descripcion: restaurante.descripcion,
      direccion: restaurante.direccion,
      precio: restaurante.precio
  });

  let cursosKeysPerRestaurantes = [];

  restaurante.ofertas.forEach((oferta:any) =>  {

    console.log('añadiendo ofertas ', oferta.codigo);

    cursosKeysPerRestaurantes.push(ofertasRef.push({
        descripcion: oferta.descripcion,
        precio: oferta.precio,
        codigo: oferta.codigo,
        restauranteId: restauranteRef.key
      }).key);
  });

  const association = database().ref('ofertasPerRestaurante');

  const ofertasPerRestaurante = association.child(restauranteRef.key);

  cursosKeysPerRestaurantes.forEach(ofertaKey => {
    console.log('añadiendo oferta a restaurante ');

    const ofertaRestauranteAssociation = ofertasPerRestaurante.child(ofertaKey);

    ofertaRestauranteAssociation.set(true);
  });


});