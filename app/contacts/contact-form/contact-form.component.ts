import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { Contact} from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'cl-contact-form',
  templateUrl: 'app/contacts/contact-form/contact-form.component.html',
  styleUrls: ['app/contacts/contact-form/contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  private contactForm: FormGroup;
  private contact: Contact;
  private editMode: boolean;
  private title: string;

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  onSubmit() {
    this.updateLocalContact();
    if (this.editMode) {
      this.contactService.updateContact(this.contact);
    } else {
      this.contactService.addContact(this.contact);
    }
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }

  updateLocalContact() {
    this.contact.firstName = this.contactForm.value.firstName,
    this.contact.lastName = this.contactForm.value.lastName,
    this.contact.number = this.contactForm.value.number,
    this.contact.email = this.contactForm.value.email;
  }

  ngOnInit() {
    this.editMode = true;
    this.title = 'Edit contact';
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.contact = this.contactService.getContact(id);
    });
    if (this.contact === undefined) {
      this.contact = new Contact();
      this.editMode = false;
      this.title = 'New contact';
    }

    this.contactForm = this.formBuilder.group({
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName],
      number: [this.contact.number, Validators.required],
      email: [this.contact.email]
    });
  }
}
