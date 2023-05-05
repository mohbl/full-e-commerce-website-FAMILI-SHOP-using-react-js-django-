import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import gift2 from '../component/cards/assetsCards/Group 293.png';
import cadeau from '../component/assets/Group 326.png'

const PageCarteCadeau1 = () => {

    const [animate, setAnimate] = useState(true);

    const h1Animation = useSpring({
      from: {
        opacity: 0,
        fontSize: '50px',
        color: '#fff',
        textShadow: '0px 0px 0px #fff',
        transform: 'translateY(-50px)',
      },
      to: async (next, cancel) => {
        while (true) {
          await next({ opacity: 1, transform: 'translateY(0px)' });
          await next({
            color: '#FBEB08',
            textShadow: '0px 0px 20px #FBEB08',
            config: { duration: 500 },
          });
          await next({ color: '#fff', textShadow: '0px 0px 0px #fff' });
          await next({
            color: '#FBEB08',
            textShadow: '0px 0px 20px #FBEB08',
            config: { duration: 500 },
          });
          await next({ transform: 'translateY(-50px)', opacity: 0 });
        }
        cancel();
      },
      config: { mass: 5, tension: 500, friction: 50 },
      delay: 500,
    });
    
    
  
    const pAnimation = useSpring({
      from: { opacity: 0, color: '#fff' },
      to: async (next) => {
        while (true) {
          await next({ opacity: 1, color: '#FBEB08' });
          await next({ opacity: 0.8, color: '#fff' });
          await next({ opacity: 1, color: '#FBEB08' });
        }
      },
      config: { tension: 200, friction: 10 },
      delay: 500,
    });
  
    useEffect(() => {
      const interval = setInterval(() => {
        setAnimate(false);
        setTimeout(() => setAnimate(true), 10);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className='mt-[32px] '>
   <div to='Carte Cadeau'>
     <div className='PageContainer bg-[#902FB6] h-[244px] flex mt-[25px]'>
      <div className='flex'>
        <img src={gift2} alt='' className='h-[256.13] w-[350px] pl-[23px]' />
        <div>
          <animated.h1
            style={h1Animation}
            className='text-[50px] text-white pb-[11px] pl-[30px] text-center font-bold pt-4'
          >
            Family Shop <span className='text-[#FBEB08]'>CARTE</span> <br />{' '}
            <span className='text-[#FBEB08]'>CADEAU</span>{' '}
          </animated.h1>
          <animated.p
            style={pAnimation}
            className='text-white text-[28px] font-medium tracking-wider'
          >
            Offrez la liberté de choix avec notre carte cadeau en ligne !
          </animated.p>
        </div>
      </div>
    </div>
    </div>
   <div className='PageContainer'>
    <div>
    <div className='flex mt-10 space-x-4'>
<p className='text-xl'>
"Vous méritez le meilleur, c'est pourquoi nous vous offrons la chance d'accumuler des points et de les échanger contre des produits exceptionnels. Alors, n'attendez plus et commencez à faire du shopping chez nous dès maintenant pour profiter de cette offre exclusive!"
</p>
<div>
    <p className='text-xl'> <span className='font-bold'>100 points de FamiliShop</span> valent <span className='font-bold'>1000 DA</span> que vous pouvez utiliser afin de régler vos achats éligibles sur FamiliShop.com</p>
    <a className="inline-block py-2 font-semibold px-6 w-[330px] text-center ml-4 mt-[24px] border border-[#800B8D] text-[#800B8D] hover:text-white hover:bg-[#800B8D] transition-all duration-300 hover:shadow-md hover:scale-105" href="#"> Activer cette option</a>

</div>
    </div>
    <div className='mx-2 h-[189px] bg-[#D0B4FF] mt-[113px] flex text-white'>
        <img src={cadeau} alt="" className='ml-[79px]' />
        <div className='text-[45px] mx-auto my-auto font-light tracking-wide'>
            <h1 className='racking-wide'>Comment <span className='font-semibold '>cumuler des points</span> sur</h1>
            <h1 className='text-center'> FamiliShop.com</h1>
        </div>
    </div>
    <p className='mx-1 text-xl tracking-wide mt-14'>Si vous cherchez un moyen simple et efficace de faire des achats tout en profitant de récompenses, alors la carte cadeau et les points de fidélité sont des options à considérer. En connectant simplement à votre compte, vous pouvez facilement activer l'option de carte cadeau et commencer à acheter des produits. Chaque produit acheté est associé à un certain nombre de points, qui sont ensuite accumulés sur votre compte. En cumulant ces points, vous pouvez échanger vos récompenses pour des produits supplémentaires ou des offres spéciales. C'est une solution idéale pour les clients réguliers, car cela leur permet de profiter de récompenses pour leur fidélité tout en faisant des achats quotidiens. Alors, ne manquez pas cette opportunité de gagner des points et d'obtenir des récompenses pour vos achats!</p>
    <div className='mx-2 h-[189px] bg-[#D0B4FF] mt-[140px] flex text-white'>
        
        <div className='text-[45px] mx-auto my-auto font-light tracking-wide'>
            <h1 className='racking-wide'>Comment <span className='font-semibold '>acheter avec vos points</span> sur</h1>
            <h1 className='text-center'> FamiliShop.com</h1>
        </div>
        <img src={cadeau} alt="" className='mr-[79px]' />
    </div>
    <div className='flex mt-[48px] space-x-20 mb-[303px] mx-10'>
        <div>
            <h1 className='text-xl font-bold text-center'>1. Découvrez des articles</h1>
            <p className='text-lg text-center'>Ajoutez des articles éligibles à votre panier sur FamiliShop.com et validez votre panier.</p>
        </div>
        <div>
            <h1 className='text-xl font-bold text-center'>2. Utilisez vos points</h1>
            <p className='text-lg text-center'>Sélectionnez votre Carte cadeaux au moment de la commande. Ensuite, choisissez le nombre de points que vous souhaitez appliquer à votre achat.</p>
        </div>
        <div>
            <h1 className='text-xl font-bold text-center'>3. Finalisez votre commande</h1>
            <p className='text-lg text-center'>Votre confirmation de commande affichera le nombre de points utilisés, déduit du total d’achat.</p>
        </div>
        
    </div>
   </div>
    </div>
   </div>
   
  )
}

export default PageCarteCadeau1