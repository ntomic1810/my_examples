import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage';
import { HomePage } from '../../page-objects/HomePage';
console.log('LoginPage constructor:', LoginPage);


test.describe.parallel("Login / Logout Flow", () =>{

  let loginPage: LoginPage
  let homePage: HomePage
    //Before Hook
     test.beforeEach(async  ({ page }) =>{
      loginPage = new LoginPage(page);
      homePage = new HomePage(page);

      await homePage.visit()
      

     })

     //Negative Scenario
     test('Negative Scenario for Login', async ({ page }) => {
    
    await loginPage.login("invalid username", "invalid password")
    await page.waitForTimeout(3000);(3000)
   

  
    //const errorMessage = await page.locator('#error')
    //await expect(errorMessage).toContainText("Your username is invalid!")
    await loginPage.assertErrorMessage()

    })

    //Positive Scenario

   test('Positive Scenario for Login', async ({ page }) => {
    await loginPage.login("username", "password");
    
  

  await page.goto('https://practicetestautomation.com/logged-in-successfully/');
  await page.click(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color")
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
});

})