import { Day4Page } from './app.po';

describe('day4 App', function() {
  let page: Day4Page;

  beforeEach(() => {
    page = new Day4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
