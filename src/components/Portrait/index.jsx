import React from 'react';
import portrait from './Portrait/Portrait.jpeg'

function Portrait() {
  return (
    <div>
      {/* Portrait */}
      <img className='glow circle-image isabelline-bg p-3 border-color col-6' src={portrait} alt="Portrait" />
    </div>
  );
}

export default Portrait;
