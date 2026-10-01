import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import "bootstrap/dist/css/bootstrap.css";
import './App.css'

function App() {
  const [tytul, setTytul] = useState("");
  const [autor, setAutor] = useState("");
  const [gatunek, setGatunek] = useState("");

  const nazwyGatunkow = {
    "": "",
    "1": "Powieść",
    "2": "Kryminał",
    "3": "Fantastyka",
    "4": "Biografia",
  };

  function dodajKsiazke(event) {
    event.preventDefault();

    console.log(
      `tytul: ${tytul}; autor: ${autor}; gatunek: ${nazwyGatunkow[gatunek]}`
    );
  }

  return (
    <form onSubmit={dodajKsiazke}>
      <div className="mb-3">
        <label htmlFor="tytulKsiazki" className="form-label">
          Tytuł książki
        </label>

        <input
          type="text"
          id="tytulKsiazki"
          className="form-control"
          value={tytul}
          onChange={(event) => setTytul(event.target.value)}
        />
        
      </div>

      <div className="mb-3">
        <label htmlFor="autorKsiazki" className="form-label">
          Autor książki
        </label>

        <input
          type="text"
          id="autorKsiazki"
          className="form-control"
          value={autor}
          onChange={(event) => setAutor(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="gatunekKsiazki" className="form-label">
          Gatunek
        </label>

        <select
          id="gatunekKsiazki"
          className="form-select"
          value={gatunek}
          onChange={(event) => setGatunek(event.target.value)}
        >
          <option value="">Wybierz gatunek</option>
          <option value="1">Powieść</option>
          <option value="2">Kryminał</option>
          <option value="3">Fantastyka</option>
          <option value="4">Biografia</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Dodaj
      </button>

      button

    </form>
  )
}

export default App
