import Header from "./Header"
import { Outlet } from "react-router-dom"


const OutletTest = () => {
  return (
    <div>
        <Header></Header>
        <Outlet />
    </div>
  )
}

export default OutletTest