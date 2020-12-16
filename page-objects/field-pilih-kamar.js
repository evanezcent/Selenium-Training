module.exports = {
 
    url: 'http://localhost/IMPAL/SistemInformasiHotel/CheckIn',
 
    elements: {
        fieldPilihKamar: by.xpath("//option[@value='"+shared.testData.kamar+"']")
    },
 
    performSelect: function () {
 
        var selector = page.fieldPilihKamar.elements.fieldPilihKamar;
 
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).click();
    }
};