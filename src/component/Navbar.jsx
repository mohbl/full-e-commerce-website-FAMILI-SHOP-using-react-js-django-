import React, { useState , useEffect} from 'react'
import { FaBars } from "react-icons/fa";
import { MdAccessibility } from "react-icons/md";
import Photo from "../component/assets/Photo-1.png"






const Navbar = () => {
const [vet , setvet]=useState(false)

    return (
        <div name='NAvbar' className=' PageContainer'>
            
            {/* Navbar menu */}
            <div className='flex justify-start h-[466px]'>
                <div className='flex flex-col'>
                    <div className=' flex justify-start items-center  bg-[#800B8D] h-[46px] w-[225.5px] pl-0 pt-1 text-white cursor-pointer  '>
                        <FaBars size={20} className='m-4' />
                        <h1 className='text-xl' >categorie</h1>
                    </div>
                    <div className='flex justify-start bg-white ' >
                        <ul className='p-4 text-black '>
                            <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D]' onClick={()=>setvet(!vet)}> <MdAccessibility size={25} className='mr-4'  /> Vetement </li>
                            <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D]'> <MdAccessibility size={25} className='mr-4' /> Beauté & Santé </li>
                            <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D]'> <MdAccessibility size={25} className='mr-4' /> Bébé </li>
                            <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D]'> <MdAccessibility size={25} className='mr-4' /> Accessoires </li>
                            <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D]'> <MdAccessibility size={25} className='mr-4' /> Electroménagers </li>
                            <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D]'> <MdAccessibility size={25} className='mr-4' /> Supermarché </li>
                            <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D]'> <MdAccessibility size={25} className='mr-4' /> Cuisine </li>
                            <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D]'> <MdAccessibility size={25} className='mr-4' /> Articles de sport </li>
                            <li className='flex text-xl py-2 cursor-pointer hover:text-[#800B8D]'> <MdAccessibility size={25} className='mr-4' /> Meuble </li>
                            <li className='flex text-xl py-1 cursor-pointer hover:text-[#800B8D]'> <MdAccessibility size={25} className='mr-4' /> Animalrie </li>
                        </ul>
                         
                    </div>
                </div>
                  <div className='relative '>
                   <div>
                    <img src={Photo} alt="" className='h-[510px] pl-1'/>
                   </div>
                  <div className={ vet ?  ' flex justify-evenly  absolute top-0  left-0 h-full w-full bg-white shadow-md duration-1000 ease-in-out  mt-[46px] ' :'absolute top-0 left-[-100%] h-full w-[500px] bg-white duration-700 mt-[46px] shadow-md  ' }>
                   <ul className='text-[#8A8888] text-start'>
                     <h1  className='text-black border-b-2 border-[#D9D9D9] text-md font-bold my-5 '> Vêtements Femmes</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>T shirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Blouses & chemises</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Tops</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pulls & Sweatshirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pantalons & Shorts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Jupes & Robes</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Hijab & Foulard</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Vests & Manteaux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Combinaisons</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Sous vêtements</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussures</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussettes</li>
                    
                   </ul>
                   <ul className='text-[#8A8888]  text-start'>
                     <h1  className=' text-black border-b-2 border-[#D9D9D9] text-md font-bold my-5'> Vêtements Hommes</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>T shirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chemises & Polos</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pulls & Sweatshirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pantalons & Shorts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Vests & Manteaux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Sous vêtements</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussures</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussettes</li>
                   </ul>
                   <ul className='text-[#8A8888] text-start'>
                   <h1  className=' text-black border-b-2 border-[#D9D9D9] text-md font-bold my-5'> Vêtements Enfants</h1>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>T shirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chemises & Polos</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pulls & Sweatshirts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Pantalons & Shorts</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Vests & Manteaux</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Sous vêtements</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussures</li>
                     <li className='my-2 hover:text-[#000000] cursor-pointer'>Chaussettes</li>
                    
                   </ul>
                  </div>
                  </div>
                
            </div>
        </div>
    )
}

export default Navbar