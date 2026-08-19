const { test, expect } = require('@playwright/test'); 

test('GET request ke API publik berhasil', async ({ request }) => { 
  // Melakukan request GET ke URL API
  const response = await request.get('https://reqres.in/api/users/2'); 
  
  // Memastikan status responnya adalah 200 (OK/Sukses)
  expect(response.status()).toBe(200)
  
  // Mengubah respon menjadi format JSON agar bisa dibaca isinya
  const body = await response.json(); 
  
  // Memastikan bahwa data ID yang dikembalikan benar-benar angka 2
  expect(body.data.id).toBe(2); 
});

