import React, { useState } from 'react';
import './App.css'; // Aquí se importa tu archivo CSS
import '@fontsource/poppins'; // Fuente Poppins desde Google Fonts

function App() {
  const [textoQueLlego, setTextoQueLlego] = useState('');
  const [contador, setContador] = useState(0);

  const handleButtonClick = async () => {
    setContador(contador + 1);
    try {
      const response = await fetch('https://memeado.vercel.app/api/hello');
      const data = await response.json();
      setTextoQueLlego(data.name || 'Sin respuesta');
    } catch (error) {
      setTextoQueLlego('Error en la solicitud');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>LogoTest</h1>
        <button className="signIn">Sign In</button>
      </header>
      <main className="main-content">
        <h2>Presiona un botón y haz la prueba</h2>
        <button className="solicitar-button" onClick={handleButtonClick}>
          Solicitar
        </button>
        <p>
          Llegó: <strong>{textoQueLlego}</strong>
        </p>
        <p>
          Se ha presionado: <strong>{contador}</strong> veces
        </p>
      </main>
    </div>
  );
}

export default App;
