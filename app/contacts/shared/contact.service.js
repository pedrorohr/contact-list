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
var Subject_1 = require('rxjs/Subject');
var mock_contacts_1 = require('./mock-contacts');
var ContactService = (function () {
    function ContactService() {
        //Observable sources
        this.contactAddedSource = new Subject_1.Subject();
        this.contactRemovedSource = new Subject_1.Subject();
        this.contactStarredSource = new Subject_1.Subject();
        //Observable streams
        this.contactAdded$ = this.contactAddedSource.asObservable();
        this.contactRemoved$ = this.contactRemovedSource.asObservable();
        this.contactStarred$ = this.contactStarredSource.asObservable();
        this.init();
    }
    ContactService.prototype.getContacts = function () {
        return this.contacts;
    };
    ContactService.prototype.getContact = function (id) {
        return this.contacts.find(function (contact) { return contact.id === +id; });
    };
    //Service message commands
    ContactService.prototype.addContact = function (contact) {
        this.contacts.push({
            id: this.nextId++,
            firstName: contact.firstName,
            lastName: contact.lastName,
            fullName: contact.firstName + contact.lastName,
            number: contact.number,
            email: contact.email,
            star: false
        });
    };
    ContactService.prototype.updateContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts[index].firstName = contact.firstName;
        this.contacts[index].lastName = contact.lastName;
        this.contacts[index].number = contact.number;
        this.contacts[index].email = contact.email;
    };
    ContactService.prototype.removeContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    };
    ContactService.prototype.starContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts[index].star = !this.contacts[index].star;
    };
    ContactService.prototype.init = function () {
        this.contacts = mock_contacts_1.ContactsDatabase;
        this.nextId = this.contacts.length;
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map