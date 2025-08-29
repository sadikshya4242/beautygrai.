import { test } from '@playwright/test';
import { CMSLoginPage } from '../CMS_Locators/loginPage';
import { TutorialPage } from '../CMS_Locators/addtutorials';

test('Create new tutorial', async ({ page }) => {
  const loginPage = new CMSLoginPage(page); 
  const tutorialPage = new TutorialPage(page);

  await loginPage.loginToCMS('sadikshya.bhusal@ebpearls.com', 'Sadikshya@123');


  await tutorialPage.gotoTutorials();
  await tutorialPage.addNewTutorial('New tutorials', 'description');

  await tutorialPage.uploadCoverPicture('./Images/About.jpeg');

  await tutorialPage.uploadPdf('./Images/3-mb-sample-pdf-file (2) (6).pdf');
  


  await tutorialPage.submitTutorial();
});  