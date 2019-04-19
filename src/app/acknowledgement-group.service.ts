import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ACKNOWLEDGEMENT_GROUPS_ONE, ACKNOWLEDGEMENT_GROUPS_TWO, ACKNOWLEDGEMENT_GROUPS_THREE } from './data/acknowledgement-group-data';

import { AcknowledgementGroup } from './acknowledgement-group';

@Injectable()
export class AcknowledgementGroupService {

  constructor() { }

  getAcknowledgementGroups(): Observable<AcknowledgementGroup[][]> {
    return of( [ ACKNOWLEDGEMENT_GROUPS_ONE, ACKNOWLEDGEMENT_GROUPS_TWO, ACKNOWLEDGEMENT_GROUPS_THREE ] );
  }

}
