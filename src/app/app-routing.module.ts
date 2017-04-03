import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactFormComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ContactListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
