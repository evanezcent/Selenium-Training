# ./features/google-search.feature
 
Feature: checkin7
  Admin dapat menambah customer yang sedang checkin. Admin harus login terlebih dahulu untuk menggunakan fitur ini
  
  Background: Admin sudah login ke dalam website
    Given Browse login page
    And Admin fill Username
    And Admin fill Password
    When Admin click button Login
    Then Admin berada di halaman Home 

  Scenario: Admin akan menginput data customer yang akan atau sedang checkin
    And Admin click Check In Case 7
    And Admin fill Nama Lengkap Case 7
    And Admin fill NIK Case 7
    And Admin select Pilih kamar Case 7
    And Admin select fasilitas Case 7
    And Admin click button Check In Case 7
    When Admin click button Submit Check In Case 7
    Then Admin berada di halaman Home lagi Case 7