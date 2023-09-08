import React from 'react';
import '../App.css'
import Icon from './Icon';

function Footer() {
  return (
    <section className="d-grid gap-5 px-0">
        <a href="https://github.com/byronontheboard" target="_blank" rel="noopener noreferrer">
          <Icon></Icon>
          My GitHub
        </a>
    </section>
  );
}

export default Footer;
