import React, { useState, useEffect, useContext } from "react";
import supp from "../component/cards/assetsCards/trash-2.svg";
import { FiShoppingCart } from "react-icons/fi";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const Favorite = () => {
  const [productData, setProductData] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const { user , authTokens } = useContext(AuthContext);

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

  // Calculate new price after applying promotion percentage
  const newPrice = productData.price * (1 - productData.promotion / 100);

  return (
    <div>
      
      <div className="flex justify-center PageContainer pt-[28px]  ">
        <div className="shadow-md mx-[170px] w-[980px] h-auto bg-white mb-10">
          <div className="h-[62px] border-b border-gray-300 flex items-center text-[24px] font-semibold ">
            <h1 className="ml-[52px]">Mes favoris</h1>
          </div>
          <div className="px-[58px] space-y-[15px] mt-[34px] ">
            {productData.length === 0 ? (
              <p className="pt-20 text-2xl font-bold text-center ">
                la liste de vos favoris est vide !{" "}
              </p>
            ) : (
              <>
                {productData.map((product) => (
                  
                  <div
                    className=" mx-auto mb-3 bg-white border-2 shadow-sm mt-[34px] "
                    key={product.id}
                  >
                    {/* define card attribut */}
                    <div className="flex justify-between px-[9px] ">
                      <div className="flex">
                        <div className="w-[104px] h-[102px] bg-white">
                          <img src="" alt="" />
                        </div>

                        <div className="ml-[38px]">
                          <h1 className="text-lg font-meduim">
                            {product.prod_name}
                          </h1>
                          <p className="font-normal text-md  w-[300px] truncate">
                            {product.description}
                          </p>
                          <h1 className="text-red-600 font-meduim">
                            {product.inventorty} articles seulement
                          </h1>
                        </div>
                      </div>

                      <div className="text-end">
                        <p className="text-xl font-bold ">
                          {product.prod_price} DA
                        </p>
                        <div className="flex font-medium text-[16px] mt-[8px]">
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
                        </div>
                      </div>
                    </div>
                    {/* define delete and counter*/}
                    <div className="flex justify-between mt-[28px] px-[9px]">
                      <div className="flex items-center font-semibold text-md text-[#800B8D]">
                        <img src={supp} alt="/" />
                        <a className="pl-0.5 cursor-pointer" href="">
                          {isDeleting ? "supprimer..." : "supprimer"}
                        </a>
                      </div>

                      <div className="flex items-center justify-center">
                        <button className="bg-[#800B8D] h-[46px]  flex justify-center items-center hover:bg-[#bf33cf]  hover:border-[#f07ffd] border-2 border-[#A63041] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:bg-[#f07ffd] rounded font-semibold text-[13px]  w-[150px] mr-[1px] mb-[4px]">
                          <span className="text-white">AJOUTER AU PANIER</span>
                          <FiShoppingCart size={20} className="text-white" />
                        </button>
                      </div>
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
