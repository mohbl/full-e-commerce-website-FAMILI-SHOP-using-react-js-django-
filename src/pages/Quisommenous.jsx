import React from 'react'
import Photo1 from '../component/assets/Rectangle 117.png'
import Photo2 from '../component/assets/Rectangle 118.png'
const Quisommenous = () => {

  return (
    <div className='bg-white PageContainer'>
     <div className='flex flex-col'>
       <div>
        <img src={Photo1} alt="" />
       </div>
      <div className='flex items-center p-3 justify-evenly'>
         <div className='flex flex-col w-[360px] h-[370px] p-3  '>        
         <img src={Photo2} alt="" className='h-[300px]'/>
                    
        <div className='shadow-sm'> <h1 className='p-2 text-center'>text</h1> </div>
        </div>
        <div className='flex flex-col w-[360px] h-[370px] p-3'>        
         <img src={Photo2} alt="" className='h-[300px]'/>
                    
         <div className='shadow-sm'> <h1 className='p-2 text-center'>text</h1> </div>
        </div>
         
        <div className='flex flex-col w-[360px] h-[370px] p-3'>        
         <img src={Photo2} alt="" className='h-[300px]'/>
                    
         <div className='shadow-sm'> <h1 className='p-2 text-center'>text</h1> </div>
        </div>
        </div>  
       
         <div className='flex justify-between p-2 '>
            <img src={Photo2} alt=""  className='p-2 w-[700px]'/>
            <h1 className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
         </div>
       
        </div>  
    </div>
  )
}

export default Quisommenous