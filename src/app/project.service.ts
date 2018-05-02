import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Project } from './project';
import { PROJECTS } from './data/projects-data';
import { PAVILION } from './data/pavilion-data';

import { MessageService } from './message.service';

@Injectable()
export class ProjectService {

  constructor(private messageService: MessageService) { }

  getProjects(): Observable<Project[]> {
    this.messageService.add('fetched projects');
    return of(PROJECTS);
  }

  getProject(tag: string): Observable<Project> {
    this.messageService.add('fetched project with tag ' + tag);
    return of(PROJECTS.find(project => project.tag === tag))
  }

  getPavilion(): Observable<Project> {
    this.messageService.add('fetched pavilion');
    return of (PAVILION.find(pavilion => pavilion.id === 1)) // hard coded as 1 for now
  }
}
