import React from 'react'
import './footer.css'
import {BiUpArrowCircle} from 'react-icons/bi'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer> 
      <a href="#" className="footer__logo"><BiUpArrowCircle /></a>
      <ul className="permalinks">
        <li><a href="#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#projects">Projects</a> </li>
        <li><a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohamed-mohamed96"><BsLinkedin/></a>
        <a href="https://github.com/mozeezy/personal_portfolio"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Mohamed Mohamed. All rights reserved. Created with ReactJS</small>
      </div>
    </footer>
  )
}

export default Footer