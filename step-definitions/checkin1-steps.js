/*
======================== HOW TO RUN ================================================

NOTE : Please read README.md

1. Change the number of text case
    - IF run feature checkin 1, change all the test case number to Case 1
    - IF run feature checkin 2, change all the test case number to Case 2. 
    - Until case 8, change all the Case number to 8
    - How ? CTRL+F then search "CHANGE HERE"

2. Pay Attention to PAGE OBJECTS FOLDER
    - If running Case 1, then in the file on PAGE OBJECT use index number 0
    - If running Case 2, then in the file on PAGE OBJECT use index number 1
    - Until Case 8, change the index number 7
    - Why ? check folder SHARED OBJECTS and open akun1.js, that is array of object there
*/

module.exports = function () {
 
    this.Given(/^Browse login page$/, function () {
        helpers.loadPage('http://localhost/IMPAL/SistemInformasiHotel/');
    });

    this.Given(/^Admin fill Username$/, function () {
        driver.then(function(){
            return page.fieldUsername.performFill();
        })
    });
    
    this.Given(/^Admin fill Password$/, function () {
        driver.then(function(){
            return page.fieldPassword.performFill();
        })
    });

    this.When(/^Admin click button Login$/, function () {
        driver.then(function(){
            return page.clickLogin.performClick();
        })
    });

    this.Then(/^Admin berada di halaman Home$/, function () {
        driver.then(function(){
            return driver.wait(until.elementsLocated(by.xpath("//p[@class='title']")), 10000);
        })
    });

    // TODO : CHANGE HERE !!! from Case 1 - 8 as feature that you want to run
    this.Given(/^Admin click Check In Case 8$/, function () {
        driver.then(function(){
            return page.clickCheckIn.performClick();
        })
    });

    // TODO : CHANGE HERE !!! from Case 1 - 8 as feature that you want to run
    this.Given(/^Admin fill Nama Lengkap Case 8$/, function () {
        driver.then(function(){
            return page.fieldNamaLengkap.performFill();
        })
    });

    // TODO : CHANGE HERE !!! from Case 1 - 8 as feature that you want to run
    this.Given(/^Admin fill NIK Case 8$/, function () {
        driver.then(function(){
            return page.fieldNik.performFill();
        })
    });

    // TODO : CHANGE HERE !!! from Case 1 - 8 as feature that you want to run
    this.Given(/^Admin select Pilih kamar Case 8$/, function () {
        driver.then(function(){
            return page.fieldPilihKamar.performSelect();
        })
    });

    // TODO : CHANGE HERE !!! from Case 1 - 8 as feature that you want to run
    this.Given(/^Admin select fasilitas Case 8$/, function () {
        driver.then(function(){
            return page.fieldFasilitas.performSelect();
        })
    });

    // TODO : CHANGE HERE !!! from Case 1 - 8 as feature that you want to run
    this.Given(/^Admin click button Check In Case 8$/, function () {
        driver.then(function(){
            return page.clickButtonCheckIn.performClick();
        })
    });

    // TODO : CHANGE HERE !!! from Case 1 - 8 as feature that you want to run
    this.When(/^Admin click button Submit Check In Case 8$/, function () {
        driver.then(function(){
            return page.clickSubmitCheckIn.performClick();
        })
    });

    // TODO : CHANGE HERE !!! from Case 1 - 8 as feature that you want to run
    this.Then(/^Admin berada di halaman Home lagi Case 8$/, function () {
        driver.then(function(){
            return driver.wait(until.elementsLocated(by.xpath("//p[@class='title']")), 10000);
        })
    });

};