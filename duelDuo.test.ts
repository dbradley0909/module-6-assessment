
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Draw button displays the div choices', async () => {
    const drawButn = await driver.findElement(By.id('draw'))
    const displayButn = await drawButn.isDisplayed();
    expect(displayButn).toBe('choices');
})
//driver.sleep(2000)
test('clicking an Add to Duo button displays the div = player-id', async () => {
    const addButn = await driver.findElement(By.id('bot-btn'))
    const displayAddButn = await addButn.isDisplayed();
    expect(displayAddButn).toBe('player-id');
})
//driver.sleep(2000)
test('clicking an Add to Duo button displays the div = player-id', async () => {
    const addButn = await driver.findElement(By.id('bot-btn'))
    const displayAddButn = await addButn.isDisplayed();
    expect(displayAddButn).toBe('player-id');
})
driver.sleep(2000)




