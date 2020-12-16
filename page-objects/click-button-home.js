module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/CheckIn',
 
    elements: {
        clickButtonHome: by.xpath("//p[normalize-space()='Hotel Telkom Bandung']")
    },
 
    performClick: function () {
 
        var selector = page.clickButtonHome.elements.clickButtonHome;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};