import { Routes } from '@angular/router';
import { characterRoutes } from './pages/characters/characters.routes';
import { episodesRoutes } from './pages/episodes/episodes.routes';
import { locationsRoutes } from './pages/locations/locations.routes';

export const routes: Routes = [
    {
        path: '',
        children: [
            ...characterRoutes,
            ...episodesRoutes,
            ...locationsRoutes,
            {
                path: '**',
                redirectTo: 'characters'
            }
        ],
    }
];
