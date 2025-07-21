import { test } from '@playwright/test';
import { WidgetPage } from '../../page-objects/WidgetPage';

test.describe("Widgets", () => {
  test('Click on AutoComplete', async ({ page }) => {
    const widgetPage = new WidgetPage(page);

    await widgetPage.visit();
    await widgetPage.navigateToAutoComplete();
  });
});