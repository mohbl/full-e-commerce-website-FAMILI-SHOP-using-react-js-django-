import React, { useState, useEffect, useContext } from "react";
import supp from "../component/cards/assetsCards/trash-2.svg";
import { FiShoppingCart } from "react-icons/fi";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favorite = () => {
  const [productData, setProductData] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const { user , authTokens } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);

  // fetch the favourite products data
  useEffect(() => {
    if (user) {
      (async () => {try {
          const response = await axios.get('https://familishop.onrender.com/favorites/', {
            headers: {
              Authorization:'Bearer '+authTokens
            }
          });
          setProductData(response.data);
        } catch(err) {
          console.log(err)
        }})()
    } else {
      const panier = JSON.parse(sessionStorage.getItem("favorites"));
      console.log(panier);
      setProductData(panier);
    }
  }, []);

  useEffect(() => {
    console.log(productData);
  }, [productData]);

//delete from fav list 
const removeProductFromFav = (index) => {
  return async () => {
    const filteredProducts = productData.filter((v, i) => i !== index);
    setProductData(filteredProducts);
    if (!user) {
      sessionStorage.setItem("favorites", JSON.stringify(filteredProducts));
    } else {
      // use your api
      console.log(productData)
      await axios.delete(
        "https://familishop.onrender.com/favorites_remove/" + productData.at(index).product,
        {
          headers: {
            Authorization: "Bearer " + authTokens,
          },
        }
      );
    }
  };
};


// ad to cart 

const handleAddToCart = (index) => {
  return async () => {
    try {
      if (user) {
        // User is authenticated, make a POST request to the Django API
        const newProducts = [...productData];
        newProducts.at(index).inCart = !newProducts.at(index).inCart;
        setProductData(newProducts);
        if(productData.at(index).inCart) {
          const response = await axios.post(
            "https://familishop.onrender.com/panier_add/",
            {
              product_id: productData.at(index).id, // Adjust the payload based on your API requirements
              userId: user.id, // Adjust the payload based on your API requirements
              quantity: quantity
            },
            {
              headers: {
                Authorization: "Bearer " + authTokens,
              },
            }
          );
          toast.success('Produit ajouté aux panier !', {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          const response = await axios.delete(
            "https://familishop.onrender.com/panier_remove/"+productData.at(index).id,{
              headers: {
                Authorization: "Bearer " + authTokens,
              },
            }
          );
          toast.error("Produit supprimé de panier!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else {
        // User is not authenticated, store the favorite in session storage
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const existingIndex = cart.findIndex(
          (pan) => pan.id === productData.id
        );

        if (existingIndex !== -1) {
          // Product already exists in favorites, remove it
          cart.splice(existingIndex, 1);
          // setIsFavorited(false);
          // productData.inCart = false;
          setProductData((prev) => {
            return {
              ...prev,
              inCart: false,
            };
          });
          toast.error("Produit supprimé de panier!", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          // Product does not exist in favorites, add it
          cart.push(productData);
          setProductData((prev) => {
            return {
              ...prev,
              inCart: true,
            };
          });
          toast.success("Produit ajouté aux panier !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }

        sessionStorage.setItem("cart", JSON.stringify(cart));
      }
      productData.inCart = true;
    } catch (error) {
      console.log(error)
      alert(error.message);
    }
  }
};







  // Calculate new price after applying promotion percentage
  const newPrice = productData.price * (1 - productData.promotion / 100);

  return (
    <div>
            <ToastContainer />

      <div className="flex justify-center PageContainer pt-[28px] pb-[500px]">
        <div className="shadow-md mx-[170px] w-[980px] h-auto bg-white mb-10">
          <div className="h-[62px] border-b border-gray-300 flex items-center text-[24px] font-semibold ">
            <h1 className="ml-[52px]">Mes favoris</h1>
          </div>
          <div className="px-[58px] space-y-[15px] mt-[px] ">
            {productData.length === 0 ? (
             <div className="flex items-center justify-center h-64 rounded-lg">
             <h1 className="text-lg font-semibold text-gray-500">la liste de vos favoris est vide !</h1>
           </div>
            ) : (
              <>
                {productData.map((product, index) => (
                  
                  <div
                    className=" mx-auto mb-3 bg-white border-2 shadow-sm mt-[34px] "
                    key={product.id}
                  >
                    {/* define card attribut */}
                    <div className="flex justify-between px-[9px] pb-2">
                      <div className="flex">
                        <div className="w-[110px] h-[102px] bg-white py-3">
                          <img src={product?.alt_image} alt="" />
                        </div>

                        <div className="ml-[38px]">
                          <h1 className="text-lg font-meduim">
                          {product?.prod_name}
                          </h1>
                          <p className="font-normal text-md  w-[300px] ">
                          {product?.prod_description}
                          </p>
                          <h1 className="text-red-600 font-meduim">
                          {product?.prod_quantity} articles seulement
                          </h1>
                        </div>
                      </div>

                      <div className="text-end">
                        <p className="text-xl font-bold ">
                        {product?.prod_price}DA
                        </p>
                        {/* <div className="flex font-medium text-[16px] mt-[8px]">
                        {product.promotion && (
                          <p className="pl-[3px] line-through text-[#8A8888]">
                            {newPrice} DA{" "}
                          </p>
                         )}

                          {product.promotion && (
                            <p className="bg-[#E50014] bg-opacity-10 text-[#E50014]  ml-[4px]">
                              -{product.promotion}%
                            </p>
                          )}
                        </div> */}
                        <div className="flex items-center font-semibold text-lg text-[#800B8D] mt-24">
                        <img src={supp} alt="/" />
                        <button className="pl-0.5 cursor-pointer" onClick={removeProductFromFav(index)} >
                          {isDeleting ? "supprimer..." : "supprimer"}
                        </button>
                      </div>
                      </div>
                    </div>
                    {/* define delete and counter*/}
                    <div className="flex justify-between mt-[28px] px-[9px]">
                      

                      {/* <div className="flex items-center justify-center">
                        <button className="bg-[#800B8D] h-[46px]  flex justify-center items-center hover:bg-[#bf33cf]  hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd] rounded font-semibold text-[13px]  w-[150px] mr-[1px] mb-[4px]" onClick={handleAddToCart(index)} >
                        <span className="text-white">
                      {!productData.inCart ? (
                        <p>AJOUTER AU PANIER</p>
                      ) : (
                        <p>SUPPRIMER AU PANIER</p>
                      )}
                    </span>
                    <FiShoppingCart size={20} className="text-white" />
                        </button>
                      </div> */}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
