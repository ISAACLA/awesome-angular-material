import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel.component';

const  routes: Routes = [
  {
    path: '',
    component: CarouselComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CarouselRoutingModule { }
