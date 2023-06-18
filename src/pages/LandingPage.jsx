import React from 'react'
import AppStore from '../component/AppStore'
import Test from '../component/Test'
import CarteCadeau from '../component/cards/CarteCadeau'
import AdsCarte from '../component/cards/AdsCarte'
import { Hightech } from '../component/cards/Hightech'
import Stocklimite from '../component/cards/Stocklimite'
import Nouvaeaux from '../component/cards/Nouvaeaux'
import Offresspéciales from '../component/cards/Offresspéciales'

import { MagazinClub } from './MagazinClub'
import MagazinClubCard from '../component/cards/MagazinClubCard'

import Hightech1 from '../component/cards/Hightech1'
import OffresRamadan from '../component/cards/OffresRamadan'
import Plusdemandés from '../component/cards/Plusdemandés'
import Vurécemment from '../component/cards/Vurécemment'
import Navbar from '../component/Navbar'

const LandingPage = () => {
 
  return (
    <>
   <Test/>
   <AdsCarte/>
   <MagazinClubCard/>
   <OffresRamadan/>
   <Plusdemandés/>
   <CarteCadeau/>
   <Stocklimite />
   <Offresspéciales id="offresspéciales"/>
   <Nouvaeaux id="nouvaeaux"/>
   <Hightech/>
   <Vurécemment/>
   <AppStore/>
   
    </>
  )
}

export default LandingPage

{/* <MagazinClub/>*/}