// if...else
var nilai = 70;

// Contoh pernyataan if...else
if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 70) {
  console.log("Nilai Anda B");
} else if (nilai >= 68) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

// nested if ...
var umur = 12;
var izinOrangTua = true;

if (umur >= 12) {
  if (izinOrangTua) {
    console.log("Anda boleh masuk ke wahana rumah hantu.");
  } else {
    console.log("Anda perlu izin dari orang tua.");
  }
} else {
  console.log("Anda terlalu muda untuk masuk ke wahana rumah hantu.");
}

// Mendefinisikan sebuah variabel untuk menguji
var nilai = 2;

// Menggunakan switch...
switch (nilai) {
  case 1:
    console.log("Nilai adalah 10");
    break;
  case 2:
    console.log("Nilai adalah 20");
    break;
  case 3:
    console.log("Nilai adalah 30");
    break;
  default:
    console.log("Nilai tidak dikenali");
}

for (var i = 10; i <= 20; i++) {
    console.log(i);
  }
  


// Menggunakan while  

var angka = 1;

while (angka <= 4) {
  console.log(angka);
  angka++;
}
// Menggunakan do while

var angka = 5;

do {
  console.log(angka);
  angka++;
} while (angka <= 10);

// Mendefinisikan sebuah fungsi bernama "sapaan"
function sapaan(nama) {
    console.log("Halo, " + nama + "! Selamat datang.");
  }
  
  // Memanggil fungsi "sapaan" dengan argumen
  sapaan("Dhea");
  sapaan("raisya");
  sapaan("Aini");
  sapaan("Syakila");
  sapaan("Ayla");
  


  