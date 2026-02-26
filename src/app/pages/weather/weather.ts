import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { map, shareReplay, tap } from 'rxjs';

import { WeatherService } from './weather-service';

@Component({
  selector: 'app-weather',
  imports: [
    AsyncPipe,
  ],
  templateUrl: './weather.html',
  styleUrl: './weather.scss',
})
export class Weather implements OnInit {
  protected currentWeather$ = inject(WeatherService)
      .getCurrentWeather()
      .pipe(
          map(value => value.current_weather),
          tap(value => console.log(value)),
          shareReplay(1),
      );

  public ngOnInit(): void {
    console.log('Init Weather component');
  }

  protected formattedTime(time: string): string {
    return new Date(time).toLocaleString();
  }

  protected isDay(isDay: 1 | 0 | unknown): string {
    return isDay === 1
        ? 'Yes'
        : 'No';
  }
}
