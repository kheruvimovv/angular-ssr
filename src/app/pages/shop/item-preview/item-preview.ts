import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';

import { ShopApiService } from '../shop-api-service';

@Component({
    selector: 'app-item-preview',
    imports: [
        AsyncPipe,
        RouterLink,
    ],
    templateUrl: './item-preview.html',
    styleUrl: './item-preview.scss',
})
export class ItemPreview {
    private readonly _apiService = inject(ShopApiService);
    private readonly _meta = inject(Meta);

    protected readonly item$ = inject(ActivatedRoute).paramMap
        .pipe(
            map(params => params.get('id')!),
            switchMap(id => this._apiService.getItem(id)),
            tap(item => {
                this._meta.updateTag(
                    {
                        property: 'og:title',
                        content: item.title,
                    },
                );
                this._meta.updateTag(
                    {
                        property: 'og:description',
                        content: item.description,
                    },
                );
            }),
        );
}
