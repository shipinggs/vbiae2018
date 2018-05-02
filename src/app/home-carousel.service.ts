import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CarouselSlide } from './carousel-slide';
import { CAROUSEL_SLIDES } from './data/home-data';

import { MessageService } from './message.service';


@Injectable()
export class HomeCarouselService {

  constructor(private messageService: MessageService) { }

  getCarouselSlides(): Observable<CarouselSlide[]> {
    this.messageService.add('fetched home carousel slides');
    return of(CAROUSEL_SLIDES);
  }

}
