import React from 'react'
import CV from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href= {CV} rel="noreferrer" target="_blank" className='btn'>Browse My Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA