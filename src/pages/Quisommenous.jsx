import React from 'react'
import Photo1 from '../component/assets/Rectangle 117.png'
import Photo2 from '../component/assets/Rectangle116.png'
import Photo3 from '../component/assets/Rectangle116(1).png'
import Photo4 from '../component/assets/Rectangle116(2).png'
import Photo5 from '../component/assets/Rectangle 118.png'

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
                    
        
        </div>
        <div className='flex flex-col w-[360px] h-[370px] p-3'>        
         <img src={Photo3} alt="" className='h-[300px]'/>
                    
         
        </div>
         
        <div className='flex flex-col w-[360px] h-[370px] p-3'>        
         <img src={Photo4} alt="" className='h-[300px]'/>
                    
         
        </div>
        </div>  
       
         <div className='flex justify-between p-2 '>
            <img src={Photo5} alt=""  className='p-2 w-[700px]'/>
            <h1 className='font-semibold'>Famili Shop - Votre destination en ligne pour des produits de qualité. Explorez notre vaste sélection d'articles et trouvez tout ce dont vous avez besoin pour votre famille, des vêtements et accessoires tendance aux produits pour la maison. Livraison rapide et service client attentif. Faites confiance à Famili Shop pour simplifier votre expérience d'achat en ligne.</h1>
         </div>
       
        </div>  
    </div>
  )
}

export default Quisommenous