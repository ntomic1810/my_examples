import { expect, Locator, Page } from "@playwright/test";

export class HomePage{
    readonly page: Page
    readonly signInButton: Locator
    readonly searchBox: Locator

    constructor (page: Page){
        this.page = page
        this.signInButton = page.locator('text=Sign in')
        this.searchBox = page.locator("#small-searchterms")

    }
 async visit(){
     await this.page.goto("https://demowebshop.tricentis.com/")
    }

    async clickOnSignIn(){
        await this.signInButton.click()
    }
    async searchFor(phrase: string) {
        await this.searchBox.fill(phrase)
        await this.page.keyboard.press("Enter")
    }
        
    }
