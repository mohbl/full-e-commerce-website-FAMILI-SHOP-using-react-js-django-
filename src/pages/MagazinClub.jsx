import React, { useEffect, useState } from "react";
import magazin from "../component/assets/Group 340.png";
import club from "../component/assets/Rectangle 132.png";
import { useSpring, animated } from "react-spring";
import bronze from "../component/assets/Vector 46.png";
import bronze1 from "../component/assets/Vector (3).png";
import bronze2 from "../component/assets/Vector 49.png";
import bronze3 from "../component/assets/pngwing 6.png";

import silver from "../component/assets/Vector 45.png";
import silver1 from "../component/assets/Vector 50.png";
import silver2 from "../component/assets/Vector (2).png";
import silver3 from "../component/assets/pngwing 5.png";

import gold from "../component/assets/Vector 47.png";
import gold1 from "../component/assets/Vector 48.png";
import gold2 from "../component/assets/Vector (4).png";
import gold3 from "../component/assets/pngwing 7.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";

export const MagazinClub = () => {
  const [animate, setAnimate] = useState(true);
  const h1Animation = useSpring({
    from: {
      opacity: 0,
      fontSize: "50px",
      color: "#FBEB08",
      textShadow: "0px 0px 0px #fff",
      transform: "translateY(-50px)",
    },
    to: async (next, cancel) => {
      while (true) {
        await next({ opacity: 1, transform: "translateY(0px)" });
        await next({
          color: "#FBEB08",
          textShadow: "0px 0px 20px #FBEB08",
          config: { duration: 500 },
        });
        await next({ color: "#fff", textShadow: "0px 0px 0px #fff" });
        await next({
          color: "#FBEB08",
          textShadow: "0px 0px 20px #FBEB08",
          config: { duration: 500 },
        });
        await next({ transform: "translateY(-50px)", opacity: 0 });
      }
      cancel();
    },
    config: { mass: 5, tension: 500, friction: 50 },
    delay: 500,
  });

  const [buttonText, setButtonText] = useState("Rejoindre au MAGASIN CLUB");

  const handleJoinClub = () => {
    toast.success("Vous avez rejoint le MAGASIN CLUB !");
    setButtonText("Votre abonnement est actif!");
  };
  return (
    <div className="PageContainer mt-[32px] mb-[32px] ">
      <div className="relative">
        <img src={club} alt="" />
        <img src={magazin} alt="" className="absolute top-24 left-24" />
        <h1 className="absolute text-5xl font-semibold top-28 left-32 text-[#800B8D]">
          REJOIGNEZ
        </h1>
        <h1 className="absolute font-bold text-7xl top-52 left-40">MAGAZIN</h1>
        <h1 className="absolute font-bold text-white text-7xl top-[310px] left-[300px] tracking-widest">
          CLUB
        </h1>
        <animated.h1
          style={h1Animation}
          className="w-[418px] h-[500px] absolute top-[50px] left-[700px] text-center text-white"
        >
          <p className="font-medium  text-[31px] ">
            "Rejoignez notre magasin club aujourd'hui et bénéficiez de nombreux
            avantages exclusifs tels que des offres spéciales, des remises
            supplémentaires et des événements réservés uniquement aux membres !"
          </p>
        </animated.h1>
      </div>

      <div className="flex mt-10 mb-32 justify-evenly">
        <div className="relative">
          <img src={silver} alt="" className="h-[444px] w-[237px] mt-9  " />
          <div className="">
            <img src={silver1} alt="" className="absolute bottom-0" />
            <h1 className="absolute text-3xl font-bold text-white bottom-2 left-14">50000 DA <br /> <span className="text-lg"> achats par moi</span>  </h1>
          </div>          <img
            src={silver3}
            alt=""
            className="absolute top-10 left-[68px] h-[150px] w-[100px]"
          />
          <h1 className="text-[#a7a7a7] absolute top-48 text-4xl left-[60px] font-extrabold ">
            SILVER
          </h1>
          <div className="absolute flex flex-col space-y-6 top-60 left-[10px]">
            <div className="flex">
              <img src={silver2} alt="" className="" />
              <span> Remises sur la livraison.</span>
            </div>
            <div className="flex">
              <img src={silver2} alt="" className="" />
              <span className="">Tirages au sort des produits </span>
            </div>
            <div className="flex">
              <img src={silver2} alt="" className="" />
              <span></span>Accès a qlq promotions.
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={gold} alt="" className="h-[479px] w-[236px] " />
          <div className="">
            <img src={gold1} alt="" className="absolute bottom-0" />
            <h1 className="absolute text-3xl font-bold text-white bottom-2 left-14">100000 DA <br /> <span className="text-lg"> achats par moi</span>  </h1>
          </div>
          <img
            src={gold3}
            alt=""
            className="absolute top-1 left-[68px] h-[150px] w-[100px]"
          />
          <h1 className="text-[#ccac00] absolute top-[158px] text-4xl left-[63px] font-extrabold ">
            GOLD
          </h1>
          <div className="absolute flex flex-col space-y-2 top-56 left-[10px]">
            <div className="flex">
              <img src={gold2} alt="" className="" />
              <span className="pl-2"> Livraison gratuite.</span>
            </div>
            <div className="flex">
              <img src={gold2} alt="" className="" />
              <span className="pl-2">Remises exclusives. </span>
            </div>
            <div className="flex">
              <img src={gold2} alt="" className="" />
              <span className="pl-2">Cadeaux exceptionnels</span>
            </div>
            <div className="flex">
              <img src={gold2} alt="" className="" />
              <span className="pl-2">Accès aux ventes flash.</span>
            </div>
          </div>
        </div>
        <div className="relative mt-20 ">
          <img src={bronze} alt="" className="h-[395px] w-[236px]  " />
          <div className="">
            <img src={bronze2} alt="" className="absolute bottom-0" />
            <h1 className="absolute text-3xl font-bold text-white bottom-2 left-14">10000 DA <br /> <span className="text-lg"> achats par moi</span>  </h1>
          </div>
          
          <img
            src={bronze3}
            alt=""
            className="absolute top-1 left-[68px] h-[150px] w-[100px]"
          />
          <h1 className="text-[#8b4513] absolute top-[158px] text-4xl left-[40px] font-extrabold ">
            BRONZE
          </h1>
          <div className="absolute flex flex-col space-y-6 top-52 left-[10px]">
            <div className="flex">
              <img src={bronze1} alt="" className="" />
              <span className="pl-2"> Des offres spéciales</span>
            </div>
            <div className="flex">
              <img src={bronze1} alt="" className="" />
              <span className="pl-2">Réduction sur les achats </span>
            </div>
          </div>
        </div>
      </div>
      <Link
  className="ml-[450px] inline-block py-2 font-semibold px-6 w-[295px] text-center ml-4 mt-[10px] border border-[#800B8D] text-white hover:text-[#800B8D] bg-[#800B8D] hover:bg-white transition-all duration-300 hover:shadow-md hover:scale-105 mb-28"
  onClick={handleJoinClub}
>
  {buttonText}
</Link>

<ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
    </div>
  );
};
