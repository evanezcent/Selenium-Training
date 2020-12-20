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

    this.Given(/^Admin click Check In Case 8$/, function () {
        driver.then(function(){
            return page.clickCheckIn.performClick();
        })
    });

    this.Given(/^Admin fill Nama Lengkap Case 8$/, function () {
        driver.then(function(){
            return page.fieldNamaLengkap.performFill();
        })
    });

    this.Given(/^Admin fill NIK Case 8$/, function () {
        driver.then(function(){
            return page.fieldNik.performFill();
        })
    });

    this.Given(/^Admin select Pilih kamar Case 8$/, function () {
        driver.then(function(){
            return page.fieldPilihKamar.performSelect();
        })
    });

    this.Given(/^Admin select fasilitas Case 8$/, function () {
        driver.then(function(){
            return page.fieldFasilitas.performSelect();
        })
    });

    this.Given(/^Admin click button Check In Case 8$/, function () {
        driver.then(function(){
            return page.clickButtonCheckIn.performClick();
        })
    });

    this.When(/^Admin click button Submit Check In Case 8$/, function () {
        driver.then(function(){
            return page.clickSubmitCheckIn.performClick();
        })
    });

    this.Then(/^Admin berada di halaman Home lagi Case 8$/, function () {
        driver.then(function(){
            return driver.wait(until.elementsLocated(by.xpath("//p[@class='title']")), 10000);
        })
    });

};