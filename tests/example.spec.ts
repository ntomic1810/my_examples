import{ test, expect } from '@playwright/test'
import {loadHomepage, assertTitle} from '../helpers'

test("Simple basic test", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    const pageTitle = await page.locator("h2")
    await expect(pageTitle).toContainText("Test login")

})

 test('Clicking on Elements', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.click('text=Submit');

    const errorMessage = await page.locator("#error")
    await expect(errorMessage).toContainText("Your username is invalid!")

        
    })

    test('Working with imputs', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.fill("#username", 'student')
    await page.fill("#password", 'Password123')
    await page.click('#submit');
})

test('Assertions', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/");
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

    const element = await page.locator('h2');
    await expect(element).toBeVisible();
    await expect(element).toHaveText('Test login');
    await expect(element).toHaveCount(1);

    // Umesto da proveravaš "not.toBeVisible()" za element koji ne postoji,
    // koristi "toHaveCount(0)"
    await expect(page.locator('h8')).toHaveCount(0);
});

    test.describe.parallel.only('Hooks', () =>{
    test.beforeEach(async  ({ page }) =>{
        await page.goto("https://practicetestautomation.com/practice-test-login/")

    })

 test('Screenshots', async ({ page }) => {
    // 1. step is load website
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // 2. take screeenshot of full page
    await page.screenshot({ path: 'screenshot.png', fullPage: true})
});

test('Single element Screenshot', async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    const element = await page.$('h2')
    if (element) {
        
        await element.screenshot({path: 'Single_element_screenshot.png' })
    }

    });

    test('Custom Helpers', async ({ page }) => {
        await loadHomepage(page)
        await assertTitle(page)

    })

})