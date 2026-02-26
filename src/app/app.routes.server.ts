import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'landing',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];

// export const serverRoutes: ServerRoute[] = [
//   {
//     path: 'home',
//     renderMode: RenderMode.Client,
//   },
//   {
//     path: 'landing',
//     renderMode: RenderMode.Prerender,
//   },
//   {
//     path: 'weather',
//     renderMode: RenderMode.Server,
//   },
//   {
//     path: '**',
//     renderMode: RenderMode.Prerender,
//   },
// ];
