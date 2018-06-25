import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CURATORS } from './data/commissioners-curators-data';
import { COMMISSIONERS } from './data/commissioners-curators-data';

import { Curator } from './curator';

@Injectable()
export class CommissionersCuratorsService {

  constructor() { }

  getCurators(): Observable<Curator[]> {
    return of(CURATORS);
  }

  getCommissioners(): Observable<Curator[]> {
    return of(COMMISSIONERS);
  }
}
