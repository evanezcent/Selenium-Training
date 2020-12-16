# ./features/google-search.feature
 
Feature: checkin1
  Admin dapat menambah customer yang sedang checkin. Admin harus login terlebih dahulu untuk menggunakan fitur ini
  
  Background: Admin sudah login ke dalam website
    Given Browse login page
    And Admin fill Username
    And Admin fill Password
    When Admin click button Login
    Then Admin berada di halaman Home 

  Scenario: Admin akan menginput data customer yang akan atau sedang checkin
    And Admin click Check In
    And Admin fill Nama Lengkap
    And Admin fill NIK
    And Admin select Pilih kamar
    And Admin select fasilitas
    And Admin click button Check In
    When Admin click button Submit Check In
    Then Admin berada di halaman Home lagi