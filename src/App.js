import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorite from "./pages/Favorite";
import GuideAchat from "./pages/GuideAchat";
import Panier from "./pages/Panier";
import ProductPage from "./pages/ProductPage";
import FAQpage from "./pages/FAQpage";
import Header from "./component/Header";
import Footer from "./component/Footer";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import UserHeader from "./component/UserHeader";
import Quisommenous from "./pages/Quisommenous";
import Signup from "./pages/Signup";
import PageCarteCadeau from "./pages/PageCarteCadeau";

import Commande from "./pages/Commande";
import { MagazinClub } from "./pages/MagazinClub";

import Horaire from "./pages/Horaire";
import Profile from "./pages/Profile";
import Stocklimités from "./pages/Stocklimités";
import Nouvelles from "./pages/Nouvelles";
import Offresramadan from "./pages/Offresramadan";
import Offrespeciale from "./pages/Offrespeciale";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import Layout from "./utils/Layout";
import PanierCard from "./component/cards/PanierCard";
import ResetPassword1 from "./component/ResetPassword1";

function App() {
  return (
    <div className="bg-[#ececec] ">
      <Router>
        <AuthProvider>
          <Routes>

             <Route path="/" element={<Layout />}> 
            <Route path="/" element={<LandingPage />} />
            <Route path="/Panier" element={<Panier />} />
            <Route path="/mes-favoris" element={<Favorite />} />
            <Route path="/Product/:id" element={<ProductPage />} />
            <Route path="/Horaire" element={<Horaire />} />
            <Route path="/Guide dachat" element={<GuideAchat />} />
            <Route path="/FAQ" element={<FAQpage />} />
            <Route path="/Contact us" element={<Contact />} />
            <Route path="/Qui somme nous" element={<Quisommenous />} />
            <Route path="/Carte cadeau" element={<PageCarteCadeau />} />
            <Route path="/Magazin-club" element={<MagazinClub />} />
            <Route path="Offre Speciale" element={<Offrespeciale />} />
            <Route path="Offres Ramadan" element={<Offresramadan />} /> 
            <Route path="/Nouvelles" element={<Nouvelles />} />
            <Route path="/Stock limites" element={<Stocklimités />} />
            <Route path="/ResetPassword1" element={<ResetPassword1/>}/> 

             </Route>

            <Route element={<PublicRoute />}>
              <Route path="/signup-login" element={<Signup />} />
            </Route>


             <Route element={<PrivateRoute />}> 
              <Route path="/Mes commande" element={<Commande />} />
              <Route path="/Profile" element={<Profile />} /> 
             </Route> 


          </Routes>
        </AuthProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
//<Panier/>
