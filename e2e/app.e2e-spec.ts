import { CreandoPuentesPage } from './app.po';

describe('creando-puentes App', () => {
  let page: CreandoPuentesPage;

  beforeEach(() => {
    page = new CreandoPuentesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
