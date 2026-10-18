import AboutImg from '../assets/aboutImg.png'
import { useEffect, useRef, useState } from 'react'

const AboutMe = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex min-h-screen items-center overflow-hidden bg-[#F7FAF3] py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto flex w-[92%] flex-col items-center gap-10 lg:flex-row lg:gap-16">
        <div className="left_side w-full space-y-5 sm:space-y-6 lg:w-1/2 lg:pl-5">
          <h1
            style={{ transitionDelay: '0ms' }}
            className={`text-[clamp(3.5rem,10vw,8rem)] font-bold leading-none tracking-tighter text-[#222630] transition-all duration-700 ease-out motion-reduce:transition-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            About Me
          </h1>
          <p
            style={{ transitionDelay: '150ms' }}
            className={`text-base font-semibold leading-relaxed transition-all duration-700 ease-out motion-reduce:transition-none sm:text-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            I'm a full-stack developer with a keen eye for detail and a love for creating intuitive, user-friendly applications. With a strong foundation in both frontend and backend technologies, I thrive on turning complex problems into simple, beautiful solutions.
          </p>
          <p
            style={{ transitionDelay: '300ms' }}
            className={`text-base font-semibold leading-relaxed transition-all duration-700 ease-out motion-reduce:transition-none sm:text-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            My passion lies in building complex web applications that provide exceptional user experiences. I ensure every project meets the highest standards of quality and performance.
          </p>
          <p
            style={{ transitionDelay: '450ms' }}
            className={`text-base font-semibold leading-relaxed transition-all duration-700 ease-out motion-reduce:transition-none sm:text-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            Currently based in Islamabad, Pakistan, but working globally.
          </p>

          <div
            style={{ transitionDelay: '600ms' }}
            className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-2 pt-2 text-center text-lg transition-all duration-700 ease-out motion-reduce:transition-none sm:text-xl lg:justify-start lg:text-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          >
            <span>Full-Stack Developer</span>
            <span aria-hidden="true" className="hidden md:inline">|</span>
            <span>Web Applications</span>
            <span aria-hidden="true" className="hidden md:inline">|</span>
            <span>APIs &amp; Cloud</span>
          </div>
        </div>
        <div
          style={{ transitionDelay: '250ms' }}
          className={`right_side w-full transition-all duration-1000 ease-out motion-reduce:transition-none lg:w-1/2 ${isVisible ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-6 scale-95 opacity-0'}`}
        >
          <img
            src={AboutImg}
            alt="About Me"
            className="mx-auto h-auto w-full max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
