import React from "react"; 
import  { useState , useEffect} from "react"; 
import { MdFavoriteBorder ,MdFavorite } from "react-icons/md";
import axios from 'axios';
import { Link } from "react-router-dom/dist";


const Nouveaux = () => {
  
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


  
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
   axios.get('https://familishop.onrender.com/products/')
     .then((response) => {
       console.log(response.data);
       setProducts(response.data);
     })
     .catch((error) => {
       console.log(error.message);
     });
 }, []);
 
return (
   // ... consume here
   <div className= " PageContainer"> 
      
  {/* Nouveaux */}
  <div className=' bg-[#ffffff] p-4 my-3    '>
     <div className="p-2   bg-[#ffffff] shadow-lg ">
        <div className='flex justify-between '>
          <h1 className='text-black font-semibold border-b-2 border-[#A078BC]'> Nouvelles Arrivées </h1>
          </div>
          
          <div className='grid grid-cols-1 m-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
           {products.map((Product)=>(
            <Link key={Product.id} className='text-black  m-2   bg-[#F8F8F8] relative      ' to={'/Product/'+Product.id}> 
              <div className="  flex justify-center items-center  h-[200px] ">
             
        {/* <img src={post.image} className='h-[110px] w-[110px] '/> */}     
             
             </div>
             
             
             
             
             <div className='flex items-center justify-between '> 
             <p className='mx-2 text-sm text-black '> {Product.title} </p>    
               <div className="mx-2">
                    <MdFavoriteBorder  onClick={()=> handleAddfavoris(products)   }
                          size={22} className={    list.includes(products)    ?'  hidden     ' :' fill-[#000000] '} />
                    <MdFavorite  onClick={()=> handleRemovefavoris(products)    }
                          size={22} className={    list.includes(products)    ?' fill-red-500     ' :' hidden '} />                </div>
              
              </div>
             <div className='flex items-center justify-start my-1 '> 
             <p className='mx-2 text-sm font-bold '> {Product.slug} DA </p>

             
         
            


             </div>
             <div className='absolute top-0 left-0 '>
             <div className="bg-[#3AF24B] h-[25px] w-[75px]  relative  ">
              <p className="text-white text-sm mx-[1px] "> Nouveau</p>
              <div className="  border-r-[17px] border-r-[#F8F8F8] border-b-[13px] border-b-[#3AF24B] border-t-[13px] border-t-[#3AF24B] absolute top-0 right-0 ">  </div>
              </div>
             </div>
            </Link >
            
           ))}
          </div>
        

      </div>
      </div>
   </div> 
    
   ) ;
};
export default Nouveaux 