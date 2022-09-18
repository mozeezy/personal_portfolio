import React from 'react'
import './project.css'
import projects from '../../projects/projects'

const Project = () => {
  return (
    <section id="projects">
      <h5>Check out some of my</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {projects.map((project) => (
          <article key={project.id} className="project__item">
            <div className="project__item-image">
              <img src={project.image} alt={project.altText}/>
            </div>
            <h3> {project.title}</h3>
            <i className="text-light">{project.description}</i>
            <br />
            <div className="project__item-cta">

            <a href={project.githubURL} rel="noreferrer" target="_blank">Repo Link</a>
            {project.liveURL ? (<a href={project.liveURL} rel="noreferrer" target="_blank">Live Link</a>) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project