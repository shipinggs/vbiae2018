import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Conversation } from './conversation';
import { CONVERSATIONS } from './data/conversations-data';

@Injectable()
export class ConversationService {

  constructor() { }

  getConversation(tag: string): Observable<Conversation> {
    return of(CONVERSATIONS.find(conversation => conversation.tag === tag));
  }
}
