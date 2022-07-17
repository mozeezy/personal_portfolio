import React from 'react'
import './header.css'
import CTA from './CTA'
import HEADERIMG from '../../assets/header-img.jpeg'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1> Mohamed Mohamed</h1>
        <h5 className="text_light"> Fullstack Web Developer</h5>
        <CTA />

        <div className="header-img">
          <img src={HEADERIMG} alt="HEADERIMG" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header