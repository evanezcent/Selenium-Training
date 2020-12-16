module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/CheckOut',
 
    elements: {
        clickDetailCheckOutNik: by.xpath("//td[normalize-space()='"+shared.testData.nik+"']/following-sibling::td[normalize-space()='"+shared.testData.kamar+"']/following-sibling::td[//button[normalize-space()='Detail']]")
    },
 
    performClick: function () {
 
        var selector = page.clickDetailCheckOutNik.elements.clickDetailCheckOutNik;
        //console.log(driver.findElement(selector).getId());
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};