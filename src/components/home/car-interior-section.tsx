import { motion } from "motion/react"


const CarInteriorSection = () => {
    return (
        <div className='p-10 grid md:grid-cols-2 sm:grid-cols-1 justify-center bg-black text-white items-center gap-10 flex-wrap'>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <img src="/assets/interior.jpg" alt="" className='' />
            </motion.div>

            <motion.div
                className='md:flex-1 flex-col flex gap-3'
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h1 className='text-2xl font-bold text-red-500 text-justify'>Step Inside — Where Comfort Meets Class.</h1>
                <p>Our car interiors are crafted with precision, elegance, and comfort in mind. From premium leather seats to advanced climate control, every detail is designed to make your journey as luxurious as your destination. Experience fine craftsmanship, soft-touch materials, and an atmosphere that redefines sophistication.</p>
                <h1 className='font-bold text-2xl'>Sit back. Relax. Enjoy the drive in pure comfort.</h1>
            </motion.div>
        </div>
    )
}

export default CarInteriorSection