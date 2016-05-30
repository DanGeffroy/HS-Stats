import { HSStatsPage } from './app.po';

describe('hs-stats App', function() {
  let page: HSStatsPage;

  beforeEach(() => {
    page = new HSStatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hs-stats works!');
  });
});
