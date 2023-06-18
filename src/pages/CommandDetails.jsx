import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
   import   {AiOutlineSafetyCertificate} from "react-icons/ai";
const CommandDetails = () => {
    const [order ,setOrder] = useState(null);
    const {id} = useParams()
    const {authTokens} = useContext(AuthContext)


    
    const getCommand = async () => {
        try {
          const res = await axios.get(`https://familishop.onrender.com/order/${id}`, {
            headers: {
              'Authorization': 'Bearer ' + authTokens
            }
          });
          setOrder(res.data[0]);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        getCommand();
      }, []);
    
      if (!order) {
        return<div className="flex items-center ml-[365px] p-[300px]">
        <div className="flex space-x-2 ">
      <div className="w-6 h-6 bg-[#800B8D] rounded-full animate-bounce"></div>
      <div className="w-6 h-6 bg-red-300 rounded-full animate-bounce"></div>
      <div className="w-6 h-6 bg-[#FBEB08] rounded-full animate-bounce"></div>
      <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
    </div>
    </div>;
      }
    
  return (
    <div className='pl-3 pr-3 mt-10 mb-10 PageContainer ' >
    <div  className='bg-[#ffffff] p-3 rounded-sm ' >
      <div >
     <h1 className='my-4 text-2xl font-bold'>  Numéro de commande : <span> {order.id} </span> </h1>
     <div className='flex'>
        <h1 className='text-semibold text-[#727272] '> Date de commande: <span className='text-[#000000]'> {new Date(order.created_at).toLocaleString()}</span> </h1> 
        <h1 className='text-semibold text-[#0FB53B] ml-24 '> Livraison: apres 4 de 6 jours : </h1> 
     </div>
     
    <div className='flex flex-col items-center justify-center mt-10'>
         <AiOutlineSafetyCertificate size={100} className='text-[#800B8D]' />
         <h1 className='text-[#800B8D] font-bold text-xl'>Commande confirmée</h1>
    </div>
     
     

<hr class="h-px my-10 py-[1px] bg-gray-200 border-0 dark:bg-gray-700  "/>
    
  

     
     </div>
     
  {/* product_description:  "kdnfkfn"
product_id : 4
product_name: "Denim Jacket"
product_price: 99
product_quantity: 89
quantity: 1
subtotal: 99  */}
    
    {order.items && order.items.length > 0 ? (
  order.items.map((item) => (
    <div key={item.product_id} className="pl-4 pr-4 bg-white shadow-sm ">
        <div className="flex justify-between px-[9px] ">
      <div className="flex ">
        <img src={item.alt_image} alt="" className="h-[150px] w-[150px] mt-2" />
        <div>
        <h1 className="mt-2 ml-6 text-lg font-bold ">{item.product_name}</h1>
        <h1 className="mt-2 ml-6 text-md w-[600px] ">{item.product_description}</h1>

        </div>
        
      </div>
      <div className="flex flex-col items-center mr-10">
        <h1 className="my-2 text-xl font-bold">{item.subtotal} DA</h1>
        <ul className="flex items-center justify-end my-2">
          <h1 className="text-[#727272]">Quantité:</h1>
          <h1 className="ml-1 font-semibold">{item.product_quantity}</h1>
        </ul>
        <ul className="flex items-center justify-end my-2">
          <h1 className="text-[#727272]">Points:</h1>
          <h1 className="ml-1 font-semibold">{item.product_price}</h1>
        </ul>
      </div>
      </div>
    </div>
  ))
) : (
  <p>No items found.</p>
)}
     

      <hr class="h-px my-10 py-[1px]  bg-gray-200 border-0 dark:bg-gray-700"/>
        <div className='flex justify-between '>
            <div className='mx-3 '>
                 <h1 className='text-2xl font-bold'>Livraison </h1>
                
                 <h1 className='text-[#727272] my-3 '>Adresse :  <span className='text-black'> {order.address} , Algerie </span>  </h1>
                 
                
            </div>
            <div className='mr-20'>
                <h1 className='text-xl font-bold tracking-wider'>Résumé de la commande</h1>
                <div className='flex flex-col '>
                  <div className='flex items-center justify-between mt-4'>
                     
                     <h1 className='text-[#727272] text-lg'>  Sous Total</h1>
                     <h1 className='text-xl font-bold'> {order.total} DA </h1>
                  </div>

                  <div className='flex items-center justify-between mt-4 '>
                     
                     <h1 className='text-[#727272] text-lg'> Livraison</h1>
                     <h1 className='text-xl font-bold'> 800 DA </h1>
                  </div>
                  
                  <div className='flex items-center justify-between mt-4'>
                     
                     <h1 className='text-[#727272] text-lg'>Points Totales</h1>
                     <h1 className='text-xl font-bold'> {order.total / 100} DA </h1>
                  </div>

                  <div className='flex items-center justify-between mt-4'>
                     
                     <h1 className='text-[#727272] text-lg font-bold'> Total</h1>
                     <h1 className='text-xl font-bold'> {order.total + 800 }  DA </h1>
                  </div>
                
                </div>
            </div>
        </div>

        <Link className='flex items-start justify-center m-2' to='/'>
            
            <button className='bg-[#800B8D] p-3 text-white rounded-sm font-bold hover:bg-[#bf33cf] hover:border-[#f07ffd] hover:scale-105 hover:shadow-lg active:bg-[#f07ffd]' > Retour aux achats </button>
        </Link>

      </div>
    </div>
  )
}

export default CommandDetails