import { test } from '@playwright/test';
import { CMSLoginPage } from '../CMS_Locators/loginPage';
import { TutorialPage } from '../CMS_Locators/addtutorials';
import { SearchPage } from '../CMS_Locators/search';

test('search tutorials and verify across all pages', async ({ page }) => {
  const loginPage = new CMSLoginPage(page);
  const tutorialsPage = new TutorialPage(page);
  const searchfeature= new SearchPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login('sadikshya.bhusal@ebpearls.com', 'Sadikshya@123');

  // Go to Tutorials
  await tutorialsPage.gotoTutorials();

  // Search and verify
  const searchText = 'test';
  await searchfeature.searchTutorial(searchText);
  await searchfeature.verifyResultsAcrossAllPages(searchText);
});
