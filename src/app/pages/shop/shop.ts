import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ShopApiService } from './shop-api-service';

@Component({
    selector: 'app-shop',
    imports: [
        RouterLink,
        AsyncPipe,
    ],
    templateUrl: './shop.html',
    styleUrl: './shop.scss',
})
export class Shop {
    protected readonly items$ = inject(ShopApiService)
        .getItems();
}
