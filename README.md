# Playwright Practice - Saucedemo & API

Proyek portofolio automation testing menggunakan **Playwright** dan **JavaScript**.

## 🛠️ Tools yang Digunakan
* JavaScript
* Playwright Test Runner
* GitHub Codespaces & Git

## 🧪 Daftar Skenario yang Di-automate
1. **Positive Login Test**: Login dengan kredensial valid (`standard_user`) di Saucedemo.
2. **Negative Login Test**: Pengujian validasi saat memasukkan password salah.
3. **End-to-End Checkout Flow**: Alur belanja dari login, tambah produk ke *cart*, *checkout*, hingga konfirmasi sukses.
4. **API Testing**: Pengujian dasar koneksi REST API publik (`reqres.in`).

## 🚀 Cara Menjalankan Test
1. Clone repository ini.
2. Install dependencies: `npm install`
3. Jalankan test: `npx playwright test`