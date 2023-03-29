import React, { useState, useEffect } from "react";
import PanierCard from '../component/cards/PanierCard'

const Favorite = () => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    
    // fetch the favourite products data
    useEffect(() => {
        fetch("/api/favorite/")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setFavoriteProducts(data);
          })
          .catch((error) => {
            console.error("Error fetching favorite products:", error);
          });
      }, []);

      
  return (
    <div>
        <div className='flex justify-center PageContainer pt-[28px] '>
         <div className='shadow-md mx-[170px] w-[980px] h-auto'>
         <div className='h-[62px] border-b border-gray-300 flex items-center text-[24px] font-semibold ' >
          <h1 className='ml-[52px]'>Mes favoris</h1>
         </div>
         <div className='px-[58px] space-y-[36px] mt-[34px]'>
            
         {favoriteProducts.length === 0 ? (
        <p className="text-2xl font-bold text-center ">la liste de vos favoris est vide ! </p>
      ) : (
        <>
          {favoriteProducts.map((product) => (
            <PanierCard key={product.id} product={product} />
          ))}
        </>
      )}
        </div>
         </div>
        </div>
    </div>
  )
}

export default Favorite