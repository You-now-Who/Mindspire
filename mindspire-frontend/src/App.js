import React, {useEffect, useState} from 'react'

function App() {
  
  const [backendData, setBackendData] = useState([])

  useEffect(() => {
    fetch('/api')
      .then(data => {{
        setBackendData(data)
      }})
  }, [])

  return (
    <div>
      
      {/* {{(typeof backendData.users == 'undefined') ? 'Loading...' : backendData.users}} */}

    </div>
  )
}

export default App