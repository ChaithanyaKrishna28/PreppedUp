import { Footer } from "@/components/footer"
import Header from "@/components/header"
import AuthHandler from "@/handlers/auth-handler"
import { Outlet } from "react-router-dom"


// footer brooo if you want to change it go for it
export const PublicLayout = () => {
  return (
    <div className="w-full">
        {/* handler to store the user data because we need to make sure the userm is authenticated or not we need to store the users data into the firebase if the user is not exist, or if he is already exists we don't need to save that again */}
        <AuthHandler/>
        <Header/>

        <Outlet/>
        <Footer/>
    </div>
  )
}
