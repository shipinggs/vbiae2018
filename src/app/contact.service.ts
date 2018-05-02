import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { SingaporeContact } from './singapore-contact';
import { InternationalContact } from './international-contact';
import { SINGAPORE_CONTACTS } from './data/contact-data';
import { INTERNATIONAL_CONTACTS } from './data/contact-data';

@Injectable()
export class ContactService {

  constructor() { }

  getSingaporeContacts(): Observable<SingaporeContact[]> {
    return of(SINGAPORE_CONTACTS);
  }

  getInternationalContacts(): Observable<InternationalContact[]> {
    return of(INTERNATIONAL_CONTACTS);
  }
}
