
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorite from "./pages/Favorite";
import GuideAchat from "./pages/GuideAchat";
import  Panier  from "./pages/Panier";
import ProductPage from "./pages/ProductPage";
import FAQpage from "./pages/FAQpage";
import Header from "./component/Header";
import Footer from './component/Footer'
import LandingPage from "./pages/LandingPage";



function App() {
  return (
    <div className="bg-[#E3E2E2] ">
     <Router>
      <Header/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Mes favoris" element={<Favorite />} />
            <Route path="/Panier" element={<Panier />} />
            <Route path="/Guide dachat" element={<GuideAchat/>} />
            <Route path="/FAQ" element={<FAQpage/>} />
            <Route path="/Product" element={<ProductPage/>} />
          </Routes>
      <Footer/>
     </Router>



    </div>
  );
}

export default App;
//<Panier/>