import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ContactComponent, ContactListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
