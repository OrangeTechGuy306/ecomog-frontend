import { motion } from "motion/react"
import { Link } from "react-router-dom"
interface CarCardProps {
    brand: string
    model: string
    year: number
    src: string
    fuelType: string
    price: number
    href: string
}

const CarCard = ({ brand, model, year, src, fuelType, price, href }: CarCardProps) => {


    return (
        <Link to={href}>
            <motion.div
                className="bg-white rounded-md shadow p-4 h-[300px]"
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <div className="flex justify-between items-center rounded-md">
                    <div className="">
                        <h1 className="text-xl font-bold">{brand}</h1>
                        <h1 className="text-blue-500">{model}</h1>
                    </div>
                    <div>
                        <h1>{year}</h1>
                    </div>
                </div>
                <div className="h-[180px] flex justify-center items-center overflow-hidden">
                    <img src={src} alt="" width={200} />
                </div>
                <div className="flex justify-between items-center">
                    <button className="bg-blue-200 w-[100px] py-1 rounded md border-2 border-blue-400">{fuelType}</button>
                    <h1 className="text-2xl font-bold">&#8358;{Intl.NumberFormat().format(price)}</h1>
                </div>
            </motion.div>
        </Link>
    )
}

export default CarCard