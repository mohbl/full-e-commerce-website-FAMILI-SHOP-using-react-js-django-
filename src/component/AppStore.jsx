import React from 'react'
import { AiFillApple } from "react-icons/ai";
import Cevital from '../component/assets/Cevital-Logo 1.png'
import Adidas from '../component/assets/adida.webp'
import Geant from '../component/assets/pngwing 1.png'
import Puma from '../component/assets/pngegg (2) 1.png'
import ramy from '../component/assets/ramy.png'
import beko from '../component/assets/beko.png'
import phones from '../component/assets/phones.png'
import Gplay from '../component/assets/google-play 1.png'
import lisieure from '../component/assets/lesieur.jpeg'
import Djezzy from '../component/assets/Djezzy.png'
import nike from '../component/assets/nike.jpg'
import hodna from '../component/assets/hodna.png'
import dechatlon from '../component/assets/dechatlon.png'
import huawei from '../component/assets/dior.jpg'
import iphone from '../component/assets/apple.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const AppStore = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        cssEase: 'linear'
      };

    return (
        <div className=' PageContainer mt-[117px]' >
       
       
            {/* our oficial sponsor */}
            
            
  
            <div className="w-[1080px] h-[160px] shadow mb-[115px] mx-auto bg-white ">
      <Slider {...settings}>
        <img src={Cevital} alt="Cevital" className="w-[140px] h-[140px] px-2" />
        <img src={Adidas} alt="Adidas" className='w-[140px] h-[152px]'/>
        <img src={Geant} alt="Geant" className="w-[140px] h-[152px]" />
        <img src={Puma} alt="Puma" className='w-[140px] h-[152px]' />
        <img src={ramy} alt="ramy" className='w-[140px] h-[152px]' />
        <img src={beko} alt="LG" className="w-[140px] h-[152px]" />
        <img src={Cevital} alt="Cevital" className="w-[140px] h-[152px]" />
        <img src={Adidas} alt="Adidas" className='w-[140px] h-[152px]' />
        <img src={Geant} alt="Geant" className="w-[140px] h-[152px]" />
        <img src={Puma} alt="Puma" className='w-[140px] h-[152px]' />
        <img src={lisieure} alt="lisieure" className='w-[140px] h-[152px]'/>
        <img src={Djezzy} alt="LG" className="w-[140px] h-[152px]" />
        <img src={nike} alt="LG" className="w-[140px] h-[152px]" />
        <img src={hodna} alt="hodna" className="w-[140px] h-[152px]" />
        <img src={dechatlon} alt="lavache" className="w-[140px] h-[152px]" />
        <img src={huawei} alt="lavache" className=" h-[152px]" />
        <img src={iphone} alt="lavache" className=" h-[152px]" />
      </Slider>
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