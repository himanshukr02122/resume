import React from 'react'

const Education = () => {
  return (
    <section className=''>
      <div className='container py-5 text-light'>
        <div className='row g-5'>
            <div className='col-md-6 '>
                <h2>Gaya College Gaya (Magadh University)</h2>
                <h5>Course: <span className='fw-normal fs-6'>Bsc. IT</span></h5>
                <h5>Session: <span className='fw-normal fs-6'>2017-2020</span></h5>
                <h5>Grade: <span className='fw-normal fs-6'>65%</span></h5>
                <h5>Project: <span className='fw-normal fs-6'>Health Administration System</span></h5>
                <h2 className='pt-5'>Project Details</h2>
                <p>This was a static and responsive website developed using HTML and CSS</p>
            </div>
            <div className='col-md-6'>
                <h2>Central University of South Bihar</h2>
                <h5>Course: <span className='fw-normal fs-6'>Msc. Computer Science</span></h5>
                <h5>Session: <span className='fw-normal fs-6'>2020-2022</span></h5>
                <h5>Grade: <span className='fw-normal fs-6'>6.5 CGPA</span></h5>
                <h5>Project: <span className='fw-normal fs-6'>CS Department</span></h5>
                <h2 className='pt-5'>Project Details</h2>
                <p>This is a dynamic website. I created responsive user's interface using HTML, CSS and JavaScript and php and mysql for backend.
                    In this website, I applied create operation using php so that users input can be saved in database.
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education;
