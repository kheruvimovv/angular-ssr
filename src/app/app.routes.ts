import { Routes } from '@angular/router';

import { Landing } from './pages/landing/landing';
import { Home } from './pages/home/home';
import { ItemPreview } from './pages/shop/item-preview/item-preview';
import { Shop } from './pages/shop/shop';

export const routes: Routes = [
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'landing',
        component: Landing,
    },
    {
        path: 'shop',
        children: [
            {
                path: '',
                component: Shop,
            },
            {
                path: ':id',
                component: ItemPreview,
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
