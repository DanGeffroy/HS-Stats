export class HSStatsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hs-stats-app h1')).getText();
  }
}
