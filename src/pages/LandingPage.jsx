import React from 'react'
import AppStore from '../component/AppStore'
import Test from '../component/Test'
import CarteCadeau from '../component/cards/CarteCadeau'
import AdsCarte from '../component/cards/AdsCarte'
import { Hightech } from '../component/cards/Hightech'
import Stocklimite from '../component/cards/Stocklimite'
import Nouvaeaux from '../component/cards/Nouvaeaux'
import Offresspéciales from '../component/cards/Offresspéciales'
const LandingPage = () => {
  return (
    <>
   <Test/>
   <AdsCarte/>
   <Stocklimite/>
   <CarteCadeau/>
   <Offresspéciales/>
   <Nouvaeaux/>
   <Hightech/>
   <div className=' PageContainer h-[800px] flex justify-center text-center bg-white mt-6 pt-52'>
   </div>
   <AppStore/>
   
    </>
  )
}

export default LandingPage

{/* */}