import { RouterPage } from './app.po';

describe('router App', function() {
  let page: RouterPage;

  beforeEach(() => {
    page = new RouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
