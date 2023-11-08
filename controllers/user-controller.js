// Mengimpor model User dari direktori "../models/User"
const User = require("../models/User");

// Mengekspor objek yang berisi beberapa fungsi
module.exports = {
    // Fungsi untuk mendapatkan semua user
    getAllUser: async (req, res) => {
        try {
            // Mengambil semua user dari database
            const allUsers = await User.find();
            
            // Mengirim respon dengan daftar semua user
            res.status(200).json(allUsers);
        } catch (error) {
            // Jika terjadi error, mengirim respon dengan pesan gagal dan detail error
            res.status(500).json({
                message: "gagal mendapatkan semua user",
                error: error.message
            });
        }
    },

    // Fungsi untuk mendapatkan user berdasarkan id
    getUserById: async (req, res) => {
        const userId = req.params.id; // Mengambil ID user dari parameter request
        
        try {
            // Mencari user berdasarkan ID di database
            const user = await User.findById(userId);
            
            if (!user) {
                // Jika user dengan ID yang diberikan tidak ditemukan, kirim respon bahwa user tidak ditemukan
                return res.status(404).json({ message: "User tidak ditemukan" });
            }

            // Mengirim respon dengan data user yang ditemukan
            res.status(200).json(user);
        } catch (error) {
            // Jika terjadi error, mengirim respon dengan pesan gagal dan detail error
            res.status(500).json({
                message: "gagal mendapatkan user",
                error: error.message
            });
        }
    },

    // Fungsi untuk membuat user baru
    createUser: async (req, res) => {
        // Mengambil data dari request body
        let data = req.body;

        try {
            // Mencoba membuat user baru dengan data yang diberikan
            const newUser = await User.create(data);

            // Mengirim respon dengan status 201 (Created) dan pesan sukses
            res.status(201).json({
                message: "berhasil menambahkan user",
                user: newUser
            });
        } catch (error) {
            // Jika terjadi error, mengirim respon dengan pesan gagal dan detail error
            res.status(500).json({
                message: "gagal menambahkan user",
                error: error.message
            });
        }
    },
};
