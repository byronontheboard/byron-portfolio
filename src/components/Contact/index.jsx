import React from 'react';

function Contact() {

  return (
    <section className="text container-fluid d-grid gap-5 rounded col-12">
        {/* Profile Picture */}
        {/* Space */}
        <div className='row justify-content-center'></div>    

        {/* <Portrait></Portrait> */}
        <div className='row d-flex align-items-center justify-content-center'>
          <h2 className='header d-flex justify-content-start'>Name</h2>

          <h2 className='header d-flex justify-content-start'>Email</h2>
          
          <h2 className='header d-flex justify-content-start'>Message</h2>
          
        </div>
        <hr />
    </section>
  );
};

export default Contact;