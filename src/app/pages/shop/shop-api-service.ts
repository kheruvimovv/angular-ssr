import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IItem } from './item-interface';

@Injectable({
    providedIn: 'root',
})
export class ShopApiService {
    private readonly _baseUrl = 'http://localhost:3000/items';
    private readonly _http = inject(HttpClient);

    public getItems(): Observable<IItem[]> {
        return this._http.get<IItem[]>(this._baseUrl);
    }

    public getItem(id: string): Observable<IItem> {
        return this._http.get<IItem>(`${this._baseUrl}/${id}`);
    }
}
