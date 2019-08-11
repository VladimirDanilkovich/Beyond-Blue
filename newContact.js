// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('New Contact', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('New Contact', async function() {
    await driver.get("https://beyondblue--dev.lightning.force.com/lightning/n/Bulk_Donations?0.source=alohaHeader")
    await driver.findElement(By.xpath("//td[3]/div/div/div[2]/div/input")).click()
    await driver.findElement(By.css(".slds-lookup__item-action--label")).click()
    await driver.findElement(By.xpath("//div[2]/lightning-input/div/input")).sendKeys("Selenium2")
    await driver.findElement(By.xpath("//div[3]/lightning-input/div/input")).sendKeys("Test2")
    await driver.findElement(By.xpath("//div[3]/button[2]")).click()
    await driver.sleep(undefined)
    {
      const elements = await driver.findElements(By.css(".slds-notify"))
      assert(!elements.length)
    }
  })
})
