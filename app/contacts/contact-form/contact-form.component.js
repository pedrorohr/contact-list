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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var contact_model_1 = require('../shared/contact.model');
var contact_service_1 = require('../shared/contact.service');
var ContactFormComponent = (function () {
    function ContactFormComponent(contactService, formBuilder, activatedRoute, router) {
        this.contactService = contactService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ContactFormComponent.prototype.onSubmit = function () {
        this.updateLocalContact();
        if (this.editMode) {
            this.contactService.updateContact(this.contact);
        }
        else {
            this.contactService.addContact(this.contact);
        }
        this.contactForm.reset();
        this.router.navigate(['/contacts']);
    };
    ContactFormComponent.prototype.updateLocalContact = function () {
        this.contact.firstName = this.contactForm.value.firstName,
            this.contact.lastName = this.contactForm.value.lastName,
            this.contact.number = this.contactForm.value.number,
            this.contact.email = this.contactForm.value.email;
    };
    ContactFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editMode = true;
        this.title = 'Edit contact';
        this.activatedRoute.params.forEach(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.contact = _this.contactService.getContact(id);
        });
        if (this.contact === undefined) {
            this.contact = new contact_model_1.Contact();
            this.editMode = false;
            this.title = 'New contact';
        }
        this.contactForm = this.formBuilder.group({
            firstName: [this.contact.firstName, forms_1.Validators.required],
            lastName: [this.contact.lastName],
            number: [this.contact.number, forms_1.Validators.required],
            email: [this.contact.email]
        });
    };
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'cl-contact-form',
            templateUrl: 'app/contacts/contact-form/contact-form.component.html',
            styleUrls: ['app/contacts/contact-form/contact-form.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
//# sourceMappingURL=contact-form.component.js.map