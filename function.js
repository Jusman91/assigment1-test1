// modulus 
function fishBash(number) {
  let results = []
  for (let i = 1; i <= number; i++) {
    let output = '';
    if (i % 15 === 0) {
      output += 'fish bash';
    }
    if (i % 3 === 0) {
      output += 'fish';
      console.log('fish');
    }
    if (i % 5 === 0) {
      output += 'bash';
    }
    if (output === '') {
      output = i.toString();
    }
    console.log(output);
    results.push(output)
  }
  return results
}
fishBash(3)

// Bubble sort
// mengurutkan dari kecil ke besar
function sortAsc(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        // Tukar posisi jika elemen saat ini lebih besar dari elemen berikutnya
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

// mengurutkan dari besar ke kecil
function sortDesc(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[i]) {
        // Tukar posisi jika elemen saat ini lebih kecil dari elemen berikutnya
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

// Contoh penggunaan
const array = [5, 2, 9, 1, 5, 6];
const resultAsc = sortAsc([...array]);
const resultDesc = sortDesc([...array]);

console.log('Array Asli:', array);
console.log('Urut dari Kecil ke Besar:', resultAsc);
console.log('Urut dari Besar ke Kecil:', resultDesc);


// reversed string
function cekPalindrom(str) {
  str = str.toLowerCase().replace(/\s/g, '');

  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  // Memeriksa apakah string asli dan yang dibalik sama
  if (str === reversed) {
    return true;
  } else {
    return false;
  }

  // const reversed = str.split('').reverse().join('');
  // return str === reversed;
}

// Contoh penggunaan
const resulCek1 = cekPalindrom('Kasur ini rusak');
console.log(resulCek1); // Output: true

const resulCek2 = cekPalindrom('Hello, World!');
console.log(resulCek2); // Output: false



module.exports = { fishBash, sortAsc, sortDesc, cekPalindrom };
