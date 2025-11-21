
import { CarServices } from '@/services/car-services'
import { useQuery } from '@tanstack/react-query'

import { useNavigate, useParams } from 'react-router-dom'



const CarInfoPage = () => {

    const navigate = useNavigate()

    const {id} = useParams()

    const {data, error, isError} = useQuery({
        queryKey: ['get-car'],
        queryFn: async()=> await CarServices.getCarById(String(id))
    })



    if(error || isError){
        return  navigate("/cars")
    }
    
  return (

        <div className='grid md:grid-cols-2 justify-center items-center min-h-[70vh] grid-cols-1 p-10'>
            <div className='flex justify-center items-center'>
                <img src={String(data?.image)} alt="" className='md:w-[500px]' />   
            </div>
            <div>
                <h1 className='md:text-4xl font-bold text-xl'>{data?.brand}</h1>
                <p className='text-red-500'>{data?.model}</p>
                <h1 className='text-xl font-bold'>&#8358;{Intl.NumberFormat().format(Number(data?.price))}</h1>
                <div className='flex items-center gap-4 flex-wrap'>
                    <p><span className='font-bold'>Year: </span> {data?.year}</p>
                    <p><span className='font-bold'>Colors: </span> {data?.color}</p>
                    <p><span className='font-bold'>Doors: </span>{data?.doors}</p>
                    <p><span className='font-bold'>Seats: </span>{data?.seats}</p>
                    <p><span className='font-bold'>Driving Type: </span>{data?.driveType}</p>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <p><span className='font-bold'>Fuel Type: </span>{data?.fuelType}</p>
                    <p><span className='font-bold'>Air Conditioning: </span>{data?.airConditioning}</p>
                    <p><span className='font-bold'>Warranty: </span>{data?.warranty}</p>
                </div>
                <h1 className='text-xl font-bold'>Other Features</h1>
                <div className=''>
                    <p>{data?.features}</p>
                </div>
              
            </div>
        </div>

  )
}

export default CarInfoPage