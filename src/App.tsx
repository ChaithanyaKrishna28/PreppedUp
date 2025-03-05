import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layouts
import { PublicLayout } from "@/layouts/public-layout";
import AuthenticationLayout from "@/layouts/auth-layout";


import HomePage from "@/routes/home";
import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";
import ProtectRoutes from "./layouts/protected-routes";
import { MainLayout } from "./layouts/main-layout";
import { Generate } from "./components/generate";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { Feedback } from "./routes/feedback";

const App = () => {
  return (
    <Router>
      <Routes>

        
        {/* public routes  */}
        {/* Public layout renders the public pages */}
        <Route element={<PublicLayout/>}>
          <Route index element={<HomePage/>}></Route>
        </Route>





        {/* authentication layout */}
        {/* authentication layout renders the public pages */}
        <Route element={<AuthenticationLayout/>}>
          <Route path="/signin/*" element={<SignInPage/>}></Route>
          <Route path="/signup/*" element={<SignUpPage/>}></Route>
        </Route>




        {/* Protected routes */}
        {/* Protected layout renders the public pages */}
        <Route
          element={
            <ProtectRoutes>
              <MainLayout/>
            </ProtectRoutes>
          }
        >
          {/* add all the protected route */}
          <Route element={<Generate/>} path="/generate">
            <Route index element={<Dashboard/>}/>
            <Route path=":interviewId" element ={<CreateEditPage/>}/>
            <Route path="interview/:interviewId" element={<MockLoadPage/>}/>
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage/>} 
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
        </Routes>
    </Router>
  )
}

export default App