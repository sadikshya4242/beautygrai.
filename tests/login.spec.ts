import { test, expect } from '@playwright/test';
import { LoginPage } from '../locators/loginPage';

test.describe.only('Login Page Tests', () => {

  test('Invalid email format', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.emailInput.fill('invalidemail');
    await loginPage.passwordInput.click();
    await expect(loginPage.form).toContainText('Must be a valid email');
  });

  test('Invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sadikshya.bhusal+uat@ebpearls.com', 'WrongPassword');
    await expect(page.locator('body')).toContainText('Invalid login credentials');
  });

  test('Valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sadikshya.bhusal+uat2@ebpearls.com', 'Sadikshya@123');
    await page.getByRole('alert').filter({ hasText: 'Login successful!' }).screenshot({path:'./Screenshots/successmessage.png'})
    await expect(loginPage.banner).toContainText('Hi Jennifer Sharma');
    await page.screenshot({path:'./Screenshots/username.png'});
  });

});


