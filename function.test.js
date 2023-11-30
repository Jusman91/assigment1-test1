// angka.test.js

const { fishBash, sortAsc, sortDesc, cekPalindrom } = require('./function');

test('Print fish for number 3', () => {
  const result = fishBash(3);
  expect(result).toEqual(['1', '2', 'fish']);
});

test('Urutkan dari kecil ke besar', () => {
  const input = [5, 2, 9, 1, 5, 6];
  const result = sortAsc([...input]);
  expect(result).toEqual([1, 2, 5, 5, 6, 9]);
});

test('Urutkan dari besar ke kecil', () => {
  const input = [5, 2, 9, 1, 5, 6];
  const result = sortDesc([...input]);
  expect(result).toEqual([9, 6, 5, 5, 2, 1]);
});


// palindrom.test.js
test('Cek palindrom untuk kata yang merupakan palindrom', () => {
  const result = cekPalindrom('Kasur ini rusak');
  expect(result).toBe(true);
});

test('Cek palindrom untuk kata yang bukan palindrom', () => {
  const result = cekPalindrom('Hello, World!');
  expect(result).toBe(false);
});

test('Cek palindrom untuk string kosong', () => {
  const result = cekPalindrom('');
  expect(result).toBe(true); // String kosong dianggap sebagai palindrom
});

test('Cek palindrom untuk kata dengan spasi', () => {
  const result = cekPalindrom('A man a plan a canal Panama');
  expect(result).toBe(true);
});