# ./features/signin.feature
 
Feature: SignIn on the Vutura website
  As a user I want to be able to SignIn
  on Vutura's user website
 
  Scenario: User Success login to website
    Given Browse signin page
    And User fill email
    And User fill password
    When User click masuk button
    Then User in dashboard page