import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Início'
  },
  {
    path: 'pagamentos',
    loadComponent: () => import('./features/pagamentos/pagamentos.component').then(m => m.PagamentosComponent),
    title: 'Pagamentos'
  },
  {
    path: 'transferencias',
    loadComponent: () => import('./features/transferencias/transferencias.component').then(m => m.TransferenciasComponent),
    title: 'Transferências'
  },
  {
    path: 'cartoes',
    loadComponent: () => import('./features/cartoes/cartoes.component').then(m => m.CartoesComponent),
    title: 'Cartões'
  },
  {
    path: 'investimentos',
    loadComponent: () => import('./features/investimentos/investimentos.component').then(m => m.InvestimentosComponent),
    title: 'Investimentos'
  },
  { path: '**', redirectTo: '' }
];
