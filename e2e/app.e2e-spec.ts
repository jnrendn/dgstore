import { DgstorePage } from './app.po';

describe('dgstore App', function() {
  let page: DgstorePage;

  beforeEach(() => {
    page = new DgstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
