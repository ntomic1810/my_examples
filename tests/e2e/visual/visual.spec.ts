import { test, expect } from '@playwright/test'

test.describe.only("Visual Regression Testing Example", () => {
    test("Full Page Snapshot", async ({ page }) => {
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        expect (await page.screenshot()).toMatchSnapshot("homepage.png")


    })
    test("Single Element Snapshot", async ({ page }) => {
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        const pageElement = await page.locator('h1')
        expect (await pageElement.screenshot()).toMatchSnapshot("page-title.png")

    })


})