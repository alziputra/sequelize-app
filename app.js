const express = require("express");
// mengimpor library express
const app = express();
// Mengimpor konfigurasi database
const db = require("./config/db");
// mengimpor model User
const User = require("./models/User");

// Mengimpor semua rute yang dibutuhkan
const allRoutes = require("./routes");
//
const PORT = process.env.PORT || 3000;

async function testConnection() {
  try {
    // Mencoba mengautentikasi koneksi ke database
    await db.authenticate();
    // Pesan jika koneksi berhasil
    console.log("Connection has been established successfully.");
    // Sinkronisasi skema database (opsional - dapat digunakan untuk menghapus dan membuat ulang tabel)
    // await db.sync({force: true,});
    
    // Sinkronisasi model User dengan tabel terkait dalam database (opsional)
    // await User.sync({force: true,});

    // Pesan jika semua model berhasil disinkronkan
    console.log("All models were synchronized successfully.");
  } catch (error) {
    // Pesan kesalahan jika gagal terhubung ke database
    console.error("Unable to connect to the database:", error);
  }
}

// Memanggil fungsi untuk menguji koneksi ke database
testConnection();

// Menggunakan middleware untuk parsing body dalam format JSON
app.use(express.json());

// Menggunakan semua rute yang diimpor sebelumnya
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});