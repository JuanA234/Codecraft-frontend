import React from 'react';
import '../styles/InfoPanel.css';

function InfoPanel() {
  return (
    <>
      <div className="cuadro">
        <img id="javaScriptLogo" src="/static/assets/img/javascript.png" alt="Logo javaScript" />
        <h2><strong>Codigo en JavaScript</strong></h2>
        <ul>
          <li><span className="highlight-yellow">Condicionales:</span>
            <ul>
              <li>"If"</li>
              <li>"elif"</li>
              <li>"else"</li>
            </ul>
          </li>
          <li><span className="highlight-yellow">Tipos de variables:</span>
            <ul>
              <li>"integer"</li>
              <li>"string"</li>
              <li>"float"</li>
              <li>"boolean"</li>
            </ul>
          </li>
          <li><span className="highlight-yellow">Operadores logicos:</span>
            <ul>
              <li>"and"</li>
              <li>"or"</li>
              <li>"not"</li>
            </ul>
          </li>
          <li><span className="highlight-yellow">ControlStructures:</span>
            <ul>
              <li>"for"</li>
              <li>"while"</li>
              <li>"break"</li>
              <li>"continue"</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="cuadro">
        <img id="codecraft-logo" src="/static/assets/img/codecraft-logo.jpeg" alt="Logo del lenguaje Codecraft" />
        <h2><strong>Codigo en CodeCraft</strong></h2>
        <ul>
          <li><span className="highlight-blue">Condicionales:</span>
            <ul>
              <li>"Si"</li>
              <li>"sino"</li>
              <li>"contrario"</li>
            </ul>
          </li>
          <li><span className="highlight-blue">Tipos de variables:</span>
            <ul>
              <li>"bloque"</li>
              <li>"hiloRedstone"</li>
              <li>"pasoHelado"</li>
              <li>"booleanman"</li>
            </ul>
          </li>
          <li><span className="highlight-blue">Operadores logicos:</span>
            <ul>
              <li>"interruptor"</li>
              <li>"puerta"</li>
              <li>"cierre"</li>
            </ul>
          </li>
          <li><span className="highlight-blue">ControlStructures:</span>
            <ul>
              <li>"minarpara"</li>
              <li>"mientrasNoDiamante"</li>
              <li>"picoRoto"</li>
              <li>"seguirPicando"</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default InfoPanel;
