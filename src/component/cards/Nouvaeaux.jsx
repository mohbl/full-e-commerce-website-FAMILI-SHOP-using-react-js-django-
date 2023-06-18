import React, { useState, useEffect, useContext } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import axios from 'axios';
import { Link } from "react-router-dom/dist";
import coupon from '../assets/—Pngtree—red coupon 10 off_6376552 1.png'
import { FaRegHeart, FaHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import new1 from '../assets/nouveau 1.svg'
import AuthContext from '../../context/AuthContext'

const Nouveaux = () => {
  const { user, authTokens } = useContext(AuthContext);

  const [isFavorited, setIsFavorited] = useState(false);

  // handle the add/delete to/from favorite list function
  const handleAddToFavorites = (i) => {
    return async () => {
      try {
        if (user) {
          // User is authenticated, make a POST request to the Django API
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
          // User is not authenticated, store the favorite in session storage
          const favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
          const existingIndex = favorites.findIndex((fav) => fav.id === products[i].id);

          if (existingIndex !== -1) {
            // Product already exists in favorites, remove it
            favorites.splice(existingIndex, 1);
            setIsFavorited(false);
            alert('Product removed from favorites!');
          } else {
            // Product does not exist in favorites, add it
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

  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  const [favoritesList, setIsFavoritesList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        // Only take the first 2 random products
        
        if (user) {
          const response = await axios.get('https://familishop.onrender.com/products/');
          console.log(response.data);
          const shuffledProducts = response.data.sort(() => 0.5 - Math.random());
          const randomProducts = shuffledProducts.slice(0, 5);
        const favorites = await fetch('https://familishop.onrender.com/favorites/', {
          method: "GET",
          headers: {
            Authorization: 'Bearer ' + authTokens
          }
        });

        const favorites_response = await favorites.json();
        console.log(favorites_response);

        setProducts(randomProducts.map(p => {
          const i = favorites_response.findIndex(v => v.product === p.id)
          p.isFavorited = i !== -1
          if (i !== -1) p.idFavorite = favorites.at(i).id;
          return p
        }))

        } else {




          const response = await axios.get('https://familishop.onrender.com/products/');
          console.log(response.data);
          const shuffledProducts = response.data.sort(() => 0.5 - Math.random());
          const randomProducts = shuffledProducts.slice(0, 5);

          const favorites = [
            {
              "id": 1,
              "title": "Chemise Loose Fit à col cubain en tissu jacquard",
              "description": "Collection de vêtements pour hommes élégants et confortables, pour toutes les occasions.",
              "quantity": 90,
              "price": 3500,
              "promotion_status": 1,
              "discount_percentage": 15,
              "collection_name": "Chemise",
              "src_image": "//lp2.hm.com/hmgoepprod?set=source[/13/46/13469ac2d53b387194eb9b1e8843d016e3f4770e.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
              "alt_image": "//lp2.hm.com/hmgoepprod?set=source[/ed/09/ed09a509cf88c4130b56e26f34050d59997352a7.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
              "taille": "s, m, l",
              "colors": "blanc, noir, beige",
              "comments": []
            }
          ]
          setIsFavoritesList(favorites)



          setProducts(randomProducts.map(p => {
              const i = Array.from(favorites).findIndex(v => v.product === p.id)
              p.isFavorited = i !== -1
              if (i !== -1) p.idFavorite = favorites.at(i).id;
              return p
            }))
        }
        


        


        
        // const favorites = await axios.get('https://familishop.onrender.com/favorites/', {
        //   headers: {
        //     Authorization: 'Bearer ' + authTokens
        //   }
        // })
        //   .then(response => response.data);
        // console.log('favorites ', favorites)
        // setProducts(randomProducts.map(p => {
        //   const i = favorites.findIndex(v => v.product === p.id)
        //   p.isFavorited = i !== -1
        //   if (i !== -1) p.idFavorite = favorites.at(i).id;
        //   return p
        // }));
      } catch (error) {
        console.log(error);
        alert(error.message);
      } finally {
        // Reset loading state
        setIsLoading(false);
      }
    })()
  }, []);

  return (
    <div className="PageContainer" id="nouvaeaux">
      {/* Nouveaux */}
      <div className='bg-[#ffffff] p-4 my-3'>
        <div className="p-2 bg-[#ffffff] shadow-lg">
          <div className='flex justify-between'>
            <h1 className='text-black font-semibold border-b-2 border-[#A078BC]'> Nouvelles Arrivées </h1>
            <Link to='Nouvelles'>
              <h1 className="cursor-pointer text-[#800B8D] border-b-2 border-[#A078BC] "> Voir Tous </h1>
            </Link>
          </div>

          <div className='grid grid-cols-1 m-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
          {isLoading ? (
              <div className="flex items-center ml-[365px] p-36">
                <div className="flex space-x-2 ">
              <div className="w-6 h-6 bg-[#800B8D] rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-red-300 rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-[#FBEB08] rounded-full animate-bounce"></div>
              <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce"></div>
            </div>
            </div>
              
            ) : (
            products.map((product, i) => (
              <div className='relative m-2 border-2 rounded-lg cursor-pointer h-[340px] hover:shadow-lg' key={product.id} onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
                <Link className="w-[218px] h-[250px] cursor-pointer" to={'/Product/' + product.id}>
                  <img
                    src={hoveredProductId === product.id ? product.src_image : product.alt_image}
                    className="object-cover w-[210px] h-[250px]"
                    alt=''
                  />
                </Link>

                <Link to={'/Product/' + product.id} className="cursor-pointer">
                  <p className='pl-3 mt-3 text-base font-bold truncate'> {product.title} </p>
                </Link>

                <div className='flex items-center justify-between mt-2'>
                  <div className='flex items-center justify-start pl-2'>
                    <p className='mx-1 text-base font-bold'> {product.price}DA </p>
                    <p className='text-[#8A8888] text-sm line-through ml-2 '> {((product.price * 100) / (product.discount_percentage)).toFixed(2)}DA </p>
                  </div>

                  <div className="mx-2">
                    {product.isFavorited ? (
                      <FaHeart className="text-red-500 cursor-pointer hover:text-[#E50014]" onClick={handleAddToFavorites(i)} size={20} />
                    ) : (
                      <FaRegHeart className="text-gray-900 cursor-pointer hover:text-[#E50014]" onClick={handleAddToFavorites(i)} size={20} />
                    )}
                  </div>
                </div>

                <div className="">
                  <img src={new1} alt="" className='absolute top-0 right-0' />
                </div>
              </div>
            ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nouveaux;
