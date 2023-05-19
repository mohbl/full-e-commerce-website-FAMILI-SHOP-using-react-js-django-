import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Header from "../component/Header";


const PublicRoute = () => {
  let { user } = useContext(AuthContext);
  return (user ?  <Navigate to="/" /> : 
  <>
  <Header />
  <Outlet/>
  </>
  );
};

export default PublicRoute;