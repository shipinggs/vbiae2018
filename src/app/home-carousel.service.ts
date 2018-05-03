import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CarouselImage } from './carousel-image';
import { CAROUSEL_IMAGES } from './data/home-data';

import { MessageService } from './message.service';


@Injectable()
export class HomeCarouselService {

  constructor(private messageService: MessageService) { }

  getCarouselSlides(): Observable<CarouselImage[]> {
    this.messageService.add('fetched home carousel slides');
    return of(CAROUSEL_IMAGES);
  }

}
