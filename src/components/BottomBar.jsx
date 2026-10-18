import file from '../assets/file-document.svg'
import mail from '../assets/mail-outline.svg'
import rightFill from '../assets/right-fill.svg'
import { Link } from 'react-router-dom'
const BottomBar = () => {
  return (
    <div className="hidden lg:fixed lg:block bottom-10 right-10 z-50 border-t bg-black text-white rounded-md overflow-hidden ">
      {/* list where resume  email and lets talk button */}
        <div className="flex justify-between items-center ">
          <a href="/resume.pdf" className="hover:underline flex py-4 px-6 border border-gray-500  "> <img src={file} alt="Resume" className="w-6 h-6 mr-2" /> Resume</a>
          <Link to="/#contact" className="hover:underline flex py-4 px-6 border  border-gray-500"> <img src={mail} alt="Email" className="w-6 h-6 mr-2" /> Email</Link>
          <Link to="/#contact" className="hover:underline flex py-4 px-6 border border-gray-500"> <img src={rightFill} alt="Let's Talk" className="w-6 h-6 bg-[#C3EB18] rounded-full mr-2 " />  Let's Talk</Link>
        </div>
    </div>
  )
}

export default BottomBar
