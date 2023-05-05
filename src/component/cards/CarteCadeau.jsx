import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import gift2 from './assetsCards/Group 293.png';
import { Link } from 'react-router-dom';

const CarteCadeau = () => {
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
    <Link to='Carte Cadeau'>
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
    </Link>
   
  );
};

export default CarteCadeau;




