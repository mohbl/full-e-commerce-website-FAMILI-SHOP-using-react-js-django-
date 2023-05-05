import React from 'react'
import first from './assetsCards/Group 283.png'
import two from './assetsCards/Group 286 (1).png'
import three from './assetsCards/Group 285 (2).png'
const AdsCarte = () => {
  return (
    <div className='PageContainer flex h-[260px]  mt-[15px] space-x-[26px] bg-white items-center '>
 <div>
    <img src={first} alt="" className='h-[260px]' />
 </div>

 <div className='relative cursor-pointer opacity-90 hover:shadow-xl hover:opacity-100 hover:border-2 hover:border-blak-200 '>
 <img src={two} alt="" className='h-[260px] w-[261px] brightness-75 ' />
 <h1 className='absolute text-3xl font-extrabold text-white top-24 left-11'>MEILLEURS</h1>
 <h1 className='absolute text-3xl font-extrabold text-white bottom-24 left-16'>OFFRES</h1>
 </div>

 <div className='relative cursor-pointer opacity-90 hover:shadow-xl hover:opacity-100 hover:border-2 hover:border-blak-200 '>
 <img src={three} alt="" className='h-[260px] w-[261px] brightness-75 ' />
 <h1 className='absolute text-3xl font-extrabold text-white top-24 left-11'>NOUVELLES</h1>
 <h1 className='absolute text-3xl font-extrabold text-white bottom-24 left-16'>ARRIVEES</h1>
 </div>

    </div>
  )
}

export default AdsCarte