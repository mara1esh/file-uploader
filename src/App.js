import React, { useState } from 'react'
import './App.css'
import UploadForm from './components/UploadForm'
import List from './components/List'
//import Status from './Status'

const App = () => {
  const [paths, setPaths] = useState([])
  //const [status, setStatus] = useState('')

  const Update = path => {
    if (path) {
      //setStatus('OK')
      setPaths([...paths, path])
    }
    //else
    //setStatus('Failure')

  }
  return (
    <div className="container wrapper">
      <UploadForm onUpdate={Update} />
      <List data={paths} />
    </div>
  )
}

export default App

//<Status text = { status }/>