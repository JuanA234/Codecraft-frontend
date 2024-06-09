import React, { useState } from 'react';
import '../styles/Editor.css';

function Editor({ onSubmit }) {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleClick = () => {
    onSubmit(code);
  };

  return (
    <div>
      <textarea
        cols="35"
        rows="10"
        className="text-box"
        id="code-box"
        required
        placeholder="Escribe tu código acá, chaval :')"
        value={code}
        onChange={handleChange}
      />
      <input
        type="button"
        className="submit"
        value="Enviar"
        id="btnEnviar"
        onClick={handleClick}
      />
    </div>
  );
}

export default Editor;
