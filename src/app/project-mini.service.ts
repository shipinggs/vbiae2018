import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProjectMini } from './project-mini';
import { PROJECT_MINIS } from './data/home-data';

@Injectable()
export class ProjectMiniService {

  constructor() { }

  getProjectMinis(): Observable<ProjectMini[]> {
    return of(PROJECT_MINIS);
  }

}
