import React from 'react'
import AppStore from '../component/AppStore'
import Test from '../component/Test'
import CarteCadeau from '../component/cards/CarteCadeau'
import AdsCarte from '../component/cards/AdsCarte'
import { Hightech } from '../component/cards/Hightech'
import Stocklimite from '../component/cards/Stocklimite'
import Nouvaeaux from '../component/cards/Nouvaeaux'
import Offresspéciales from '../component/cards/Offresspéciales'
import Hightech1 from '../component/cards/Hightech1'
import OffresRamadan from '../component/cards/OffresRamadan'
import Plusdemandés from '../component/cards/Plusdemandés'
import Vurécemment from '../component/cards/Vurécemment'
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
    
   <Hightech1/>
   <OffresRamadan/>
   <Plusdemandés/>
   <Vurécemment/>
   
   <AppStore/>
   
    </>
  )
}

export default LandingPage

{/* */}