import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Courses from './components/Courses';


function App() {

  // const [backendData, setBackendData] = useState([])

  // useEffect(() => {
  //   fetch('/api')
  //     .then(data => {
  //       {
  //         setBackendData(data)
  //       }
  //     })
  // }, [])

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <Routes>
        {/* <Route path="/" element={<Navbar />}> */}
          <Route exact path='/' element={<Home />} />
          <Route path='main' element={<Main />} />
          <Route path='login' element={<LogIn />} />
          <Route path='courses' element={<Courses />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App

