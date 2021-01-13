module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/CheckIn',

    elements: {
        fieldFasilitas: by.xpath("//option[@value='"+shared.akun1[7].fasilitas+"']")
    },
 
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery 
     * @returns {Promise} a promise to enter the search values
     */
    performSelect: function () {
 
        var selector = page.fieldFasilitas.elements.fieldFasilitas;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};