import React, { use } from 'react'
import { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart , FaStar, FaStarHalfAlt } from 'react-icons/fa';
import {FiShoppingCart} from 'react-icons/fi'
import image from '../component/assets/Rectangle 71.png'
import {BsChatSquareText} from 'react-icons/bs'
import axios from 'axios';
import { useParams } from 'react-router-dom/dist';

const ProductPage = () => {
  const [productData, setProductData] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [color, setColor] = useState('');
  const [percentage, setPercentage] = useState(0);
 const [comment, setComment] = useState('');
 const {id} = useParams();
  const colors = ['red', 'green', 'blue', 'yellow']; // get clors from the db it's just test
  const availableSizes = ['s', 'm', 'l', 'xl', 'xxl'];
  const productSizes = ['s', 'l', 'xxl']; // Example: Get the product sizes from your Django API
  
 

  // handle changing comment

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };
  
  // persontage remaining products bar
  
  
  const quantityDispo = 1;
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
    const response = await axios.post('https://familishop.onrender.com/carts/'+id);

    if (response.status !== 200) {
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
    const url = isFavorited ? `/favorites/${id}` : '';

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

  


  // fetch the product api 
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get('https://familishop.onrender.com/products/'+id);
        const data = response.data;
        setProductData(data);
      } catch (error) {
        alert(error.message);
      }
    };
  
    fetchProductData();
    console.log(id)
  }, []);
  

  //fetch the feedbacks about the product 
  
  

  return (
    <div>
        
        <div className='PageContainer pt-[28px] flex justify-between pb-[32px] '>
          <div className='first section'>
             <div className='h-[427px]  w-[849px]  bg-white border'>
            <div className=''>
             {/* product section */}
             {productData ? (
        <div className='flex mx-[43px] relative'>
          <div className='w-[297px] h-[347px] my-[40px] '>
             <div className=' h-[76px] flex justify-end pr-[24px] pt-[15px] '>
              <p className='bg-[#E50014] bg-opacity-10 text-[#E50014] w-[39px] h-[19px] '>-40%</p>
             </div>
             <div className='w-[228px] h-[201px] mx-[33px] flex justify-center '>
              <img src={image} alt="/"/>
             </div>
          </div>
          
          <div className='mt-[52px] ml-[7px]'>
            <div className=' text-[18px] font-medium'>
              <h1>{productData?.title} –</h1>
            </div> 
            <div className='text-sm text-left h-[58px] mt-2'>
              <p>{productData?.description}</p>
            </div>
           
            <div className='flex items-center space-x-4 mt-[20px]'>
              <h2 className='text-[#E50014] line-through text-[12px]'>14,750DA</h2>
              <h2 className='text-lg font-bold'>{productData?.unit_price} DA</h2>
            </div>
            <div>
              <p className='text-[12px] font-medium mt-2'>{productData?.inventory} articles restants</p>
            </div>
            <div className="w-full h-4 bg-gray-100 rounded-full mt-[20px]">
            <div className={`h-full rounded-full ${color}`} style={{ width: `${percentage}%` }} />
            </div>
            <div className="flex items-center">
            {colors.map((color) => (
          <div
            key={color}
            className="w-6 h-6 mt-5 mr-4 border-4 border-gray-300 rounded-full shadow-lg hover:border-none"
            style={{ backgroundColor: color }}
          />
            ))}
          </div>
          
          <div className='flex justify-between mt-4'>
            <div className=''>
              <h1 className='text-sm font-medium'>OPTIONS DISPONIBLES</h1>
              <div className="flex items-center mt-3 text-center">
        {availableSizes.map((size) => (
          <div
            key={size}
            className={`w-8 h-8 relative mr-4 shadow font-normal text-base transition-all duration-300 ease-in-out ${
              productSizes.includes(size) ? 'text-black hover:scale-110' : 'text-[#D9D9D9]'
            }`}
          >
            <div className="relative flex items-center justify-center">
              {!productSizes.includes(size) && (
                <div className="absolute h-[1px] w-10 bg-[#D9D9D9] top-3 transform rotate-45" />
              )}
              <span className="">{size}</span>
            </div>
          </div>
        ))}
      </div>
            </div>
             
             
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
             

           </div>
          <div>     
          </div>
         <button onClick={handleAddToPanier} className='bg-[#800B8D] h-[46px]  flex justify-center items-center hover:bg-[#bf33cf]  hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd] rounded font-semibold text-[13px] absolute bottom-[60px] right-3 w-[165px] '>
             <span className="text-white">AJOUTER AU PANIER</span>
             <FiShoppingCart size={20} className='text-white' />
             </button>
        </div>
        ) : (
      <div className="flex items-center justify-center w-full h-full mt-[210px]">
      <div className="flex space-x-2">
        <div className="w-6 h-6 bg-[#800B8D] rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-red-300 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-[#FBEB08] rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
      </div>
     </div>
        )}
            </div>
            
           </div>
           {/*generte laisse une commentaire*/}

           <div className='bg-white border h-[393px] mt-[18px]'>

           <div className='border-b border-gray-300  h-[75px]'>
                  <h2 className="py-[20px] px-[30px] text-2xl font-bold ">Laissez un commentaire</h2>
            </div>
            <div>
              <h1 className='py-[20px] px-[30px] text-xl font-semibold'>Décrivez votre experience</h1>
              <form >
        <div className="relative ml-9">
          <textarea
            className="px-3 py-2 border border-gray-300 rounded-lg resize-none w-[750px] focus:outline-none focus:ring focus:border-[#800B8D] "
            rows="4"
            placeholder="Leave a comment..."
            value={comment}
            onChange={handleInputChange}
          ></textarea>
          <div
            className={`h-1 bg-[#800B8D] absolute bottom-0 left-0 right-0 transition-width duration-1000 ${
              comment ? 'w-[750px]' : 'w-0'
            }`}
          ></div>
        </div>
        <button
          className={`mt-3 px-4 py-2 ml-[700px] bg-[#800B8D] text-white rounded-md hover:bg-[#bf33cf]  hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd] font-medium ${
            comment ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
          type="submit"
        >
          envoyer
        </button>
      </form>
            </div>
           </div>
           
          </div>
          


           {/* comments section*/}
           <div className='ml-[24px] shadow bg-white border'>
            <div className='border-b border-gray-300 w-[328px] h-[61px]'>
                  <h2 className="py-[20px] px-[30px] text-xl font-semibold ">commentaires sur ce produit</h2>
            </div>
            <div className='w-[328px] h-[366px]  '>
             
             <div className='px-[35px] pt-[19px] '>
             <div className="border-gray-300 borbder-b">
            <div className="flex justify-between mb-[8px] ">
            <div className="font-medium text-[14px] flex items-center ">
               <h1>mohamed belhadj</h1> 
              < BsChatSquareText size={15} className='text-[#800B8D] ml-[105px] '/>
            </div>           
           
           </div>
       
        <div className="text-[12px] mb-[6px]">
              <p>tres bon produit, j'adore ce parfum, tres frais</p> 
        </div>
    
        <div className=" text-[#8A8888] text-[10px] pb-[9px] ">
            <h2>30-01-2023</h2>
        </div>
        
      
      
    </div>
                
                
             </div>
            
             </div>
           
           </div>

          
           
           
           

        </div>
    </div>
  )
}

export default ProductPage;

 



