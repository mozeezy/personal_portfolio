import React from 'react'
import './about.css'
import {BsThreeDots} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5> Get To Know More</h5>
      <h2> My Story</h2>

      <div className="container about__container">
        <p>
          My name is Mohamed and I am a full-stack web developer. Coming from a science background, I found a deep interest in web development and software engineering and took it upon myself to learn more about it. That is when I stumbled upon an opportunity to learn about software development and coding at Lighthouse Labs.
        </p>
        <br/>
        <BsThreeDots />
        <br />
        <p>Through my journey at Lighthouse Labs, I have built various web applications using various languages, libraries and tools such as JavaScript, HTML, CSS,SQL, Node.js, Express, React.js, jQuery, AJAX, PostgreSQL, and I am continuing to learn more. At the moment, I'm currently learning Python by following the #100DaysOfCode challenge and I'm planning to learn Java and AWS next! Very exciting!
        </p>
        <br />
        <BsThreeDots />
      </div>
    </section>
  )
}

export default About