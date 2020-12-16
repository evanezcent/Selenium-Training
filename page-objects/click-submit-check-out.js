module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/CheckIn',
 
    elements: {
        clickSubmitCheckOut: by.xpath("//button[normalize-space()='Submit']")
    },

    performClick: function () {
 
        var selector = page.clickSubmitCheckOut.elements.clickSubmitCheckOut;
 
        // return a promise so the calling function knows the task has completed
        driver.sleep(1000);
        return driver.findElement(selector).click();
    }
};