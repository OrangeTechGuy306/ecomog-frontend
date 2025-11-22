import { useNavigate } from "react-router-dom"
// import { Button } from "../ui/button"
import { motion } from "motion/react"

const HeroSection = () => {

  const navigate = useNavigate()

  const gotoCars = ()=>{
    navigate('/cars')
  }

  return (
    <div>
         <div className='hero-section min-h-[80vh] flex justify-around items-center  bg-cover bg-center gap-5 relative flex-wrap'>

            <motion.div
              initial={{opacity: 0, x: -200}}
              whileInView={{opacity: 1, x:0}}
              transition={{duration: 0.5, delay: 0.5 }}
              className='flex flex-col gap-4 p-5' style={{position: 'inherit', zIndex: 10}}>
                <p className='text-white text-xl'>Drive Your Dream car today.</p>
                <h1 className='md:text-5xl text-3xl text-white'>
                    Experience the joy of driving excellence. <br /> Discover premium cars from  verified <br /> dealers at unbeatable prices.
                </h1>
                <motion.button 
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.98}}
                     className='bg-red-500 text-white cursor-pointer w-[max-content] py-2 px-4 rounded-md' 
                     onClick={gotoCars}>
                      Browse available cars
                </motion.button>
            </motion.div>
            
            <div></div>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-950 '></div>
        </div>   
    </div>
  )
}

export default HeroSection