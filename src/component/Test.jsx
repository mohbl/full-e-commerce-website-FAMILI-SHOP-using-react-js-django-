import React, { useState } from "react";
import { GiSleevelessJacket } from "react-icons/gi";
import { GiHealthPotion } from "react-icons/gi";
import {BiChild } from "react-icons/bi";
import {GiHeartNecklace } from "react-icons/gi";
import {GiWashingMachine } from "react-icons/gi";
import {FaShoppingBasket } from "react-icons/fa";
import {TbToolsKitchen2 } from "react-icons/tb";
import {TbShirtSport } from "react-icons/tb";
import {AiTwotoneHome } from "react-icons/ai";
import {SiFurrynetwork } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import ImageSlider from '../component/ImageSlider'







const Categories = () => {
  const [showVetement, setShowVetement] = useState(false);
  
 
  
  const handleVetementHover = () => {
    setShowVetement(true);
  };

  const handleVetementLeave = () => {
    setShowVetement(false);
  };
  
 
 
    
  
  

 

  return (
    <div  className='pt-1 space-x-2 PageContainer'> 
    
   <div className="flex">
   

   
     <ul className=" w-[257px] text-black bg-white ">
        <div className=' flex justify-start items-center  bg-[#800B8D] h-[46px] pl-0 pt-1 text-white cursor-pointer  '>
                        <FaBars size={20} className='m-4' />
                        <h1 className='text-xl' >categories</h1>
        </div>
        <li
         className='flex text-xl py-1 cursor-pointer hover:text-[#800B8D] p-4' 
          onMouseEnter={handleVetementHover}
          onMouseLeave={handleVetementLeave}
        >
         <GiSleevelessJacket size={25} className='mr-4'/>
          Vetement
        </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4'> <GiHealthPotion size={25} className='mr-4' /> Beauté & Santé </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4'> <BiChild size={25} className='mr-4' /> Bébé </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4'> <GiHeartNecklace size={25} className='mr-4' /> Accessoires </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4'> <GiWashingMachine size={25} className='mr-4' /> Electroménagers </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4'> <FaShoppingBasket size={25} className='mr-4' /> Supermarché </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4'> <TbToolsKitchen2 size={25} className='mr-4' /> Cuisine </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4'> <TbShirtSport size={25} className='mr-4' /> Articles de sport </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4'> <AiTwotoneHome size={25} className='mr-4' /> Meuble </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4'> <SiFurrynetwork size={25} className='mr-4' /> Animalrie </li>
      </ul>
     
        
      <div className='relative'>
      <div className="h-[477px] w-[940px] overflow-auto"> 
                   <ImageSlider/>
                   <div className="absolute text-5xl font-bold text-white top-[170px] left-[64px]">
        <h1 className="tracking-wide">Acheter en ligne </h1>
        <h1 className="tracking-wide">avec <span className="text-[#FBEB08]">FamiliShop</span> </h1>
       
        <a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded  group hover:ring-1 hover:ring-purple-500 left-[235px] top-[20px] ">
        <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-[#800B8D] via-[#8c2398] to-[#FBEB08]"></span>
       <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
       <span class="relative text-white text-2xl hover:text-[#FBEB08]">shop now</span>
       </a>
        
      </div>
                   
      </div>  
      {showVetement && (
        <div className="bg-white mt-[46px] border absolute top-0 left-1 h-[433px]" 
        onMouseEnter={handleVetementHover}
        onMouseLeave={handleVetementLeave}
        >
          <div className="flex text-[#8A8888] text-start justify-evenly w-[940px]">
            <ul className="">
            <h1  className='text-black border-b-2 border-[#D9D9D9] text-md font-bold my-2 '> Vêtements Femmes</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>T shirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Blouses & chemises</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Tops</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pulls & Sweatshirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pantalons & Shorts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Jupes & Robes</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Hijab & Foulard</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Vests & Manteaux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Combinaisons</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Sous vêtements</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussures</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussettes</li>
            </ul>
            <ul className="">
            <h1  className=' text-black border-b-2 border-[#D9D9D9] text-md font-bold my-2'> Vêtements Hommes</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>T shirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chemises & Polos</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pulls & Sweatshirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pantalons & Shorts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Vests & Manteaux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Sous vêtements</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussures</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussettes</li>
            </ul>
            <ul className="pr-[50px]">
            <h1  className=' text-black border-b-2 border-[#D9D9D9] text-md font-bold my-2'> Vêtements Enfants</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>T shirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chemises & Polos</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pulls & Sweatshirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pantalons & Shorts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Vests & Manteaux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Sous vêtements</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussures</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussettes</li>
            </ul>
          </div>
        
        </div>
        
      )}
      
      
      
      
      </div>
      
      
    
   </div>
      
     
    
    </div>
    
  );
};

export default Categories;
