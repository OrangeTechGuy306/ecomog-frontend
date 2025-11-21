
import cars from "@/mock-data/cars.json"


const CarDetailsPage = () => {
    return (
        <div className='min-h-screen flex justify-center p-10'>
            <div className='flex-1 flex justify-center items-center'>
                <img src="/assets/about-img.png" alt="" className='md:w-[600px]' />
            </div>
            <div className='md:flex-1 flex flex-col gap-4'>
                <h1 className='text-xl text-gray-500'>General Details</h1>
                <div>
                    <h1 className='text-3xl'>{cars[0].brand}</h1>
                    <h1 className='text-3xl'>{cars[0].model}</h1>
                </div>
                <p>{cars[0].description}</p>
                <div className='flex items-center gap-3 flex-wrap'>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Doors:</h1>
                        <h1>{cars[0].doors}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Seats</h1>
                        <h1>{cars[0].doors}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Engine</h1>
                        <h1>{cars[0].engine}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Color</h1>
                        <h1>{cars[0].color}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Ambient lighting</h1>
                        <h1>{cars[0].ambientLighting}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Mileage</h1>
                        <h1>{cars[0].mileage}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Drive type</h1>
                        <h1>{cars[0].driveType}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Air condition</h1>
                        <h1>{cars[0].airConditioning}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Interior Material</h1>
                        <h1>{cars[0].interiorMaterial}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Transmission:</h1>
                        <h1>{cars[0].transmission}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Horse power:</h1>
                        <h1>{cars[0].horsepower}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Torque:</h1>
                        <h1>{cars[0].torque}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Top speed:</h1>
                        <h1>{cars[0].topSpeed}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Acceleration:</h1>
                        <h1>{cars[0].acceleration}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Fuel capacity:</h1>
                        <h1>{cars[0].fuelCapacity}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Sound system:</h1>
                        <h1>{cars[0].soundSystem}</h1>
                    </div>
                </div>

                <h1 className='text-xl text-gray-500'>Safety features</h1>
                <div className='flex items-center gap-3 flex-wrap'>
                    <div className='flex items-center gap-3 flex-wrap'>
                        <h1 className='font-bold'>Air bag</h1>
                        <h1>{cars[0].safetyFeatures.airbags}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Auto braking</h1>
                        <h1>{cars[0].safetyFeatures.automaticBraking === true ? 'Yes' : 'No'}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>Parking sensor</h1>
                        <h1>{cars[0].safetyFeatures.parkingSensors}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold'>blind spot monitoring</h1>
                        <h1>{cars[0].safetyFeatures.blindSpotMonitoring === true ? 'Yes' : 'No'}</h1>
                    </div>
                </div>

                <h1 className='text-xl text-gray-500'>Features</h1>
                <div className='flex items-center gap-3 flex-wrap'>
                    <div className='flex items-center gap-3 flex-wrap'>
                        {
                            cars[0].features.map((feature) => (
                                <h1 key={feature}>{feature}</h1>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CarDetailsPage