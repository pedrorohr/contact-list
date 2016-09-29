import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';

const appRoutes: Routes = [
  { path: 'contact/:id', component: ContactFormComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: '', component: ContactListComponent },
  { path: '**', component: ContactListComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
