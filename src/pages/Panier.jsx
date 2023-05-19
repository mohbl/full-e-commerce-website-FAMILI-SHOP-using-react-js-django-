import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";
import { BiMap } from "react-icons/bi";
import PanierCard from "../component/cards/PanierCard";
import supp from "../component/cards/assetsCards/trash-2.svg";
import { useParams } from "react-router-dom/dist";
import AuthContext from "../context/AuthContext";
import axios from "axios";

export const Panier = () => {
  const { authTokens } = useContext(AuthContext);
  const [productData, setProductData] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  //fetch the products api
  useEffect(() => {
    if (user) {
      (async () => {try {
          const response = await axios.get('https://familishop.onrender.com/panier/', {
            headers: {
              Authorization:'Bearer '+authTokens
            }
          });
          setProductData(response.data);
        } catch(err) {
          console.log(err)
        }})()
    } else {
      const panier = JSON.parse(sessionStorage.getItem("cart"));
      console.log(panier);
      setProductData(panier);
    }
  }, []);

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  const removeProductFromCart = (index) => {
    return async () => {
      const filteredProducts =  productData.filter((v,i) => i !== index)
      setProductData(filteredProducts);
      if(!user) {
        sessionStorage.setItem('cart', JSON.stringify(filteredProducts))
      } else {
        // use your api
        await axios.delete('https://familishop.onrender.com/panier/'+productData.at(index).id, {
          headers: {
            Authorization:'Bearer '+authTokens
          }
        });
      }
    }
  }

  // handle change delivry adress

  const handleDeliveryAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };

  //handle the quantity change
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= productData.inventory) {
      setQuantity(newQuantity);
    }
  };

  //handle the increment and the decrement function
  const handleIncrement = () => {
    if (quantity < productData.inventory) {
      handleQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-between PageContainer pt-[28px] pb-[32px] ">
        {/* add the "panier" card */}

        <div className="shadow-md mr-[17px] w-[980px] bg-white">
          <div className="h-[85px] border-b border-gray-300 flex items-center text-xl font-semibold ">
            <h1 className="ml-[52px]">panier</h1>
          </div>
          <div className="px-[58px]">
          {productData.length === 0 ? (
              <p className="pt-20 text-2xl font-bold text-center  ">
                la liste de vos panier est vide !
              </p>
            ) : (
              <>
                {productData.map((product,i) => (
                  <div
                    className="border-b border-gray-300 h-[185px]"
                    key={product.id}
                  >
                    {/* define card attribut */}
                    <div className="flex justify-between px-[9px] ">
                      <div className="flex">
                        <div className="w-[104px] h-[102px] bg-white">
                          {/* <img src={product.image} alt="" /> */}
                        </div>

                        <div className="ml-[38px]">
                          <h1 className="text-lg font-meduim">
                            {product?.product_name}
                          </h1>
                          <p className="font-normal text-md">
                            {product?.description}
                          </p>
                          <h1 className="font-semibold">
                            {product?.inventory}articles seulement
                          </h1>
                        </div>
                      </div>

                      <div className="text-end">
                        <p className="text-2xl font-bold ">
                          {product?.price}10 DA
                        </p>
                        <div className="flex font-medium text-[16px] mt-[8px] text-end">
                        {product.promotion && (
                          <p className="pl-[3px]">
                            {product?.newprice}DA
                          </p>
                         )}

                          {product.promotion && (
                            <p className="bg-[#E50014] bg-opacity-10 text-[#E50014]  ml-[4px]">
                              -{product?.promotion}%
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* define delete and counter*/}
                    <div className="flex justify-between mt-[28px] px-[9px]">
                      <div className="flex items-center font-semibold text-md text-[#800B8D]">
                        <img src={supp} alt="/" />
                        <button className="pl-0.5 cursor-pointer"
                          onClick={removeProductFromCart(i)}
                        >
                          {isDeleting ? "supprimer..." : "supprimer"}
                        </button>
                      </div>

                      <div className="flex items-center justify-center">
                        <button
                          className="w-[40px] h-[40px] font-bold text-3xl text-white bg-[#800B8D] rounded hover:bg-[#bf33cf] active:bg-[#f07ffd]"
                          onClick={handleDecrement}
                        >
                          -
                        </button>
                        <span className="px-[25px] font-bold text-xl ">{product.quantity}</span>
                        <button
                          className="w-[40px] h-[40px] font-bold text-3xl text-white bg-[#800B8D] rounded  hover:bg-[#bf33cf] active:bg-[#f07ffd]"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* add the "resume de panier" card */}
        <div className="w-[328px] h-[337px] bg-white shadow-md shadow-gray-300 ">
          <div className="border-b border-gray-300 ">
            <h2 className="py-[28px] pl-[30px] pr-[104px] text-xl font-semibold ">
              resume du panier
            </h2>
          </div>

          <div className="px-[30px] flex items-center justify-between pt-[23px] ">
            <span className="text-lg font-semibold">Sous-total</span>
            <span className=" text-[#8A8888] font-semibold text-xl">DA</span>
          </div>
          <div className="px-[30px] flex items-center justify-between  ">
            <span className="text-lg font-semibold">prix livraison</span>
            <span className=" text-[#8A8888] font-semibold text-xl">800DA</span>
          </div>
          <div className="px-[30px] flex items-center justify-between  pb-[45px] ">
            <span className="text-lg font-semibold">prix total</span>
            <span className=" text-[#8A8888] font-semibold text-xl">DA</span>
          </div>
          <div></div>
          <div className="px-[30px] flex justify-between text-[#8A8888] items-center">
            <input
              type="text"
              placeholder="Adresse de livraison"
              className="w-[172px] text-lg focus:border-none focus:outline-none"
              value={deliveryAddress}
              onChange={handleDeliveryAddressChange}
            />
            <BiMap size={20} />
          </div>
          <div className="px-[70px] mt-[18px] mb-[33px]">
            <button class="w-[189px] h-[49px] text-[14px] font-bold text-white rounded-md bg-[#800B8D] hover:bg-[#bf33cf]  hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd]">
              COMMANDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
