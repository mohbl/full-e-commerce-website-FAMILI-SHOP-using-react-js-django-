import React from "react"; 
import  { useState , useEffect} from "react"; 
import {Link} from "react-router-dom";
import axios from 'axios';

const Stocklimite = () => {
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(true); // Added loading state
   
   useEffect(() => {
    axios.get('https://familishop.onrender.com/products/')
      .then((response) => {
        console.log(response.data);
        const shuffledProducts = response.data.sort(() => 0.5 - Math.random());
        const randomProducts = shuffledProducts.slice(0, 2); // Only take the first 2 random products
        setProducts(randomProducts);
        setIsLoading(false); // Set isLoading to false after fetching data
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false); // Set isLoading to false if an error occurs
      });

  }, []);
var calculeWidth=( stock , q)=>{
        
   return(q*100/stock) 
 

}


return (
   // ... consume here
   <div className= "mt-4 PageContainer"> 
      
  {/* stock limite */}
  <div className='  bg-[#ffffff] p-4   '>
        <div className='flex justify-between '>
          <h1 className='text-black font-bold border-b-2 border-[#A078BC]'> Stock limité Termine dans : </h1>
          <Link to='Stock limites' > <h1 className="cursor-pointer text-[#800B8D] border-b-2 border-[#A078BC] ">  Voir Tous  </h1> </Link>
      
        </div>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 '>
          {isLoading ? (
              <div className="flex items-center ml-[365px] p-36">
                <div className="flex space-x-2 ">
              <div className="w-6 h-6 bg-[#800B8D] rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-red-300 rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-[#FBEB08] rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
            </div>
            </div>
              
            ) : (
           products.map((Product)=>(
            <Link key={Product.id} className='flex m-2 border shadow-sm ' to={'/Product/'+Product.id} > 
             {/* produit et promotion */}
             <div className="relative ">
             <img src={Product.src_image} className='w-[200px] h-[270px] ' alt=""/>   
             <h1 className='absolute top-2 right-4 text-red-700 bg-[#E50014]/10'>-{Product.discount_percentage}%</h1>
             
             </div>
             {/* description et marque */}
             <div className='p-1 mx-2 mt-6 text-black'>
             <p className='text-lg font-semibold text-black truncate'> {Product.title} </p>
             <div className='flex items-center justify-start my-1 '> 
             <p className='text-sm text-red-500 line-through '>{((Product.price * 100) / ( Product.discount_percentage)).toFixed(2) } DA </p>
             <p className='ml-2 text-sm  font-bold text-[#3AF24B] '> {Product.price} DA </p>
             </div>
             <p className='mt-2 '>{Product.collection_name} </p>
             <div className='my-2'>
               <p>{Product.quantity}  articles restants</p>
             <div className='w-full h-2 my-1 mt-6 bg-gray-300 rounded-md'>
              <div className={(Product.quantity <= 3)?'bg-red-500 h-full rounded-md ':
              'bg-yellow-400 h-full rounded-md'}
              style={{'width':calculeWidth(Product.quantity,Product.quantity)+'%'  }}></div>
             </div>
             </div>


             </div>
             
            </Link>
            
           ))
           )}
          </div>
        

      </div>
   </div> 
    
   ) ;
};
export default Stocklimite 