import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'acceuil',
        title:'MovieBox',
        loadComponent: () => import('./components/acceuil/acceuil.component')
    },
    {
        path: '',
        redirectTo: 'acceuil',
        pathMatch : 'full'
    },
    
];
