import { ArtesaniasUEBPage } from './app.po';

describe('artesanias-ueb App', () => {
  let page: ArtesaniasUEBPage;

  beforeEach(() => {
    page = new ArtesaniasUEBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
