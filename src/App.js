import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Menu from './component/Menu'
import './App.css';


const App = () => {
  return (
    <div className= "holder">
    <div className = "mainApp">
      <Header />
      <Menu />
      <Footer />
    </div>
    </div>
  )
}

export default App
