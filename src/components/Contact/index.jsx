import React from 'react';

function Contact() {

  return (
    <section className="text container-fluid d-grid gap-5 rounded col-12">
        {/* Profile Picture */}
        {/* Space */}
        <div className='row justify-content-center'></div>    

        {/* <Portrait></Portrait> */}
        <div className='row d-flex align-items-center justify-content-center d-grid gap-3'>
          <div>
            <h2 className='header d-flex justify-content-start'>Name</h2>
            <input type="text" className='border rounded col-12'/>
          </div>

          <div>
            <h2 className='header d-flex justify-content-start'>Email</h2>
            <input type="text" className='border rounded col-12'/>
          </div>
          
          <div>
            <h2 className='header d-flex justify-content-start'>Message</h2>
            <textarea type="text" className='border rounded col-12'/>
          </div>

        {/* Space Between */}
          <div></div>
          <div></div>

          <button className='border rounded isabelline-bg'>SUBMIT</button>

        </div>
        <hr />
    </section>
  );
};

export default Contact;