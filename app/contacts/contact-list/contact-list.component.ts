import { Component, OnInit } from '@angular/core';

import { Contact } from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';
import { ContactFilterService } from '../shared/contact-filter.service';

@Component({
  selector: 'cl-contact-list',
  templateUrl: 'app/contacts/contact-list/contact-list.component.html',
  styleUrls: ['app/contacts/contact-list/contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  private contacts: Contact[] = [];
  private filteredContacts: Contact[] = [];
  private errorMessage: string;

  constructor(private contactService: ContactService, private contactFilterService: ContactFilterService) {}

  filterChanged(filter: string) {
    this.filteredContacts = this.contactFilterService.filter(filter, ['fullName', 'number'], this.contacts);
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.filteredContacts = this.contacts;
  }
}
