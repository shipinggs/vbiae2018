import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CURATORS } from './data/about-data';
import { COMMISSIONERS } from './data/about-data';

import { Curator } from './curator';

@Injectable()
export class AboutService {

  constructor() { }

  getCurators(): Observable<Curator[]> {
    return of(CURATORS);
  }

  getCommissioners(): Observable<Curator[]> {
    return of(COMMISSIONERS);
  }
}