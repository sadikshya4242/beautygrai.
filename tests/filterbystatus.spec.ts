import { test, expect } from '@playwright/test';
import { CMSLoginPage } from '../CMS_Locators/loginPage';
import { TutorialPage } from '../CMS_Locators/addtutorials';

test.beforeEach('Verifying login and navigation to tutorials page', async ({ page }) => {
  const loginPage = new CMSLoginPage(page);
  const tutorialsPage = new TutorialPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login('sadikshya.bhusal@ebpearls.com', 'Sadikshya@123');

  // Go to Tutorials
  await tutorialsPage.gotoTutorials();
  


});

test('Verifying filter by status shows all options', async ({ page }) => {
  // Open filter dropdown
  await page.getByRole('button', { name: 'Filter' }).click();
  const dropdown = page.locator('//div[@id="status"]');
  await dropdown.click();

  // Capture all options
  const options = await page.locator('li[role="option"]').allTextContents();
  console.log('Dropdown options:', options);

  const expected = [
    'All',
    'Published',
    'Unpublished',
    'Draft',
    'Awaiting Approval',
  ];

  for (const value of expected) {
    expect(options).toContain(value);
  }
});

test('Verifying ', async ({ page }) => {
  // Open filter dropdown
  await page.getByRole('button', { name: 'Filter' }).click();
  const dropdown = page.locator('//div[@id="status"]');
  await dropdown.click();

  // Capture all options
  const options = await page.locator('li[role="option"]').allTextContents();
  console.log('Dropdown options:', options);

  const expected = [
    'All',
    'Published',
    'Unpublished',
    'Draft',
    'Awaiting Approval',
  ];

  for (const value of expected) {
    expect(options).toContain(value);
  }
});
test("Verifying Published filter",async({page})=>{
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.locator('//div[@id="status"]').click();
  await page.locator('//li[@role="option" and text()="Published"]').click();
  await page.getByRole('button', { name: 'Apply Filters' }).click();
  

   // Grab all status spans from the table body
  const statuses = await page.locator('//table//tbody//td[5]//span').allTextContents();
  for (const status of statuses) {
    expect(status).toBe('PUBLISHED');
  }
});



