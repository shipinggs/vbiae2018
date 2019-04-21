import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { Event } from '../event';
import { ProjectService } from '../project.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Project[] = [];
  upcoming_events: Event[];


  constructor(
    private projectService: ProjectService,
    private eventService:   EventService,
  ) {}

  ngOnInit() {
    this.getUpcomingEvents();
    this.getProjects()
  }

  getUpcomingEvents(): void {
    this.eventService.getUpcomingEvents()
      .subscribe( upcoming_events => this.upcoming_events = upcoming_events );
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects.slice(0,3));
  }
}
