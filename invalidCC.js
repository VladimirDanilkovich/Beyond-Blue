// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Invalid CC', function() {
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
  it('Invalid CC', async function() {
    await driver.get("https://beyondblue--dev.lightning.force.com/lightning/n/Bulk_Donations?0.source=alohaHeader")
    await driver.findElement(By.xpath("//td[3]/div/div/div[2]/div/input")).click()
    await driver.findElement(By.xpath("//td[3]/div/div/div[2]/div/input")).sendKeys("mr selen")
    await driver.findElement(By.css(".slds-lookup__list:nth-child(2) .slds-media")).click()
    await driver.findElement(By.xpath("//td[4]/div/div/div[2]/div/input")).click()
    await driver.findElement(By.xpath("//td[4]/div/div/div[4]/ul/li/span/div/span")).click()
    await driver.findElement(By.xpath("//lightning-input/div/input")).click()
    await driver.findElement(By.xpath("//lightning-input/div/input")).sendKeys("20")
    await driver.findElement(By.xpath("//td[7]/div/div/div/select")).click()
    {
      const dropdown = await driver.findElement(By.xpath("//td[7]/div/div/div/select"))
      await dropdown.findElement(By.css("*[value='Credit Card']")).click()
    }
    await driver.findElement(By.xpath("//td[2]/lightning-input/div/input")).click()
    await driver.findElement(By.xpath("//td[2]/lightning-input/div/input")).sendKeys("4444444444444444")
    {
      const dropdown = await driver.findElement(By.xpath("//td[3]/div/div/div/select"))
      await dropdown.findElement(By.xpath("//option[. = '02']")).click()
    }
    {
      const dropdown = await driver.findElement(By.xpath("//td[4]/div/div/div/select"))
      await dropdown.findElement(By.xpath("//option[. = '2021']")).click()
    }
    await driver.findElement(By.css(".slds-button_brand")).click()
    await driver.wait(until.elementLocated(By.xpath("//h2[contains(.,\'Save Failed\')]")), 12000)
  })
})
