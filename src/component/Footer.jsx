import React from 'react' 
import { Link , NavLink } from 'react-router-dom';
import Familishop from './assets/famili shop 2.png' 
import Paypal from './assets/paypal-logo-png-2116 2.png' 
import { TbTruckDelivery } from "react-icons/tb"; 
import {GiDiceTarget} from "react-icons/gi"
import {MdOutlineSecurity} from "react-icons/md"
import {BiSupport} from "react-icons/bi"
import {BiMap} from 'react-icons/bi'
import {BsTelephonePlus} from 'react-icons/bs'
import {BiTime} from 'react-icons/bi'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import instagram from '../component/assets/5296765_camera_instagram_instagram logo_icon (1).png'
import visaa from "../component/assets/visa-logo-png-2025 2.png"
import masterCard from "../component/assets/discover-logo-png-pic-5681 2.png"
const Footer = () => { 
  return ( 
    <div className='PageContainer'> 
        <div className=' h-[495px] bg-white z-10'> 
 
           
            <div className='h-[94px]  w-full bg-[#800B8D] flex justify-around items-center px-10      '> 
 
               
             {/* features bar : livrasion , guarantie , secure , ... */} 
              <div className='flex'> 
                  <div className='w-[60px] h-[60px] border-2  border-white rounded-full flex justify-center items-center text-white '> 
                   <TbTruckDelivery size={30} className='text-white '/> 
                   </div> 
                   <div className='flex flex-col mx-5'> 
                   <h1 className='text-xl text-white/70'>LIVRAISON</h1> 
                   <p className='text-white'> Fast, ....</p> 
                   </div> 
               </div> 
                 
 
               <div className='flex '> 
                  <div className='w-[60px] h-[60px] border-2  border-white rounded-full flex justify-center items-center text-white '> 
                   <MdOutlineSecurity size={30} className='opa'/> 
                   </div> 
                   <div className='flex flex-col mx-5'> 
                   <h1 className='text-xl text-white/70'>PAIEMENT SÉCURISÉ</h1> 
                   <p className='text-white'> Fast, ....</p> 
                   </div> 
               </div> 
 
               <div className='flex '> 
                  <div className='w-[60px] h-[60px] border-2  border-white rounded-full flex justify-center items-center text-white '> 
                   <BiSupport size={30} className='text-white '/> 
                   </div> 
                   <div className='flex flex-col mx-5'> 
                   <h1 className='text-xl text-white/70'>SUPPORT 24/7</h1> 
                   <p className='text-white'> Fast, ....</p> 
                   </div> 
               </div> 
 
               <div className='flex '> 
                  <div className='w-[60px] h-[60px] border-2  border-white rounded-full flex justify-center items-center text-white '> 
                   <GiDiceTarget size={30} className='text-white '/> 
                   </div> 
                   <div className='flex flex-col mx-5'> 
                   <h1 className='text-xl text-white/70'>GARANTIE</h1> 
                   <p className='text-white'> Fast, ....</p> 
                   </div> 
               </div> 
         
                </div> 
 
              {/* familishop photo  */} 
            <div className='h-[368px] w-full '> 
                       <div className='h-[290px] bg-white flex justify-around  '> 
                             <ul className='text-black my-7'> 
                                <li className='py-2'> <img src={Familishop} alt="" className='w-[115px] h-[61px]' /></li> 
                                <li className='flex items-center space-x-4'><BiMap size={20}/> <a href="" className='py-2 '>JR76+X67, N14,Tissemsilt,Algeria</a></li> 
                                <li className='flex items-center space-x-4'><BsTelephonePlus size={20}/> <a href="" className='py-2 '>025 32 50 11</a></li>    
                                <li className='flex items-center space-x-4'><BiTime size={20}/> <a href="" className='py-2 '>Ouvert, ferme à 21:00</a></li>  
              
                             </ul> 
                             <ul className='my-5 text-black ' > 
                                <li className='py-3 text-xl font-medium '><a href="">SERVICE CLIENT</a></li> 
                                <li className='py-1'><a href="">  • Mon compte</a></li> 
                                <Link className='py-1' to='Guide dachat'>• Guide d'achat</Link>
                                <li className='py-1'> • Horaire</li> 
                                <Link className='py-1' to='FAQ'> • FAQ</Link>
                              
                             </ul> 
                             <ul className='my-5 text-black'> 
                                <li className='py-3 text-xl font-medium '>ENTREPRISE</li> 
                                <li className='py-1'> • Qui sommes nous ?</li> 
                                <li className='py-1'> • Blog</li> 
                                <li className='py-1'> • contact</li> 
                             </ul> 
                      
                       </div> 
               {/* social media */}
                       <div className='flex items-center justify-end space-x-[15px] mr-[100px] pb-[15px]'>
                        <a href="" className='text-[#3b5998]'><AiFillFacebook size={35}/></a>
                        <a href="" className=''><img src={instagram} alt="" className='w-[27px] h-[27px]'/></a>
                        <a href="" className='text-[#00acee]'><AiFillTwitterCircle size={35}/></a>
                        <a href="" className='text-[#FF0000]'><AiFillYoutube size={35}/></a>
                       </div>
                {/* payment methods */} 
                <div className='flex items-center justify-center pt-1 border-t-2 '> 
                       <img src={masterCard} alt=""  className='px-2'/> 
                       <img src={visaa} alt=""  className='px-2'/> 
                       <img src={Paypal} alt="" className='px-2' /> 
 
                </div> 
 
            </div> 
            <div className='h-[33px] w-full bg-[#800B8D] flex justify-between items-center'> 
                <h1 className='ml-[70px] text-white/70'>Copyright © 2023....</h1> 
                <h1 className='text-white/70 mr-[70px]'>Term & Condition | Policy</h1>
            </div> 
             
 
        </div> 
       
    </div> 
  ) 
} 
 
export default Footer;