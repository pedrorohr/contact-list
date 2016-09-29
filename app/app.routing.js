"use strict";
var router_1 = require('@angular/router');
var contact_list_component_1 = require('./contacts/contact-list/contact-list.component');
var contact_form_component_1 = require('./contacts/contact-form/contact-form.component');
var appRoutes = [
    { path: 'contact/:id', component: contact_form_component_1.ContactFormComponent },
    { path: 'contact', component: contact_form_component_1.ContactFormComponent },
    { path: 'contacts', component: contact_list_component_1.ContactListComponent },
    { path: '', component: contact_list_component_1.ContactListComponent },
    { path: '**', component: contact_list_component_1.ContactListComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map