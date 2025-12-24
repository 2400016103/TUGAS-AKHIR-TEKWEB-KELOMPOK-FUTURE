const DataTable = ({ data, onDelete }) => {
  return (
    <table border="1" cellPadding="10" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>No</th>
          <th>Gambar</th>
          <th>Nama Mainan</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>
              <img
                src={item.image}
                alt={item.name}
                width="60"
                height="60"
              />
            </td>
            <td>{item.name}</td>
            <td>Rp {item.price.toLocaleString()}</td>
            <td>
              <button onClick={() => onDelete(item.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
