import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import techStackImage from '../assets/techstack.jpg'
import './TechStack.css'

const skillGroups = [
  { name: 'Frontend', skills: 'React, Redux, Next.js, TypeScript, JavaScript' },
  { name: 'Backend', skills: 'Node.js, Express, Nest.js, Python, Go' },
  { name: 'Database', skills: 'PostgreSQL, MongoDB, DynamoDB, Redis, Firebase' },
  { name: 'Cloud', skills: 'AWS, GCP, Vercel, Docker, Kubernetes' },
  { name: 'Dev Tools', skills: 'Git, Jenkins, GitHub Actions, CI/CD, Terraform' },
]

const TechStack = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('tech-stack--visible')
          observer.unobserve(section)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tech-stack" ref={sectionRef} className="tech-stack-section ">
      <div className="tech-stack-section__inner">
        <div className="tech-stack-section__copy">
          <p className="tech-stack-section__eyebrow">TOOLS I BUILD WITH</p>
          <h2>Tech Stack<span>.</span></h2>

          <div className="tech-stack-list">
            {skillGroups.map((group, index) => (
              <div className="tech-stack-group" key={group.name} style={{ '--group-index': index }}>
                <h3>{group.name}</h3>
                <span className="tech-stack-group__rule" aria-hidden="true" />
                <p>{group.skills}</p>
              </div>
            ))}
          </div>

          <div className="tech-stack-actions">
            <a className="tech-stack-action tech-stack-action--text" href="#about">
              View Experience <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="tech-stack-action tech-stack-action--primary" href="#contact">
              Let’s Build <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="tech-stack-section__visual">
          <img
            src={techStackImage}
            alt="Technology network diagram connecting React, Node.js, AWS, Docker, Kubernetes, and other tools"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default TechStack
