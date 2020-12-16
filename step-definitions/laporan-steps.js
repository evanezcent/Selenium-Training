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

    this.Given(/^Admin click button Login$/, function () {
        driver.then(function(){
            return page.clickLogin.performClick();
        })
    });

    this.Given(/^Admin click Check In$/, function () {
        driver.then(function(){
            return page.clickCheckIn.performClick();
        })
    });

    this.Given(/^Admin fill Nama Lengkap$/, function () {
        driver.then(function(){
            return page.fieldNamaLengkap.performFill();
        })
    });

    this.Given(/^Admin fill NIK$/, function () {
        driver.then(function(){
            return page.fieldNik.performFill();
        })
    });

    this.Given(/^Admin select Pilih kamar$/, function () {
        driver.then(function(){
            return page.fieldPilihKamar.performSelect();
        })
    });

    this.Given(/^Admin select fasilitas$/, function () {
        driver.then(function(){
            return page.fieldFasilitas.performSelect();
        })
    });

    this.Given(/^Admin click button Check In$/, function () {
        driver.then(function(){
            return page.clickButtonCheckIn.performClick();
        })
    });

    this.Given(/^Admin click button Submit Check In$/, function () {
        driver.then(function(){
            return page.clickSubmitCheckIn.performClick();
        })
    });

    this.Given(/^Admin click Check Out$/, function () {
        driver.then(function(){
            return page.clickCheckOut.performClick();
        })
    });

    this.Given(/^Admin click Detail dengan NIK yang sama$/, function () {
        driver.then(function(){
            return page.clickDetailCheckOutNik.performClick();
        })
    });

    this.Given(/^Admin click button Check Out$/, function () {
        driver.then(function(){
            return page.clickButtonCheckOut.performClick();
        })
    });

    this.Given(/^Admin click button Submit Check Out$/, function () {
        driver.then(function(){
            return page.clickSubmitCheckOut.performClick();
        })
    });

    this.When(/^Admin click button Home$/, function () {
        driver.then(function(){
            return page.clickButtonHome.performClick();
        })
    });

    this.Then(/^Admin berada di halaman Home$/, function () {
        driver.then(function(){
            return driver.wait(until.elementsLocated(by.xpath("//p[@class='title']")), 10000);
        })
    });

    this.When(/^Admin click Laporan$/, function () {
        driver.then(function(){
            return page.clickLaporan.performClick();
        })
    });

    this.Then(/^Admin melihat data pelanggan-pelanggan yang sudah Check Out$/, function () {
        driver.then(function(){
            return driver.wait(until.elementsLocated(by.xpath(shared.testData.target)), 10000);
        })
    });

};