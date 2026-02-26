import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: [
    './app.scss',
  ],
})
export class App {
  protected navItems = [
    {
      link: 'home',
      label: 'HOME (CSR)',
    },
    {
      link: 'landing',
      label: 'LANDING (SSG)',
    },
    {
      link: 'weather',
      label: 'WEATHER (SSR)',
    },
  ];
}
