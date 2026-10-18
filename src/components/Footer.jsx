import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import github from '../assets/github.svg'
import './Footer.css'

const footerLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'About', to: '/#about' },
  { label: 'Tech Stack', to: '/#tech-stack' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' },
]

const Footer = ({ footerRef }) => (
  <footer ref={footerRef} className="site-footer">
    <div className="site-footer__inner">
      <div className="site-footer__top">
        <Link to="/#home" className="site-footer__brand" aria-label="Back to home">
          Usman<span>.</span>
        </Link>
        <p>Thoughtful digital experiences, built with care.</p>
        <a
          className="site-footer__social"
          href="https://github.com/UsmanSalimDev"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Usman on GitHub (opens in a new tab)"
        >
          <img src={github} alt="" aria-hidden="true" />
          GitHub
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Usman Salim. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.to}>{link.label}</Link>
          ))}
        </nav>
        <a className="site-footer__top-link" href="#home">Back to top ↑</a>
      </div>
    </div>
  </footer>
)

export default Footer
