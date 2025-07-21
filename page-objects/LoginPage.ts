import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";

export class LoginPage extends AbstractPage{
    //Define selectors
    //readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator
    readonly loginForm: Locator

  constructor (page: Page){
        //this.page = page
        super(page)

        this.usernameInput = page.locator("#username")
        this.passwordInput = page.locator("#password")
        this.submitButton = page.locator("#submit")
        this.errorMessage = page.locator("#error")
        this.loginForm = page.locator("#login")

    }

    //Define login page methods
     async visit(){
       await this.page.goto("https://practicetestautomation.com/practice-test-login/")
    }

     async login(username: string, password: string){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.submitButton.click()
     }

    async assertErrorMessage(){
        await expect(this.errorMessage).toContainText("Your username is invalid!")

    }

}


