import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CarouselImage } from './carousel-image';
import { CAROUSEL_IMAGES } from './data/home-data';


@Injectable()
export class HomeCarouselService {

  constructor( ) { }

  getCarouselSlides(): Observable<CarouselImage[]> {
    return of(CAROUSEL_IMAGES);
  }

}
