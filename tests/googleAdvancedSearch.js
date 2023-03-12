module.exports = {
    '@tags': ['google'],
    'Google Advanced Search: Bong Bong Marcos'(browser) {
        const words = 'Bong Bong Marcos'
        const findPageWithTheseWords = 'input[name="as_q"]';
        const languageDropdown = '#lr_button';
        const languageOption = '.goog-menuitem[value="lang_tl"]';
        const lastUpdateDropdown = '#as_qdr_button';
        const lastUpdateOption = '.goog-menuitem[value="w"]';
        const regionDropdown = '#cr_button';
        const regionOption = '.goog-menuitem[value="countryPH"]';
        const advanceSearchButton = '.jfk-button[type="submit"]';
        const resultsSearchInput = `#searchform input[name="q"][value="${words}"]`;
        const resultsPageLanguage = '//div[@id="hdtbMenus"]//g-popup//div[contains(@class,"hdtb-mn-hd")]//div[contains(text(),"Search Filipino pages")]';
        const resultsLastUpdate = '//div[@id="hdtbMenus"]//g-popup//div[contains(@class,"hdtb-mn-hd")]//div[contains(text(),"Past week")]';
        browser
            .url('https://www.google.com/advanced_search')
            .setValue(findPageWithTheseWords, words)
            .click(languageDropdown)
            .click(languageOption)
            .click(lastUpdateDropdown)
            .click(lastUpdateOption)
            .click(regionDropdown)
            .click(regionOption)
            .click(advanceSearchButton)
            .assert.urlContains('as_q=Bong+Bong+Marcos', 'Searched Keyword is Bong Bong Marcos')
            .assert.urlContains('lr=lang_tl', 'Language is Filipino')
            .assert.urlContains('as_qdr=w', 'Time period is Week')
            .assert.urlContains('cr=countryPH', 'Country is Philippines')

        browser.assert.visible(resultsSearchInput, 'Results Search Field input displays Bong Bong Marcos')

        browser
        .useXpath() //all selectors now must be xpath - useCss to go back to default
        .assert.textContains(resultsPageLanguage, 'Search Filipino pages', 'Results Page Language is Filipino')
        .assert.textContains(resultsLastUpdate, 'Past week', 'Results Page last update is Past Week')
        
        .saveScreenshot('tests_output/google.png')

    }

}