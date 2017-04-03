import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { ContactFilterService } from './shared/contact-filter.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from './shared/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactFormComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ContactFilterService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
