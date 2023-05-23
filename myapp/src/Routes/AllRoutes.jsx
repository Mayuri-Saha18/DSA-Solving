import { Route, Routes } from "react-router-dom";
import Home from "./Home";
//import Dashboard from "./Dashboard";
import PrivateRoute from "../Components/PrivateRoute";
import Signup from "../pages/Signup";
import Userlogin from "../pages/Userlogin";
 import Dashboard from "../pages/Dashboard";

function AllRoutes() {
  return <div>
   <Routes>
   <Route path="/" element={<Home />}></Route>
   
   <Route path="/signup" element={<Signup />}></Route>
   <Route path="/userlog" element={<Userlogin />}></Route>
        <Route
          path="/dashboard"
          element={
         
              <Dashboard />
           
}
        ></Route>
   </Routes>
    </div>;
}

export default AllRoutes;
