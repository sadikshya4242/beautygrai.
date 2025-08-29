import { test } from '@playwright/test';
import { CMSLoginPage } from '../CMS_Locators/loginPage';

test('CMS login test', async ({ page }) => {
  const cmsLogin = new CMSLoginPage(page);

  // Reusable login call
  await cmsLogin.loginToCMS('sadikshya.bhusal@ebpearls.com', 'Sadikshya@123');
});