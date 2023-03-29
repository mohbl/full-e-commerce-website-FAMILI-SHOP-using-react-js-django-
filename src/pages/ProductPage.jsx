import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../component/Header'
import { FaRegHeart, FaHeart , FaStar, FaStarHalfAlt } from 'react-icons/fa';
import {FiShoppingCart} from 'react-icons/fi'
import FeedbackCard from '../component/cards/FeedbackCard';
const ProductPage = ({productId}) => {
  const [productData, setProductData] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [productRating, setProductRating] = useState(null);
  const [color, setColor] = useState('');
  const [percentage, setPercentage] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);
  const { title, reduction, image, description ,originalPrice ,newPrice,quantityDispo} = productData;
  
  // persontage remaining products bar
  
  useEffect(() => {
    if (quantityDispo <= 3) {
      setColor('bg-[#E50014]');
      setPercentage(30);
    } else if (quantityDispo <= 9) {
      setColor('bg-blue-500'); 
      setPercentage(80);
    } else {
      setColor('bg-green-500');
      setPercentage(100);
    }
  }, [quantityDispo]);


// handle the add to panier function 
  const handleAddToPanier = async () => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });

      if (!response.ok) {
        throw new Error('Could not add product to basket');
      }

      alert('Product added to basket!');
    } catch (error) {
      alert(error.message);
    }
  };

  // handle the add/delete to/from favorite list function
const handleAddToFavorites = async () => {
  try {
    const method = isFavorited ? 'DELETE' : 'POST';
    const url = isFavorited ? `/favorites/${productId}` : '';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    });

    if (!response.ok) {
      throw new Error(`Could not ${isFavorited ? 'remove' : 'add'} product to favorites`);
    }

    setIsFavorited(!isFavorited);
    alert(`Product ${isFavorited ? 'removed from' : 'added to'} favorites!`);
  } catch (error) {
    alert(error.message);
  }
};

  
 // handle the rating stars function
 const renderRatingStars = () => {
  if (!productRating) {
    return null;
  }

  const fullStars = Math.floor(productRating);
  const hasHalfStar = productRating - fullStars >= 0.5;

  const starIconClasses = "text-yellow-500";

  return (
    <div className="flex items-center h-[23px] ">
      <span className="">Avis</span>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-star-${i}`} className={starIconClasses} />
      ))}
      {hasHalfStar && <FaStarHalfAlt className={starIconClasses} />}
    </div>
  );
};

  // fetch the product api 
  useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch(``);
      const data = await response.json();
      setProductData(data);
    };

    fetchProductData();
  }, []);

  //fetch the feedbacks about the product 
  useEffect(() => {
    fetch(`/api/feedbacks/${productId}`)
      .then(response => response.json())
      .then(data => setFeedbacks(data))
      .catch(error => console.log(error));
  }, [productId]);

  return (
    <div>
        
        <div className='PageContainer pt-[28px] flex justify-between pb-[32px]'>
           {/* product section */}
           <div className='h-[427px] border-b border-gray-300 w-[849px]  bg-white '>
            <div className=''>
            {productData ? (
        <>
        <div className='flex mx-[43px]'>
          <div className='w-[297px] h-[347px] my-[40px] '>
             <div className=' h-[76px] flex justify-end pr-[24px] pt-[15px] '>
              <p className='bg-[#E50014] bg-opacity-10 text-[#E50014] w-[39px] h-[19px] '>-{reduction}%</p>
             </div>
             <div className='w-[228px] h-[201px] mx-[33px] flex justify-center '>
              <img src={image} alt="/"/>
             </div>
          </div>
          
          <div className='mt-[52px] ml-[7px]'>
            <div className=' text-[18px] font-medium'>
              <h1>{title}</h1>
            </div> 
            <div className='text-sm text-left h-[58px]'>
              <p>{description}</p>
            </div>
            <div>
            {renderRatingStars()}
            </div >
            <div className='flex items-center space-x-4 mt-[58px]'>
              <h2 className='text-[#E50014] line-through text-[12px]'>{originalPrice} DA</h2>
              <h2 className='text-lg font-bold'>{newPrice} DA</h2>
            </div>
            <div>
              <p className='text-[12px]'>{quantityDispo}articles restants</p>
            </div>
            <div className="w-full h-4 bg-gray-100 rounded-full mt-[10px]">
            <div className={`h-full rounded-full ${color}`} style={{ width: `${percentage}%` }} />
            </div>
          </div>
          
           <div className='mt-[55px] w-[180px] ' >
           <div className='flex justify-end'>
             {isFavorited ? (
            <FaHeart className="text-red-500 cursor-pointer hover:text-[#E50014]" onClick={() => setIsFavorited(false)} size={25}/>
            ) : (
            <FaRegHeart className="text-gray-900 cursor-pointer hover:text-[#E50014]" onClick={handleAddToFavorites} size={25} />
            )}
             </div> 
             <div className='text-white mt-[258px] text-left'>
             <button onClick={handleAddToPanier} className='bg-[#800B8D] h-[46px] w-full flex justify-center items-center hover:bg-[#bf33cf]  hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd] rounded font-semibold text-[13px]'>
             <span className="">ajouter au panier</span>
             <FiShoppingCart size={20} />
             </button>
             </div>

           </div>
          <div>     
          </div>
         
        </div>
        
     </>
    
     ) : (
      <p className='text-3xl text-center'>Loading...</p>
    )}
            </div>
           </div>


           {/* comments section */}
           <div className='ml-[24px] shadow-md bg-white'>
            <div className='border-b border-gray-300 w-[328px] h-[61px]'>
                  <h2 className="py-[20px] px-[30px] text-xl font-semibold ">commentaires sur ce produit</h2>
            </div>
            <div className='w-[328px] h-[366px] overflow-y-scroll '>
             
             <div className='px-[35px] pt-[19px] '>
             {feedbacks.map(feedback => (
             <FeedbackCard key={feedback.commentId} commentId={feedback.commentId} />
              ))}
                
                
             </div>
            
             </div>
           
           </div>
           

        </div>
    </div>
  )
}

export default ProductPage;

 



