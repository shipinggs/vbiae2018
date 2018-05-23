import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Project } from './project';
import { PROJECTS } from './data/projects-data';
import { PAVILION } from './data/pavilion-data';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(tag: string): Observable<Project> {
    return of(PROJECTS.find(project => project.tag === tag));
  }

  getPavilion(): Observable<Project> {
    return of (PAVILION.find(pavilion => pavilion.id === 1)); // hard coded as 1 for now
  }
}
