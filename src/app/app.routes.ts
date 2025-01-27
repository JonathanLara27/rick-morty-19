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
                        path: ':id',
                        loadComponent: () => import('./common/components/character/character.component')
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
                        path: ':id',
                        loadComponent: () => import('./common/components/episode/episode.component')
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
                        path: ':id',
                        loadComponent: () => import('./common/components/location/location.component')
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
