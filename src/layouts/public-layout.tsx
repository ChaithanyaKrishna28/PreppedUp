import Footer from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router-dom"

export const PublicLayout = () => {
  return (
    <div className="w-full">
        {/* handler to store the user data because we need to make sure the userm is authenticated or not we need to store the users data into the firebase if the user is not exist, or if he is already exists we don't need to save that again */}

        <Header/>

        <Outlet/>
        <Footer/>
    </div>
  )
}
