// Memuat dependensi Sequelize dan DataTypes dari Sequelize
const {Sequelize, DataTypes} = require('sequelize');

// Memuat koneksi ke database dari file konfigurasi
const sequelize = require('../config/db');

// Membuat model User menggunakan metode define dari Sequelize
const User = sequelize.define('user', {
    // Mendefinisikan kolom 'name' dengan tipe data STRING yang wajib diisi (tidak boleh kosong)
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Mendefinisikan kolom 'email' dengan tipe data STRING yang boleh kosong
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // Mendefinisikan kolom 'password' dengan tipe data STRING yang wajib diisi (tidak boleh kosong)
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Mendefinisikan kolom 'address' dengan tipe data STRING
    address: DataTypes.STRING,
}, {
    // Opsi konfigurasi untuk model User

    // Menetapkan nilai `true` agar nama tabel menjadi tetap (sesuai dengan nama model 'user' bukan diubah menjadi bentuk jamak oleh Sequelize)
    freezeTableName: true,

    // Menonaktifkan penggunaan kolom timestamps (createdAt dan updatedAt) secara otomatis
    timestamps: false,
});


module.exports = User;
