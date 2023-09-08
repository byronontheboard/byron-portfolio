import React from 'react';
import '../App.css'

function Footer() {
  return (
    <section className="d-grid gap-5 p-0">
        <div className='wiggle-on-hover click m-0 p-0'>
          <a href="https://github.com/byronontheboard" target="_blank" rel="noopener noreferrer" className='d-flex justify-content-center'>
            <img className='glow rounded border-color isabelline-bg p-2 col-1' src="src/components/Footer/GitHub-Icon.png" alt="GitHub" />
          </a>
        </div>
    </section>
  );
}

export default Footer;
