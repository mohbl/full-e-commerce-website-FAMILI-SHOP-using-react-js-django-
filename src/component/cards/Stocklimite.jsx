import React from "react"; 
import  { useState , useEffect} from "react"; 
import {Link} from "react-router-dom";
import axios from 'axios';

const Stocklimite = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      axios.get('https://familishop.onrender.com/products/')
        .then((response) => {
          console.log(response.data);
          const shuffledProducts = response.data.sort(() => 0.5 - Math.random());
          const randomProducts = shuffledProducts.slice(0, 2); // Only take the first 2 random products
          setProducts(randomProducts);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, []); 

var calculeWidth=( stock , q)=>{
        
   return(q*100/stock) 
 

}

return (
   // ... consume here
   <div className= " PageContainer"> 
      
  {/* stock limite */}
  <div className='shadow-md  bg-[#ffffff] p-4   '>
        <div className='flex justify-between '>
          <h1 className='text-black font-bold border-b-2 border-[#A078BC]'> Stock limité Termine dans : </h1>
          <Link to='Stock limites' > <h1 className="cursor-pointer text-[#800B8D] border-b-2 border-[#A078BC] ">  Voir Tous  </h1> </Link>
      
          </div>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 '>
           {products.map((Product)=>(
            <Link key={Product.id} className='  bg-[#ffffff]  shadow-xl flex justify-around  m-2  ' to={'/Product/'+Product.id} > 
             {/* produit et promotion */}
             <div className=" relative flex justify-center items-center w-[230px] h-[268px] bg-[#F8F8F8]">
             <div className=''>
          {/*<img src={Product.image} className='h-[110px] w-[110px] '/> */}   
             <h1 className='absolute top-2 right-4 text-red-700 bg-[#E50014]/10'>-{Product.unit_price}%</h1>
             </div>
             </div>
             {/* description et marque */}
             <div className='p-1 mx-2 text-black '>
             <p className='text-sm text-black '> {Product.title} </p>
             <div className='flex items-center justify-start my-1 '> 
             <p className='mx-2 text-sm text-red-500 line-through '> {Product.unit_price} </p>
             <p className='text-sm  font-bold text-[#3AF24B] '> {Product.unit_price} </p>
             </div>
             <p className='text-xs'>{Product.collection_name} </p>
             <div className='my-2'>
               <p>{Product.inventory}  articles restants</p>
             <div className='w-full h-2 my-1 bg-gray-300 rounded-md '>
              <div className={(Product.inventory <= 3)?'bg-red-500 h-full rounded-md':
              'bg-yellow-400 h-full rounded-md'}
              style={{'width':calculeWidth(Product.inventory,Product.inventory)+'%'  }}></div>
             </div>
             </div>
             <h3 className='mb-2 '>options disponibles</h3>


             </div>
             <div className='m-2 '>
                 </div>
            </Link>
            
           ))}
          </div>
        

      </div>
   </div> 
    
   ) ;
};
export default Stocklimite 