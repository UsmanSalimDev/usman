import { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import BottomBar from './components/BottomBar'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectDetails from './components/ProjectDetails'
import Footer from './components/Footer'

const App = () => {
  const location = useLocation()
  const footerRef = useRef(null)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [isHomeVisible, setIsHomeVisible] = useState(false)

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      setIsFooterVisible(entry.isIntersecting)
    })

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let observer
    const frame = requestAnimationFrame(() => {
      const homeSection = document.getElementById('home')
      if (!homeSection) {
        setIsHomeVisible(false)
        return
      }

      observer = new IntersectionObserver(([entry]) => {
        setIsHomeVisible(entry.isIntersecting)
      })

      observer.observe(homeSection)
    })

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [location.pathname])

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (location.hash) {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    })

    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return (
    <div>
      <Navbar />
      {location.pathname === '/' && isHomeVisible && !isFooterVisible && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <AboutMe />
              <TechStack />
              <Projects />
              <Contact />
            </main>
          }
        />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<ProjectDetails />} />
      </Routes>
      {!isFooterVisible && <BottomBar />}
      <Footer footerRef={footerRef} />
    </div>
  )
}

export default App
