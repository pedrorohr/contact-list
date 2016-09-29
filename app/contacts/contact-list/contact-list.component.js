"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var contact_service_1 = require('../shared/contact.service');
var contact_filter_service_1 = require('../shared/contact-filter.service');
var ContactListComponent = (function () {
    function ContactListComponent(contactService, contactFilterService) {
        this.contactService = contactService;
        this.contactFilterService = contactFilterService;
        this.contacts = [];
        this.filteredContacts = [];
    }
    ContactListComponent.prototype.filterChanged = function (filter) {
        this.filteredContacts = this.contactFilterService.filter(filter, ['fullName', 'number'], this.contacts);
    };
    ContactListComponent.prototype.ngOnInit = function () {
        this.contacts = this.contactService.getContacts();
        this.filteredContacts = this.contacts;
    };
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'cl-contact-list',
            templateUrl: 'app/contacts/contact-list/contact-list.component.html',
            styleUrls: ['app/contacts/contact-list/contact-list.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, contact_filter_service_1.ContactFilterService])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map