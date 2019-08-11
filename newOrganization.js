// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('New Organization', function() {
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
  it('New Organization', async function() {
    await driver.get("https://beyondblue--dev.lightning.force.com/lightning/n/Bulk_Donations?0.source=alohaHeader")
    await driver.findElement(By.xpath("//select")).click()
    {
      const dropdown = await driver.findElement(By.xpath("//select"))
      await dropdown.findElement(By.css("*:nth-child(2)")).click()
    }
    await driver.findElement(By.xpath("//td[3]/div/div/div[2]/div/input")).click()
    await driver.findElement(By.xpath("//li[9]/span")).click()
    await driver.sleep(xpath=//td[3]/div/div/div[2]/div/input)
    await driver.findElement(By.xpath("//lightning-input-field/lightning-input/div/input")).sendKeys("Selenium")
    await driver.findElement(By.xpath("//div[3]/button[2]")).click()
    await driver.sleep(undefined)
    {
      const elements = await driver.findElements(By.xpath("//lightning-input-field/lightning-input/div/input"))
      assert(!elements.length)
    }
  })
})
