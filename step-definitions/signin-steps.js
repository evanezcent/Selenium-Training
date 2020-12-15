
module.exports = function () {
    this.Given(/^Browse signin page$/, function () {
      helpers.loadPage('http://localhost/IMPAL/SistemInformasiHotel/')
    });

    this.Given(/^User fill email$/, function () {
      driver.then(function(){
          return page.fieldEmail.performFill()
      })
    });

    this.Given(/^User fill password$/, function () {
      driver.then(function(){
          return page.fieldPassword.performFill()
      })
    });

    this.When(/^User click masuk button$/, function () {
      driver.then(function(){
          return page.loginButton.perform()
      })
    });

    this.Then(/^User in dashboard page$/, function () {
      return driver.wait(until.elementsLocated(by.xpath('/html/body/div[2]')))
      .then(function(){
        return driver.findElements(by.xpath('/html/body/div[2]'));
      }).then(function (element) {
        console.log(element.length)
      })  
    });
}
