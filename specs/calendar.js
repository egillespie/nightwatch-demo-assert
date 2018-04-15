module.exports = {
  'Calendar loads at least one meetup': browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('#calendar', 5000)
      .waitForElementVisible('.calendar', 5000)
      .assert.visible(
        '.calendar a[href^="https://www.meetup.com/"]'
      )
      .end()
  },

  'Calendar has 28 days': browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('#calendar', 5000)
      .waitForElementVisible('.calendar', 5000)
      .assert.elementCount('.day', 28)
      .end()
  }
}
