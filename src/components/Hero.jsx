import React from 'react'
import bg from '../assets/bg.png'
const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center h-screen flex justify-center ">
      <div className="container  mt-[14pc] w-full lg:w-[85%]  border-black justify-between lg:flex-row flex-col flex ">
          <div className="left_side space-y-8  lg:w-[50%] w-full text-center lg:text-left">
              <h1 className="lg:text-7xl text-5xl font-bold tracking-tighter ">I build digital <br /> products from <br /> idea to launch.</h1>

              <div className="flex flex-col md:flex-row space-x-3 text-2xl lg:justify-start justify-center items-center md:space-y-0 space-y-5">
                <h1>Full-Stack Developer</h1> <h2 className='hidden md:block '>|</h2> <h1>Web Applications</h1> <h2 className='hidden md:block '>|</h2> <h1>APIs & Cloud</h1>
              </div>
          </div>
          <div className="right_side  w-full lg:w-[50%]">
       <div className="lg:w-1/2 mx-auto mt-[4pc]">
            <p className='text-xl tracking-tight'>I'm full-stack developer focused building fast, reliable and thoughtful digital experiences - from polished interfaces to scalable solutions backends and production infrastructure.</p>
       </div>
          </div>
      </div>
    </div>
  )
}

export default Hero
