import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage"

import CarsPage from "./pages/cars"
import Navbar from "./components/nav"
import CarInfoPage from "./pages/car-details copy"


function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<CarInfoPage />} />
        <Route path="/cars" element={<CarsPage />} />
      </Routes>
    </>
  )
}

export default App
