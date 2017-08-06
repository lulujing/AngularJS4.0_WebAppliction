import { DenpendencyInjectionPage } from './app.po';

describe('denpendency-injection App', function() {
  let page: DenpendencyInjectionPage;

  beforeEach(() => {
    page = new DenpendencyInjectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
