import { Route } from '@angular/router';

export const locationsRoutes: Route[] = [
    {
        path: 'locations',  // Añade rutas válidas aquí
        children: [
            {
                path: '',
                loadComponent: () => import('./locations.component')
            },
            {
                path: '**',
                redirectTo: ''
            }
        ],
    },
]