import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Contact} from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'cl-contact',
  templateUrl: 'app/contacts/contact/contact.component.html',
  styleUrls: ['app/contacts/contact/contact.component.css']
})

export class ContactComponent {
  @Input() contact: Contact;

  constructor(private contactService: ContactService, private router: Router) {}

  editContact(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

  removeContact(contact: Contact) {
    this.contactService.removeContact(contact);
  }

  starContact(contact: Contact) {
    this.contactService.starContact(contact);
  }
}
