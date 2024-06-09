import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header-box">
        <img id="logo-header" src="/img/codecraft-logo" alt="Logo del lenguaje Codecraft" />
        <nav>
          <ul>
            <li><a href="#">Editor de código</a></li>
            <li><a href="#">Conocenos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;