import { motion } from "motion/react"

const AboutSection = () => {
    return (
        <div
            className='p-10 grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-10 flex-wrap bg-black shadow-xl'

        >
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <img src="/assets/range2.jpg" alt="" className='' />
            </motion.div>
            <motion.div
                className='md:flex-1 flex-col flex gap-3 text-white'
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h1 className='text-2xl font-bold text-red-500 text-justify'>About us</h1>
                <p>At Reliant Motors, we believe that every journey begins with trust. For over a decade, we’ve built our reputation on delivering reliable, high-performance vehicles that combine cutting-edge technology, comfort, and durability.</p>
                <p>Our mission is simple: to keep you moving with confidence. Whether you’re navigating busy city streets or exploring new destinations, our cars are engineered to perform seamlessly under all conditions.</p>
                <p>At Reliant Motors, we don’t just sell cars — we create lasting relationships. Each vehicle is meticulously tested and crafted with precision to ensure safety, efficiency, and peace of mind. With innovative design, superior engineering, and a commitment to sustainability, we’re redefining what reliability means in motion.</p>
                <h1 className='font-bold text-2xl'>Reliant Motors — Built to Last. Driven by You.</h1>
            </motion.div>
        </div>
    )
}

export default AboutSection