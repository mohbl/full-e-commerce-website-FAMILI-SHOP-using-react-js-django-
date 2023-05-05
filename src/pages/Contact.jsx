import React from 'react'
import Map from '../component/assets/Map (1).png'
import {AiFillYoutube , AiFillFacebook ,AiFillTwitterCircle} from 'react-icons/ai'
import instagram from '../component/assets/5296765_camera_instagram_instagram logo_icon (1).png'

const ContactUs = () => {

    return (
    <div name='Contact' className=' PageContainer bg-[#ffffff]'>
       

       <div className='p-4 m-4 '>
           
          <div className='p-8 text-center '>
          <h1 className='text-xl font-bold '> Contacter Nous</h1>
          <div className='flex justify-start p-2 my-4 '>
         
          <div className='flex flex-col '>
            <h1 className='p-3 text-xl font-bold text-left'>Ou nous trover</h1>
            <a href="https://www.google.com/maps/place/Famili+Shop+TissemsilT/@35.6149244,1.8083524,17z/data=!3m1!4b1!4m6!3m5!1s0x12868a41b26fc189:0xf1487993713e34b3!8m2!3d35.6149201!4d1.8105464!16s%2Fg%2F11cm_cklb3?hl=fr"> <img src={Map} alt=""  className='h-[286px] w-[700px] cursor-pointer'/> </a>
             <h1 className='p-1 text-xl font-bold text-left'> Détails du contact</h1>
             
             <div className='text-left text-sm  text-[#727272]'>
              <a href="https://www.google.com/maps/place/Famili+Shop+TissemsilT/@35.6149244,1.8083524,17z/data=!3m1!4b1!4m6!3m5!1s0x12868a41b26fc189:0xf1487993713e34b3!8m2!3d35.6149201!4d1.8105464!16s%2Fg%2F11cm_cklb3?hl=fr">  <p className='p-1'>JR76+X67, N14,Tissemsilt,Algeria</p> </a>
             <p className='p-1 '>025 32 50 11</p>
             <p className='p-1'>familishop@gmail.com</p>
             </div>
             {/* fb et twitter .. */}
             <div className='flex items-center justify-start gap-3 my-3'>
                        <a href="/" className='text-[#3b5998] ml-2  '><AiFillFacebook size={35}/></a>
                        <a href="/" className=''><img src={instagram} alt="" className='w-[27px] h-[27px]'/></a>
                        <a href="/" className='text-[#00acee]'><AiFillTwitterCircle size={35}/></a>
                        <a href="/" className='text-[#FF0000]'><AiFillYoutube size={35}/></a>
             </div>
             </div>
          {/* message */}
          <div className='relative px-5 '>  
           <h1 className='text-xl font-bold text-center'> Laisser un message</h1>
           <form action="https://formspree.io/f/mbjeavvz" method='POST' className=''>
              <div className='flex items-center justify-around '> 
              <input type="text" name='name' placeholder='name' className='h-[53px] w-[225px] border-2 p-3 my-4  ' required/>
              <input type="text" name='Prénom' placeholder='Prénom' className='h-[53px] w-[225px] border-2 p-3 my-4' required/>
              </div>
              <input type="email" name='email' placeholder='Address' className='h-[53px] w-[500px] border-2 p-3 my-4' required/>
              

              <textarea  name='message' placeholder='message' className='h-[200px] w-[500px] border-2 p-2 my-4'required />
              <div className='absolute right-8' >
              <button className='h-[46px] w-[100px]  bg-purple-700 text-white ' type='submit'>
              Envoyer
              </button>
              </div>
           </form>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ContactUs