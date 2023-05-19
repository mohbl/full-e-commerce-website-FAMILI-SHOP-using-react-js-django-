import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(localStorage.getItem("authTokens"));
  const [user, setUser] = useState(
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);

  const history = useNavigate();

  const registerUser = async (
    first_name,
    password,
    last_name,
    email,
    phone_number,
    username,
    
  ) => {
    const response = await fetch("https://familishop.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },

      body: JSON.stringify({
        first_name,
        password,
        last_name,
        email,
        phone_number,
        username,

      }),
    });
    if (response.status === 200) {
      history("/");
    } else {
      alert("entrez un email , numero telephone ou mot de passe valide s'il vous plaît ou vérifiez vos informations !");
    }
  };

  const loginUser = async (email, password) => {
    const response = await fetch("https://familishop.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log(response)
    const data = await response.json();
    try {
      console.log(data.jwt);
      if (response.status === 200) {
        //history("/login");
        setAuthTokens(data.jwt);
        console.log(jwt_decode(data.jwt));
        setUser(jwt_decode(data.jwt));
        localStorage.setItem("authTokens", data.jwt);
        Cookies.set("jwt", data.jwt);
      } else {
        alert("entrez un email valide s'il vous plaît ou vérifiez vos informations !");
      }
    } catch (e) {
      console.log(e);
    }
    
  };

  const logoutUser = async () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    try {
      const response = await axios.post('https://familishop.onrender.com/logout');
      console.log(response.data);
    } catch(err) {
      console.log(err.response.data);
    }
    history("/");
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
