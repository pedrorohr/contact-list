import { Component, OnInit } from '@angular/core';

import { Contact } from '../shared/contact.model';
import { ContactFilterService } from '../shared/contact-filter.service';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'con-contactList',
  templateUrl: 'contact-list.component.html',
  styleUrls: ['contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts: Contact[] = [];
  private errorMessage: string;

  filteredContacts: Contact[] = [];

  constructor(private contactService: ContactService, private contactFilterService: ContactFilterService) {}

  filterChanged(filter: string): void {
    this.filteredContacts = this.contactFilterService.filter(filter, ['fullName', 'number'], this.contacts);
  }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.filteredContacts = this.contacts;
  }
}
