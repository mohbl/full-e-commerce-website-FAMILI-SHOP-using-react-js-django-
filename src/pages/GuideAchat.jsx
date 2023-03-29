import React from 'react'
import Header from '../component/Header'
import here from '../component/assets/Rectangle 111.png'
import measure from "../component/assets/tape-measure 1.png"
import {HiOutlineLightBulb} from "react-icons/hi"
import one from "../component/assets/1.png"
import two from "../component/assets/2.png"
import three from "../component/assets/3.png"


const GuideAchat = () => {
  return (
   <div className=''>
   <div className=' PageContainer pt-[32px] pb-[32px] '>

     <div className='mx-[45px] relative' >
     <img src={here} alt="" />
     <div className='absolute right-[0px]  top-[213px]'>
     <p className='text-[22px] font-semibold  text-center h-[84px] w-[415px]' >TOUT EST UNE QUESTION DE<br /> CHOIX ET DU BON GUIDE D’ACHAT.</p>
     </div>
     </div>

   <div className='mx-[40px] mt-[30px] bg-white shadow'>
   <div className='flex justify-center mt-[41px]'>
    <h1 className='text-[32px] text-center font-semibold'>Guide des tailles adultes et enfants : comment <br /> prendre ses mesures ?</h1>
   </div>
   <div className=' mt-[53px] flex '> 
    <div className='h-[760px] border-2 shadow ml-[35px] w-[337px] '>
        <h1 className='text-[#800B8D]  text-[16px] font-medium ml-[10px]'>Bien prendre ses mensurations</h1>
        <div className='text-[#727272] text-[14px] space-y-4 mt-4'>
            <p className='ml-8'>Vêtements hommes</p> <p className='ml-10'>1. Blousons, manteaux, blazers, costumes,</p> <p className='ml-10'> pulls, sweats, polos, t-shirts, gilets  </p>
            <p className='ml-10'> 2. Chemises</p><p className='ml-10'> 3. Pantalons / jeans / bermudas / shorts </p><p className='ml-8'> Vêtements femmes</p>
            <p className='ml-10'>1. Blousons, manteaux, gilets, pulls, sweats </p><p className='ml-10'>t-shirts, tops ,polos</p><p className='ml-10'>2. Jupes et robes</p>
            <p className='ml-10'>3. Pantalons, jeans, bermudas et shorts </p> <p className='ml-8'>Chaussures et accessoires adultes</p>
            <p className='ml-10'>1. Chaussures et chaussettes</p><p className='ml-10'>2. Chapeaux, bonnets et casquettes</p>
            <p className='ml-10'> 3. Bagues</p><p className='ml-8'>Enfants</p>
            <p className='ml-10'> 1. De 3 à 5 ans : filles et garçons</p><p className='ml-10'>2. De 6 à 16 ans : filles et garçons</p>
            <p className='ml-10'>3. Chaussures  enfants</p>
        </div>
    </div>
    
    <div className='ml-[22px] '>
        <h1 className='text-[#800B8D] text-[24px] font-medium'>Bien prendre ses mensurations</h1>
        <div className='mt-[45px] '>
          <div className='ml-[338px]'>
            <img className='' src={measure} alt="" />
          </div>
          <div className='mt-[38px] text-[#800B8D] ml-[285px] '>
          <h1 className='text-[18px] '>COMMENT PRENDRE </h1>
          <h1 className='font-extrabold text-[18px] pl-6 pt-2 '>SES MESURES ?</h1> 
          </div>
            
            <div className=' h-[134px] pl-[32px] mt-[69px] border shadow mr-[36px]'>
                <div className='flex space-x-2 mt-[19px]'>
                  <HiOutlineLightBulb className='text-[#800B8D]' size={23}/>
                  <h2 className='font-medium '>conseil</h2>
                </div>
                <p className='text-[#727272] text-[13px] pr-[50px] mt-1 '>Avant de commencer, munissez vous d’un mètre ruban et d’un stylo. Aussi, pensez à toujours vous placer <br /> debout, sans chaussure et contre un mur pour plus de stabilité.</p>
            </div>
        </div>
        
        <div className='mt-[43px]'>
        <h1 className='text-[#800B8D] text-[24px] font-medium'>Vêtements hommes</h1>
        <div className='flex mt-[33px]'>
          <img src={one} alt="" />
          <div className='pl-1'>
            <h1 className='text-[20px] '>Blousons, manteaux, blazers, costumes, gilets, pulls, sweats, polos, t-shirts</h1>
            <h1 className='text-[#727272] text-[16px]'>Pour ce genre de vêtements, la mesure pour identifier la bonne taille est le tour de poitrine.</h1>
          </div>
        </div>
        <div className='mt-[55px] pl-[85px] '>
      <table class="w-[550px] h-[252px]">
         <thead>
          <tr class="bg-[#800B8D] text-white text-center font-normal">
            <th class="px-4 py-2 border-r">Tour de poitrine(cm)</th>
            <th class="px-4 py-2">Taille à commander</th>
         </tr>
        </thead>
        <tbody className='text-lg'>
         <tr class="bg-white text-center">
            <td class="px-4 py-2 ">76-82</td>
            <td class="px-4 py-2">XS</td>
         </tr>
         <tr class="bg-gray-200 text-center">
            <td class="px-4 py-2">83-91</td>
            <td class="px-4 py-2">S</td>
         </tr>
         <tr class="bg-white text-center">
            <td class="px-4 py-2">92-99</td>
            <td class="px-4 py-2">M</td>
         </tr>
         <tr class="bg-gray-200 text-center">
            <td class="px-4 py-2">100-107</td>
            <td class="px-4 py-2">L</td>
         </tr>
         <tr class="bg-white text-center">
           <td class="px-4 py-2">108-116</td>
           <td class="px-4 py-2">XL</td> 
        </tr>
        <tr class="bg-gray-200 text-center">
           <td class="px-4 py-2">117-124</td>
           <td class="px-4 py-2">XXL</td> 
        </tr>
       </tbody>
      </table>
        </div>
        <div className='flex mt-[33px]'>
          <img src={two} alt="" />
          <div className='pl-1'>
            <h1 className='text-[20px] '>Chemises</h1>
            <h1 className='text-[#727272] text-[16px]'>Pour les chemises, les mesures à prendre en compte sont le tour de cou et le tour de poitrine .</h1>
          </div>
        </div>
        <div className='mt-[55px] pl-[85px] '>
      <table class="w-[550px] h-[252px]">
         <thead>
          <tr class="bg-[#800B8D] text-white text-center font-normal">
            <th class="px-4 py-2 border-r">Tour de cou(cm)</th>
            <th class="px-4 py-2 border-r">Tour de poitrine(cm)</th>
            <th class="px-4 py-2 border-r">Taille à commander</th>
         </tr>
        </thead>
        <tbody className='text-lg'>
         <tr class="bg-white text-center">
            <td class="px-4 py-2 ">35-36</td>
            <td class="px-4 py-2">76-82</td>
            <td class="px-4 py-2">XS</td>
         </tr>
         <tr class="bg-gray-200 text-center">
            <td class="px-4 py-2">37-38</td>
            <td class="px-4 py-2">83-91</td>
            <td class="px-4 py-2">S</td>
         </tr>
         <tr class="bg-white text-center">
            <td class="px-4 py-2">39-40</td>
            <td class="px-4 py-2">92-99</td>
            <td class="px-4 py-2">M</td>
         </tr>
         <tr class="bg-gray-200 text-center">
            <td class="px-4 py-2">41-42</td>
            <td class="px-4 py-2">100-107</td>
            <td class="px-4 py-2">L</td>
         </tr>
         <tr class="bg-white text-center">
           <td class="px-4 py-2">43-44</td>
           <td class="px-4 py-2">108-116</td>
           <td class="px-4 py-2">XL</td> 
        </tr>
        <tr class="bg-gray-200 text-center">
           <td class="px-4 py-2">45-46</td>
           <td class="px-4 py-2">117-124</td>
           <td class="px-4 py-2">XXL</td> 
        </tr>
       </tbody>
      </table>
        </div>
        <div className='flex mt-[33px]'>
          <img src={three} alt="" />
          <div className='pl-1'>
            <h1 className='text-[20px] '>Pantalons , jeans, bermudas, shorts</h1>
            <h1 className='text-[#727272] text-[16px]'>Pour cette catégorie, le tour de taille est à prendre en compte pour bien identifier sa mesure.</h1>
          </div>
        </div>
        <div className='mt-[55px] pl-[85px] '>
        <table class="w-[550px] h-[252px]">
         <thead>
          <tr class="bg-[#800B8D] text-white text-center font-normal">
            <th class="px-4 py-2 border-r">Tour de taille(cm)</th>
            <th class="px-4 py-2">Taille à commander</th>
         </tr>
        </thead>
        <tbody className='text-lg'>
         <tr class="bg-white text-center">
            <td class="px-4 py-2 ">69-72</td>
            <td class="px-4 py-2">XS</td>
         </tr>
         <tr class="bg-gray-200 text-center">
            <td class="px-4 py-2">73-78</td>
            <td class="px-4 py-2">S</td>
         </tr>
         <tr class="bg-white text-center">
            <td class="px-4 py-2">79-86</td>
            <td class="px-4 py-2">M</td>
         </tr>
         <tr class="bg-gray-200 text-center">
            <td class="px-4 py-2">87-94</td>
            <td class="px-4 py-2">L</td>
         </tr>
         <tr class="bg-white text-center">
           <td class="px-4 py-2">95-103</td>
           <td class="px-4 py-2">XL</td> 
        </tr>
        <tr class="bg-gray-200 text-center">
           <td class="px-4 py-2">104-107</td>
           <td class="px-4 py-2">XXL</td> 
        </tr>
       </tbody>
      </table>
        </div>

        <div className='mt-[102px]'>
        <h1 className='text-[#800B8D] text-[24px] font-medium'>Chaussures et accessoires adultes</h1>
        <div className='flex mt-[36px]'>
          <img src={one} alt="" />
          <div className='pl-1'>
            <h1 className='text-[20px] '>Chaussures et chaussettes</h1>
            <h1 className='text-[#727272] text-[16px]'>La mesure indispensable pour identifier la bonne pointure est la longueur du pied.</h1>
          </div>
        </div>
        <div className='mt-[55px]  '>
        <table class=" mx-[36px]">
  <thead>
    <tr class="bg-[#800B8D] text-white text-center font-normal">
      <th class="w-1/4 px-4 py-2 border-r">Tour de taille(cm)</th>
      <th class="w-1/4 px-4 py-2 border-r">Taille à commander</th>
      <th class="w-1/4 px-4 py-2 border-r">Femme</th>
      <th class="w-1/4 px-4 py-2">Homme</th>
    </tr>
  </thead>
  <tbody class="text-lg">
    <tr class="bg-white text-center">
      <td class="w-1/4 px-4 py-2">69-72</td>
      <td class="w-1/4 px-4 py-2">XS</td>
      <td class="w-1/4 px-4 py-2 " rowSpan={3}>36-38</td>
      <td class="w-1/4 px-4 py-2 bg-gray-200 " rowSpan={3}>36-38</td>
    </tr>
    <tr class="bg-gray-200 text-center">
      <td class="w-1/4 px-4 py-2">73-78</td>
      <td class="w-1/4 px-4 py-2">S</td>
    </tr>
    <tr class="bg-white text-center">
      <td class="w-1/4 px-4 py-2">79-86</td>
      <td class="w-1/4 px-4 py-2">M</td>
    </tr>
    <tr class="bg-gray-200 text-center">
      <td class="w-1/4 px-4 py-2">87-94</td>
      <td class="w-1/4 px-4 py-2">L</td>
      <td class="w-1/4 px-4 py-2 bg-white " rowSpan={3}>39/42</td>
      <td class="w-1/4 px-4 py-2 " rowSpan={3}>39/42</td>
    </tr>
    <tr class="bg-white text-center">
      <td class="w-1/4 px-4 py-2">95-103</td>
      <td class="w-1/4 px-4 py-2">XL</td>
    </tr>
    <tr class="bg-gray-200 text-center">
      <td class="w-1/4 px-4 py-2">104-107</td>
      <td class="w-1/4 px-4 py-2">XL</td>
   </tr>
      </tbody>
      </table>
        </div>
        <div className=' h-[105px] pl-[32px] mt-[40px] border shadow mr-[36px]'>
           <div className='flex space-x-2 mt-[19px] '>
             <HiOutlineLightBulb className='text-[#800B8D]' size={23}/>
             <h2 className='font-medium '>conseil</h2>
            </div>
            <p className='text-[#727272] text-[13px] pr-[50px] mt-1 '>Vous êtes entre deux pointures ? Il vaut mieux prendre la pointure au-dessus pour plus de confort</p>
       </div> 
       <div className='flex mt-[55px]'>
          <img className='h-[60px] w-[41px]' src={two} alt="" />
          <div className='pl-1'>
            <h1 className='text-[20px] '>Chapeaux, bonnets et casquettes</h1>
            <h1 className='text-[#727272] text-[14px] '>Vous souhaitez porter un chapeau pour une occasion précise? Vous ne sortez (presque) sans votre bonnet <br />  ou casquette ? Mesurer votre tour de tête est indispensable pour éviter que l’accessoire soit trop lâche  ou aucontraire, trop serré.</h1>
          </div>
        </div>
        <div className='mt-[55px] pl-[85px] '>
      <table class="w-[550px] h-[252px]">
         <thead>
          <tr class="bg-[#800B8D] text-white text-center font-normal">
            <th class="px-4 py-2 border-r">Tour de tête(cm)</th>
            <th class="px-4 py-2">Taille à commander</th>
         </tr>
        </thead>
        <tbody className='text-lg'>
         <tr class="bg-white text-center">
            <td class="px-4 py-2 ">54-56</td>
            <td class="px-4 py-2">S</td>
         </tr>
         <tr class="bg-gray-200 text-center">
            <td class="px-4 py-2">56-58</td>
            <td class="px-4 py-2">M</td>
         </tr>
         <tr class="bg-white text-center">
            <td class="px-4 py-2">58-60</td>
            <td class="px-4 py-2">L</td>
         </tr>
         <tr class="bg-gray-200 text-center">
            <td class="px-4 py-2">60-62</td>
            <td class="px-4 py-2">XL</td>
         </tr>
       </tbody>
      </table>
        </div>


       
        </div>
        </div>

        
    </div>
   </div>
   </div>


   </div>
  </div>
  )
}

export default GuideAchat