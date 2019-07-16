import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselRoutingModule } from './carousel-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatIconModule } from '@angular/material';


@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule, CarouselRoutingModule, SlickCarouselModule, MatIconModule
  ]
})
export class CarouselModule { }
