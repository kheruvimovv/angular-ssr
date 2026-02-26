import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OpenMeteoCurrentWeatherResponse } from './open-meteo-current-weather-response';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private readonly _http = inject(HttpClient);

    public getCurrentWeather(): Observable<OpenMeteoCurrentWeatherResponse> {
        const params = new HttpParams({
            fromObject: {
                latitude: '55.1842',
                longitude: '30.2029',
                current_weather: true,
            },
        });

        return this._http.get<OpenMeteoCurrentWeatherResponse>('https://api.open-meteo.com/v1/forecast', { params: params });
    }
}
