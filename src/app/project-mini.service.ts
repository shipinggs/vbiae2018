import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProjectMini } from './project-mini';
import { PROJECT_MINIS } from './data/home-data';

import { MessageService } from './message.service';

@Injectable()
export class ProjectMiniService {

  constructor(private messageService: MessageService) { }

  getProjectMinis(): Observable<ProjectMini[]> {
    this.messageService.add('fetched project minis');
    return of(PROJECT_MINIS);
  }

}
