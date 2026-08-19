const { test, expect } = require('@playwright/test');

test('Skenario End-to-End: Checkout Barang Sukses', async ({ page }) => {
  // 1. Login (Sama seperti latihan sebelumnya)
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 2. Tambah satu produk ke keranjang (Add to cart)
  // Kita menggunakan locator berupa atribut data-test untuk mencari tombolnya
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // 3. Masuk ke halaman keranjang dan klik Checkout
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();

  // 4. Isi Form Checkout
  await page.fill('[data-test="firstName"]', 'QA');
  await page.fill('[data-test="lastName"]', 'Tester');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.locator('[data-test="continue"]').click();

  // 5. Konfirmasi Pembayaran (Finish)
  await page.locator('[data-test="finish"]').click();

  // 6. Assertion: Verifikasi Pesan Sukses
  // Memastikan elemen pesan memiliki teks yang persis sesuai ekspektasi
//   await expect(page.locator('.pesan-error-keranjang')).toBeVisible();
  const pesanSukses = page.locator('.complete-header');
  await expect(pesanSukses).toHaveText('Thank you for your order!');

  // 8. Generate PDF
  await page.locator('[data-test="generate-pdf-order"]').click();
});