import React from 'react';
import {BiMap} from 'react-icons/bi'
import logo from './assets/logo.png'
import {FaSearch} from 'react-icons/fa'
import user from './assets/user.svg'
import heart from './assets/heart.svg'
import shoppingBag from './assets/shopping-cart.svg'
import { Link , NavLink } from 'react-router-dom';
import react from '@heroicons/react';
import { icons } from 'feather-icons';

function Header() {

  return (
    
    
      <div className='PageContainer'>
        
       
       <div class="flex flex-col  md:flex-row justify-between items-center text-sm md:text-base text-gray-500  ">
       <a class="cursor-pointer ml-[99px] " href="#">Need help? Call us: 025 32 50 11</a>
      <div class="flex items-center mr-[99px] md:text-center ">
      <BiMap class=""/>
      <a class="cursor-pointer" href="#">JR76+X67, N14,Tissemsilt,Algeria</a>
      </div>
       </div>
     

         
 
 <div className='flex items-center justify-between h-[102px] bg-[#FFFFFF] '>
  
  <Link className='ml-[89px] cursor-pointer' to='/' >
    <img  src={logo} alt="" />
  </Link>
  
<div className="flex items-center w-[520px] h-[38px] border-[3.5px] ml-[95px] rounded-md border-[#800B8D]">
  <input type="text" placeholder="Chercher un produit, une marque, ou une categorie" onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Chercher un produit, une marque, ou une categorie'} className="w-full h-full pl-2 outline-none g-transparent i" />
   <div className='bg-[#800B8D] h-[34px] w-[43.68px] flex justify-center items-center'>
    <div className='p-[5px] text-white '>
      <FaSearch size={20}/>
    </div>
  </div>
</div>

<div className='flex items-center mr-[65px]  '>
  <div className='flex items-center pl-[19px]'>
    <div>
      <img src={user} alt="" />
    </div>
    <Link className='pl-[4px] hover:text-[#800B8D] transition delay-100 duration-150' to='Signup&Login'>compte</Link>
  </div>
  <div className='flex items-center pl-[20px]'>
    <div>
      <img src={heart} alt="" />
    </div>
     <Link className='pl-[4px] hover:text-[#800B8D] transition delay-100 duration-150 ' to='Mes faoris' >Mes favoris</Link>
  </div>
  <div className='flex items-center pl-[20px]'>
    <div>
      <img src={shoppingBag} alt="" />
    </div>
    <Link className='pl-[4px] hover:text-[#800B8D] transition delay-100 duration-150 ' to='Panier' >Panier</Link>
  </div>
  
</div>
  
 </div>
 
      </div>
    
  );
}

export default Header;
//<a className='pl-[4px] hover:text-[#800B8D] transition delay-100 duration-150' href="#">compte</a>
