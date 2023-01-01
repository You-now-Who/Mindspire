import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Skills from './components/Skills';

let login = false

function App({login}) {

  // const [login, setLogin] = useState([false])
  
  console.log(login)
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
      <Navbar login={{login}} />
        <Routes>
        {/* <Route path="/" element={<Navbar />}> */}
          <Route exact path='main' element={<Home />} />
          {/* <Route path='main' element={<Main />} /> */}
          <Route path='login' element={<LogIn login={{login}}/>} />
          <Route path='courses' element={<Courses />} />
          <Route path='skills' element={<Skills />} />
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

