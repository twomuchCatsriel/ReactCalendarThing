import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './navbar'
import Entry from './entry'

function App() {
  return(
    <div>
      <Navbar></Navbar>
      <Entry entryTitle="hi" description="hiiii"></Entry>
    </div>
  )
}

export default App
