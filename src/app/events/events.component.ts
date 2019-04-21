import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

import { NgsRevealModule } from 'ng-scrollreveal'
;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  past_events: Event[];
  upcoming_events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getUpcomingEvents();
    this.getPastEvents();
  }

  getUpcomingEvents(): void {
    this.eventService.getUpcomingEvents()
      .subscribe(upcoming_events => this.upcoming_events = upcoming_events);
  }

  getPastEvents(): void {
    this.eventService.getPastEvents()
      .subscribe(past_events => this.past_events = past_events);
  }
}
