module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/CheckIn',
 
    elements: {
        fieldNamaLengkap: by.xpath("//input[@id='namaLengkap']")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    performFill: function () {
 
        var selector = page.fieldNamaLengkap.elements.fieldNamaLengkap;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).sendKeys(shared.akun1.nama);
    }
};