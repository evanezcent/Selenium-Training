module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/CheckIn',
 
    elements: {
        clickButtonCheckIn: by.xpath("//button[normalize-space()='Check In']")
    },
 
    performClick: function () {
 
        var selector = page.clickButtonCheckIn.elements.clickButtonCheckIn;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};