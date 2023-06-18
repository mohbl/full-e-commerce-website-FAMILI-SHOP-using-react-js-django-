import  { useState , useEffect , useContext} from "react"; 
import React from "react";
import axios from "axios";
import { FaHeart ,FaRegHeart } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import coupon from '../component/assets/—Pngtree—red coupon 10 off_6376552 1.png'
import AuthContext from '../context/AuthContext'
import {Link} from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
const Search = () => {

    const { user, authTokens } = useContext(AuthContext);
    const [isFavorited, setIsFavorited] = useState(false); 
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
            'product': products[i].id,
            'user': user.id,
          };
  
          let response = null;
  
          if (!products[i].isFavorited) {
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
              "https://familishop.onrender.com/favorites_remove/" + products[i].id,
              { headers }
            );
            console.log(response);
          }
  
          const newProducts = [...products];
          newProducts[i].isFavorited = !newProducts[i].isFavorited;
          setProducts(newProducts);
        } else {
          // User is not authenticated, store the favorite in session storage
          const favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
          const existingIndex = favorites.findIndex((fav) => fav.id === products[i].id);
  
          if (existingIndex !== -1) {
            // Product already exists in favorites, remove it
            favorites.splice(existingIndex, 1);
            setIsFavorited(false);
            alert('Product removed from favorites!');
          } else {
            // Product does not exist in favorites, add it
            favorites.push(products[i]);
            setIsFavorited(true);
            alert('Product added to favorites!');
          }
  
          sessionStorage.setItem('favorites', JSON.stringify(favorites));
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    };
  };
     const [hoveredProductId, setHoveredProductId] = useState(null); 
 
     const handleMouseEnter = (productId) => { 
       setHoveredProductId(productId); 
     }; 
    
     const handleMouseLeave = () => { 
       setHoveredProductId(null); 
     }; 
 
 
 
   
     const {query} = useParams();
      const [products, setProducts] = useState([]); 
      useEffect(() => { 
        
       axios.get('https://familishop.onrender.com/products/?search='+query) 
         .then((response) => { 
           console.log(response.data); 
           const shuffledProducts = response.data.sort(() => 0.5 - Math.random()); 
           const randomProducts = shuffledProducts.slice(); // Only take the first 2 random products 
             setProducts(randomProducts); 
         
         console.log(query)
           }) 
         .catch((error) => { 
           console.log(error.message); 
         }); 
     }, []);

    
        return (
         <div className="p-3 PageContainer ">
       
       <div className=" bg-[#FFFFFF] rounded-sm  ">
       {products.length === 0 ? (
         <div className="flex flex-col items-center justify-center bg-white pt-60 pb-60">
         <FaSearch className="mb-4 text-4xl text-gray-500" />
         <h3 className="mb-2 text-xl font-bold">Aucun produit trouvé pour '{query}'</h3>
            <p className="text-gray-600">Veuillez essayer une autre requête de recherche.</p>
       </div>
        ) : (
       <div className='grid grid-cols-1 m-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
           {products.map((product,i)=>(
             <div className=' relative  m-2 border-2 rounded-lg cursor-pointer h-[340px] hover:shadow-lg '  key={product.id}  onMouseEnter={() => handleMouseEnter(product.id)}  onMouseLeave={handleMouseLeave}  >
               <Link className=" w-[218px]  h-[250px] cursor-pointer " to={'/Product/'+product.id}>
               <img
                 src={hoveredProductId === product.id ? product.src_image : product.alt_image} className="object-cover w-[210px] h-[250px]  " alt='' />
 
              </Link>
              
              
              <Link to={'/Product/'+product.id} className="cursor-pointer">
              <p className='pl-3 mt-3 text-base font-bold truncate '> {product.title}  </p>    
              </Link>
              
              <div className='flex items-center justify-between mt-2'> 
 
                 <div className='flex items-center justify-start pl-2 '> 
                <p className='mx-1 text-base font-bold '> {product.price}DA </p> 
            {product.promotion_status === '1' && ( <p className='text-[#8A8888] text-sm line-through ml-2 '> {((product.price * 100) / ( product.discount_percentage)).toFixed(2)}DA </p>)} 
                 </div>
 
                 <div className="mx-2">
                    {product.isFavorited ? (
                      <FaHeart className="text-red-500 cursor-pointer hover:text-[#E50014]" onClick={handleAddToFavorites(i)} size={20} />
                    ) : (
                      <FaRegHeart className="text-gray-900 cursor-pointer hover:text-[#E50014]" onClick={handleAddToFavorites(i)} size={20} />
                    )}
                  </div>
               
               
               </div>
              
              
               {product.promotion_status === '1' &&   product.discount_percentage !== '0' (
                 <div className="">
                     <img src={coupon} alt="" className='absolute top-0 left-1' />
                 </div>
                )}
 
              
 
             </div>
               ))}
           </div>
          
          )}
          </div>
          </div>)
     }
export default Search