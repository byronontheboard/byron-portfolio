import React from 'react';
import Icon from '../Icon';

function Portfolio() {

  return (
    <section className="text container-fluid d-grid gap-5 rounded col-12">

        {/* Space */}
        <div></div>

        {/* PinPoint */}
        <div className='row d-flex align-items-center justify-content-center'>
        <h2 className='header d-flex justify-content-start'>Pin Point</h2>
          <img className='glow col-12 rounded border-color isabelline-bg p-3 gif' src="src/components/Portfolio/PinPoint.gif" alt="PinPoint" />
          <div className='column'>
            <h3>
              <a href="https://pinpoint-davis-383be2067b3d.herokuapp.com/" target="_blank" rel="noopener noreferrer">Pin Point</a>
            </h3>
            <a href="https://github.com/byronontheboard/pin-point" target="_blank" rel="noopener noreferrer">
              <Icon></Icon>
            </a>
          </div>
        </div>

        <hr />

        {/* ChoreChampion */}
        <div className='row d-flex align-items-center justify-content-center'>
        <h2 className='header d-flex justify-content-start'>Chore Champion</h2>
          <img className='glow col-12 rounded border-color isabelline-bg p-3 gif' src="src/components/Portfolio/CHORECHAMPION.gif" alt="Chore Champion" />
          <div className='column'>
            <h3>
              <a href="https://chore-champion-6838d87c31f6.herokuapp.com/login" target="_blank" rel="noopener noreferrer">Chore Champion</a>
            </h3>
            <a href="https://github.com/byronontheboard/chore-champion" target="_blank" rel="noopener noreferrer">
              <Icon></Icon>
            </a>
          </div>
        </div>

        <hr />

        {/* Password Generator */}
        <div className='row d-flex align-items-center justify-content-center'>
        <h2 className='header d-flex justify-content-start'>Password Generator</h2>
          <img className='glow col-12 rounded border-color isabelline-bg p-3 gif' src="src/components/Portfolio/Byron's Password Generator.gif" alt="Password Generator" />
          <div className='column'>
            <h3>
              <a href="https://byronontheboard.github.io/js-password-generator/" target="_blank" rel="noopener noreferrer">Password Generator</a>
            </h3>
            <a href="https://github.com/byronontheboard/js-password-generator" target="_blank" rel="noopener noreferrer">
              <Icon></Icon>
            </a>
          </div>
        </div>

        <hr />

        {/* Note Taker */}
        <div className='row d-flex align-items-center justify-content-center'>
        <h2 className='header d-flex justify-content-start'>Note Taker</h2>
          <img className='glow col-12 rounded border-color isabelline-bg p-3 gif' src="src/components/Portfolio/Note-Taker (1).gif" alt="Note Taker" />
          <div className='column'>
            <h3>
              <a href="https://byronontheboard.github.io/js-password-generator/" target="_blank" rel="noopener noreferrer">Note Taker</a>
            </h3>
            <a href="https://github.com/byronontheboard/js-password-generator" target="_blank" rel="noopener noreferrer">
              <Icon></Icon>
            </a>
          </div>
        </div>

        <hr />

        {/* Retro JS Quiz */}
        <div className='row d-flex align-items-center justify-content-center'>
        <h2 className='header d-flex justify-content-start'>Coding Quiz</h2>
          <img className='glow col-12 rounded border-color isabelline-bg p-3' src="src/components/Portfolio/__WHAT IS CODING_ _ QUIZ.gif" alt="Coding Quiz" />
          <div className='column'>
            <h3>
              <a href="https://byronontheboard.github.io/my-coding-quiz/" target="_blank" rel="noopener noreferrer">What Is Coding?</a>
            </h3>
            <a href="https://github.com/byronontheboard/my-coding-quiz" target="_blank" rel="noopener noreferrer">
              <Icon></Icon>
            </a>
          </div>
        </div>

        <hr />

        {/* Weather Watcher */}
        <div className='row d-flex align-items-center justify-content-center'>
        <h2 className='header d-flex justify-content-start'>Weather Watcher</h2>
          <img className='glow col-12 rounded border-color isabelline-bg p-3 gif' src="src/components/Portfolio/Weather Watcher.gif" alt="Weather Watcher" />
          <div className='column'>
            <h3>
              <a href="https://byronontheboard.github.io/weather-web-app/" target="_blank" rel="noopener noreferrer">Weather Watcher</a>
            </h3>
            <a href="https://github.com/byronontheboard/weather-web-app" target="_blank" rel="noopener noreferrer">
              <Icon></Icon>
            </a>
          </div>
        </div>

        <hr />
    </section>
  );
};

export default Portfolio;