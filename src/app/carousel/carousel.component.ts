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
    nextArrow: '<div class=\'nav-btn next-slide\'>Next Photo</div>',
    prevArrow: '<div class=\'nav-btn prev-slide\'>Previous Photo</div>',
    dots: true,
    infinite: false,
    arrows: true
  };

  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];
  constructor() {
    this.slides = [
      {img: 'assets/iron-man.jpg', title: 'Iron Man'},
      {img: 'assets/captain-america.jpg'},
      {img: 'assets/thor.jpg'},
      {img: 'assets/hulk.png'},
      {img: 'assets/captain-marvel.jpg'},
      {img: 'assets/natasha.jpg'},
      {img: 'assets/black-panther.jpg'},
      {img: 'assets/clint.jpg'},
    ];
  }

  ngOnInit() {
  }

  slickInit(e){}

  breakpoint(e){}

  afterChange(e){}

  beforeChange(e){}

}
