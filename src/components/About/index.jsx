import React from 'react';
import Portrait from '../Portrait';

function About() {

  return (
    <section className="text container-fluid d-grid gap-5 rounded col-12">
        {/* Profile Picture */}
        {/* <div className="profile-img row">
          <i className="fas fa-user-circle" style={{ fontSize: "96px" }}>
          </i>
        </div> */}
        <div className='row justify-content-center'></div>    

        {/* <Portrait></Portrait> */}
        <hr />
        {/* Personal */}
        <div className='row d-flex align-items-center'>
          <h2 className='header d-flex justify-content-start'>MY CHILD</h2>
          <div className='glow col-9'>
            <p className='my-0 p-3 isabelline-bg border-color rounded'>
              "My given name is Benjamin Buford Blue, but people call me Bubba. Just like one of them ol' redneck boys. Can you believe that?" - Bubba Buford
            </p>
          </div>
          {/* Picture */}
          <img className='glow col-3 rounded border-color isabelline-bg p-3' src="src/components/About/Content/Dog.jpeg" alt="Description of the image" />
        </div>
        <hr />
        {/* Education */}
        <div className='row d-flex align-items-center'>
          {/* Picture */}
          <h2 className='header d-flex justify-content-end'>TRADING CARDS</h2>
          <img className='glow col-3 rounded border-color isabelline-bg p-3' src="src/components/About/Content/Collect.jpeg" alt="Description of the image" />
          <div className='glow col-9'>
            <p className='my-0 p-3 isabelline-bg border-color rounded'>
              "My given name is Benjamin Buford Blue, but people call me Bubba. Just like one of them ol' redneck boys. Can you believe that?" - Bubba Buford
            </p>
          </div>
        </div>
        <hr />
        <div className='row d-flex align-items-center'>
          {/* Hobbies */}
          <h2 className='header d-flex justify-content-start'>AUDIO PRODUCTION</h2>
          <div className='glow col-6'>
            <p className='my-0 p-3 isabelline-bg border-color rounded'>
              "My given name is Benjamin Buford Blue, but people call me Bubba. Just like one of them ol' redneck boys. Can you believe that?" - Bubba Buford
            </p>
          </div>

          <video className='glow col-6 rounded border-color isabelline-bg p-3' controls>
            <source src='src/components/About/Content/AUTUMN VIDEO.mp4' type='video/mp4'/>
          </video>
        </div>  
    </section>
  );
};

export default About;