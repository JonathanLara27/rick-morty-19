import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'characters',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./pages/characters/characters.component')
                    },
                    {
                        path: '**',
                        redirectTo: ''
                    }
                ],
            },
            {
                path: 'episodes',  // Añade rutas válidas aquí
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./pages/episodes/episodes.component')
                    },
                    {
                        path: '**',
                        redirectTo: ''
                    }
                ],
            },
            {
                path: 'locations',  // Añade rutas válidas aquí
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./pages/locations/locations.component')
                    },
                    {
                        path: '**',
                        redirectTo: ''
                    }
                ],
            },
            {
                path: '**',
                redirectTo: 'characters'
            }
        ],
    }
];
