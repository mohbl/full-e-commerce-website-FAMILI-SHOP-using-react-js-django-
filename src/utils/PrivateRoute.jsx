import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Header from "../component/Header";
import UserHeader from "../component/UserHeader";


const PrivateRoute = () => {
  let { user } = useContext(AuthContext);
  return (!user ?  <Navigate to="/Profile" /> : 
  <>
    <UserHeader />
    <Outlet/>
  </>);
};

export default PrivateRoute;