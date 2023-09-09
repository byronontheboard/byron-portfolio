import React from 'react';
import github from './Content/GitHub-Logo.jpeg'

function GitHub() {

  return (
    <section className="text container-fluid d-grid gap-5 rounded col-12">
        {/* Profile Picture */}
        {/* Space */}
        <div className='row justify-content-center'></div>    

        {/* <Portrait></Portrait> */}
        <div className='row d-flex align-items-center justify-content-center'>
          <h2 className='header d-flex justify-content-start'>/byronontheboard</h2>
          <a href="https://github.com/byronontheboard" target="_blank" rel="noopener noreferrer" className='glow wiggle-on-hover'>
            <img className='glow col-8 rounded border-color isabelline-bg p-3' src={github} alt="GitHub" />
          </a>
        </div>
        <hr />
    </section>
  );
};

export default GitHub;