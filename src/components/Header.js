import React from 'react';

import fbLogo from '../resources/img/fb-logo.svg';

function Header() {
  return (
    <header>
      <div className="header__content">
        <img src={fbLogo} alt="Facebook" />
        <div className="header__menu">
          <p>Meu perfil</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
