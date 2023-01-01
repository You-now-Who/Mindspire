import React from 'react'

function Courses() {
  return (
    <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                    <h1 className="mb-5">All Courses</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="img/course-1.jpg" alt=""/>
                                    {/* <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{"border-radius": "30px 0 0 30px"}}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{"border-radius": "0 30px 30px 0"}}>Join Now</a>
                                    </div> */}
                            </div>
                            <div className="text-center p-4 pb-0">
                                <a href="#" className="flex-shrink-0 btn btn-primary px-3 mt-3 mb-2 border-end" style={{"borderRadius": "50px 50px 50px 50px"}}>Read More</a>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small>(15,251)</small>
                                </div>
                                <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                            </div>
                            <div className="d-flex border-top">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="img/course-2.jpg" alt=""/>
                                    {/* <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{"border-radius": "30px 0 0 30px"}}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{"border-radius": "0 30px 30px 0"}}>Join Now</a>
                                    </div> */}
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">$149.00</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                            </div>
                            <div className="d-flex border-top">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="img/course-3.jpg" alt=""/>
                                    {/* <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{"border-radius": "30px 0 0 30px"}}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{"border-radius": "0 30px 30px 0"}}>Join Now</a>
                                    </div> */}
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">$149.00</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                            </div>
                            <div className="d-flex border-top">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Courses