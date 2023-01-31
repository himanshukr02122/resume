import React from 'react'

const Career = () => {
  return (
    <section>
      <div className='container py-5 text-light'>
        <h2 className='text-center fs-1 pb-5 fw-normal text-decoration-underline'>Jobs/Internships</h2>
        <div className='row g-5'>
            <div className='col-md-6 '>
                <h2>GMDA (Gurugram Metropolitan Development Authority), Gurugram</h2>
                <h5>Position: <span className='fw-normal fs-6'>Frontend Developer Intern</span></h5>
                <h5>Duration: <span className='fw-normal fs-6'>7 Jan 2022 - 19 May 2022</span></h5>
                <h5>Project: <span className='fw-normal fs-6'>Blue Coverage website (Swimming Pool, Water Bodies and Water Park)</span></h5>
                <h2 className='pt-5'>Project Details</h2>
                <p>This was a dynamic web application. I created responsive user's interface using HTML, CSS, 
                Bootstrap and JavaScript. I introduced with POSTMAN Software and RESTful API. I consumed RESTful 
                APIs in my web application for various purposes and I also used JSON Web Token for Authentication.</p>
            </div>
            <div className='col-md-6'>
                <h2>Earning Designs Private Limited, Bangalore</h2>
                <h5>Position: <span className='fw-normal fs-6'>Jr. UI Developer</span></h5>
                <h5>Duration: <span className='fw-normal fs-6'>13 June 2022 - Present</span></h5>
                <h5>Responsibility:</h5> 
                <ul className='fw-normal fs-6 ps-3'>
                  <li>creating responsive user's interface of websites and web application using latest technologies
                  like react.js, next.js, tailwind css, sass, bootstrap.</li>
                  <li>creating responsive user's interface of websites using pug, gulp and sass.</li>
                  <li>making cross browser compatible websites and web applications.</li>
                  <li>writing optimized code for better performance of websites and web applications.</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Career
