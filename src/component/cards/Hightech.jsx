import React from 'react';
import { animated, useSpring } from 'react-spring';
import bg from './assetsCards/Group 303.png';

export const Hightech = () => {
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
          config: { tension: 200, friction: 10 },
        });
        await next({
          color: '#fff',
          textShadow: '0px 0px 0px #fff',
          transform: 'translateY(-30px)',
          config: { tension: 200, friction: 10 },
        });
        await next({
          color: '#FBEB08',
          textShadow: '0px 0px 20px #FBEB08',
          transform: 'translateY(0px)',
          config: { tension: 200, friction: 10 },
        });
        await next({
          color: '#fff',
          textShadow: '0px 0px 0px #fff',
          transform: 'translateY(-15px)',
          config: { tension: 200, friction: 10 },
        });
        await next({
          color: '#FBEB08',
          textShadow: '0px 0px 20px #FBEB08',
          transform: 'translateY(0px)',
          config: { tension: 200, friction: 10 },
        });
        await next({ transform: 'translateY(-50px)', opacity: 0 });
      }
      cancel();
    },
    config: { mass: 5, tension: 500, friction: 50 },
    delay: 700,
  });

  return (
    <div className='PageContainer h-[244px]'>
      <div className='relative text-white'>
        <img src={bg} alt='' className='h-[244px]' />
        <animated.h1
          className='absolute text-[50px] font-bold left-16 right-0 text-center top-[90px]'
          style={h1Animation}
        >
          Meilleures <br /> Offres High Tech
        </animated.h1>
      </div>
    </div>
  );
};

export default Hightech;











//<h1 className='absolute text-[50px] font-bold left-16 right-0 text-center bottom-10'></h1>