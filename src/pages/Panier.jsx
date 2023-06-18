import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";
import { BiMap } from "react-icons/bi";
import PanierCard from "../component/cards/PanierCard";
import supp from "../component/cards/assetsCards/trash-2.svg";
import { useParams } from "react-router-dom/dist";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom/dist";

export const Panier = () => {
  const { authTokens } = useContext(AuthContext);
  const [productData, setProductData] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const navigate = useNavigate();
  const [sousTotal, setSousTotal] = useState(0);
  const [prixTotal, setPrixTotal] = useState(0);

  //fetch the products api
  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const response = await axios.get(
            "https://familishop.onrender.com/panier/",
            {
              headers: {
                Authorization: "Bearer " + authTokens,
              },
            }
          );
          setProductData(response.data);
        } catch (err) {
          console.log(err);
        }
      })();
    } else {
      const panier = JSON.parse(sessionStorage.getItem("cart"));
      console.log(panier);
      setProductData(panier);
    }
  }, []);

  useEffect(() => {
    console.log(productData);
    calculateTotals();
  }, [productData]);
  
  const calculateTotals = () => {
    let subtotal = 0;
    for (const product of productData) {
      subtotal += product.subtotal;
    }
    setSousTotal(subtotal);
    setPrixTotal(subtotal + 800); // Adding delivery price of 800 DA
  };

  const removeProductFromCart = (index) => {
    return async () => {
      const filteredProducts = productData.filter((v, i) => i !== index);
      setProductData(filteredProducts);
      if (!user) {
        sessionStorage.setItem("cart", JSON.stringify(filteredProducts));
      } else {
        // use your api
        console.log(productData)
        await axios.delete(
          "https://familishop.onrender.com/panier_remove/" + productData.at(index).product_id,
          {
            headers: {
              Authorization: "Bearer " + authTokens,
            },
          }
        );
      }
    };
  };

  // handle change delivry adress

  const handleDeliveryAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };

  // //handle the quantity change
  // const handleQuantityChange = (newQuantity) => {
  //   if (newQuantity >= 1 && newQuantity <= productData.quantity) {
  //     setQuantitys(newQuantity);
  //     if (user) {
  //       updateProductQuantity(newQuantity);
  //     }
  //   }
  // };
  
  //handle the quantity change
  const handleQuantityChange = (i, newQuantity) => {
    //if (newQuantity >= 1 && newQuantity <= productData.at(i).quantity) {
      // setQuantity(newQuantity);
      productData.at(i).quantity = newQuantity;
      const newProducts = [...productData];
      setProductData(newProducts);
    //}
  };
  

  //handle the increment and the decrement function
  const handleIncrement = (i) => {
    if (quantity < productData.at(i).quantity) {
      handleQuantityChange(i,quantity + 1);
    }
  };

  const handleDecrement = (i) => {
    if (quantity > 1) {
      handleQuantityChange(i,quantity- 1);
    }
  };

  // //update the quantity
  // const updateProductQuantity = async () => {
  //   try {
  //     await axios.put(
  //       "https://familishop.onrender.com/panier_update" + productData.id,
  //        quantity                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${authTokens}`,
  //         },
  //       }
  //     );
  //     console.log("the quantity updated");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // order handling
  const [login, setlogin] = useState(false);
  const gotologin = () => {
    setlogin(true);
  };
  const closelogin = () => {
    setlogin(false);
  };
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
   
    try {

      if (!deliveryAddress) {
        toast.error("Please enter the delivery address");
        return;
      }
      if (user) {
        if (productData.length === 0) {
          toast.error("Le panier est vide. Ajoutez des produits avant de passer commande.");
          return;
        }
        try {
          const response = await axios.post(
            "https://familishop.onrender.com/ordering/",
            {
              product: productData.id, // Adjust the payload based on your API requirements
              address: deliveryAddress
            },
            {
              headers: {
                Authorization: "Bearer " + authTokens,
              },
            }
          );
          setOrderSubmitted(true);
          emptyBasket(); // Empty the basket after successful order submission
          navigate('/command/'+response.data.id)
        } catch (err) {
          console.log(err);
        }
       
      } else {
        // User is not authenticated, show login page
        gotologin();
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    
  };

  // vide the panier after submit order 
const emptyBasket = () => {
  setProductData([]);
  if (!user) {
    sessionStorage.removeItem("cart");
  }
};


// // handle increment + update 
// const handleClick1 = () => {
//   updateProductQuantity();
//   handleIncrement();
// };
// // handle decrement + update 
// const handleClick2 = () => {
//   updateProductQuantity();
//   handleDecrement();
// };

  return (
    <div>
       <ToastContainer />
      <div className="flex justify-between PageContainer pt-[28px] pb-[500px] ">
        {/* add the "panier" card */}

        <div className="shadow-md mr-[17px] w-[980px] bg-white">
          <div className="h-[85px] border-b border-gray-300 flex items-center text-xl font-semibold ">
            <h1 className="ml-[52px]">panier</h1>
          </div>
          <div className="px-[58px]">
            {productData.length === 0 ? (
              <div className="flex items-center justify-center h-64 rounded-lg">
              <h1 className="text-lg font-semibold text-gray-500">la liste de vos panier est vide !</h1>
              </div>
            ) : (
              <>
                {productData.map((product, i) => (
                  <div
                    className="border-b border-gray-300 h-[185px]"
                    key={product.id}
                  >
                    {/* define card attribut */}
                    <div className="flex justify-between px-[9px] ">
                      <div className="flex">
                        <div className="w-[104px] h-[102px] ">
                          <img src={product?.alt_image} alt="" /> 
                        </div>

                        <div className="ml-[38px]">
                          <h1 className="text-lg font-meduim">
                            {product?.product_name}
                          </h1>
                          <p className="font-normal text-md">
                            {product?.product_description}
                          </p>
                          <h1 className="font-semibold">
                            {product?.product_quantity} articles seulement
                          </h1>
                        </div>
                      </div>

                      <div className="text-end">
                        <p className="text-2xl font-bold ">
                          {product?.product_price} DA
                        </p>
                        {/* <div className="flex font-medium text-[16px] mt-[8px] text-end">
                          {product.discount_percentage && (
                            <p className="pl-[3px]">{((product.price * 100) / ( product.discount_percentage)).toFixed(2)}DA</p>
                          )}

                          {product.discount_percentage && (
                            <p className="bg-[#E50014] bg-opacity-10 text-[#E50014]  ml-[4px]">
                              -{product?.discount_percentage}%
                            </p>
                          )}
                        </div> */}
                      </div>
                    </div>
                    {/* define delete and counter*/}
                    <div className="flex justify-between mt-[28px] px-[9px]">
                      <div className="flex items-center font-semibold text-md text-[#800B8D]">
                        <img src={supp} alt="/" />
                        <button
                          className="pl-0.5 cursor-pointer"
                          onClick={removeProductFromCart(i)}
                        >
                          {isDeleting ? "supprimer..." : "supprimer"}
                        </button>
                      </div>

                      <div className="flex items-center justify-center">
                        <button
                          className="w-[40px] h-[40px] font-bold text-3xl text-white bg-[#800B8D] rounded hover:bg-[#bf33cf] active:bg-[#f07ffd]"
                          onClick={() => handleDecrement(i)} 
                        >
                          -
                        </button>
                        <span className="px-[25px] font-bold text-xl ">
                          {product?.quantity}
                        </span>
                        <button
                          className="w-[40px] h-[40px] font-bold text-3xl text-white bg-[#800B8D] rounded  hover:bg-[#bf33cf] active:bg-[#f07ffd]"
                          onClick={() => handleIncrement(i)}
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
            <span className=" text-[#8A8888] font-semibold text-xl">{sousTotal} DA</span>
          </div>
          <div className="px-[30px] flex items-center justify-between  ">
            <span className="text-lg font-semibold">prix livraison</span>
            <span className=" text-[#8A8888] font-semibold text-xl">800DA</span>
          </div>
          <div className="px-[30px] flex items-center justify-between  pb-[45px] ">
            <span className="text-lg font-semibold">prix total</span>
            <span className=" text-[#8A8888] font-semibold text-xl"> {prixTotal} DA</span>
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
            <button
              className={`w-[189px] h-[49px] text-[14px] font-bold text-white rounded-md bg-[#800B8D] ${
                orderSubmitted
                  ? "opacity-50 "
                  : "hover:bg-[#bf33cf] hover:border-[#f07ffd] hover:scale-105 hover:shadow-lg active:bg-[#f07ffd]"
              } border-2 border-[#A63041] transition duration-300 ease-in-out transform`}
              onClick={handleOrderSubmit }
              disabled={orderSubmitted}
            >
              {orderSubmitted ? "Ordre commande" : "COMMANDER"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
