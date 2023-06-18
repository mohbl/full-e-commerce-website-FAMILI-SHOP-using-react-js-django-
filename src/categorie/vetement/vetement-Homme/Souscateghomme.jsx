import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import coupon from '../../../component/assets/—Pngtree—red coupon 10 off_6376552 1.png'
import AuthContext from '../../../context/AuthContext'
import { FaSearch } from 'react-icons/fa';

const Souscateghomme = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const { user, authTokens } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const { sousCategorieHomme } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleFilter();
  }, []);

  const handleFilter = async () => {
    try {
      setIsLoading(true); // Set isLoading to true before making the API call
      const response = await axios.get(`https://familishop.onrender.com/clothes/collection/${sousCategorieHomme}/?gender=M&min_price=${min}&max_price=${max}`);
      console.log(response.data);
      const shuffledProducts = response.data.sort(() => 0.5 - Math.random());
      const randomProducts = shuffledProducts.slice();
      setProducts(randomProducts);
      setIsLoading(false); // Set isLoading to false after receiving the response
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddToFavorites = (i) => {
    return async () => {
      try {
        if (user) {
          const headers = {
            "Authorization": `Bearer ${authTokens}`,
            "Content-Type": "application/json",
          };

          const requestData = {
            'product': products[i].id,
            'user': user.id,
          };

          let response = null;

          if (!products[i].isFavorited) {
            console.log('not in favorites')
            response = await axios.post(
              "https://familishop.onrender.com/favorites/",
              requestData,
              { headers }
            );
            console.log(response);
          } else {
            console.log('in favorites')
            response = await axios.delete(
              "https://familishop.onrender.com/favorites_remove/" + products[i].id,
              { headers }
            );
            console.log(response);
          }

          const newProducts = [...products];
          newProducts[i].isFavorited = !newProducts[i].isFavorited;
          setProducts(newProducts);
        } else {
          const favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
          const existingIndex = favorites.findIndex((fav) => fav.id === products[i].id);

          if (existingIndex !== -1) {
            favorites.splice(existingIndex, 1);
            setIsFavorited(false);
            alert('Product removed from favorites!');
          } else {
            favorites.push(products[i]);
            setIsFavorited(true);
            alert('Product added to favorites!');
          }

          sessionStorage.setItem('favorites', JSON.stringify(favorites));
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    };
  };

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <div className="PageContainer p-3 bg-[#E3E2E2]/40 ">
      <h1 className="text-[#8A8888] font-semibold text-lg mx-3 mb-2 "> vetement <span> &gt; </span> Vêtements Homme <span> &gt; </span> <span className="text-[#800B8D]"> {sousCategorieHomme} </span></h1>

      <div className=" bg-[#FFFFFF] rounded-sm  ">
        <div className="mx-4 ">
          <div className="mx-2 ">
            <h1 className="text-xl font-semibold "> filter par prix </h1>
          </div>
          <div className="m-2">
            <input
              type="text"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              placeholder="Min"
              className=" px-2 border-2 border-[#8A8888]/40 w-14 mx-1"
            /> <span className="text-[#727272]"> DA - </span>
            <input
              type="text"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              placeholder="Max"
              className=" px-2 border-2 border-[#8A8888]/40 w-14 mx-1"
            /> <span className="text-[#727272]"> DA </span>

            <button onClick={handleFilter} className="mx-2 bg-[#800B8D] rounded-sm p-1  text-white"> Rechercher </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full pt-[210px] pb-[400px]">
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-[#800B8D] rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-red-300 rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-[#FBEB08] rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        ) : (
          <>
            {products.length === 0 ? (
              <div className="flex flex-col items-center justify-center bg-white pt-60 pb-60">
                <FaSearch className="mb-4 text-4xl text-gray-500" />
                <h3 className="mb-2 text-xl font-bold">Aucun produit trouvé </h3>
                <p className="text-gray-600">Veuillez essayer une autre requête de filtrage.</p>
              </div>
            ) : (
              <div className='grid grid-cols-1 m-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
                {products.map((product, i) => (
                  <div className=' relative  m-2 border-2 rounded-lg cursor-pointer h-[340px] hover:shadow-lg ' key={product.id} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
                    <Link className=" w-[218px]  h-[250px] cursor-pointer " to={'/Product/' + product.id}>
                      <img
                        src={hoveredProductId === product.id ? product.src_image : product.alt_image}
                        className="object-cover w-[210px] h-[250px]  "
                        alt=''
                      />
                    </Link>

                    <Link to={'/Product/' + product.id} className="cursor-pointer">
                      <p className='pl-3 mt-3 text-base font-bold truncate '> {product.title}  </p>
                    </Link>

                    <div className='flex items-center justify-between mt-2'>
                      <div className='flex items-center justify-start pl-2 '>
                        <p className='mx-1 text-base font-bold '> {product.price}DA </p>
                        {product.promotion_status === '1' && (<p className='text-[#8A8888] text-sm line-through ml-2 '> {((product.price * 100) / (product.discount_percentage)).toFixed(2)}DA </p>)}
                      </div>

                      <div className="mx-2">
                        {product.isFavorited ? (
                          <FaHeart className="text-red-500 cursor-pointer hover:text-[#E50014]" onClick={handleAddToFavorites(i)} size={20} />
                        ) : (
                          <FaRegHeart className="text-gray-900 cursor-pointer hover:text-[#E50014]" onClick={handleAddToFavorites(i)} size={20} />
                        )}
                      </div>
                    </div>

                    {product.promotion_status === '1' && product.discount_percentage !== '0' && (
                      <div className="">
                        <img src={coupon} alt="" className='absolute top-0 left-1' />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Souscateghomme;
