import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () =>
        import('./login/login').then(m => m.Login)
    },
    {
        path: 'dashboard',
        loadComponent: () =>
        import('./dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'pacientes',
        loadComponent: () =>
        import('./pacientes/pacientes').then(m => m.Pacientes)
    },
    {
        path: 'medicos',
        loadComponent: () =>
        import('./medicos/medicos').then(m => m.Medicos)
    },
    {
        path: 'citas',
        loadComponent: () =>
        import('./citas/citas').then(m => m.Citas)
    },
    {
        path: 'calendario',
        loadComponent: () =>
        import('./calendario/calendario').then(m => m.Calendario)
    },
    {
        path: 'reportes',
        loadComponent: () =>
        import('./reportes/reportes').then(m => m.Reportes)
    }
];