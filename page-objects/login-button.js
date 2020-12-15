module.exports = {
 
    elements: {
        loginButton: by.xpath("//*[@id='box']/form/button")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    perform: function () {
 
        var selector = page.loginButton.elements.loginButton
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};