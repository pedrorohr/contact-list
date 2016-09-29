import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Contact } from './contact.model';
import { ContactsDatabase } from './mock-contacts'

@Injectable()
export class ContactService {

  private contacts: Contact[];
  private nextId: number;

  //Observable sources
  private contactAddedSource = new Subject<string>();
  private contactRemovedSource = new Subject<Contact>();
  private contactStarredSource = new Subject<Contact>();

  //Observable streams
  contactAdded$ = this.contactAddedSource.asObservable();
  contactRemoved$ = this.contactRemovedSource.asObservable();
  contactStarred$ = this.contactStarredSource.asObservable();

  constructor() {
    this.init();
  }

  getContacts() : Contact[] {
    return this.contacts;
  }

  getContact(id: number) : Contact {
    return this.contacts.find(contact => contact.id === +id);
  }

  //Service message commands
  addContact(contact: Contact) {
    this.contacts.push({
      id: this.nextId++,
      firstName: contact.firstName,
      lastName: contact.lastName,
      fullName: contact.firstName + contact.lastName,
      number: contact.number,
      email: contact.email,
      star: false
    });
  }

  updateContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts[index].firstName = contact.firstName;
    this.contacts[index].lastName = contact.lastName;
    this.contacts[index].number = contact.number;
    this.contacts[index].email = contact.email;
  }

  removeContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

  starContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts[index].star = !this.contacts[index].star;
  }

  init() {
    this.contacts = ContactsDatabase;
    this.nextId = this.contacts.length;
    }
}
