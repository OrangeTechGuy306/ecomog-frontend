import { Car } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white flex gap-5 justify-between items-center md:px-10 px-2 py-3">
      <div className="flex items-center gap-5">
        <Link to={'/'} className="text-white md:text-xl rounded-md py-1 px-4 flex items-center gap-3 font-bold">
          <img src="/assets/logo.png" alt="" width={50}/>
          <span>Ecomog Autos</span>
        </Link>
        <Link to={'/cars'} className="text-whit flex items-center gap-1"><Car /><span>Explore</span></Link>
      </div>

      <div className="flex items-center gap-2">
        {/* <h1 className="font-bold">Make Enquiry;</h1> */}
        <a href="tel:+2348060091478" className="md:text-xl font-bold">
          +23480 6009 1478
        </a>
      </div>
    </nav>
  )
}

export default Navbar