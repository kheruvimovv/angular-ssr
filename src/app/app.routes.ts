import { Routes } from '@angular/router';

import { Landing } from './pages/landing/landing';

export const routes: Routes = [
  {
    path: 'landing',
    component: Landing,
  },
  {
    path: '**',
    redirectTo: 'landing',
  },
];

// export const routes: Routes = [
//     {
//         path: 'home',
//         component: Home,
//     },
//     {
//         path: 'landing',
//         component: Landing,
//     },
//     {
//         path: 'weather',
//         component: Weather,
//     },
//     {
//         path: '**',
//         redirectTo: 'home',
//     },
// ];
