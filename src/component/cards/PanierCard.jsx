import React from 'react'
import { useState, useEffect } from 'react';
import supp from './assetsCards/trash-2.svg'

const PanierCard = ({ productId }) => {
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const { title, reduction, image, description ,originalPrice ,newPrice,quantityDisponible} = product;


  //fetch the date from db 
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await fetch(`/api/products/${productId}/`);
  //       const data = await response.json();
  //       setProduct(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchProduct();
  // }, [productId]);


  //handle the quantity change 
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.quantityDisponible) {
      setQuantity(newQuantity);
    }
  };

  //handle the increment and the decrement function 
  const handleIncrement = () => {
    if (quantity < product.quantityDisponible) {
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
      await fetch(`/api/products/${productId}/`, { method: 'DELETE' });
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (!product) {
    return null;
  }
  
  return (
  <div className='border-b border-gray-300 h-[185px]'>
    
    {/* define card attribut */}
    <div className='flex justify-between px-[9px] '>
      <div className='flex'>
        <div className='w-[104px] h-[102px] bg-white'>
          <img src={image} alt="" /> 
        </div>
         
         <div className='ml-[38px]'>
        <h1 className='text-lg font-meduim'>{title}</h1> 
        <p className='font-normal text-md'>{description}</p>  
        <h1 className='font-semibold'>{quantityDisponible}articles seulement</h1>
         </div>
      </div>
      
      <div className='text-end'>
        <p className='text-2xl font-bold '>{newPrice} DA</p> 
        <div className='flex font-medium text-[16px] mt-[8px]'>
        <p className='pl-[3px]'> {originalPrice}DA </p>
       {reduction && <p className='bg-[#E50014] bg-opacity-10 text-[#E50014]  ml-[4px]'>-{reduction}%</p> } 
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
    
  )
}

export default PanierCard;