import { Routes } from "@angular/router";

export const characterRoutes: Routes = [
    {
        path: 'characters',
        children: [
            {
                path: '',
                loadComponent: () => import('./characters.component')
            },
            {
                path: '**',
                redirectTo: ''
            }
        ],
    },
]