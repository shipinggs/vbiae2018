import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Sponsor } from './sponsor';
import { SPONSORS } from './data/sponsor-data';


@Injectable()
export class SponsorService {

  constructor() { }

  getSponsors(): Observable<Sponsor[]> {
    return of(SPONSORS);
  }
}
