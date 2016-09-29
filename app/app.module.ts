import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';

import { ContactService } from './contacts/shared/contact.service';
import { ContactFilterService } from './contacts/shared/contact-filter.service';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, routing ],
  declarations: [ AppComponent, ContactComponent, ContactListComponent, ContactFormComponent],
  providers: [ appRoutingProviders, ContactService, ContactFilterService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
