import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'acceuil',
        title:'Uliza-app',
        loadComponent: () => import('./components/acceuil/acceuil.component')
    },
    {
        path:'login',
        title:'Login | uliza-app',
        loadComponent: ()  => import('./components/auth/login/login.component')
    },
    {
        path:'register',
        title:'Register | uliza-app',
        loadComponent: () => import('./components/auth/register/register.component')
    },
    {
        path:'chat',
        title:'chat | uliza-app',
        loadComponent: () => import('./components/tchat/tchat.component')
    },
    {
        path:'doc',
        title:'doc | uliza-app',
        loadComponent: () => import('./components/docs/docs.component')
    },
    {
        path:'load',
        title:'load | uliza-app',
        loadComponent: () => import('./components/loading/loading.component')
    },
    {
        path:'notfound',
        title:'Not Found | uliza-app',
        loadComponent: () => import('./components/not-found/not-found.component')
    },
    {
        path: '',
        redirectTo: 'acceuil',
        pathMatch : 'full'
    },
    {
        path: '**',
        redirectTo: 'notfound',
        pathMatch: 'full'
    }
];
