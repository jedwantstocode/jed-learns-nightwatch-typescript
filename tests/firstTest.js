module.exports = {
    'My first test case'(browser) {
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname') //if visible to user
            .assert.textContains(".hnname", "Hacker News")
    }

}