// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Cheque', function() {
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
  it('Cheque', async function() {
    await driver.get("https://beyondblue--dev.lightning.force.com/lightning/n/Bulk_Donations?0.source=alohaHeader")
    await driver.sleep(3000)
    await driver.findElement(By.xpath("//td[3]/div/div/div[2]/div/input")).click()
    await driver.findElement(By.xpath("//td[3]/div/div/div[2]/div/input")).sendKeys("mr selen")
    await driver.sleep(3000)
    await driver.findElement(By.css(".slds-lookup__list:nth-child(2) .slds-media")).click()
    await driver.findElement(By.xpath("//td[4]/div/div/div[2]/div/input")).click()
    await driver.findElement(By.xpath("//td[4]/div/div/div[4]/ul/li/span/div/span")).click()
    await driver.findElement(By.xpath("//lightning-input/div/input")).click()
    await driver.findElement(By.xpath("//lightning-input/div/input")).sendKeys("20")
    await driver.findElement(By.xpath("//td[7]/div/div/div/select")).click()
    {
      const dropdown = await driver.findElement(By.xpath("//td[7]/div/div/div/select"))
      await dropdown.findElement(By.css("*:nth-child(2)")).click()
    }
  
    await driver.sleep(4000)
    await driver.findElement(By.xpath("//td[3]/lightning-input/div/input")).click()
    await driver.findElement(By.css("tr:nth-child(2) > td:nth-child(3) > .slds-day")).click()
    await driver.findElement(By.xpath("//td[3]/lightning-input/div/input")).click()
    await driver.findElement(By.xpath("//td[3]/lightning-input/div/input")).sendKeys("128492948503")
    await driver.findElement(By.xpath("//td[4]/lightning-input/div/input")).sendKeys("ddd")
    await driver.findElement(By.xpath("//button[contains(.,\'Save\')]")).click()
    await driver.wait(until.elementLocated(By.css(".slds-theme--success")), 12000)
  })
})
