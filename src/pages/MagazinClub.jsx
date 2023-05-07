import React, { useEffect, useState } from 'react';
import magazin from '../component/assets/Group 340.png'
import club from '../component/assets/Rectangle 132.png'
import { useSpring, animated } from 'react-spring';
import bronze from '../component/assets/bronze.png'
import silver from '../component/assets/silver.png'
import gold from '../component/assets/gold.png'
export const MagazinClub = () => {
  const [animate, setAnimate] = useState(true);
  const h1Animation = useSpring({
    from: {
      opacity: 0,
      fontSize: '50px',
      color: '#FBEB08',
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
  return (
    <div className='PageContainer mt-[32px] mb-[32px] '>
        <div className='relative'>
            <img src={club} alt="" />
            <img src={magazin} alt="" className='absolute top-24 left-24' />
            <h1 className='absolute text-5xl font-semibold top-28 left-32 text-[#800B8D]'>REJOIGNEZ</h1>
            <h1 className='absolute font-bold text-7xl top-52 left-40'>MAGAZIN</h1>
            <h1 className='absolute font-bold text-white text-7xl top-[310px] left-[300px] tracking-widest'>CLUB</h1>
            <animated.h1 style={h1Animation} className='w-[418px] h-[500px] absolute top-[50px] left-[700px] text-center text-white'>
            <p className='font-medium  text-[31px] '>"Rejoignez notre magasin club aujourd'hui et bénéficiez de nombreux avantages exclusifs tels que des offres spéciales, des remises supplémentaires et des événements réservés uniquement aux membres !"</p>

            </animated.h1>
        </div>
        
        <div className='flex mt-10 mb-32 justify-evenly'>
  <img
    src={silver}
    alt=""
    className='h-[444px] w-[237px] mt-9 hover:h-[450px] hover:w-[242px]'
  />
  <img
    src={gold}
    alt=""
    className='h-[479px] w-[236px] hover:h-[485px] hover:w-[241px]'
  />
  <img
    src={bronze}
    alt=""
    className='h-[414px] w-[232px] mt-16 hover:h-[420px] hover:w-[237px]'
  />
</div>


    </div>
  )
}
