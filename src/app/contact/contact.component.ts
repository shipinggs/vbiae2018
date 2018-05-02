import { Component, OnInit } from '@angular/core';
import { SingaporeContact } from '../singapore-contact';
import { InternationalContact } from '../international-contact';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private singaporeContacts: SingaporeContact[];
  private internationalContacts: InternationalContact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts()
  }

  getContacts(): void {
    this.contactService.getSingaporeContacts()
      .subscribe(contacts => this.singaporeContacts = contacts);
    this.contactService.getInternationalContacts()
      .subscribe(contacts => this.internationalContacts = contacts);  

  }
}
