import React from 'react';

function Resume() {

  return (
    <section className="text container-fluid d-grid gap-5 rounded col-12">
        {/* Profile Picture */}
        {/* Space */}
        <div className='row justify-content-center'></div>    

        {/* Profile */}
        
        <div className='row d-flex align-items-center justify-content-center'>
          <h2 className='header d-flex justify-content-start'>PROFILE</h2>
          <div className='glow col-10'>
            <p className='my-0 p-3 isabelline-bg border-color rounded'>
            Throughout my educational and professional journey, 
            I have steadily advanced, accumulating a wealth of experiences that have honed my expertise. 
            These experiences have cultivated and refined essential skills, 
            including creativity, teamwork, exemplary customer service, 
            punctuality, and adept interpersonal communication.
            <br />
            <br />
            With this diverse set of skills, I am confident that I can make a valuable contribution to your team. 
            I am dedicated to fostering a positive and healthy work environment, 
            all while ensuring the utmost satisfaction of our valued customers 
            by delivering diligent and exceptional service tailored to their specific needs.
              {/* Draft */}
              {/* Over the years of my education and work, I have progressed through experiences that have allowed myself to acquire key skills 
              such as creativity, teamwork, customer service, punctuality, and interpersonal communication. 
              With this, I believe I can be a beneficial member to your workforce, promoting a healthy work environment, 
              while also providing customers with the diligent service that they may require for their projects. */}
            </p>
          </div>
        </div>
        <hr />
        <div className='row d-flex align-items-center justify-content-center'>
          <h2 className='header d-flex justify-content-start'>EMPLOYMENT</h2>
        </div>
        {/* Sprouts */}
        <div className='row d-flex align-items-center'>
          <h2 className='header d-flex justify-content-end'>Sprout's Farmers Market</h2>
          <p className='header d-flex justify-content-end'>Assistant Deli Manager | June 2023-Present</p>
          <p className='header d-flex justify-content-end'>Senior Deli Clerk | February 2023-June 2023</p>
          <div className='glow col-12'>
            <p className='my-0 p-3 isabelline-bg border-color rounded'>
            When I'm not with my family or partner, 
            my time is often devoted to caring for my child, Keyana.
            </p>
          </div>
        </div>
        <hr />
        {/* DoorDash */}
        <div className='row d-flex align-items-center'>
          <h2 className='header d-flex justify-content-end'>DoorDash</h2>
          <p className='header d-flex justify-content-end'>Independent Contractor | July 2021-January 2020</p>
          <div className='glow col-12'>
            <p className='my-0 p-3 isabelline-bg border-color rounded'>
            When I'm not with my family or partner, 
            my time is often devoted to caring for my child, Keyana.
            </p>
          </div>
        </div>
        {/* Okashi Fusion */}
        <div className='row d-flex align-items-center'>
          <h2 className='header d-flex justify-content-end'>Okashi Fusion</h2>
          <p className='header d-flex justify-content-end'>Shift Lead | March 2017-January 2020</p>
          <div className='glow col-12'>
            <p className='my-0 p-3 isabelline-bg border-color rounded'>
            When I'm not with my family or partner, 
            my time is often devoted to caring for my child, Keyana.
            </p>
          </div>
        </div>
        <hr />
    </section>
  );
};

export default Resume;