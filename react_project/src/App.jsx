import { useState } from "react";
import "./App.css";

function Header() {
  return (
    <div className="container">
      <h1>Data Siswa</h1>
      <p>Card React Sederhana</p>
    </div>
  );
}

function Biodata({ nama, nisn, kelas }) {
  return (
    <div className="card">
      <div className="card-line"></div>

      <h3>{nama}</h3>
      <br />

      <p>
        <strong>NISN:</strong> {nisn}
      </p>
      <p>
        <strong>Kelas:</strong> {kelas}
      </p>

      <div className="card-btn">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Hapus</button>
      </div>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  const siswa = [
    { nama: "Rifa", nisn: "6767", kelas: "XI PPLG 2" },
    { nama: "Ezzar Poseidon", nisn: "1234", kelas: "XI PPLG 1" },
    { nama: "Wahyoe", nisn: "4321", kelas: "XI PPLG 6" },
    { nama: "Mas Boi", nisn: "7676", kelas: "XI PPLG 7" },
    { nama: "Ayip", nisn: "5678", kelas: "XI PPLG 2" },
    
  ];

  return (
    <>
      <Header />

      <div className="container">
        <button
          className="btn-add"
          onClick={() => setShowModal(true)}
        >
          + Tambah Siswa
        </button>

        <div className="card-wrapper">
          {siswa.map((item, index) => (
            <Biodata
              key={index}
              nama={item.nama}
              nisn={item.nisn}
              kelas={item.kelas}
            />
          ))}
        </div>
      </div>

{showModal && (
  <div className="modal">
    <h3>Form Tambah</h3>

    <input
      type="text"
      name="nama"
      id="nama"
      placeholder="Nama Murid"
    />

    <input
      type="text"
      name="nisn"
      id="nisn"
      placeholder="NISN"
    />

    <select name="kelas" id="kelas">
      <option value="X PPLG 1">X PPLG 1</option>
      <option value="X PPLG 2">X PPLG 2</option>
      <option value="X PPLG 3">X PPLG 3</option>
      <option value="XI PPLG 1">XI PPLG 1</option>
      <option value="XI PPLG 2">XI PPLG 2</option>
      <option value="XI PPLG 3">XI PPLG 3</option>
    </select>

    <button onClick={() => setShowModal(false)}>
      Selesai
    </button>
  </div>
)}


      <footer style={{ textAlign: "center", marginTop: "30px" }}>
        © 2026
      </footer>
    </>
  );
}

export default App;