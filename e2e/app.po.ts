import { browser, element, by } from 'protractor';

export class AngularRestConsumerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rest-root h1')).getText();
  }
}
