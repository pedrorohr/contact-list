import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'con-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() contact: Contact;

  constructor(private contactService: ContactService, private router: Router) { }

  editContact(contact: Contact): void {
    this.router.navigate(['/contact', contact.id]);
  }

  removeContact(contact: Contact): void {
    this.contactService.removeContact(contact);
  }

  starContact(contact: Contact): void {
    this.contactService.starContact(contact);
  }
}
