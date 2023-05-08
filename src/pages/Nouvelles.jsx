import React from "react"; 
import  { useState , useEffect} from "react"; 
import { MdFavoriteBorder ,MdFavorite } from "react-icons/md";
import {Link} from "react-router-dom";
import Nouveles from '../component/assets/Group360.png'
const Nouvelles = () => {
  
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


  
  
  const [posts, setPosts] = useState([]);
    useEffect(() => {
       fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
console.log(posts) 
return (
   // ... consume here
   <div className= " PageContainer"> 
      
  {/* Offresspéciales */}
  <div className=' bg-[#ffffff] p-4 my-3     '>
     <div className="p-2   bg-[#ffffff] shadow-lg ">
         
         <div>
            <img src={Nouveles} alt="" />
         </div>
          
          <div className="flex ">
          <h1 className='text-black font-bold border-b-2 border-[#A078BC]'> Nouvelles Arrives </h1>
          </div>
          <div className='grid grid-cols-1 m-2  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
           {posts.map((post)=>(
            <div key={post.id} className=' relative text-black  m-2   bg-[#F8F8F8]      ' > 
              <div className="  flex justify-center items-center  h-[200px] ">
             
             <img src={post.image} className='h-[110px] w-[110px] '/>
             
             </div>
             
             
             
             
             <div className='flex items-center justify-between '> 
             <p className='mx-2 text-sm text-black '> {post.category} </p>    
               <div className="mx-2">
                    <MdFavoriteBorder  onClick={()=> handleAddfavoris(post)   }
                          size={22} className={    list.includes(post)    ?'  hidden     ' :' fill-[#000000] '} />
                    <MdFavorite  onClick={()=> handleRemovefavoris(post)    }
                          size={22} className={    list.includes(post)    ?' fill-red-500     ' :' hidden '} />                </div>
              
              </div>
             <div className='flex items-center justify-start my-1 '> 
            
             <p className='text-[#8A8888] text-sm line-through mx-1 '> {post.price} DA </p>
             <p className='mx-1 text-sm font-bold '> {post.price} DA </p>
            </div>
             <div className='m-2 '>
                 </div>
           <div className="absolute top-3 right-3 text-[#E50014] bg-[#E50014]/10 rounded-sm ">
            <p className="">  -{ post.price}%</p>
            </div>
            </div >
            
           ))}
          </div>
        

      </div>
      </div>
   </div> 
    
   ) ;
};
export default Nouvelles 



