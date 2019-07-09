import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides: Array<any> = [];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button class=\'nav-btn next-slide\' id="carousel_next_btn"></button>',
    prevArrow: '<div class=\'nav-btn prev-slide\' id="carousel_prev_btn">Previous Photo</div>',
    dots: true,
    infinite: false,
    arrows: true
  };

  constructor() {
    this.slides = [
      {img: 'assets/carousel/iron-man.jpg', title: 'Iron Man'},
      {img: 'assets/carousel/captain-america.jpg'},
      {img: 'assets/carousel/thor.jpg'},
      {img: 'assets/carousel/hulk.png'},
      {img: 'assets/carousel/captain-marvel.jpg'},
      {img: 'assets/carousel/natasha.jpg'},
      {img: 'assets/carousel/black-panther.jpg'},
      {img: 'assets/carousel/clint.jpg'},
    ];
  }

  ngOnInit() {
  }

  slickInit(e){}

  breakpoint(e){}

  afterChange(e){}

  beforeChange(e){}

}
