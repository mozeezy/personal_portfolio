import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mohamed-mohamed96/" rel="noreferrer" target="_blank"><FaLinkedinIn/></a>
      <a href="https://www.github/mozeezy/" rel="noreferrer" target="_blank"><FaGithub /></a>
      <a href="mailto: justmoe23@gmail.com" rel="noreferrer" target="_blank"><MdEmail /></a>
    </div>
  )
}

export default HeaderSocials