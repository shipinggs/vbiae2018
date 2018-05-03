import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CarouselImage } from '../carousel-image';
import { HomeCarouselService } from '../home-carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  carouselSlides: CarouselImage[];

  constructor(private homeCarouselService: HomeCarouselService) {}

  ngOnInit() {
    this.getCarouselSlides();
  }

  getCarouselSlides(): void {
    this.homeCarouselService.getCarouselSlides()
      .subscribe(carouselSlides => this.carouselSlides = carouselSlides);
  }

}