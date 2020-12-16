module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/Home',
 
    elements: {
        clickLaporan: by.xpath("//a[@href='http://localhost/IMPAL/SistemInformasiHotel/Laporan']//img")
    },
 
    performClick: function () {
 
        var selector = page.clickLaporan.elements.clickLaporan;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};