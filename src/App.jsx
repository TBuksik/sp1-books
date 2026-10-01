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

        
      </div>
    </form>
  )
}

export default App
