import React from 'react'

import Photo1 from '../component/assets/Rectangle 117.png'
import Photo2 from '../component/assets/Rectangle 117 (1).png'
import Photo3 from '../component/assets/Rectangle 117 (2).png'
import Photo4 from '../component/assets/Rectangle 117 (3).png'
import Photo5 from '../component/assets/Rectangle 117 (4).png'
import Photo6 from '../component/assets/Rectangle 117 (5).png'
import Photo7 from '../component/assets/Rectangle 117 (6).png'
import Photo8 from '../component/assets/Rectangle 117 (7).png'
import Photo9 from '../component/assets/Rectangle 117 (8).png'





const Lescadeaux = () => {
 
  
 return (
    <div className='PageContainer  bg-[#E3E2E2]/50 mt-10  mb-20' >
       <div className=' bg-[#ffffff] p-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 space-y-2 justify-items-center '>
         
       <div className='flex flex-col w-[300px] h-[300px] p-3  '>        
         <img src={Photo1} alt="" className='h-[300px]'/>
                    
        <div className='shadow-md'> 
        <h1 className='mt-2 text-sm text-center'> Robot Pétrin </h1> 
        <h1 className='mx-1 text-xl italic font-bold text-center '> 100 point</h1> 
        </div>
        </div>


        <div className='flex flex-col w-[300px] h-[300px] p-3  '>        
         <img src={Photo2} alt="" className='h-[300px]'/>
                    
        <div className='shadow-md'> 
        <h1 className='mt-2 text-sm text-center'> Réfrigérateur intelligent </h1> 
        <h1 className='mx-1 text-xl italic font-bold text-center '> 500 point</h1> 
        </div>
        </div>
        
        <div className='flex flex-col w-[300px] h-[300px] p-3  '>        
         <img src={Photo3} alt="" className='h-[300px]'/>
                    
        <div className='shadow-md'> 
        <h1 className='mt-2 text-sm text-center'> Piscine enfant Gonflable  </h1> 
        <h1 className='mx-1 text-xl italic font-bold text-center '> 50 point</h1> 
        </div>
        </div>

        <div className='flex flex-col w-[300px] h-[300px] p-3  '>        
         <img src={Photo4} alt="" className='h-[300px]'/>
                    
        <div className='shadow-md'> 
        <h1 className='mt-2 text-sm text-center'> Aspirateurs balais Jet </h1> 
        <h1 className='mx-1 text-xl italic font-bold text-center '> 150 point</h1> 
        </div>
        </div>
        <div className='flex flex-col w-[300px] h-[300px] p-3  '>        
         <img src={Photo5} alt="" className='h-[300px]'/>
                    
        <div className='shadow-md'> 
        <h1 className='mt-2 text-sm text-center'> Table de Salle à Manger </h1> 
        <h1 className='mx-1 text-xl italic font-bold text-center '> 200 point</h1> 
        </div>
        </div>
        <div className='flex flex-col w-[300px] h-[300px] p-3  '>        
         <img src={Photo6} alt="" className='h-[300px]'/>
                    
        <div className='shadow-md'> 
        <h1 className='mt-2 text-sm text-center'> Aspirateurs balais Jet </h1> 
        <h1 className='mx-1 text-xl italic font-bold text-center '> 150 point</h1> 
        </div>
        </div>
        <div className='flex flex-col w-[300px] h-[300px] p-3  '>        
         <img src={Photo7} alt="" className='h-[300px]'/>
                    
        <div className='shadow-md'> 
        <h1 className='mt-2 text-sm text-center'> Sony PlayStation 5 </h1> 
        <h1 className='mx-1 text-xl italic font-bold text-center '> 2000 point</h1> 
        </div>
        </div>
        <div className='flex flex-col w-[300px] h-[300px] p-3  '>        
         <img src={Photo8} alt="" className='h-[300px]'/>
                    
        <div className='shadow-md'> 
        <h1 className='mt-2 text-sm text-center'> Apple iPhone 14 Pro Max </h1> 
        <h1 className='mx-1 text-xl italic font-bold text-center '> 1000 point</h1> 
        </div>
        </div>
        <div className='flex flex-col w-[300px] h-[300px] p-3  '>        
         <img src={Photo9} alt="" className='h-[300px]'/>
                    
        <div className='shadow-md'> 
        <h1 className='mt-2 text-sm text-center'> Poussette Bébé </h1> 
        <h1 className='mx-1 text-xl italic font-bold text-center '> 200 point</h1> 
        </div>
        </div>



    </div>
    </div>
  )
}
  
export default Lescadeaux