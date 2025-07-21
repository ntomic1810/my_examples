export async function loadHomepage(page){
    await page.goto("https://practicetestautomation.com/practice-test-login/")
}
    
export async function assertTitle(page){
    await page.waitForSelector('h2')

}
    