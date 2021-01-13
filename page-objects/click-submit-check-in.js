module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/CheckIn',
 
    elements: {
        clickSubmitCheckIn: by.xpath("//button[normalize-space()='Submit']")
    },

    performClick: function () {
 
        var selector = page.clickSubmitCheckIn.elements.clickSubmitCheckIn;
 
        // return a promise so the calling function knows the task has completed
        driver.sleep(1000);
        return driver.findElement(selector).click();
    }
};