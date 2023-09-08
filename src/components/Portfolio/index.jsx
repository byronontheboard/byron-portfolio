import React from 'react';
import Icon from '../Icon';

function Portfolio() {

  return (
    <section className="text container-fluid d-grid gap-5 rounded col-12">

        {/* Space */}
        <div></div>

        {/* PinPoint */}
        <div className='row d-flex align-items-center justify-content-center'>
        <h2 className='header d-flex justify-content-start'>PinPoint</h2>
          <img className='glow col-12 rounded border-color isabelline-bg p-3 gif' src="src/components/Portfolio/PinPoint.gif" alt="PinPoint" />
          <div className='column'>
            <h3>
              <a href="https://pinpoint-davis-383be2067b3d.herokuapp.com/" target="_blank" rel="noopener noreferrer">PinPoint</a>
            </h3>
            <a href="https://github.com/byronontheboard/pin-point" target="_blank" rel="noopener noreferrer">
              <Icon></Icon>
            </a>
          </div>
        </div>

        {/* ChoreChampion */}
        <div className='row d-flex align-items-center justify-content-center'>
        <h2 className='header d-flex justify-content-start'>ChoreChampion</h2>
          <img className='glow col-12 rounded border-color isabelline-bg p-3 gif' src="src/components/Portfolio/CHORECHAMPION.gif" alt="ChoreChampion" />
          <div className='column'>
            <h3>
              <a href="https://chore-champion-6838d87c31f6.herokuapp.com/login" target="_blank" rel="noopener noreferrer">ChoreChampion</a>
            </h3>
            <a href="https://github.com/byronontheboard/chore-champion" target="_blank" rel="noopener noreferrer">
              <Icon></Icon>
            </a>
          </div>
        </div>


        <hr />
    </section>
  );
};

export default Portfolio;