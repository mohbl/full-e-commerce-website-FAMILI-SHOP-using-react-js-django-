import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../component/Header'
import {BiMap} from 'react-icons/bi'
import PanierCard from '../component/cards/PanierCard'


export const Panier = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
 const [deliveryAddress, setDeliveryAddress] = useState('');

  //fetch the products api 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

   // calculate the total price of the products in the shopping basket
   useEffect(() => {
    const totalPrice = products.reduce(
      (acc, product) => acc + product.newPrice,
      0
    );
    setTotalPrice(totalPrice);
  }, [products]);


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
          products: products,
          adresse: deliveryAddress,
          totalPrice: totalPrice,
        }),
      });
      if (response.ok) {
        // clear the shopping basket
        setProducts([]);
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
    
  return (
    <div>
    <div className='flex justify-between PageContainer pt-[28px] pb-[32px] '>
      
      {/* add the "panier" card */}
      
      <div className='shadow-md mr-[17px] w-[980px] bg-white'>
        <div className='h-[85px] border-b border-gray-300 flex items-center text-xl font-semibold ' >
          <h1 className='ml-[52px]'>panier</h1>
        </div>
        <div className='px-[58px]'>
        {products.length === 0 ? (
        <p className="pt-20 text-2xl font-bold text-center ">la liste de vos panier est vide ! </p>
      ) : (
        <>
        {products.map((product) => (
        <PanierCard key={product.id} productId={product.id} />
        
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
