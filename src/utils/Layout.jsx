import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Header from "../component/Header";
import UserHeader from "../component/UserHeader";


const Layout = () => {
  let { user } = useContext(AuthContext);
  const Head = user ? UserHeader : Header;
  return ( 
  <>
    <Head />
    <Outlet/>
  </>);
};

export default Layout;