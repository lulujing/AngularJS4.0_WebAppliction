import { DatabindingPage } from './app.po';

describe('databinding App', function() {
  let page: DatabindingPage;

  beforeEach(() => {
    page = new DatabindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
