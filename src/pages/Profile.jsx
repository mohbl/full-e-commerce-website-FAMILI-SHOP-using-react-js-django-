import React, { useContext } from 'react'
import { MdFavoriteBorder ,MdFavorite } from "react-icons/md";
import  { useState , useEffect} from "react"; 
import { RiUserSettingsLine } from "react-icons/ri";
import Qr from '../component/assets/Qr.png'
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Vurécemment from '../component/cards/Vurécemment';

const Profile = () => {
  
 //    https://familishop.onrender.com/customers/
 
 const [userData,setUserData] = useState([]);
 const {  authTokens } = useContext(AuthContext);

 // fetch user data 
 useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://familishop.onrender.com/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authTokens")}`,
        },
      });
      setUserData(response.data);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };

  fetchUserData();
}, []);


//  const [posts, setPosts] = useState([]);
// useEffect(() => {
//    fetch('https://fakestoreapi.com/products?limit=4')
//       .then((response) => response.json())
//       .then((data) => {
//          console.log(data);
//          setPosts(data);
//       })
//       .catch((err) => {
//          console.log(err.message);
//       });
// }, []);
// console.log(posts) 

// const [list, setList] = useState([]);
// const handleAddfavoris = (i) => {
//   let items =[...list, i]
// // list.push(i)
//   setList(items);
// console.log(items)
// };

// const handleRemovefavoris = (i) => {

   
//      // const lastIndex = items.length - 1;

//     // items.splice(list.indexOf(i),1)
//    let  items=list.filter(t=>t.id!==i.id )  
//     setList(items)
  

//   console.log(items) };


 
//  const {user} = useContext(AuthContext)
 
//  const [code , activatecode] =useState(false);
//  const activer=()=>{
//     activatecode(true) ;
//     }
//     const desactiver=()=>{
//       activatecode(false) ;
//       }
     return (
    <div className='PageContainer '>
     
       <div className='flex flex-col mt-5 border-b'>
        <div className='flex justify-start m-3 '>
       <div className='bg-white border shadow-md w-[325px] h-[325px]'>
         <ul className=''>
          <Link to='/Mes commande'> <li className='mt-12 font-semibold cursor-pointer hover:text-[#800B8D] pl-4'>Mes Commandes</li>  </Link> 
          <Link to='/Offre Speciale'>  <li className='my-7 font-semibold cursor-pointer hover:text-[#800B8D] pl-4'> Offre Speciale </li></Link>
          <Link to='/Guide dachat'>  <li className='my-7 font-semibold cursor-pointer hover:text-[#800B8D] pl-4 '>Guide d’achat et conseils</li></Link>
          <Link to='/mes-favoris'>  <li className='mt-7 font-semibold cursor-pointer hover:text-[#800B8D] pl-4'>mes favoris </li></Link>
          <Link to='/Panier'> <li className='mt-7 font-semibold cursor-pointer hover:text-[#800B8D] pl-4'>panier </li></Link>

         </ul>
       </div>
         <div className='relative w-full p-2 mx-3 bg-white shadow-md'>
           
            <div className='flex items-center justify-between p-3 border-b-2 '>
                <h1 className='text-2xl font-bold '> Mes informations </h1>
                <RiUserSettingsLine size={25} className='text-[#800B8D] cursor-pointer '/>
            </div>
            
           <ul className='mx-8 '>
             <li className='my-4 font-bold'> Nom et prénom : {userData?.first_name} {userData?.last_name} </li>
             <li className='my-4 font-bold'>Adresse email : {userData?.email}  </li>
             <li className='my-4 font-bold'> Numéro de téléphone : {userData?.phone_number}  </li>
             <li className=  'my-4 font-bold text-[#800B8D]'> Mes point de carte cadeau : {userData?.points} </li>
             {userData.membership&&  <li className= 'font-bold text-[#800B8D] '> adhésion: {userData?.membership} </li>}
            </ul>    
            
             {/* <div className='absolute bottom-7 right-7'>
            <button className={ code  ?  ' hidden ' : 'bg-[#800B8D] hover:bg-[#bf33cf]  hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd] rounded font-semibold ' } onClick={activer} > Activer carte cadeau </button>
            <button className={ code ?'bg-[#800B8D] hover:bg-[#bf33cf]  hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd] rounded font-semibold ': 'hidden'} onClick={desactiver}>  Désactiver carte cadeau </button>
            </div> */}
            </div>
        </div>

   

        <div className='flex justify-start m-3'>
      
         <div className='bg-white '>
           
           

            <Vurécemment />
              
            {/* <div className='grid grid-cols-1 m-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
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
          </div> */}

            
           
            </div>
        </div>





        </div>
    
    </div>
  )
 
     }


 
export default Profile
