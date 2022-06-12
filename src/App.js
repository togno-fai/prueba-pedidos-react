import { useState, useEffect } from 'react'
import Envios from './components/Envios';
import './App.css';

function App() {

  const [envios, setEnvios] = useState([])

  useEffect(() => {
    const getEnvios = async () => {
      const EnviosFromServer = await fetchEnvios()
      setEnvios(EnviosFromServer)
    }
    getEnvios()
  }, [])

  const fetchEnvios = async () => {
    const res = await fetch('http://localhost:5001/envios')
    const data = await res.json()
    return data
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          pedidos
        </p>
        <div className="Envios" >
          <Envios envios={envios}></Envios>
        </div>
      </header>
    </div>
  );
}

export default App;
