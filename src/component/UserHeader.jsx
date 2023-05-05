import React from 'react';
import { useState ,useEffect  } from 'react';
import {BiMap} from 'react-icons/bi'
import logo from './assets/logo.png'
import {FaSearch} from 'react-icons/fa'
import { Link , NavLink } from 'react-router-dom';

import {AiOutlineHeart} from 'react-icons/ai' 
import {IoMdNotificationsOutline} from 'react-icons/io' 
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaChevronDown , FaChevronUp} from 'react-icons/fa'
import { GiConfirmed} from "react-icons/gi";
import {IoIosPeople} from 'react-icons/io'
import {BsPersonFillUp} from 'react-icons/bs'
import NotificationCard from './cards/NotificationCard';



function UserHeader() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
    setShowDropdown(false);
  };

  const handleNotificationClick = () => {
    setShowDropdown(!showDropdown);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    
    <div className={`PageContainer ${isFixed ? 'fixed top-0 w-full z-50 bg-white shadow-lg ' : ''}`}>
        
       
       <div class="flex flex-col  md:flex-row justify-between items-center text-sm md:text-base text-gray-500 ">
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

<div className='flex items-center mr-[41px]  '>
    
<div className="relative">
      <div
        className="flex items-center justify-center space-x-1 hover:text-[#800B8D] transition delay-100 duration-150 cursor-pointer w-[203px]  h-[40px] hover:bg-gray-100 "
        onClick={handleDropdownClick}
      >
        <AiOutlineUser size={25} />
        <h1>Bonjour,Maroua</h1>
        {isOpen ? (
          <FaChevronUp className="pt-1" size={16} />
        ) : (
          <FaChevronDown className="pt-1" size={16} />
        )}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white w-[200px] text-[#727272] z-50 ">
          <ul>
            <li className="flex items-center py-3 pl-[18px] space-x-1 cursor-pointer hover:text-black">
              <BsPersonFillUp size={22} />
              <span className='pl-3'>Mon compte</span>
            </li>
            <li className="flex items-center py-3 pl-[18px] space-x-1 cursor-pointer hover:text-black">
              <GiConfirmed size={22}  />
              <span className='pl-3 text-md'>Mes commandes</span>
            </li>
            <li className="flex items-center py-3 pl-[18px] space-x-1 cursor-pointer hover:text-black ">
              <IoIosPeople size={22}  />
              <span className='pl-3'>Magasin club</span>
            </li>
            <li className="flex items-center justify-center py-3 cursor-pointer text-xl text-center text-[#800B8D] font-semibold border-t-2 hover:font-bold  ">
              
              <span className='text-center'>Déconnexion</span>
            </li>
          </ul>
        </div>
      )}
    </div>
    
    <div className='relative'>
      <div
        className='flex items-center ml-[20px] hover:text-[#800B8D] transition delay-100 duration-150 cursor-pointer hover:bg-gray-100'
        onClick={handleNotificationClick}
      >
        <IoMdNotificationsOutline size={28} />
      </div>
      {showDropdown && (
        <div className='absolute right-0 mt-2 bg-white w-[248px] z-50'>
          
          <ul className='py-1'>
            <li className='flex px-4 py-2 text-xl '>
              Nouveau 
              <div className='h-4 ml-1 bg-gray-100 w-4 text-center mt-[8.5px] rounded-full'>
                <h1 className=' text-xs text-[#800B8D]'>1</h1>
              </div>
                
            </li>
            <NotificationCard/>
            <li className='flex px-4 py-2 text-xl '>
             Plus tot 
              <div className='h-4 ml-4 bg-gray-100 w-4 text-center mt-[8.5px] rounded-full'>
                <h1 className=' text-xs text-[#800B8D]'>1</h1>
              </div>
            </li>
            <NotificationCard/>
          </ul>
        </div>
      )}
    </div>
  <div className='flex items-center pl-[20px] hover:text-[#800B8D] transition delay-100 duration-150'>
  <Link to='Mes faoris' ><AiOutlineHeart size={25} /> </Link>
  </div>
  <div className='flex items-center pl-[20px] hover:text-[#800B8D] transition delay-100 duration-150 '>
    
    <Link to='Panier' ><AiOutlineShoppingCart size={25}/></Link>
  </div>
  
</div>
  
 </div>
 
      </div>
      
    
  );
}

export default UserHeader;