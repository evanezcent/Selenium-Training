# ./features/google-search.feature
 
Feature: laporan
  Admin dapat melihat data laporan dan dapat melihat detailnya. Admin harus login terlebih dahulu untuk menggunakan fitur ini
  
  Background: Admin sudah menginput satu data untuk di cek di page laporan
    Given Browse login page
    And Admin fill Username
    And Admin fill Password
    And Admin click button Login
    And Admin click Check In
    And Admin fill Nama Lengkap
    And Admin fill NIK
    And Admin select Pilih kamar
    And Admin select fasilitas
    And Admin click button Check In
    And Admin click button Submit Check In
    And Admin click Check Out
    And Admin click Detail dengan NIK yang sama
    And Admin click button Check Out
    And Admin click button Submit Check Out
    When Admin click button Home
    Then Admin berada di halaman Home  

  Scenario: Cek Apakah Admin dapat melihat seluruh informasi transaksi data pelanggan,kamar,dan fasilitas yang diambil beserta pembayaran dengan benar
    When Admin click Laporan
    Then Admin melihat data pelanggan-pelanggan yang sudah Check Out