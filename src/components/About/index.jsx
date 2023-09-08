import React from 'react';
import Portrait from '../Portrait';

function About() {

  return (
    <section className="text container-fluid d-grid gap-5 rounded col-12">
        {/* Profile Picture */}
        {/* Space */}
        <div className='row justify-content-center'></div>    

        {/* <Portrait></Portrait> */}
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='glow col-10'>
            <p className='my-0 p-3 isabelline-bg border-color rounded'>
              As a lifelong enthusiast of continuous learning, 
              I have devoted myself to the philosophy of knowledge acquisition,
              forever driven to expand upon the groundwork of yesterday.
              <br />
              <br />        
              As a Full Stack Web Developer, I have unearthed a profound passion for the craft, 
              wholeheartedly immersing myself into the boundless chasm of growth and creativity that this field can offer.
            {/* Draft */}
              {/* As an individual, I have committed myself to the philosophy of learning,
              always yearning to build upon my knowledge of yesterday. */}
              {/* <br /> */}
              {/* <br />         */}
              {/* As a Full Stack Web Developer, I have discovered a love for the craft,  
              dedicating myself to the endless opportunities of growth and creativity behind the code. */}
            </p>
          </div>
        </div>
        <hr />
        {/* Personal */}
        <div className='row d-flex align-items-center'>
          <h2 className='header d-flex justify-content-start'>MY CHILD</h2>
          <div className='glow col-8'>
            <p className='my-0 p-3 isabelline-bg border-color rounded'>
            When I'm not with my family or partner, 
            my time is often devoted to caring for my child, Keyana.
            </p>
          </div>
          {/* Picture */}
          <img className='glow col-4 rounded border-color isabelline-bg p-3' src="src/components/About/Content/Dog.jpeg" alt="Keyana" />
        </div>
        <hr />
        {/* Education */}
        <div className='row d-flex align-items-center'>
          {/* Picture */}
          <h2 className='header d-flex justify-content-end'>TRADING CARDS</h2>
          <img className='glow col-4 rounded border-color isabelline-bg p-3' src="src/components/About/Content/Collect.jpeg" alt="Collecting" />
          <div className='glow col-8'>
            <p className='my-0 p-3 isabelline-bg border-color rounded'>
              "My given name is Benjamin Buford Blue, but people call me Bubba. Just like one of them ol' redneck boys. Can you believe that?" - Bubba Buford
            </p>
          </div>
        </div>
        <hr />
        <div className='row d-flex align-items-center'>
          {/* Hobbies */}
          <h2 className='header d-flex justify-content-start'>AUDIO PRODUCTION</h2>
          <div className='glow col-8'>
            <p className='my-0 p-3 isabelline-bg border-color rounded'>
              "My given name is Benjamin Buford Blue, but people call me Bubba. Just like one of them ol' redneck boys. Can you believe that?" - Bubba Buford
            </p>
          </div>

          <div className='glow col-4 rounded border-color isabelline-bg p-3' controls>
            <iframe 
              src="https://www.youtube.com/embed/kfGsWrjX47U"
              width="100%"
              height="100%"
              title="Audio Production" 
              type='video/mp4'
              controls
              allowFullScreen
              />
          </div>
          {/* <video className='glow col-6 rounded border-color isabelline-bg p-3' controls>
            <source src='src/components/About/Content/AUTUMN VIDEO.mp4' type='video/mp4'/>
          </video> */}
        </div>  
    </section>
  );
};

export default About;