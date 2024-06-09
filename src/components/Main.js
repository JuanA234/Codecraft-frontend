import React, { useState } from 'react';
import Editor from './Editor';
import Output from './Output';
import InfoPanel from './InfoPanel';
import '../styles/Main.css';

function Main() {
  const [output, setOutput] = useState('');

  const handleSubmission = async (code) => {
    try {
      const response = await fetch('https://codecraftbackend-ohlf.onrender.com/lexer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'https://127.0.0.1:5000',
          'Access-Control-Credentials':'true'
        },
        body: JSON.stringify({ content: code })
      });
      const data = await response.json();
      setOutput(JSON.stringify(data));
    } catch (error) {
      console.error('Error al tokenizar las palabras:', error);
    }
  };

  return (
    <main>
      <h1 className="title">Ingrese su código de Codecraft</h1>
      <div className="container">
        <Editor onSubmit={handleSubmission} />
      </div>
      <div className="container">
        <Output value={output} />
      </div>
      <div className="contenedor">
        <InfoPanel />
      </div>
    </main>
  );
}

export default Main;