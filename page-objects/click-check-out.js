module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/Home',
 
    elements: {
        clickCheckOut: by.xpath("//a[@href='http://localhost/IMPAL/SistemInformasiHotel/CheckOut']//img")
    },
 
    performClick: function () {
 
        var selector = page.clickCheckOut.elements.clickCheckOut;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};