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
var router_1 = require('@angular/router');
var contact_model_1 = require('../shared/contact.model');
var contact_service_1 = require('../shared/contact.service');
var ContactComponent = (function () {
    function ContactComponent(contactService, router) {
        this.contactService = contactService;
        this.router = router;
    }
    ContactComponent.prototype.editContact = function (contact) {
        this.router.navigate(['/contact', contact.id]);
    };
    ContactComponent.prototype.removeContact = function (contact) {
        this.contactService.removeContact(contact);
    };
    ContactComponent.prototype.starContact = function (contact) {
        this.contactService.starContact(contact);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', contact_model_1.Contact)
    ], ContactComponent.prototype, "contact", void 0);
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'cl-contact',
            templateUrl: 'app/contacts/contact/contact.component.html',
            styleUrls: ['app/contacts/contact/contact.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map