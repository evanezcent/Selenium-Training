module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/',
 
    elements: {
        clickLogin: by.xpath("//button[normalize-space()='Submit']")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    performClick: function () {
 
        var selector = page.clickLogin.elements.clickLogin;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};