import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bg from '../assets/bg.png'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const rolesRef = useRef(null)
  const descriptionRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      intro
        .fromTo(heroRef.current, { backgroundSize: '110%' }, { backgroundSize: '100%', duration: 1.4, ease: 'power2.out' })
        .from(titleRef.current, { y: 55, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=1')
        .from(rolesRef.current.children, { y: 20, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' }, '-=0.35')
        .from(descriptionRef.current, { y: 30, opacity: 0, duration: 0.7, ease: 'power2.out' }, '-=0.35')

      gsap.to(heroRef.current, {
        backgroundPositionY: '65%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => context.revert()
  }, [])

  return (
    <div id="home" ref={heroRef} style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center h-screen flex justify-center ">
      <div className="container mt-[6pc]  lg:mt-[14pc] w-full lg:w-[85%]  border-black justify-between lg:flex-row flex-col flex ">
          <div className="left_side space-y-8  lg:w-[50%] w-full text-center lg:text-left">
              <h1 ref={titleRef} className="lg:text-7xl text-5xl font-bold tracking-tighter ">I build digital <br /> products from <br /> idea to launch.</h1>

              <div ref={rolesRef} className="flex flex-col md:flex-row space-x-3 text-2xl lg:justify-start justify-center items-center md:space-y-0 space-y-5">
                <h1>Full-Stack Developer</h1> <h2 className='hidden md:block '>|</h2> <h1>Web Applications</h1> <h2 className='hidden md:block '>|</h2> <h1>APIs & Cloud</h1>
              </div>
          </div>
          <div className="right_side  w-full text-center lg:text-start lg:w-[50%]">
       <div className="md:w-1/2 mx-auto   mt-[4pc]">
          <p ref={descriptionRef} className='text-xl tracking-tight'>I'm full-stack developer focused building fast, reliable and thoughtful digital experiences - from polished interfaces to scalable solutions backends and production infrastructure.</p>
       </div>
          </div>
      </div>
    </div>
  )
}

export default Hero
