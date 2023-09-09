import React from 'react';
import resume from './Resume/Resume-2023.pdf'

function Resume() {

  return (
    <section className="text container-fluid d-grid gap-5 rounded col-12">
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

      {/* Education */}
      <div className='row d-flex align-items-center justify-content-center'>
        <h2 className='header d-flex justify-content-end'>EDUCATION</h2>
      </div>
      {/* University of California Davis Full-Stack Developer Cetification */}
      <div className='row d-flex align-items-center my-0 p-3 isabelline-bg border-color rounded'>
        <h2 className='header d-flex justify-content-start'>University of California Davis</h2>
        <p className='header d-flex justify-content-start'>Full-Stack Developer Certification</p>
        <p className='header d-flex justify-content-start'>March 2023-September 2023</p>
      </div>
      {/* Sacramento City College */}
      <div className='row d-flex align-items-center my-0 p-3 isabelline-bg border-color rounded'>
        <h2 className='header d-flex justify-content-startd'>Sacramento City College</h2>
        <p className='header d-flex justify-content-start'>Associate in Commercial Music, Audio Production</p>
        <p className='header d-flex justify-content-start'>August 2020-December 2022</p>
      </div>
      {/* Solano Community College */}
      <div className='row d-flex align-items-center my-0 p-3 isabelline-bg border-color rounded'>
        <h2 className='header d-flex justify-content-start'>Solano Community College</h2>
        <p className='header d-flex justify-content-start'>Associates of Arts & Sciences Degree Liberal Arts</p>
        <p className='header d-flex justify-content-start'>August 2018-July 2019</p>
      </div>
      <hr />

      {/* Employment */}
      <div className='row d-flex align-items-center justify-content-center'>
        <h2 className='header d-flex justify-content-start'>EXPERIENCE</h2>
      </div>
      {/* Sprouts */}
      <div className='row d-flex align-items-center'>
        <h2 className='header d-flex justify-content-end'>Sprout's Farmers Market</h2>
        <p className='header d-flex justify-content-end'>Assistant Deli Manager | June 2023-Present</p>
        <p className='header d-flex justify-content-end'>Senior Deli Clerk | February 2023-June 2023</p>
        <div className='glow col-12'>
          <p className='my-0 p-3 isabelline-bg border-color rounded'>
            Facilitating informed consumer choices through exemplary customer service. 
            Responsible for ordering and inventory management, ensuring product quality, 
            while supervising the Deli team and training new personnel.
          </p>
        </div>
      </div>
      {/* DoorDash */}
      <div className='row d-flex align-items-center'>
        <h2 className='header d-flex justify-content-end'>DoorDash</h2>
        <p className='header d-flex justify-content-end'>Independent Contractor | July 2021-January 2022</p>
        <div className='glow col-12'>
          <p className='my-0 p-3 isabelline-bg border-color rounded'>
          Efficiently collecting and delivering customer orders, 
          coupled with exceptional customer service and ensuring a timely order fulfillment.
          </p>
        </div>
      </div>
      {/* Okashi Fusion */}
      <div className='row d-flex align-items-center'>
        <h2 className='header d-flex justify-content-end'>Okashi Fusion</h2>
        <p className='header d-flex justify-content-end'>Shift Lead | March 2017-January 2020</p>
        <div className='glow col-12'>
          <p className='my-0 p-3 isabelline-bg border-color rounded'>
            Supervising store operations to uphold high standards, managing inventory procurement and delivery logistics. 
            Scheduling and facilitating employee breaks, 
            while overseeing financial transactions and monitoring food preparation.
          </p>
        </div>
      </div>

      <hr />

      <a className='' href={resume} download="Resume-2023.pdf">
        Download My Resume
      </a>
  
      <hr />
    </section>
  );
};

export default Resume;