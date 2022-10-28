import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Museum Geologi Bandung <code>url/geologi/src/App.js</code> resfrest weh browsernya
        </p>
        <p>
          Museum Geologi didirikan pada 16 Mei 1929. Museum ini direnovasi dengan dana bantuan dari JICA. Setelah mengalami renovasi, Museum Geologi dibuka kembali dan diresmikan oleh Wakil Presiden
          RI, Megawati Soekarnoputri pada 23 Agustus 2000
        </p>
        <a className="App-link" href="https://irc.ulbi.ac.id/" target="_blank" rel="noopener noreferrer">
          Informatics Research Center
        </a>
      </header>
    </div>
  );
}

export default App;
