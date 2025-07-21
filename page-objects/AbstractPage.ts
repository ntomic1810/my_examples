import { expect, Locator, Page } from "@playwright/test"

export class AbstractPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async visit(url: string) {
    await this.page.goto(url)
  }

  async getTitle(): Promise<string> {
    return this.page.title()
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url()
  }

  async screenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true })
  }

  async waitForElement(locator: Locator, timeout = 5000) {
    await expect(locator).toBeVisible({ timeout })
  }
}