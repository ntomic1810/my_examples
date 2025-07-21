import { expect, Locator, Page } from "@playwright/test";

export class Navbar {
  readonly page: Page;
  readonly widgetsMenu: Locator;
  readonly autoCompleteLink: Locator;
  readonly switchToMenu: Locator;
  readonly alertsLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // Meniji
    this.widgetsMenu = page.locator('a:has-text("Widgets")');
    this.switchToMenu = page.locator('a:has-text("SwitchTo")');

    // Linkovi
    this.autoCompleteLink = page.locator('a[href="AutoComplete.html"]');
    this.alertsLink = page.locator('a:has-text("Alerts")');
  }

  async hoverWidgets() {
    await this.widgetsMenu.hover();
  }

  async goToAutoComplete() {
    await this.hoverWidgets();
    await expect(this.autoCompleteLink).toBeVisible();
    await this.autoCompleteLink.click();
    await expect(this.page).toHaveURL(/.*AutoComplete\.html/);
  }

  async hoverSwitchTo() {
    await this.switchToMenu.hover();
  }

  async goToAlerts() {
    await this.hoverSwitchTo();
    await expect(this.alertsLink).toBeVisible();
    await this.alertsLink.click();
    await expect(this.page).toHaveURL(/.*Alerts\.html/);
  }
}