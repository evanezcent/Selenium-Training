module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/Home',
 
    elements: {
        clickCheckIn: by.xpath("//a[@href='http://localhost/IMPAL/SistemInformasiHotel/CheckIn']//img")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    performClick: function () {
 
        var selector = page.clickCheckIn.elements.clickCheckIn;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};