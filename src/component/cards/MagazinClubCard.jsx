import React, { useEffect, useState } from 'react';
import magazin from '../assets/Group 340.png'
import club from '../assets/Rectangle 132.png'
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const MagazinClubCard = () => {
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
    <Link to='/Magazin club'>
    <div className='PageContainer h-[250px] bg-[#800B8D] flex justify-between mt-5'>
        <div className='relative'>
            <img src={magazin} alt="" className='ml-24  h-[240px]' />
            <h1 className=' text-2xl font-semibold  text-[#800B8D] absolute top-2 left-32'>REJOIGNEZ</h1>
            <h1 className='absolute text-5xl font-bold top-16 left-32 '>MAGAZIN</h1>
            <h1 className='absolute text-5xl font-bold tracking-widest text-white top-[135px] left-56'>CLUB</h1>
        </div>
            
            <animated.h1 style={h1Animation} className='text-center text-white w-[550px] mr-32 mt-3'>
            <p className='text-3xl font-semibold '>"Rejoignez notre magasin club aujourd'hui et bénéficiez de nombreux avantages exclusifs tels que des offres spéciales, des remises supplémentaires et des événements réservés uniquement aux membres !"</p>

            </animated.h1>

    </div>
    </Link>
    
  )
}

export default MagazinClubCard

