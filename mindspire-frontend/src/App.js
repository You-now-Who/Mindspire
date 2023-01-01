import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';


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
        <Routes>
        {/* <Route exact path="/" element={<Layout />}> */}
          <Route exact path='/' element={<Layout />} />
          <Route path='/main' element={<Main />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

