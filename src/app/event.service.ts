import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Event } from './event';
import { EVENTS } from './data/events-data';

@Injectable()
export class EventService {

  constructor() { }

  getPastEvents(): Observable<Event[]> {
    return of(EVENTS.sort((a,b) => {
      if (a.endDate > b.endDate) {
        console.log(a.endDate, b.endDate);
        return 1;
      }
      if (a.endDate < b.endDate) {
        return -1;
      }
      return 0;
    }));
  }

  getEvent(tag: string): Observable<Event> {
    return of(EVENTS.find(event => event.tag === tag));
  }

}
