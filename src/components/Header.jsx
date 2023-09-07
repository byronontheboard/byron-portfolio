import React from 'react';
// import Navigation from './Navigation';
import '../App.css'
import '../Fonts.css'

function Header(props) {
  return (
    <header className="glow header header-bg d-flex flex-column justify-content-center border-color rounded p-3 d-grid gap-4">
      <h1 className="font-family">BYRON THOMAS</h1>
      {props.children}
      {/* <Navigation/> */}
    </header>
  );
}

export default Header;