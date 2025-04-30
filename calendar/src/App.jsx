import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './navbar'
import Entries from './entries'

function App() {
  return(
    <div>
      <Navbar></Navbar>
      <Entries name="June 7th, 2025" description="Celebrate birthday with Family"></Entries>
    </div>
  )
}

export default App
