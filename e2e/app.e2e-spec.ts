import { Angular4projectPage } from './app.po';

describe('angular4project App', () => {
  let page: Angular4projectPage;

  beforeEach(() => {
    page = new Angular4projectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
