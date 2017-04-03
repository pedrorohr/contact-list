import { browser, element, by } from 'protractor';

export class ContactListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('con-root h1')).getText();
  }
}
