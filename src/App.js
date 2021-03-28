import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edite src/App.jsy guarde para recargar.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprender React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
