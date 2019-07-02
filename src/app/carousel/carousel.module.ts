import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselRoutingModule } from './carousel-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule, CarouselRoutingModule, MatGridListModule, SlickCarouselModule
  ]
})
export class CarouselModule { }
