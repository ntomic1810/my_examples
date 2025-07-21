import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage';

test.describe("Search Result", () => {
    test("Should find search result", async ({ page }) => {
        let homePage: HomePage = new HomePage(page)
        //await page.goto("https://demowebshop.tricentis.com/");
        //await page.click("#small-searchterms")
        //await page.fill("#small-searchterms", "Camera")
        //await page.keyboard.press("Enter")
        await homePage.visit()
       await homePage.searchFor('Camera')
        

        //const numberOfLinks = await page.locator('li > a')
        const numberOfProducts = page.locator(".product-item");
        await expect(numberOfProducts).toHaveCount(1)

    })

})
