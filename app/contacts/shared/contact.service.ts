import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Contact } from './contact.model';

@Injectable()
export class ContactService {

  private contacts: Contact[] = [];

  //Observable sources
  private contactAddedSource = new Subject<string>();
  private contactRemovedSource = new Subject<Contact>();
  private contactStarredSource = new Subject<Contact>();

  //Observable streams
  contactAdded$ = this.contactAddedSource.asObservable();
  contactRemoved$ = this.contactRemovedSource.asObservable();
  contactStarred$ = this.contactStarredSource.asObservable();

  constructor() {  }

  getContacts() : Contact[] {
    return this.contacts;
  }

  //Service message commands
  addContact(newContact: string) {
    this.contacts.push({
      id: 4,
      name: newContact,
      star: false
    });
  }

  removeContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

  starContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts[index].star = !this.contacts[index].star;
  }
}
