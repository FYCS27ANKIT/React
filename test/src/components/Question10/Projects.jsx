import React from 'react'
import bgImage1 from './images/wp2349410.jpg';
import bgImage2 from './images/12.jpg';
import bgImage3 from './images/15.jpg';

const Projects = () => {
  return (
    <div>
      <div className="container">
      <h3 className='text-center mt-4'>All Project</h3>
      <div className="row justify-content-center align-items-center g-5">
        <div class="col">
          <div class="card p-2">
            <img class="card-img-top" src={bgImage1} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">REM System</h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="row">
                <button className="col btn btn-primary mx-4">Preview</button>
                <button className="col btn btn-primary mx-4">GitHub</button>
              </div>
            </div>
          </div>
          
        </div>
        <div class="col">
        <div class="card p-2">
            <img class="card-img-top" src={bgImage2} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">Tamanche Pe Disco</h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="row">
                <button className="col btn btn-primary mx-4">Preview</button>
                <button className="col btn btn-primary mx-4">GitHub</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
        <div class="card p-2">
            <img class="card-img-top" src={bgImage3} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">Event Management</h4>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="row">
                <button className="col btn btn-primary mx-4">Preview</button>
                <button className="col btn btn-primary mx-4">GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div> 
    </div>
  )
}

export default Projects
