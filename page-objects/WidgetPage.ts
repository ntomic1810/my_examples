import { expect, Locator, Page } from "@playwright/test"

export class WidgetPage {
  readonly page: Page
  readonly widgetsMenu: Locator
  readonly autoCompleteLink: Locator

  constructor(page: Page) {
    this.page = page;
    this.widgetsMenu = page.locator('a:has-text("Widgets")')
    this.autoCompleteLink = page.locator('a[href="AutoComplete.html"]')
  }

  async visit() {
    await this.page.goto("https://demo.automationtesting.in/Datepicker.html")
  }

  async navigateToAutoComplete() {
    await this.widgetsMenu.hover()
    await expect(this.autoCompleteLink).toBeVisible()
    await this.autoCompleteLink.click()
    await expect(this.page).toHaveURL(/.*AutoComplete\.html/)
  }
}