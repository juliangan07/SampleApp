import { KargoAppPage } from './app.po';

describe('kargo-app App', () => {
  let page: KargoAppPage;

  beforeEach(() => {
    page = new KargoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
