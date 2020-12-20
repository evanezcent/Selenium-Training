module.exports = {
 
    url: 'https://dev-dashboard.vutura.io/signIn',
 
    elements: {
        fieldEmail: by.xpath("//*[@id='exampleInputEmail1']")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    performFill: function () {
 
        var selector = page.fieldEmail.elements.fieldEmail
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).sendKeys(shared.akun1[0].email);
    }
};