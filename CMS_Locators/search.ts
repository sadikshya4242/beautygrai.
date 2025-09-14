import { Page, Locator, expect } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly rows: Locator;
  readonly nextBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole('textbox', { name: 'Search' });
    this.rows = page.locator('table tbody tr'); // Adjust selector if needed
    this.nextBtn = page.getByRole('button', { name: /Go to next page/i });
  }

  async searchTutorial(text: string) {
    await this.searchBox.fill(text);
    await this.page.waitForTimeout(1000); // wait for results to load
  }

  async verifyResultsContain(text: string) {
    const rowCount = await this.rows.count();

    if (rowCount === 0) {
      console.log(`No results for "${text}"`);
      return;
    }

    for (let i = 0; i < rowCount; i++) {
      const rowText = await this.rows.nth(i).innerText();
      await expect(rowText.toLowerCase()).toContain(text.toLowerCase());
    }
  }

  async verifyResultsAcrossAllPages(text: string) {
    let hasNext = true;
    let pageNum = 1;

    while (hasNext) {
      console.log(`Checking page ${pageNum}`);
      await this.verifyResultsContain(text);

      if (await this.nextBtn.isVisible() && await this.nextBtn.isEnabled()) {
        await this.nextBtn.click();
        await this.page.waitForTimeout(1000);
        pageNum++;
      } else {
        hasNext = false;
      }
    }

    console.log(`Verified search results across ${pageNum} pages`);
  }
}
