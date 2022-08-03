import React from 'react'
import './about.css'
import {BsThreeDots} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5> Get To Know More</h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <p>
          Coming from a science background and after an unsuccessful bout of landing a job, I figured that it was time for a career switch. That is when I stumbled upon an opportunity to learn about software development and coding at Lighthouse Labs.
        </p>
        <br/>
        <BsThreeDots />
        <br />
        <p>Through my journey at Lighthouse Labs, I have built applications using various languages, libraries and tools such as JavaScript, HTML, CSS,SQL, Node.js, Express, React.js, jQuery, AJAX, PostgreSQL, and I am continuing to learn more. I'm currently enrolled in the Harvard CS50 course where I will be expanding on my coding skills!</p>
        <br />
        <BsThreeDots />
        <br />
        <p> Outside of coding I enjoy cooking, watching anime, listening to music, going to the gym, and reading. Some of my favorite animes are One Piece, Bleach, Fullmetal Alchemist, Slam Dunk, Food Wars, JoJo's Bizzare Adventures, and a lot more!
        </p>
        <br />
      </div>
    </section>
  )
}

export default About