import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsMedium} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mohamed-mohamed96/" rel="noreferrer" target="_blank"><FaLinkedinIn/></a>
      <a href="https://github.com/mozeezy/personal_portfolio" rel="noreferrer" target="_blank"><FaGithub /></a>
      <a href="mailto: justmoe23@gmail.com" rel="noreferrer" target="_blank"><MdEmail /></a>
      <a href="https://medium.com/@codewithmoe23" rel="noreferrer" target="_blank"><BsMedium /></a>
    </div>
  )
}

export default HeaderSocials