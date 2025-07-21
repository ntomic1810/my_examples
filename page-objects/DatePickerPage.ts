import { expect, Locator, Page } from "@playwright/test"

export class DatePickerPage {
  readonly page: Page
  readonly switchToMenu: Locator
  readonly alertsLink: Locator
  readonly heading: Locator

  constructor(page: Page) {
    this.page = page
    this.switchToMenu = page.locator('a:has-text("SwitchTo")')
    this.alertsLink = page.locator('a:has-text("Alerts")')
    this.heading = page.locator('h1')
  }

  async visit() {
    await this.page.goto("https://demo.automationtesting.in/Datepicker.html")
  }

  async navigateToAlerts() {
    await expect(this.switchToMenu).toBeVisible()
    await this.switchToMenu.hover()

    await expect(this.alertsLink).toBeVisible()
    await this.alertsLink.click()

    await expect(this.page).toHaveURL(/.*Alerts\.html/)
    await expect(this.heading).toContainText('Automation Demo Site')
  }
}