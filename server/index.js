// index.js
const express = require("express");
const app = express();
const supabase = require("./supabaseClient"); // Mengimpor koneksi Supabase

app.use(express.json());

// Endpoint untuk mengambil data dari Supabase
app.get("/get-data", async (req, res) => {
  try {
    // Ambil data dari tabel 'items' (ganti dengan nama tabel Anda)
    const { data, error } = await supabase.from("items").select("*");

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

app.post("/add-item", async (req, res) => {
  // Mengambil data yang dikirim dalam body
  const { name, description } = req.body;

  try {
    // Memasukkan data ke tabel 'items'
    const { data, error } = await supabase
      .from("items") // Ganti dengan nama tabel Anda
      .insert([
        { name, description }, // Menyusun data yang akan dimasukkan
      ]);

    // Mengecek apakah ada error
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Mengembalikan respons sukses dengan data yang dimasukkan
    res.status(201).json(data);
  } catch (err) {
    // Jika terjadi error lain
    res.status(500).json({ error: "Server Error" });
  }
});

// Menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
