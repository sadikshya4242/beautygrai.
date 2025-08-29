import { test, expect } from '@playwright/test';
import{CMSLoginPage}from '../CMS_Locators/loginPage'
import{TutorialPage}from '../CMS_Locators/addtutorials'

test('Verifying unpublish feature', async ({ page }) => {
  const login=new CMSLoginPage(page)
  const tutorialclick =new TutorialPage(page)

  await login.loginToCMS('sadikshya.bhusal@ebpearls.com', 'Sadikshya@123');
  await tutorialclick.gotoTutorials()
 
  await page.getByRole('table').locator('button').first().click();
  await page.getByRole('menuitem', { name: 'Unpublish' }).click();
  await expect(page.locator('#confirm-modal-title')).toContainText('Are you sure you want to unpublish the tutorial?');
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Unpublish' })).toBeVisible();
  await page.getByRole('button', { name: 'Unpublish' }).click();
  await expect(page.getByRole('cell', { name: 'UNPUBLISHED' })).toBeVisible();
});