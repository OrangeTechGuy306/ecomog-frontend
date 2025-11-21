import CarCard from "@/components/card"
// import { Checkbox } from "@/components/ui/checkbox"
import { CarServices } from "@/services/car-services"
import { useQuery } from "@tanstack/react-query"

const CarsPage = () => {

    // const brands = [
    //     "mazda",
    //     "Tesla",
    //     "Toyota",
    //     "Benz",
    // ]

    // const prices = [
    //     "expensive",
    //     "Avoidable"
    // ]

    // const models = [
    //     "camry",
    //     'Lexus S34'
    // ]

    const {data, error, isError, isLoading} = useQuery({
        queryKey: ['get-cars'],
        queryFn: async()=> await CarServices.getAllCars()
    })



    if(error || isError){
        return  <div className="min-h-screen flex justify-center items-center"><h1>Error Fetching cars</h1></div>
    }

    if(isLoading){
         return  <div className="min-h-screen flex justify-center items-center">
                    <h1>Please wait...</h1>
                    <p>Loading cars</p>
            </div>
    }
    

    return (
        <>  
            {/* <div className="grid md:grid-cols-5 p-10"> */}
            <div className="p-10">
                {/* <div className="bg-white shadow h-screen overflow-y-scroll p-5 flex flex-col">
                    <form action="" className="mb-5">
                        <h1>Search for your dream car</h1>
                        <input type="search" placeholder="Search for a car" className="w-full h-[50px] border rounded-md outline-none px-5" />
                    </form>
                    <div className="mb-10">
                        <h1 className="text-xl font-bold mb-5">Filter By car brand</h1>
                        <div className="flex flex-col gap-2">
                            {
                                brands.map((brand) => (
                                    <div key={brand} className="flex items-center gap-2 cursor-pointer">
                                        <Checkbox className="cursor-pointer" value={brand} onCheckedChange={(isChecked: boolean) => {
                                            if (isChecked) {
                                                console.log(brand)
                                            }
                                        }} />
                                        <span>{brand}</span>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className="mb-10">
                        <h1 className="text-xl font-bold mb-5">Filter By car model</h1>
                        <div className="flex flex-col gap-2">
                            {
                                models.map((model) => (
                                    <div key={model} className="flex items-center gap-2 cursor-pointer">
                                        <Checkbox className="cursor-pointer" value={model} onCheckedChange={(isChecked: boolean) => {
                                            if (isChecked) {
                                                console.log(model)
                                            }
                                        }} />
                                        <span>{model}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold mb-5">Filter By price</h1>
                        <div className="flex flex-col gap-2">
                            {
                                prices.map((price) => (
                                    <div key={price} className="flex items-center gap-2 cursor-pointer">
                                        <Checkbox className="cursor-pointer" value={price} onCheckedChange={(isChecked: boolean) => {
                                            if (isChecked) {
                                                console.log(price)
                                            }
                                        }} />
                                        <span>{price}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>  */}
                <div className="col-span-4 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-5 gap-5 h-screen overflow-y-scroll">
                        {
                            data&&data.map((car)=>(
                                <CarCard
                                    key={car._id}
                                    brand={car.brand}
                                    model={car.model}
                                    price={car.price}
                                    fuelType={car.fuelType}
                                    year={car.year}
                                    src={car.image}
                                    href={`/details/${car._id}`}
                                /> 
                            ))
                        }
                    
                </div>

            </div>
        </>
    )
}

export default CarsPage