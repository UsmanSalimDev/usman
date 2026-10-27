
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import whatsapp from '../assets/baseline-whatsapp.svg'
const Sidebar = () => {
  return (
    <div className="hidden md:fixed md:flex top-[20%] left-0 w-22 h-[70%] border-r-2 z-50">
      <div className="container mx-auto py-3 flex justify-center items-center pt-10">
        <div className="flex flex-col items-center justify-center space-y-7">
       <a href="https://github.com/UsmanSalimDev" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <img src={github} alt="GitHub" className='w-8 h-8' />
          </a>
          <div className="rotate-90 flex justify-center items-center mt-5">
            <a href="https://github.com/UsmanSalimDev" target="_blank" rel="noreferrer">Github</a>
          </div>
          <div className="w-px h-9 bg-black" aria-hidden="true" />
          <a href="https://www.linkedin.com/in/usmansalim5" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <img src={linkedin} alt="LinkedIn" className='w-8 h-8 ' />
          </a>
          <div className="rotate-90 flex justify-center items-center mt-4">
            <a href="https://www.linkedin.com/in/usmansalim5" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="w-px h-9 bg-black" aria-hidden="true" />
          <a href="https://wa.me/923275835635" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
            <img src={whatsapp} alt="WhatsApp" className='w-8 h-8 ' />
          </a>
          <div className="rotate-90 flex justify-center items-center mt-8">
            <a href="https://wa.me/923275835635" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
