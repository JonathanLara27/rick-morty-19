import { Route } from "@angular/router";

export const episodesRoutes: Route[] = [
    {
        path: 'episodes',  // Añade rutas válidas aquí
        children: [
            {
                path: '',
                loadComponent: () => import('./episodes.component')
            },
            {
                path: '**',
                redirectTo: ''
            }
        ],
    },
]