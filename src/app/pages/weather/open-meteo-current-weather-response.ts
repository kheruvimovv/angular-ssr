export interface OpenMeteoCurrentWeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  
  current_weather_units: {
    time: string;      // "iso8601"
    interval: string;    // "seconds"
    temperature: string;   // "°C"
    windspeed: string;   // "km/h"
    winddirection: string; // "°"
    is_day: string;    // "" (иногда пусто)
    weathercode: string;   // "wmo code"
  };
  
  current_weather: {
    time: string;      // ISO datetime
    interval: number;    // секунды
    temperature: number;   // °C
    windspeed: number;   // km/h
    winddirection: number; // градусы
    is_day: number;    // 0 | 1
    weathercode: number;   // WMO код
  };
}
