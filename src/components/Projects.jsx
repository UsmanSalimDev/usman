import { useEffect, useRef } from 'react'
import { ArrowUpRight, KeyRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from './projectData'
import './Projects.css'

function PhonePreview() {
  return (
    <div className="project-phone" aria-label="Voyage ride booking app preview">
      <div className="project-phone__screen">
        <div className="project-phone__status">
          <span>9:41</span>
          <span aria-hidden="true">● ▰</span>
        </div>
        <div className="project-phone__map" aria-hidden="true">
          <svg viewBox="0 0 180 225" role="presentation">
            <path className="project-map-road" d="M-8 42 58 78 88 24 142 50 191 20M-6 142 44 116 78 159 132 116 187 147M34-8 48 62 29 113 56 180 38 235M124-8 108 62 142 99 123 158 153 235" />
            <path className="project-map-route" d="M46 151 72 126 88 99 113 82 132 54" />
            <circle className="project-map-point" cx="46" cy="151" r="7" />
            <circle className="project-map-point project-map-point--end" cx="132" cy="54" r="8" />
          </svg>
          <span className="project-phone__map-label">YOUR ROUTE</span>
        </div>
        <div className="project-phone__trip">
          <div className="project-phone__trip-heading">
            <span className="project-phone__avatar">M</span>
            <span><strong>Meet Maya</strong><small>Driver arriving</small></span>
            <span className="project-phone__eta">3 min</span>
          </div>
          <div className="project-phone__trip-line"><span />Pickup location <b>4:20 PM</b></div>
          <div className="project-phone__trip-line"><span />Destination <b>4:38 PM</b></div>
          <div className="project-phone__button">Track your ride</div>
        </div>
      </div>
      <span className="project-phone__notch" aria-hidden="true" />
    </div>
  )
}

function useProjectReveal() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const elements = section.querySelectorAll('[data-project-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return sectionRef
}

const Projects = () => {
  const sectionRef = useProjectReveal()
  const [featured, ...otherProjects] = projects

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div className="projects-orbit projects-orbit--one" aria-hidden="true" />
      <div className="projects-orbit projects-orbit--two" aria-hidden="true" />
      <div className="projects-orbit projects-orbit--three" aria-hidden="true" />
      <div className="projects-dot projects-dot--one" aria-hidden="true" />
      <div className="projects-dot projects-dot--two" aria-hidden="true" />
      <div className="projects-dot projects-dot--three" aria-hidden="true" />

      <div className="projects-shell">
        <div className="projects-heading" data-project-reveal>
          <p className="projects-eyebrow">Selected work <span>2024 — 2026</span></p>
          <h2>Projects<span>.</span></h2>
          <p className="projects-heading__note">A few things I’ve had the pleasure of bringing to life.</p>
        </div>

        <article className="project-featured" data-project-reveal>
          <div className="project-featured__content">
            <div className="project-progress" aria-label="Project 1 of 3">
              <span /><i /><i />
            </div>
            <p className="project-kicker">{featured.number} / {featured.type}</p>
            <h3>{featured.title}<br />{featured.type}</h3>
            <p className="project-description">{featured.description}</p>
            <ul className="project-highlights">
              {featured.highlights.map((highlight) => (
                <li key={highlight}><span aria-hidden="true" />{highlight}</li>
              ))}
            </ul>
            <div className="project-featured__footer">
              <div className="project-progress project-progress--footer" aria-hidden="true">
                <span /><i /><i />
              </div>
              <Link className="project-details-link" to={`/projects/${featured.slug}`}>
                Details <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
              <a className="project-connect" href="#contact">
                <span className="project-connect__icon"><KeyRound size={18} aria-hidden="true" /></span>
                Let’s Connect
              </a>
            </div>
          </div>
          <div className="project-featured__visual">
            <span className="project-visual-ring project-visual-ring--one" aria-hidden="true" />
            <span className="project-visual-ring project-visual-ring--two" aria-hidden="true" />
            <PhonePreview />
          </div>
        </article>

        <div className="project-grid">
          {otherProjects.map((project) => (
            <article className="project-card" key={project.slug} data-project-reveal>
              <div className="project-card__top">
                <span>{project.number} / {project.type}</span>
                <Link to={`/projects/${project.slug}`} aria-label={`View details for ${project.title}`}>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </Link>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__bottom">
                <span>{project.year}</span>
                <Link to={`/projects/${project.slug}`}>Explore project <ArrowUpRight size={15} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
