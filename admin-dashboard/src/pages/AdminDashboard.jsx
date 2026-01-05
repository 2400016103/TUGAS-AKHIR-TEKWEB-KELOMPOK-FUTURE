import { useEffect, useState } from "react";

const defaultToys = [
  { id: 1, name: "Ultraman Figure", price: 20000 },
  { id: 2, name: "Hello Kitty Doll", price: 10000 },
  { id: 3, name: "Robot Optimus Prime", price: 150000 },
  { id: 4, name: "Mobil Remote Control", price: 250000 },
  { id: 5, name: "Boneka Beruang", price: 120000 },
  { id: 6, name: "Lego Star Wars Set", price: 450000 },
  { id: 7, name: "Hot Wheels Track", price: 300000 },
  { id: 8, name: "Action Figure Naruto", price: 175000 },
  { id: 9, name: "Puzzle Kayu Edukasi", price: 85000 },
  { id: 10, name: "Kitchen Set Mainan", price: 210000 },
];

const AdminDashboard = ({ onLogout }) => {
  const [toys, setToys] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editPrice, setEditPrice] = useState("");
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  // LOAD DATA SAAT LOGIN
  useEffect(() => {
    const saved = localStorage.getItem("toys");
    if (saved) {
      setToys(JSON.parse(saved));
    } else {
      setToys(defaultToys);
      localStorage.setItem("toys", JSON.stringify(defaultToys));
    }
  }, []);

  // SIMPAN SETIAP PERUBAHAN
  useEffect(() => {
    if (toys.length > 0) {
      localStorage.setItem("toys", JSON.stringify(toys));
    }
  }, [toys]);

  const handleEdit = (toy) => {
    setEditId(toy.id);
    setEditPrice(toy.price);
  };

  const handleSave = (id) => {
    setToys(
      toys.map((toy) =>
        toy.id === id ? { ...toy, price: Number(editPrice) } : toy
      )
    );
    setEditId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus mainan ini?")) {
      setToys(toys.filter((toy) => toy.id !== id));
    }
  };

  const handleAdd = () => {
    if (!newName || !newPrice) return alert("Lengkapi data!");
    const newToy = {
      id: Date.now(),
      name: newName,
      price: Number(newPrice),
    };
    setToys([...toys, newToy]);
    setNewName("");
    setNewPrice("");
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <div style={styles.header}>
        <h1>Dashboard - ToyKids Future</h1>
        <button style={styles.logoutBtn} onClick={onLogout}>
          Logout
        </button>
      </div>

      {/* FORM TAMBAH */}
      <div style={styles.form}>
        <input
          placeholder="Nama Mainan"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Harga"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <button onClick={handleAdd}>Tambah</button>
      </div>

      {/* LIST */}
      <div style={styles.grid}>
        {toys.map((toy) => (
          <div key={toy.id} style={styles.card}>
            <div style={styles.image}>🧸</div>
            <h3>{toy.name}</h3>

            {editId === toy.id ? (
              <>
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />
                <button onClick={() => handleSave(toy.id)}>Simpan</button>
              </>
            ) : (
              <>
                <p>Rp {toy.price.toLocaleString()}</p>
                <button onClick={() => handleEdit(toy)}>Edit</button>
                <button onClick={() => handleDelete(toy.id)}>Hapus</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: 20, background: "#f5f7fb", minHeight: "100vh" },
  header: { display: "flex", justifyContent: "space-between" },
  logoutBtn: { padding: 8, background: "#111", color: "#fff" },
  form: { margin: "20px 0", display: "flex", gap: 10 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 15,
  },
  card: { background: "#fff", padding: 15, borderRadius: 10 },
  image: { fontSize: 40 },
};

export default AdminDashboard;
