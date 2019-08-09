// Generated by Selenium IDE
const { actions, Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('0 Amount Cash (false)', function() {
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
  it('0 Amount Cash (false)', async function() {
    
    await driver.sleep(8000)
    await driver.get("https://beyondblue--dev.lightning.force.com/lightning/n/Bulk_Donations?0.source=alohaHeader")
    await driver.sleep(8000)
    await driver.findElement(By.xpath("//td[3]/div/div/div[2]/div/input")).click()
    await driver.findElement(By.xpath("//td[3]/div/div/div[2]/div/input")).sendKeys("mr selen")
    await driver.sleep(2000)
    await driver.findElement(By.css(".slds-lookup__list:nth-child(2) .slds-media")).click()
    {
      const element = await driver.findElement(By.css("td:nth-child(3) .slds-button .slds-icon"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.xpath("//td[4]/div/div/div[2]/div/input")).click()
    await driver.findElement(By.xpath("//td[4]/div/div/div[4]/ul/li/span/div/span")).click()
    await driver.findElement(By.xpath("//lightning-input/div/input")).click()
    await driver.findElement(By.xpath("//lightning-input/div/input")).sendKeys("0")
    await driver.findElement(By.xpath("//td[7]/div/div/div/select")).click()
    {
      const dropdown = await driver.findElement(By.xpath("//td[7]/div/div/div/select"))
      await dropdown.findElement(By.css("*:nth-child(1)")).click()
    }
    await driver.findElement(By.css(".slds-button_brand")).click()
    await driver.findElement(By.xpath("//button[contains(.,\'Save\')]")).click()
    await driver.wait(until.elementLocated(By.css(".slds-theme--error")), 12000)
  })
})
