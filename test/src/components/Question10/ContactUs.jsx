import React from 'react'
import bgImage from './image.jpg';
import './style.css'

const ContactUs = () => {
  const backgroundStyle = {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '90vh',
      width: '100%',
    };
  return (
    <div className="w-100 p-1 d-flex align-items-center justify-content-center" style={backgroundStyle}>
      <div class="card card-contact shadow px-4 py-3">
        <h4 className='text-center'>Contact Us </h4>
        <form action="">
          <div class="mb-3">
            <label for="" class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder=""
            />
          </div>
          <div
            class="row justify-content-center align-items-center g-4"
          >
            <div class="col col-xsm-12">
              <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="emailHelpId"
                  placeholder=""
                />
              </div>
            </div>
            <div class="col col-xsm-12">
            <div class="mb-3">
            <label for="" class="form-label">Phone Number</label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder=""
            />
            </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Subject</label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder=""
            />
          </div>
            <div class="mb-3">
              <label for="" class="form-label">Query</label>
              <textarea class="form-control" name="" id="" rows="4"></textarea>
            </div>
            <div
              class="row justify-content-center align-items-center g-5"
            >
              <div class="col col-xsm-12">
                <button
                  type="submit"
                  class="btn btn-primary w-100"
                >
                  Send Message
                </button>
                
                </div>
              <div class="col col-xsm-12">
                <button
                  type="reset"
                  class="btn btn-primary w-100"
                >
                  Reset
                </button>
                
              </div>
            </div>
            
        </form>
      </div>
    </div>
  )
}

export default ContactUs
