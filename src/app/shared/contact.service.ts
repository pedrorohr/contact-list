import { Injectable } from '@angular/core';

import { Contact } from './contact.model';
import { ContactsDatabase } from './mock-contacts';

@Injectable()
export class ContactService {

  private contacts: Contact[];
  private nextId: number;

  constructor() {
    this.init();
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: number): Contact {
    return this.contacts.find(contact => contact.id === +id);
  }

  addContact(contact: Contact): void {
    this.contacts.push({
      id: this.nextId++,
      firstName: contact.firstName,
      lastName: contact.lastName,
      fullName: (contact.lastName != null) ? contact.firstName + ' ' + contact.lastName : contact.firstName,
      number: contact.number,
      email: contact.email,
      star: false
    });
  }

  updateContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    this.contacts[index].firstName = contact.firstName;
    this.contacts[index].lastName = contact.lastName;
    this.contacts[index].number = contact.number;
    this.contacts[index].email = contact.email;
  }

  removeContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

  starContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    this.contacts[index].star = !this.contacts[index].star;
  }

  private init(): void {
    this.contacts = ContactsDatabase;
    this.nextId = this.contacts.length;
  }
}
