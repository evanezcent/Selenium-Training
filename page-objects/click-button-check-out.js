module.exports = {
    elements: {
        clickButtonCheckOut: by.xpath("//button[normalize-space()='Check Out']")
    },
 
    performClick: function () {
        var selector = page.clickButtonCheckOut.elements.clickButtonCheckOut;
        return driver.findElement(selector).click();
    }
};