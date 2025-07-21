import { test } from '@playwright/test';
import { DatePickerPage } from '../../page-objects/DatePickerPage'

test.describe("DatePicker", () => {
  let datePickerPage: DatePickerPage;

  test.beforeEach(async ({ page }) => {
    datePickerPage = new DatePickerPage(page);
    await datePickerPage.visit();
  });

  test('Click on SwitchTo > Alerts', async ({ page }) => {
    await datePickerPage.navigateToAlerts();
  });
});
