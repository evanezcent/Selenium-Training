module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/',
 
    elements: {
        fieldUsername: by.xpath("//input[@id='exampleInputEmail1']")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    performFill: function () {
 
        var selector = page.fieldUsername.elements.fieldUsername;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).sendKeys(shared.testData.username);
    }
};