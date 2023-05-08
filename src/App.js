
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorite from "./pages/Favorite";
import GuideAchat from "./pages/GuideAchat";
import  Panier  from "./pages/Panier";
import ProductPage from "./pages/ProductPage";
import FAQpage from "./pages/FAQpage";
import Header from "./component/Header";
import Footer from './component/Footer'
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import UserHeader from "./component/UserHeader"
import Quisommenous from "./pages/Quisommenous";
import Signup from "./pages/Signup";
import PageCarteCadeau from "./pages/PageCarteCadeau";
import Horaire from "./pages/Horaire";
import Profile from "./pages/Profile";
import Stocklimités from "./pages/Stocklimités";
import Nouvelles from "./pages/Nouvelles";
import Offresramadan from "./pages/Offresramadan";
import Offrespeciale from "./pages/Offrespeciale";

 

function App() {
  return (
    <div className="bg-[#F5F5F5] ">
     <Router>
      <Header/> 
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Mes favoris" element={<Favorite />} />
            <Route path="/Panier" element={<Panier />} />
            <Route path="/Signup&Login" element={<Signup/>} />
            <Route path="/Guide dachat" element={<GuideAchat/>} />
            <Route path="/FAQ" element={<FAQpage/>} />
            <Route path="/Product" element={<ProductPage/>} />
            <Route path="/Contact us" element={<Contact/>} />
            <Route path="/Qui somme nous" element={<Quisommenous/>} />
            <Route path="/Carte cadeau" element={<PageCarteCadeau/>} />
            <Route path="/Horaire" element={<Horaire/>} />
            < Route path="/Profile" element={<Profile/>} />
            < Route path="/Stock limites" element={<Stocklimités/>} />
             <Route  path="/Nouvelles" element ={<Nouvelles/>}/>
              <Route path ='Offres Ramadan' element={<Offresramadan/>} />
             <Route path="Offre Speciale" element={<Offrespeciale/>}/>
          </Routes>
      <Footer/>
     </Router>



    </div>
  );
}

export default App;
//<Panier/>