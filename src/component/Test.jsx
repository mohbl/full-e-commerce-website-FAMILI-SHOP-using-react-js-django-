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
  const [showBeaute, setShowBeaute] = useState(false);
  const [showBebe, setShowBebe] = useState(false);
  const [showElectro, setShowElectro] = useState(false);
  const [showAccesoire, setShowAccesoire] = useState(false);



 
  
  const handleVetementHover = () => {
    setShowVetement(true);
  };
  const handleVetementLeave = () => {
    setShowVetement(false);
  };
  //
  const handleBeauteHover = () => {
    setShowBeaute(true);
  };
  const handleBeauteLeave = () => {
    setShowBeaute(false);
  };
  //
  const handleElectroHover = () => {
    setShowElectro(true);
  };
  const handleElectroLeave = () => {
    setShowElectro(false);
  };
 //
  const handleBebeHover = () => {
    setShowBebe(true);
  };
  const handleBebeLeave = () => {
    setShowBebe(false);
  };
  //
  const handleAccessoireHover = () => {
    setShowAccesoire(true);
  };
  const handleAccessoireLeave = () => {
    setShowAccesoire(false);
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
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4' onMouseEnter={handleBeauteHover} onMouseLeave={handleBeauteLeave}> <GiHealthPotion size={25} className='mr-4' /> Beauté & Santé </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4' onMouseEnter={handleBebeHover} onMouseLeave={handleBebeLeave}> <BiChild size={25} className='mr-4' /> Bébé </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4' onMouseEnter={handleAccessoireHover} onMouseLeave={handleAccessoireLeave}> <GiHeartNecklace size={25} className='mr-4' /> Accessoires </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4' onMouseEnter={handleElectroHover} onMouseLeave={handleElectroLeave}> <GiWashingMachine size={25} className='mr-4' /> Electroménagers </li>
        <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D] pl-4' > <FaShoppingBasket size={25} className='mr-4' /> Supermarché </li>
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
            <h1  className=' text-lg  border-[#D9D9D9]  font-bold my-2 cursor-pointer text-[#000000] '> Vêtements Femmes</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>T shirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Blouses & chemises</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Tops</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pulls & Sweatshirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pantalons </li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Jupes & Robes</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Hijab & Foulard</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Vests & Manteaux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Combinaisons</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussures</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussettes</li>
            </ul>
            <ul className="">
            <h1  className='   border-[#D9D9D9] text-lg font-bold my-2 cursor-pointer text-[#000000] '> Vêtements Hommes</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>T shirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chemises & Polos</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pulls & Sweatshirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pantalons & Shorts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Vests & Manteaux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussures</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussettes</li>
            </ul>
            <ul className="pr-[50px]">
            <h1  className='  border-[#D9D9D9] text-md font-bold my-2 text-lg cursor-pointer text-[#000000] '> Vêtements Enfants</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>T shirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chemises & Polos</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pulls & Sweatshirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pantalons & Shorts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Vests & Manteaux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussures</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussettes</li>
            </ul>
          </div>
        
        </div>
        
      )}
      
      {showBeaute && (
        <div className="bg-white mt-[46px] border absolute top-0 left-1 h-[433px]" 
        onMouseEnter={handleBeauteHover}
        onMouseLeave={handleBeauteLeave}
        >
          <div className="flex text-[#8A8888] text-start justify-evenly w-[940px]">
            <ul className="">
            <h1  className=' border-[#D9D9D9] text-md font-bold my-2 text-lg cursor-pointer text-[#000000] '> Parfums</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Prfums femme</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Parfums homme</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Déodorants</li>
                    
            </ul>
            <ul className="">
            <h1  className='  border-[#D9D9D9] text-md font-bold my-2 text-lg cursor-pointer text-[#000000]'> Soins & Maquillage</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Soins du visage</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Soins de cheveux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Soins de corp</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Maquillage visage</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Maquillage yeux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Maquillage Lèvres</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Vernis à Ongles</li>
            </ul>
            <ul className="pr-[50px]">
            <h1  className='  border-[#D9D9D9] text-md font-bold my-2 text-lg cursor-pointer text-[#000000]'> Santé</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Equipement médicale</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Massage et relaxation</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Appareils</li>
                    
            </ul>
          </div>
        
        </div>
        
      )}
      {showBebe && (
        <div className="bg-white mt-[46px] border absolute top-0 left-1 h-[433px]" 
        onMouseEnter={handleBebeHover}
        onMouseLeave={handleBebeLeave}
        >
          <div className="flex text-[#8A8888] text-start justify-evenly w-[940px]">
            <ul className="">
            <h1  className=' border-[#D9D9D9] text-md font-bold my-2 text-lg cursor-pointer text-[#000000]'> Alimentation Bébé</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Nouriture pour Bébé</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Biberons</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Sucettes</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Bavoirs et chiffrons</li>
                     
            </ul>
            <ul className="">
            <h1  className='  border-[#D9D9D9] text-md font-bold my-2 text-lg cursor-pointer text-[#000000]'> Accessoires Bébé</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Poussettes</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>CSiège auto</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Jouets Bébé</li>
                    
            </ul>
            <ul className="pr-[50px]">
            <h1  className='  border-[#D9D9D9] text-md font-bold my-2 text-lg cursor-pointer text-[#000000]'> Soin Bébé</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Couches</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Lingettes</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Matelas à langer</li>
                    
            </ul>
          </div>
        
        </div>
        
      )}
      {showElectro && (
        <div className="bg-white mt-[46px] border absolute top-0 left-1 h-[433px]" 
        onMouseEnter={handleElectroHover}
        onMouseLeave={handleElectroLeave}
        >
          <div className="flex text-[#8A8888] text-start justify-evenly w-[940px]">
            <ul className="">
            <h1  className=' border-[#D9D9D9] text-md font-bold my-2 text-lg cursor-pointer text-[#000000]  '> Petit électroménager</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>pain</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Mixeur </li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Fer à repasser</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Préparation du café</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Aspirateur</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Cuit vapeur</li>
                    
            </ul>
            <ul className="">
            <h1  className='  border-[#D9D9D9] text-md font-bold my-2 text-lg cursor-pointer text-[#000000]'> Gros électroménager</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Cuisinière</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Plaque de cuisson</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Réfrigérateur</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Climatiseur</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Lave-vaisselle</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Lave-linge</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Hotte aspirante</li>
            </ul>
            <ul className="pr-[50px]">
            <h1  className='  border-[#D9D9D9] text-md font-bold my-2 text-lg cursor-pointer text-[#000000]'> High Tech</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>TV</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Accessoires High Tech </li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Sécurité et surveillance</li>
                    
            </ul>
          </div>
        
        </div>
        
      )}
      {showAccesoire && (
        <div className="bg-white mt-[46px] border absolute top-0 left-1 h-[433px]" 
        onMouseEnter={handleAccessoireHover}
        onMouseLeave={handleAccessoireLeave}
        >
          <div className="flex text-[#8A8888] text-start justify-evenly w-[940px]">
            <ul className="">
            <h1  className=' text-lg font-bold my-2 cursor-pointer text-[#000000]  '> Accessoires Femmes</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Sacs à main</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Lunettes</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Tops</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chapeaux & casquettes</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Montres</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Ceintures</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Bijoux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Echarpes</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Accessoires des cheveux</li>
                     
            </ul>
            <ul className="">
            <h1  className='  text-lg font-bold my-2 cursor-pointer text-[#000000] '> Accessoires Hommes</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Cravates </li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Lunettes</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chapeaux & casquettes</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Montres</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Ceintures</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Bijoux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Echarpes</li>
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
