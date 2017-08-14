import { CommuncationComponentPage } from './app.po';

describe('communcation-component App', function() {
  let page: CommuncationComponentPage;

  beforeEach(() => {
    page = new CommuncationComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
