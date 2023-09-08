import React from 'react';
import '../App.css'

function Footer() {
  return (
    <section className="text container-fluid d-grid gap-5 rounded col-12">
        <div className='row d-flex align-items-center justify-content-center wiggle-on-hover click'>
          <a href="https://github.com/byronontheboard" target="_blank" rel="noopener noreferrer" className='glow'>
            <img className='glow col-1 rounded border-color isabelline-bg p-2' src="src/components/Footer/GitHub-Icon.png" alt="GitHub" />
          </a>
        </div>
    </section>
  );
}

export default Footer;
