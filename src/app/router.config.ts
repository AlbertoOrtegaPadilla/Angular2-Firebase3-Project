import {Route} from "@angular/router"

import { BuscadorComponent } from './buscador/buscador.component';
import { DetalleOfertasComponent } from './detalle-ofertas/detalle-ofertas.component';
import { NuevaOfertaComponent } from './nueva-oferta/nueva-oferta.component';
import { EditarOfertaComponent } from './editar-oferta/editar-oferta.component';

export const routerConfig : Route[] = [
    {
        path:'Listado-Restaurante',
        component: BuscadorComponent
    },
    {
        path: 'Listado-Restaurante',
        children: [
            {
                path: ':id',
                children: [
                    
                    {
                        path: '',
                        component: DetalleOfertasComponent
                    },
                    {
                        path: 'new',
                        component: NuevaOfertaComponent,
                        
                    }
                ]
            },
            {
                path: ':id/:id',
                component: EditarOfertaComponent
            }
        ]
    },
    {
        path:'',
        redirectTo:'Listado-Restaurante',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'Listado-Restaurante'
    }
];