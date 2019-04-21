import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Event } from './event';
import { EVENTS } from './data/events-data';

@Injectable()
export class EventService {

  constructor() { }

  compareDates = ( eventA, eventB ) => {
    let endDateA = eventA.endDate || eventA.startDate
    let endDateB = eventB.endDate || eventB.startDate
    if (endDateA > endDateB) return 1;
    else if (endDateA < endDateB) return -1;
    else return 0;
  }

  getUpcomingEvents(): Observable<Event[]> {
    let upcomingEvents = EVENTS.filter ( ev => {
      return ( ev.endDate || ev.startDate ) >= new Date();
    })
    return of( upcomingEvents.sort( this.compareDates ) );
  }

  getPastEvents(): Observable<Event[]> {
    let pastEvents = EVENTS.filter( ev => {
      return ( ev.endDate || ev.startDate ) < new Date();
    })
    return of( pastEvents.sort( this.compareDates ) );
  }

  getEvent(tag: string): Observable<Event> {
    return of(EVENTS.find(event => event.tag === tag));
  }

}
