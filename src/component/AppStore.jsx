import React from 'react'
import { AiFillApple } from "react-icons/ai";
import Cevital from '../component/assets/Cevital-Logo 1.png'
import Extra from '../component/assets/nouveau-logo-Extra 1.png'
import Adidas from '../component/assets/kisspng-logo-brand-adidas-sport-logo-versace-5b517f627aefe3 1.png'
import Geant from '../component/assets/pngwing 1.png'
import Puma from '../component/assets/pngegg (2) 1.png'
import Tchina from '../component/assets/kisspng-orange-juice-logo-algeria-drink-5b76f8e5533fe0 1.png'
import LG from '../component/assets/pngegg (1) 1.png'
import phones from '../component/assets/phones.png'
import Gplay from '../component/assets/google-play 1.png'


const AppStore = () => {
    
    return (
        <div className=' PageContainer' >
       
       
            {/* our oficial sponsor */}
            
       <div className='w-[1080px] h-[152px] flex items-center justify-between shadow mb-[115px] mx-auto  bg-white  '>
            <img src={Cevital} alt="" className='w-[140px]' />
            <img src={Extra} alt="" />
            <img src={Adidas} alt="" />
            <img src={Geant} alt="" className='w-[140px]' />
            <img src={Puma} alt="" />
            <img src={Tchina} alt="" />
            <img src={LG} alt="" className='w-[140px]' />
        </div>
       
        <div  className='h-[438px]  flex justify-around bg-white'>
           
        
            {/* Ameliorer votre experience */} 
            
            <div className='flex flex-col justify-center' >
                <h1 className='font-semibold text-[32px] ml-[50px] ' >Améliorez votre experience de visite avec  l’application mobile Famili Shop</h1>
                <p className='text-[16px] ml-[50px] mt-[39px]'>Téléchargez notre application gratuite</p>
                {/* app store && google play */}
                <div className='flex mt-[52px] ml-[50px] space-x-4 '>
                    
                    {/* App store */}
                    <div className='flex items-center text-white  bg-black w-[195px] h-[49px] rounded-md  '>
                        <AiFillApple size={40} className='text-white mr-[14px]' />
                        <div className='-space-y-1'>
                        <p className='text-[14px] text-white '> Download on the </p>
                        <p className='text-xl font-bold'> App Store</p>
                        </div>
                        
                    </div>
                    {/* Google play */}
                    <div className='flex items-center text-white  bg-black w-[195px] h-[49px] rounded-md  '>
                        <img src={Gplay} alt="" className='text-white mr-[14px] ml-2' />
                        <div className='-space-y-1'>
                        <p className='text-[14px] text-white '> Get it on</p>
                        <p className='text-xl font-bold'> Google Play</p>
                        </div>
  
                    </div>
                </div>
            </div >
            
            {/* phones */}
                

            <div className='mr-[70px] overflow-hidden'>
            <img src={phones} alt="" className='w-[800px] mt-12'/>
            </div> 

        </div>
        </div>
    )
}

export default AppStore