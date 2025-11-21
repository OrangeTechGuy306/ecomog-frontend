import { motion } from "motion/react"


const CarEngineAdvertSection = () => {
    return (
        <div className='p-10 grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-10 flex-wrap'>

            <motion.div
                className='md:flex-1 flex-col flex gap-3'
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h1 className='text-2xl font-bold text-red-500 text-justify'>Power You Can Feel — Engines Built to Perform</h1>
                <p>At [Your Brand Name], every car we sell is built with precision-engineered engines designed to deliver unmatched performance, durability, and efficiency. Whether you’re cruising through the city or hitting the open highway, our cars give you the power, control, and smoothness you deserve.</p>
                <p>Our vehicles come equipped with modern, fuel-efficient engines that combine strength and reliability with eco-friendly technology. Experience faster acceleration, quieter rides, and engines that respond instantly to every push of the pedal.</p>
                <p>We don’t just sell cars — we deliver machines of pure power and confidence. From powerful V6 engines to economical hybrids, each engine is tested and trusted to provide long-lasting performance with low maintenance.</p>
                <p>Drive a car that’s more than just transportation — drive one that’s alive with power, innovation, and precision.</p>
                <h1 className='font-bold text-2xl'>Our cars don’t just move you — they move the world forward.</h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <img src="/assets/engine2.jpeg" alt="" className='' />
            </motion.div>
        </div>
    )
}

export default CarEngineAdvertSection