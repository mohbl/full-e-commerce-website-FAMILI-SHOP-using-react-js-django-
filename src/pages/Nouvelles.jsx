import React from "react"; 
import  { useState , useEffect , useContext} from "react"; 
import { MdFavoriteBorder ,MdFavorite } from "react-icons/md";
import {Link} from "react-router-dom";
import Nouveles from '../component/assets/Group360.png'
import axios from 'axios';
import coupon from '../component/assets/—Pngtree—red coupon 10 off_6376552 1.png'
import { FaRegHeart, FaHeart , FaStar, FaStarHalfAlt } from 'react-icons/fa';
import new1 from '../component/assets/nouveau 1.svg'
import AuthContext from '../context/AuthContext'

const Nouvelles = () => {
  const { user, authTokens } = useContext(AuthContext);

  const [isFavorited, setIsFavorited] = useState(false);
  const [products, setProducts] = useState([]);
  // handle the add/delete to/from favorite list function

  const handleAddToFavorites = (i) => {

    return async () => {
      try {
        if (user) {
          // User is authenticated, make a POST request to the Django API
          
    
          const headers = {
            "Authorization": `Bearer ${authTokens}`,
            "Content-Type": "application/json",
          };
  
          const requestData = {
           'product' : products[i].id,
           'user': user.id,
          };

          let response = null;
          
          console.log('authenticated')
          if(!products.at(i).isFavorited) {
            console.log('not in favorites')
            response = await axios.post(
              "https://familishop.onrender.com/favorites/",
              requestData,
              { headers }
            );
            console.log(response);
          } else {
            console.log('in favorites')
            response = await axios.delete(
              "https://familishop.onrender.com/favorites_remove/"+products.at(i).id ,
              { headers }
            );
            console.log(response);
          }

          const newProducts = [...products];
          newProducts.at(i).isFavorited = !newProducts.at(i).isFavorited;
          setProducts(newProducts);
        } else {
          // User is not authenticated, store the favorite in session storage
          const favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
          const existingIndex = favorites.findIndex((fav) => fav.id === products.at(i).id);

          if (existingIndex !== -1) {
            // Product already exists in favorites, remove it
            favorites.splice(existingIndex, 1);
            setIsFavorited(false);
            alert('Product removed from favorites!');
          } else {
            // Product does not exist in favorites, add it
            favorites.push(products.at(i));
            setIsFavorited(true);
            alert('Product added to favorites!');
          }

          sessionStorage.setItem('favorites', JSON.stringify(favorites));
        }
        products.at(i).isFavorited = true
      } catch (error) {
        console.log(error)
        alert(error.message);
      }
    }
  };



  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  useEffect(() => {
    (async () => { 
      const response = await axios.get('https://familishop.onrender.com/products/');
      console.log(response.data);
      const shuffledProducts = response.data.sort(() => 0.5 - Math.random());
      const randomProducts = shuffledProducts.slice(0, 5); // Only take the first 2 random products
      const favorites = await axios.get('https://familishop.onrender.com/favorites/', {
        headers: {
          Authorization: 'Bearer '+authTokens
        }
      })
      .then(response => response.data);
      console.log('favorites ',favorites)
      setProducts(randomProducts.map(p => {
        const i = favorites.findIndex(v => v.product === p.id)
        p.isFavorited = i !== -1
        if(i !== -1) p.idFavorite = favorites.at(i).id;
        return p
      }));
    })()
  }, []);
  
return (
   // ... consume here
   <div className= " PageContainer"> 
      
  {/* Offresspéciales */}
  <div className=' bg-[#ffffff] p-4 my-3     '>
     <div className="p-2   bg-[#ffffff]  ">
         
         <div>
            <img src={Nouveles} alt=""  />
         </div>
          
          <div className="flex mt-10">
          <h1 className='text-black font-bold border-b-2 border-[#A078BC]'> Nouvelles Arrives </h1>
          </div>
          <div className='grid grid-cols-1 m-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
          {products.map((product,i)=>(
            <div  className=' relative  m-2 border-2 rounded-lg cursor-pointer h-[340px] hover:shadow-lg '  key={product.id}  onMouseEnter={() => handleMouseEnter(product.id)}  onMouseLeave={handleMouseLeave} >
              <Link className=" w-[218px]  h-[250px] cursor-pointer " to={'/Product/'+product.id}>
              <img
                src={hoveredProductId === product.id ? product.image : product.image2} className="object-cover w-[218px] h-[250px]  " alt='' />
             </Link>
             
             
             <Link to={'/Product/'+product.id} className="cursor-pointer">
             <p className='pl-3 mt-3 text-base font-bold '> {product.title}  </p>    
             </Link >
             
             <div className='flex items-center justify-between mt-2'> 

                <div className='flex items-center justify-start pl-2 '> 
               <p className='mx-1 text-base font-bold '> {product.unit_price}DA </p> 
               <p className='text-[#8A8888] text-sm line-through ml-2 '> {product.price}DA </p>
                </div>

               <div className="mx-2">
               {isFavorited ? (
            <FaHeart className="text-red-500 cursor-pointer hover:text-[#E50014]" onClick={handleAddToFavorites(i)} size={20}/>
            ) : (
            <FaRegHeart className="text-gray-900 cursor-pointer hover:text-[#E50014]" onClick={handleAddToFavorites(i)} size={20} />
            )}               
               </div>
              
              
              </div>
             
             
              
              
                {product.promotion && (
                <div className="">
                    <img src={coupon} alt="" className='absolute top-0 left-1 ' />
                    <span className="absolute text-lg font-bold text-white transform top-4 left-5 -rotate-12" >10</span>
                </div>
               )}

                {product.newproduct && (
                <div className="">
                    <img src={new1} alt="" className='absolute top-0 right-0 ' />
                </div>
               )}

            </div>
              ))}
          </div>
        

      </div>
      </div>
   </div> 
    
   ) ;
};
export default Nouvelles 



