import { ComponentlifecyclePage } from './app.po';

describe('componentlifecycle App', function() {
  let page: ComponentlifecyclePage;

  beforeEach(() => {
    page = new ComponentlifecyclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
