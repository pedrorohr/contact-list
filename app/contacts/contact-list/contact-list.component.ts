import { Component, OnInit } from '@angular/core';

import { Contact } from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'cl-contact-list',
  templateUrl: 'app/contacts/contact-list/contact-list.component.html',
  styleUrls: ['app/contacts/contact-list/contact-list.component.css'],
  providers: [ContactService]
})

export class ContactListComponent implements OnInit {
  private contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  addContact(newContact: string) {
    this.contactService.addContact(newContact);
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }
}
