import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from '../home/Home'
// import About from '../home/about/About'
// import Projects from '../home/projects/Projects'
// import Contact from '../home/contact/Contact'


function Pages() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default Pages
