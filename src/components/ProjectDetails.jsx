import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from './projectData'
import './ProjectDetails.css'

const ProjectDetails = () => {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="project-detail project-detail--missing">
        <p className="project-detail__eyebrow">PROJECT NOT FOUND</p>
        <h1>This page is off the map.</h1>
        <Link to="/#projects" className="project-detail__back"><ArrowLeft size={17} /> Back to projects</Link>
      </main>
    )
  }

  return (
    <main className="project-detail">
      <div className="project-detail__orbit project-detail__orbit--one" aria-hidden="true" />
      <div className="project-detail__orbit project-detail__orbit--two" aria-hidden="true" />
      <div className="project-detail__shell">
        <Link to="/#projects" className="project-detail__back">
          <ArrowLeft size={17} aria-hidden="true" /> All projects
        </Link>

        <header className="project-detail__header">
          <p className="project-detail__eyebrow">SELECTED PROJECT <span>{project.number} / 03</span></p>
          <h1>{project.title}<span>.</span></h1>
          <p className="project-detail__type">{project.type} <span>—</span> {project.year}</p>
        </header>

        <section className="project-detail__overview" aria-labelledby="project-overview-heading">
          <div className="project-detail__copy">
            <p className="project-detail__eyebrow">THE OVERVIEW</p>
            <h2 id="project-overview-heading">Designed around the journey.</h2>
            <p>{project.description}</p>
            <ul className="project-detail__highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}><span aria-hidden="true" />{highlight}</li>
              ))}
            </ul>
            <Link className="project-detail__contact" to="/#contact">
              Let’s talk about your project <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="project-detail__visual" aria-label={`${project.title} project summary`}>
            <span className="project-detail__visual-orbit" aria-hidden="true" />
            <span className="project-detail__visual-orbit project-detail__visual-orbit--inner" aria-hidden="true" />
            <span className="project-detail__visual-dot" aria-hidden="true" />
            <span className="project-detail__visual-number">{project.number}</span>
            <span className="project-detail__visual-name">{project.title}</span>
            <span className="project-detail__visual-type">{project.type}</span>
          </div>
        </section>

        <div className="project-detail__footer">
          <span>More work, same curiosity.</span>
          <Link to="/#projects">Explore all projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetails
