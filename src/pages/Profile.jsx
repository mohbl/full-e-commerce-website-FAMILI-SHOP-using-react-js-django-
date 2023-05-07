import React from 'react'
import { MdFavoriteBorder ,MdFavorite } from "react-icons/md";
import  { useState , useEffect} from "react"; 
import { RiUserSettingsLine } from "react-icons/ri";
import Qr from '../component/assets/Qr.png'

const Profile = () => {
 //    https://familishop.onrender.com/customers/
 
 
 const [posts, setPosts] = useState([]);
useEffect(() => {
   fetch('https://fakestoreapi.com/products?limit=4')
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


 
 const user =JSON.parse(localStorage.getItem('user'));
 const [code , activatecode] =useState(false);
 const activer=()=>{
    activatecode(true) ;
    }
    const desactiver=()=>{
      activatecode(false) ;
      }
     return (
    <div className='PageContainer '>
     
       <div className='flex flex-col'>
        <div className='flex justify-start   m-3'>
       <div className=' p-6  shadow-md  mx-1'>
         <ul className='p-3'>
            <li className='my-3 font-semibold cursor-pointer hover:text-[#800B8D]'>Mes Commandes</li>
            <li className='my-3 font-semibold cursor-pointer hover:text-[#800B8D]'> Ma Catre Cadeau </li>
            <li className='my-3  font-semibold cursor-pointer hover:text-[#800B8D]'> Vu récemment </li>
            <li className='my-3 font-semibold cursor-pointer hover:text-[#800B8D]'>Guide d’achat et conseils</li>
            <li className='my-3 font-semibold cursor-pointer hover:text-[#800B8D]'>Produits recommandés </li>
         </ul>
       </div>
         <div className='p-2 shadow-md mx-3 w-full relative'>
           
            <div className=' flex justify-between items-center p-3 border-b-2 border-[#D9D9D9]'>
                <h1 className='text-2xl font-bold '> Mes informations </h1>
                <RiUserSettingsLine size={25} className='text-[#800B8D] cursor-pointer '/>
            </div>
           <ul className='p-3 mx-8'>
             <li className='my-4 font-bold'> Nom et prénom : {user['name']} </li>
             <li className='my-4 font-bold'>Adresse email : {user.email}  </li>
             <li className='my-4 font-bold'> Numéro de téléphone : {user.id}  </li>
             <li className='my-4 font-bold'>  Adresse :</li> 
             <li className={ code ? 'my-4 font-bold ' :'hidden'}> Mes Point : </li>
            </ul>    
            
             <div className='absolute bottom-7 right-7'>
            <button className={ code  ?  ' hidden ' : 'bg-[#800B8D] text-white p-2 rounded-md ' } onClick={activer} > Activer carte cadeau </button>
            <button className={ code ?'bg-[#800B8D] text-white p-2 rounded-md ': 'hidden'} onClick={desactiver}>  Désactiver carte cadeau </button>
            </div>
            </div>
        </div>

   

        <div className='flex justify-start   m-3'>
       <div className=' p-5 shadow-md  mx-1 flex flex-col items-center'>
          <h1 className='text-center text-sm font-semibold'>Application mobile FamiliShop</h1>
          <img src={Qr} alt="" className=' my-3 cursor-pointer' />
          <h1 className='text-sm text-center font-semibold my-3'>Numérisez ou cliquez ici pour télécharger</h1>


       </div>
         <div className='p-2 shadow-md mx-3 w-full '>
           
            <div className=' flex justify-between items-center '>
                <h1 className='text-md font-bold border-b-2 border-[#800B8D] p-1 '> Produits recommandés </h1>
                <h1> zaki</h1>
            </div>
              
            <div className='grid grid-cols-1 m-2  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
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
    
    </div>
  )
 
     }


 
export default Profile
