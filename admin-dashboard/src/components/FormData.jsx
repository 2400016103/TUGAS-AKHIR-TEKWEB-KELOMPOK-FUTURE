import { useState } from "react";

const FormData = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !image) return;

    onAdd({
      name,
      price: Number(price),
      image,
    });

    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <input
        placeholder="Nama Mainan"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="URL Gambar"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
};

export default FormData;
