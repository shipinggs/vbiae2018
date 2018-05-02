import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CURATORS } from './data/about-data';
import { COMMISSIONERS } from './data/about-data';

import { MessageService } from './message.service';
import { Curator } from './curator';

@Injectable()
export class AboutService {

  constructor(private messageService: MessageService) { }

  getCurators(): Observable<Curator[]> {
    this.messageService.add('fetched curators data');
    return of(CURATORS);
  }

  getCommissioners(): Observable<Curator[]> {
    this.messageService.add('fetched commissioners data');
    return of(COMMISSIONERS);
  }
}