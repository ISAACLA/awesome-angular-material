import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'carousel',
    loadChildren: './carousel/carousel.module#CarouselModule'
  },
  {
    path: 'myform',
    loadChildren: './myform/myform.module#MyformModule'
  }
]
