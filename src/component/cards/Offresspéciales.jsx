import React from "react"; 
import  { useState , useEffect} from "react"; 
import { MdFavoriteBorder ,MdFavorite } from "react-icons/md";
import {Link} from "react-router-dom";
import axios from 'axios';

const Offresspéciales = () => {
  const [products, setProducts] = useState([]);
  const [list, setList] = useState([]);

  const handleAddfavoris = (i) => {
      let items =[...list, i]
    // list.push(i)
      setList(items);
    console.log(items)
  };

  const handleRemovefavoris = (i) => {
    
       
         // const lastIndex = items.length - 1;

        // items.splice(list.indexOf(i),1)
       let  items=list.filter(t=>t.id!==i.id )  
        setList(items)
      
 
      console.log(items) };


  
  
      
      useEffect(() => {
        axios.get('https://familishop.onrender.com/products/')
          .then((response) => {
            console.log(response.data);
            const shuffledProducts = response.data.sort(() => 0.5 - Math.random());
          const randomProducts = shuffledProducts.slice(0, 5); // Only take the first 2 random products
            setProducts(randomProducts);
          })
          .catch((error) => {
            console.log(error.message);
          });
      }, []);


return (
   // ... consume here
   <div className= " PageContainer"> 
      
  {/* Offresspéciales */}
  <div className=' bg-[#ffffff] p-4 my-3     '>
     <div className="p-2   bg-[#ffffff] shadow-lg ">
        <div className='flex justify-between '>
          <h1 className='text-black font-semibold border-b-2 border-[#A078BC]'> Offres spéciales </h1>
        <Link to='Offre Speciale'> <h1 className="cursor-pointer text-[#800B8D] border-b-2 border-[#A078BC] ">  Voir Tous  </h1> </Link>
          </div>
          <div className='grid grid-cols-1 m-2  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
           {products.map((Product)=>(
            <Link key={Product.id} className=' relative text-black  m-2   bg-[#F8F8F8]      ' to={'/Product/'+Product.id} > 
              <div className="  flex justify-center items-center  h-[200px] ">
             
             <img src={Product.image} className='h-[110px] w-[110px] '/>
             
             </div>
             
             
             
             
             <div className='flex items-center justify-between '> 
             <p className='mx-2 text-sm text-black '> {Product.title} </p>    
               <div className="mx-2">
                    <MdFavoriteBorder  onClick={()=> handleAddfavoris(Product)   }
                          size={22} className={    list.includes(Product)    ?'  hidden     ' :' fill-[#000000] '} />
                    <MdFavorite  onClick={()=> handleRemovefavoris(Product)    }
                          size={22} className={    list.includes(Product)    ?' fill-red-500     ' :' hidden '} />                </div>
              
              </div>
             <div className='flex items-center justify-start my-1 '> 
            
             <p className='text-[#8A8888] text-sm line-through mx-1 '> {Product.unit_price} DA </p>
             <p className='mx-1 text-sm font-bold '> {Product.price} DA </p>
            </div>
             <div className='m-2 '>
                 </div>
           <div className="absolute top-3 right-3 text-[#E50014] bg-[#E50014]/10 rounded-sm ">
            <p className="">  -{ Product.price}%</p>
            </div>
            </Link >
            
           ))}
          </div>
        

      </div>
      </div>
   </div> 
    
   ) ;
};
export default Offresspéciales 