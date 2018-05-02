import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Project } from './project';
import { PROJECTS } from './data/projects-data';

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
}
