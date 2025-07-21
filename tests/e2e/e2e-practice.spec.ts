import { test } from '@playwright/test';
import { PracticePage } from '../../page-objects/PracticePage';

test.describe("Practice Page Tests", () => {
    let practicePage: PracticePage;

    test.beforeEach(async ({ page }) => {
        practicePage = new PracticePage(page);
        await practicePage.visitLoginPage();
        await practicePage.login('student', 'Password123');
    });

    test('Practice - Add button and input field', async ({ page }) => {
        await practicePage.goToExceptionPage();
        await practicePage.verifyPizzaInput();
        await practicePage.clickAddButtonAndWaitForNewInput();
    });
});