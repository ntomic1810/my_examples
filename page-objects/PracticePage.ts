import { expect, Locator, Page } from "@playwright/test";

export class PracticePage {
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly pizzaInput: Locator
    readonly addButton: Locator
    readonly newInputField: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator("#username")
        this.passwordInput = page.locator("#password")
        this.submitButton = page.locator("#submit")
        this.pizzaInput = page.locator('#row1 .input-field')
        this.addButton = page.locator('#add_btn')
        this.newInputField = page.locator('#row2 input.input-field')
    }

    async visitLoginPage() {
        await this.page.goto("https://practicetestautomation.com/practice-test-login/")
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.submitButton.click()
    }

    async goToExceptionPage() {
        await this.page.goto('https://practicetestautomation.com/practice-test-exceptions/')
    }

    async verifyPizzaInput() {
        await expect(this.pizzaInput).toHaveValue('Pizza')
    }

    async clickAddButtonAndWaitForNewInput() {
        await this.addButton.click();
        await expect(this.newInputField).toBeVisible({ timeout: 7000 })
    }
}