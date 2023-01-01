import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
  return (
    <div className="Layout">
    {/* <Navbar /> */}

    {/* CAROUSEL */}
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="img-fluid h-100 w-100" src="img/carousel-1.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ 'background': 'rgba(24, 29, 56, .7)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                  <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                  <p className="fs-5 text-white mb-4 pb-2">Are you looking to learn something new in the new year? Look no further. Our platform offers a wide range of courses in various subjects, taught by expert instructors.</p>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="img-fluid h-100 w-100" src="img/carousel-2.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ 'background': 'rgba(24, 29, 56, .7)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                  <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                  <p className="fs-5 text-white mb-4 pb-2">Are you looking to learn something new in the new year? Look no further. Our platform offers a wide range of courses in various subjects, taught by expert instructors.</p>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    {/* Services */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                <h5 className="mb-3">Skilled Instructors</h5>
                <p>We have best team of educators to teach you</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                <h5 className="mb-3">Online Classes</h5>
                <p>Get the best classes from top tutors here</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-home text-primary mb-4"></i>
                <h5 className="mb-3">Home Projects</h5>
                <p>Build on your own</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                <h5 className="mb-3">Book Library</h5>
                <p>Best resources will be provided</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Service End */}

    {/* ABOUT */}

    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ "minHeight": "400px" }}>
            <div className="position-relative h-100">
              <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{ "objectFit": "cover" }} />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
            <h1 className="mb-4">Welcome to Mindspire</h1>
            <p className="mb-4">Our courses are fully online, so you can learn at your own pace and on your own schedule. </p>
            <p className="mb-4">Plus, with our interactive course materials and forums, you'll have the support of a community of learners just like you.</p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
          </div>
        </div>
      </div>
    </div>

    {/* TEAM */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Team</h6>
          <h1 className="mb-5">Our Team</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item bg-light">
              <div className="overflow-hidden">
                <img className="img-fluid" src="https://media.discordapp.net/attachments/1051163066538151946/1051402233222266991/image.png" alt="" />
              </div>
              {/* <div className="position-relative d-flex justify-content-center" style={{"marginTop": "-23px"}}>
                        <div className="bg-light d-flex justify-content-center pt-2 px-1">
                            <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div> */}
              <div className="text-center p-4">
                <h5 className="mb-0">Yash Yadav</h5>
                <small>Harry Potter guy</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light">
              <div className="overflow-hidden">
                <img className="img-fluid" src="https://media.discordapp.net/attachments/1051163066538151946/1051444838698061844/image.png" alt="" />
              </div>
              {/* <div className="position-relative d-flex justify-content-center" style={{"marginTop": "-23px"}}>
                        <div className="bg-light d-flex justify-content-center pt-2 px-1">
                            <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div> */}
              <div className="text-center p-4">
                <h5 className="mb-0">Alvin Philips</h5>
                <small>Noodles Enthusiast</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item bg-light">
              <div className="overflow-hidden">
                <img className="img-fluid" src="https://media.discordapp.net/attachments/1018562161896849500/1059007870261268510/Please_wait.png" alt="" />
              </div>
              {/* <div className="position-relative d-flex justify-content-center" style={{"marginTop": "-23px"}}>
                        <div className="bg-light d-flex justify-content-center pt-2 px-1">
                            <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div> */}
              <div className="text-center p-4">
                <h5 className="mb-0">Ashish Malla</h5>
                <small>Meow ninja boy</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <Footer /> */}
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  </div>
  )
}

export default Home
