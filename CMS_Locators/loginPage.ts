import { Page, expect } from '@playwright/test';

export class CMSLoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string = 'https://uat-cms.beautygrail.co/') {
    await this.page.goto(url);
  }

  async login(email: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Sign in now' }).click();
  }
  async validateLogin(){
      await expect(this.page).toHaveURL("https://uat-cms.beautygrail.co/", { timeout: 15000 });
      await expect(this.page.getByText('Dashboard')).toBeVisible({ timeout: 15000 });

  }


  async loginToCMS(email: string, password: string, url?: string) {
    await this.goto(url);
    await this.login(email, password);
    await this.validateLogin();
  }
}