import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../component/Header'
import {BiMap} from 'react-icons/bi'
import PanierCard from '../component/cards/PanierCard'
import supp from '../component/cards/assetsCards/trash-2.svg'
import { useParams } from 'react-router-dom/dist';



export const Panier = () => {
  const [productData, setProductData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
 const [deliveryAddress, setDeliveryAddress] = useState('');
 const [quantity, setQuantity] = useState(1);
 const [isDeleting, setIsDeleting] = useState(false);
 const {id} = useParams();
 
  //fetch the products api 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://familishop.onrender.com/carts/'+id);
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

   // calculate the total price of the products in the shopping basket
   useEffect(() => {
    const totalPrice = productData.reduce(
      (acc, product) => acc + product.newPrice,
      0
    );
    setTotalPrice(totalPrice);
  }, [productData]);


  //handle the commander delivry button 
  const handleDeliveryAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };

    const handleCommanderClick = async () => {
    try {
      const response = await fetch('/api/commander/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          products: productData,
          adresse: deliveryAddress,
          totalPrice: totalPrice,
        }),
      });
      if (response.ok) {
        // clear the shopping basket
        setProductData([]);
        setTotalPrice(0);
        setDeliveryAddress('');
        alert('Commande passée avec succès !');
      } else {
        alert('Erreur lors de la commande.');
      }
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la commande.');
    }
  };
  
  //handle the quantity change 
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= productData.inventory) {
      setQuantity(newQuantity);
    }
  };

  //handle the increment and the decrement function 
  const handleIncrement = () => {
    if (quantity < productData.inventory) {
      handleQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };
  //handle the delete from the page 
  
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await fetch(`/api/products/${productData.id}/`, { method: 'DELETE' });
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!productData) {
    return null;
  }

    
  return (
    <div>
    <div className='flex justify-between PageContainer pt-[28px] pb-[32px] '>
      
      {/* add the "panier" card */}
      
      <div className='shadow-md mr-[17px] w-[980px] bg-white'>
        <div className='h-[85px] border-b border-gray-300 flex items-center text-xl font-semibold ' >
          <h1 className='ml-[52px]'>panier</h1>
        </div>
        <div className='px-[58px]'>
        {productData.length === 0 ? (  
        <p className="pt-20 text-2xl font-bold text-center ">la liste de vos panier est vide ! </p>
      ) : (
        <>
        {productData.map((product) => (
       <div className='border-b border-gray-300 h-[185px]' key={product.id}>
    
       {/* define card attribut */}
       <div className='flex justify-between px-[9px] '>
         <div className='flex'>
           <div className='w-[104px] h-[102px] bg-white'>
             <img src={product.image} alt="" /> 
           </div>
            
            <div className='ml-[38px]'>
           <h1 className='text-lg font-meduim'>{product.title}</h1> 
           <p className='font-normal text-md'>{product.description}</p>  
           <h1 className='font-semibold'>{product.inventory}articles seulement</h1>
            </div>
         </div>
         
         <div className='text-end'>
           <p className='text-2xl font-bold '>{product.unit_price} DA</p> 
           <div className='flex font-medium text-[16px] mt-[8px]'>
           <p className='pl-[3px]'> {product.unit_price}DA </p>
          {product.unit_price && <p className='bg-[#E50014] bg-opacity-10 text-[#E50014]  ml-[4px]'>-{product.unit_price}%</p> } 
           </div>
         </div>
       </div>
       {/* define delete and counter*/}
        <div className='flex justify-between mt-[28px] px-[9px]'>
         <div className='flex items-center font-semibold text-md text-[#800B8D]'>
          <img src={supp} alt="/" />
          <a onClick={handleDelete} className='pl-0.5 cursor-pointer' href="" >{isDeleting ? 'supprimer...' : 'supprimer'}</a>
         </div>
         
         <div className="flex items-center justify-center">
         <button
           className="w-[40px] h-[40px] font-bold text-3xl text-white bg-[#800B8D] rounded hover:bg-[#bf33cf] active:bg-[#f07ffd]"
           onClick={handleDecrement}
         >
           -
         </button>
         <span className="px-[25px] font-bold text-xl ">
           
         </span>
         <button
           className="w-[40px] h-[40px] font-bold text-3xl text-white bg-[#800B8D] rounded  hover:bg-[#bf33cf] active:bg-[#f07ffd]"
           onClick={handleIncrement}
         >
           +
         </button>
       </div>
        </div>
     </div>
       
        
       ))}
       </>
       )}
        </div>
      </div>
      
      
      {/* add the "resume de panier" card */}
      <div className="w-[328px] h-[337px] bg-white shadow-md shadow-gray-300 ">
        <div className='border-b border-gray-300 '>
        <h2 className="py-[28px] pl-[30px] pr-[104px] text-xl font-semibold ">resume du panier</h2>
        </div>
      
        <div className='px-[30px] flex items-center justify-between pt-[23px] pb-[52px] '>
        <span className='text-lg font-semibold'>Sous-total</span>
        <span className=" text-[#8A8888] font-semibold text-xl">{totalPrice}DA</span>
        </div>
        <div>
        
      </div>
      <div className="px-[30px] flex justify-between text-[#8A8888] items-center">
        <input type="text" placeholder='Adresse de livraison' className="w-[172px] text-lg focus:border-none focus:outline-none" value={deliveryAddress} onChange={handleDeliveryAddressChange}/>
        <BiMap size={20} />
      </div>
       <div className='px-[70px] mt-[51px] mb-[33px]'>
       <button class="w-[189px] h-[49px] text-[14px] font-bold text-white rounded-md bg-[#800B8D] hover:bg-[#bf33cf]  hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd]"   onClick={handleCommanderClick} >COMMANDER({totalPrice}DA)</button>
      </div>
     
    </div>
  
    </div>
    
   </div>
  )
}

export default Panier
