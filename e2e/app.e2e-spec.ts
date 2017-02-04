import { AngularRestConsumerPage } from './app.po';

describe('angular-rest-consumer App', function() {
  let page: AngularRestConsumerPage;

  beforeEach(() => {
    page = new AngularRestConsumerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rest works!');
  });
});
